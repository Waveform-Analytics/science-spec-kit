---
description: "Task list template for analysis implementation"
---

# Tasks: [ANALYSIS NAME]

**Spec**: `specs/[NNN-short-name]/spec.md`
**Plan**: `specs/[NNN-short-name]/plan.md`
**Generated**: [DATE]

## Format

```text
- [ ] T### Description with file path or specific action
```

- Task IDs are sequential (T001, T002, ...)
- QC tasks are labeled explicitly
- Each task should be completable independently

<!--
  ============================================================================
  IMPORTANT: The tasks below are EXAMPLES for illustration.

  The /speckit.tasks command MUST replace these with actual tasks based on:
  - Pipeline stages from plan.md
  - Expected outputs from spec.md
  - Validation approach from spec.md

  DO NOT keep these example tasks in the generated file.
  ============================================================================
-->

---

## Phase 0: Research (if needed)

**Purpose**: Resolve open questions before implementation begins

- [ ] T001 Research: Evaluate interpolation methods for gap-filling (document in research.md)
- [ ] T002 Research: Verify data access credentials and download process

**Checkpoint**: All method decisions documented, data access confirmed

---

## Phase 1: Setup

**Purpose**: Environment and project structure ready

- [ ] T003 Create conda environment file (environment.yml)
- [ ] T004 Create project directory structure per plan.md
- [ ] T005 Add .gitignore for data directories and outputs

**Checkpoint**: Environment activates, directories exist

---

## Phase 2: Data Acquisition

**Purpose**: Raw data downloaded and verified

- [ ] T006 Implement data download in scripts/01_download.py
- [ ] T007 Download [primary dataset] to data/raw/
- [ ] T008 Download [secondary dataset] to data/raw/ (if applicable)
- [ ] T009 QC: Verify raw files exist and have expected size/format

**Checkpoint**: Raw data in place, integrity verified

---

## Phase 3: Preprocessing

**Purpose**: Data cleaned and transformed for analysis

- [ ] T010 Implement preprocessing in scripts/02_preprocessing.py
- [ ] T011 [Specific transformation - e.g., reproject to common CRS]
- [ ] T012 [Specific transformation - e.g., temporal subsetting]
- [ ] T013 QC: Verify processed data ranges and coverage
- [ ] T014 QC: Check for unexpected missing values

**Checkpoint**: Processed data ready, QC checks pass

---

## Phase 4: Analysis

**Purpose**: Core calculations complete

- [ ] T015 Implement analysis in scripts/03_analysis.py
- [ ] T016 [Specific calculation - e.g., compute velocity statistics]
- [ ] T017 [Specific calculation - e.g., trend analysis]
- [ ] T018 QC: Sanity check results against expected ranges
- [ ] T019 QC: Compare key values to prior work (if applicable)

**Checkpoint**: Analysis outputs generated, sanity checks pass

---

## Phase 5: Visualization

**Purpose**: Figures and tables for expected outputs

- [ ] T020 Implement figure generation in scripts/04_figures.py
- [ ] T021 Generate Figure 1: [description from spec]
- [ ] T022 Generate Figure 2: [description from spec]
- [ ] T023 Generate Table 1: [description from spec]
- [ ] T024 QC: Verify all expected outputs from spec.md are generated

**Checkpoint**: All figures/tables complete, match spec requirements

---

## Phase 6: Documentation & Reproducibility

**Purpose**: Analysis is reproducible and documented

- [ ] T025 Update README with environment setup instructions
- [ ] T026 Document run order in README (or create run_all.sh)
- [ ] T027 Verify end-to-end: delete outputs, rerun from raw data
- [ ] T028 Final check against spec.md completion criteria

**Checkpoint**: Fresh clone can reproduce all outputs

---

## Dependencies

```text
Phase 0 (Research)
     ↓
Phase 1 (Setup)
     ↓
Phase 2 (Data Acquisition)
     ↓
Phase 3 (Preprocessing)
     ↓
Phase 4 (Analysis)
     ↓
Phase 5 (Visualization)
     ↓
Phase 6 (Documentation)
```

Phases are sequential. Complete each checkpoint before proceeding.

**Parallelization note**: If data scale makes sequential processing impractical, consider parallelization within a phase (e.g., processing years independently). This is an optimization - only add complexity when needed.

---

## Completion Criteria

From spec.md - all must be satisfied:

- [ ] Research question(s) answered with evidence
- [ ] All expected outputs generated (figures, tables, statistics)
- [ ] Validation checks pass
- [ ] Reproducible from raw data

---

## Notes

- Commit after completing each phase (or more frequently)
- If a task reveals new requirements, add tasks rather than expanding scope silently
- QC failures should block progression to the next phase