---
description: Generate an actionable, dependency-ordered tasks.md for the analysis based on the spec and plan.
handoffs:
  - label: Analyze For Consistency
    agent: speckit.analyze
    prompt: Run a project analysis for consistency
    send: true
  - label: Begin Analysis
    agent: speckit.implement
    prompt: Start the analysis implementation
    send: true
scripts:
  sh: scripts/bash/check-prerequisites.sh --json
  ps: scripts/powershell/check-prerequisites.ps1 -Json
---

## User Input

```text
$ARGUMENTS
```

Consider the user input before proceeding (if not empty). User input may specify prioritization, scope limits, or computational constraints.

## Goal

Transform the analysis plan into a concrete task list: what scripts to write, in what order, with clear inputs/outputs for each. Tasks should be specific enough that each can be completed without additional context.

## Execution Steps

### 1. Setup

Run `{SCRIPT}` from repo root and parse FEATURE_DIR and AVAILABLE_DOCS list.

### 2. Load Design Documents

Read from FEATURE_DIR:
- **Required**: `spec.md` (research questions, expected outputs), `plan.md` (pipeline stages, script plan)
- **Optional**: `research.md` (method decisions)
- **Context**: `/memory/constitution.md` (project standards)

### 3. Extract Task Sources

From the loaded documents, identify:

**From spec.md**:
- Expected outputs (figures, tables, statistics) - these are completion criteria
- Validation approach - these become QC tasks
- Data sources - informs acquisition tasks

**From plan.md**:
- Pipeline stages and their scripts
- Dependencies between stages
- Environment/package requirements
- Open questions (become Phase 0 tasks if unresolved)

### 4. Generate Task List

Organize tasks by pipeline stage:

**Phase 0: Research (if needed)**
- Unresolved method choices from plan.md
- Package selection decisions
- Data access verification

**Phase 1: Setup**
- Environment creation (requirements.txt, environment.yml)
- Directory structure
- Configuration files

**Phase 2: Data Acquisition**
- Download/access scripts for each data source
- QC: Verify raw data integrity

**Phase 3: Preprocessing**
- Cleaning, filtering, transformation scripts
- QC: Verify processed data (ranges, coverage, formats)

**Phase 4: Analysis**
- Core calculation scripts
- QC: Sanity checks on results

**Phase 5: Visualization**
- Figure generation scripts
- Table generation scripts
- QC: Verify outputs match spec requirements

**Phase 6: Documentation & Reproducibility**
- Update README with run instructions
- Verify end-to-end reproducibility
- Final validation against spec completion criteria

### 5. Apply Task Format

Every task MUST follow this format:

```text
- [ ] T### Description with specific file path or action
```

**Format rules**:
- Sequential task IDs (T001, T002, ...)
- Specific file paths where applicable
- Clear, actionable descriptions
- QC tasks clearly labeled

**Examples**:
- ✅ `- [ ] T001 Create conda environment from environment.yml`
- ✅ `- [ ] T005 Download velocity data in scripts/01_download.py`
- ✅ `- [ ] T008 QC: Verify processed data covers expected date range`
- ❌ `- [ ] Process the data` (no ID, no specifics)
- ❌ `T003 Create figure` (missing checkbox, no file path)

### 6. Add Checkpoints

After each phase, include a checkpoint:

```markdown
**Checkpoint**: [What should be true before proceeding]
```

Checkpoints verify:
- Outputs exist and are valid
- QC checks passed
- Ready for next stage

### 7. Write Tasks File

Write completed task list to `specs/[NNN-short-name]/tasks.md` using `templates/tasks-template.md` as the structure.

### 8. Report Completion

Summarize:
- Task file location
- Total task count by phase
- Any Phase 0 research tasks that need resolution first
- Suggested starting point

## Operating Principles

- **Sequential by default**: Science pipelines are inherently ordered. Don't over-engineer parallelization unless data scale demands it.
- **QC is standard practice**: Include validation tasks after each stage, scaled to the analysis scope.
- **Reproducibility focus**: Every task should contribute to end-to-end reproducibility.
- **Specificity**: Tasks should be completable without additional context.
- **Right-sized**: Quick exploration gets fewer tasks; publication-ready analysis gets thorough QC.