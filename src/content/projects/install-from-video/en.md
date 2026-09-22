---
title: install-from-video
summary: A Claude Code skill that turns a video recommending developer tools into verified install commands. Transcribed locally, checked against npm and GitHub, never auto-installed.
cv: "Claude Code skill that turns tool-recommendation videos into verified install commands, with local transcription and npm/GitHub checks."
---

"Top 5 tools" videos rarely include links. Typing a name you heard puts you one letter away from a typosquat, and a plugin you install runs its hooks in every session afterwards. This skill closes that gap.

### How it works

- **Audio first, on your machine.** The clip is transcribed locally with faster-whisper: no upload, no API cost.
- **Frames only when needed.** When a spoken name is unclear, the skill extracts contact sheets from the video and reads on-screen text such as URL bars and repository headers.
- **Verify before recommending.** Every name is checked against npm and the GitHub API. Packages whose repository doesn't exist, and low-star copies of popular projects, are flagged.
- **Never installs.** A video is an untrusted source, so the skill hands over the commands and the user decides.

### Why model size matters

On an Arabic-narrated test clip, `whisper-small` heard "Agent Skills" as `AgedSkills`, while `whisper-large-v3` got it right. The exact repository name came from a single frame showing a browser URL bar. The audio gives the shape of the list; the screen gives the names.

Documentation in English, Arabic and Turkish. MIT licensed.
