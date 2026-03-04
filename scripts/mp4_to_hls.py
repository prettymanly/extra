#!/usr/bin/env python3
"""
Convert all MP4 files in a folder to HLS format (.m3u8 + .ts chunks).
Auto-installs FFmpeg via Homebrew if not found.

Usage:
    python scripts/mp4_to_hls.py /path/to/mp4s
    python scripts/mp4_to_hls.py /path/to/mp4s --output /path/to/output
    python scripts/mp4_to_hls.py /path/to/mp4s --segment-duration 6
"""

import argparse
import os
import shutil
import subprocess
import sys
from pathlib import Path


def ensure_ffmpeg():
    """Check for FFmpeg; install via Homebrew if missing."""
    if shutil.which("ffmpeg"):
        return

    print("FFmpeg not found. Attempting install via Homebrew...")

    if not shutil.which("brew"):
        print("Error: Homebrew not installed. Install FFmpeg manually:")
        print("  https://ffmpeg.org/download.html")
        sys.exit(1)

    subprocess.run(["brew", "install", "ffmpeg"], check=True)

    if not shutil.which("ffmpeg"):
        print("Error: FFmpeg install succeeded but binary not found in PATH.")
        sys.exit(1)

    print("FFmpeg installed successfully.\n")


def convert_to_hls(mp4_path: Path, output_dir: Path, segment_duration: int = 4):
    """Convert a single MP4 to HLS."""
    name = mp4_path.stem
    dest = output_dir / name
    dest.mkdir(parents=True, exist_ok=True)

    playlist = dest / "index.m3u8"
    segment_pattern = dest / "segment_%03d.ts"

    cmd = [
        "ffmpeg", "-i", str(mp4_path),
        "-codec", "copy",
        "-start_number", "0",
        "-hls_time", str(segment_duration),
        "-hls_list_size", "0",
        "-hls_segment_filename", str(segment_pattern),
        "-f", "hls",
        str(playlist),
        "-y",
    ]

    print(f"Converting: {mp4_path.name}")
    result = subprocess.run(cmd, capture_output=True, text=True)

    if result.returncode != 0:
        print(f"  FAILED: {result.stderr.splitlines()[-1]}")
        return False

    ts_count = len(list(dest.glob("*.ts")))
    print(f"  Done: {ts_count} segments -> {dest}/")
    return True


def main():
    parser = argparse.ArgumentParser(description="Convert MP4 files to HLS format")
    parser.add_argument("folder", help="Folder containing MP4 files")
    parser.add_argument("--output", "-o", help="Output directory (default: <folder>/hls)")
    parser.add_argument("--segment-duration", "-s", type=int, default=4,
                        help="Segment duration in seconds (default: 4)")
    args = parser.parse_args()

    source = Path(args.folder).resolve()
    if not source.is_dir():
        print(f"Error: '{source}' is not a directory.")
        sys.exit(1)

    output_dir = Path(args.output).resolve() if args.output else source / "hls"

    mp4s = sorted(source.glob("*.mp4"))
    if not mp4s:
        print(f"No MP4 files found in {source}")
        sys.exit(0)

    ensure_ffmpeg()

    print(f"Found {len(mp4s)} MP4(s). Output: {output_dir}\n")

    success, failed = 0, 0
    for mp4 in mp4s:
        if convert_to_hls(mp4, output_dir, args.segment_duration):
            success += 1
        else:
            failed += 1

    print(f"\nDone. {success} converted, {failed} failed.")


if __name__ == "__main__":
    main()
