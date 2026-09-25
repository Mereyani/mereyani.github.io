---
title: Sada · صدى
summary: A cross-platform desktop app that transcribes speech entirely on your computer. Paste a link from YouTube, TikTok, Instagram, X or 1,000+ other sites, or drop a video or audio file, and get a timestamped transcript in 99 languages with automatic language detection.
cv: "Offline speech-to-text desktop app (Windows/macOS/Linux): links or files → faster-whisper on-device, 99 languages with auto-detection, hardware-aware model picker, SRT/VTT export."
coverAlt: Sada's English interface showing an Arabic clip transcribed with Large v3 Turbo and language detected automatically.
---

Most transcription tools upload your audio to someone else's server. Sada keeps it on your machine: no API, no account, and after a one-time model download it needs no internet.

### How it works

- **Any source.** Links are fetched with yt-dlp, which downloads only the audio stream. Local files (MP4, MKV, MOV, MP3, WAV, M4A…) are decoded by the bundled FFmpeg, so there is nothing else to install.
- **Accurate, but light enough for normal laptops.** Transcription runs on faster-whisper (CTranslate2) with int8 quantization on the CPU and float16 on NVIDIA GPUs. Voice-activity detection skips silence, which makes it faster and cuts hallucinations.
- **The right model for the device.** The app reads RAM, cores and GPU and recommends a model, from Tiny (75 MB) up to Large v3 (3.1 GB). Large v3 Turbo is the default on capable machines: near-best accuracy at about 6× the speed.
- **Live output.** Segments stream into the window as they are decoded. The detected language is shown with a confidence score, and results export to TXT, SRT, VTT or JSON.
- **Nothing gets lost.** Every transcript, including one stopped halfway, is saved on the computer. Later you can search it or fix words in place, and the timestamps stay in sync for subtitles.

### Built to ship

A small stdlib HTTP server bound to localhost feeds a native pywebview window; the UI is plain HTML, CSS and JS. The interface is available in Arabic (RTL), English and Turkish, with dark and light themes. GitHub Actions builds standalone apps for Windows, macOS (Intel and Apple Silicon) and Linux with PyInstaller on every release tag, then tests the built app on each system before publishing it. Starting from an empty model cache, the test downloads a model, transcribes a real clip, stops a download mid-way, deletes a model, and checks the RAM and thread counts against an independent reading. Stop works at every stage, and a model manager shows the real disk space of each model. MIT licensed.
