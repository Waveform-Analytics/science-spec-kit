---
description: Implement analysis scripts iteratively - write, review code, run, debug / review results, repeat as needed.
scripts:
  sh: scripts/bash/check-prerequisites.sh --json --require-tasks --include-tasks
  ps: scripts/powershell/check-prerequisites.ps1 -Json -RequireTasks -IncludeTasks
---

## User Input

```text
$ARGUMENTS
```

Consider the user input before proceeding. User may specify which task/phase to work on, or request a specific mode (e.g., "debug T015", "run phase 3").

## Goal

Implement analysis scripts through an iterative cycle: write script → user reviews → incorporate feedback → run → debug/iterate based on results. Capture key decisions without slowing the workflow.

## Execution Steps

### 1. Setup

Run `{SCRIPT}` from repo root and parse FEATURE_DIR and AVAILABLE_DOCS list.

### 2. Load Context

Read from FEATURE_DIR:
- **Required**: `tasks.md` (task list with current status)
- **Required**: `plan.md` (pipeline structure, script purposes, environment)
- **Required**: `spec.md` (expected outputs, validation criteria)
- **Optional**: `research.md` (method decisions made during planning)
- **Context**: `/memory/constitution.md` (project standards)

### 3. Determine Current Task

If user specified a task (e.g., "T015" or "phase 4"):
- Work on that task

Otherwise:
- Find the first incomplete task (`- [ ]`) in tasks.md
- Confirm with user: "Next task is T### - [description]. Proceed?"

### 4. Write Script

For the current task:

1. **Draft the script** based on:
   - Task description from tasks.md
   - Pipeline stage context from plan.md
   - Input/output expectations
   - Relevant decisions from research.md

2. **Include inline markers for review**:
   ```python
   # [Q: Should we use linear or cubic interpolation here?]
   # [TODO: Add error handling for missing files]
   # [C: Using xarray for NetCDF - see research.md for rationale]
   ```

3. **Write the script** to the path specified in tasks.md

4. **Prompt user to review**:
   > Script written to `scripts/03_analysis.py`. Please review and add inline comments:
   > - `[Q: ...]` for questions
   > - `[C: ...]` for feedback/changes
   > - `[TODO: ...]` for things to add
   >
   > Say "ready" when done, or "run" to test as-is.

### 5. Process Feedback

When user says "ready" or provides feedback:

1. **Scan the script** for `[Q: ...]`, `[C: ...]`, `[TODO: ...]` markers
2. **Address each marker**:
   - Questions → answer or ask for clarification
   - Comments → incorporate the feedback
   - TODOs → implement or note for later
3. **Update the script** with changes
4. **Remove resolved markers**, keep unresolved ones visible
5. **Show diff** of changes made
6. **Repeat** until user approves or says "run"

### 6. Run Script

When user says "run" or approves the script:

1. **Check environment**: Verify dependencies are available
2. **Run the script**:
   ```bash
   uv run scripts/03_analysis.py
   ```
3. **Capture output**: stdout, stderr, any generated files
4. **Report results**:
   - Success: what outputs were generated
   - Errors: full traceback with context

### 7. Debug/Iterate

If the script fails or produces unexpected results:

1. **Analyze the error** or unexpected output
2. **Propose a fix** with explanation
3. **Update the script** (with user approval)
4. **Re-run** and repeat until successful

If results look wrong but script ran:
- Compare against validation criteria from spec.md
- Check against expected ranges from constitution.md
- Propose diagnostic steps

### 8. Complete Task

When the task is working:

1. **Mark task complete** in tasks.md: `- [ ]` → `- [x]`
2. **Document decisions** (lightweight):
   - If a significant method choice was made, add a brief note to `research.md`
   - Format: `## [Topic] - [Date]: [One-line decision and why]`
3. **Commit** (if user wants): suggest a commit message
4. **Move to next task** or pause for user direction

### 9. QC Tasks

For tasks marked as QC (e.g., "QC: Verify processed data ranges"):

1. **Propose specific checks** based on spec.md and constitution.md
2. **Run checks** and report results
3. **If checks fail**: stop and discuss with user before proceeding
4. **If checks pass**: mark complete and continue

## Modes

The user can request specific modes:

- **"implement T###"**: Work on a specific task
- **"run T###"** or **"run phase N"**: Execute existing scripts without modification
- **"debug T###"**: Focus on fixing a failing script
- **"status"**: Show current progress through tasks.md
- **"skip T###"**: Mark a task as skipped (with reason) and move on

## Operating Principles

- **Iterative over waterfall**: Expect multiple write-run-debug cycles. This is normal.
- **User in the loop**: Don't proceed past review without user input. Use inline markers to make review efficient.
- **Lightweight documentation**: Capture decisions in research.md, but one line is often enough. Don't let docs slow the science.
- **Fail fast**: Run scripts early, even if incomplete. Real errors are more useful than theoretical planning.
- **Sequential by default**: Complete each task before moving to the next. The pipeline has dependencies.
- **QC gates matter**: Don't skip QC tasks. Bad data propagates.

## Progress Tracking

After each session, tasks.md should reflect:
- `- [x]` for completed tasks
- `- [ ]` for remaining tasks
- `- [-]` for skipped tasks (with inline note explaining why)

research.md should capture any non-obvious decisions made during implementation.