---
description: Perform a non-destructive consistency analysis across spec.md, plan.md, and tasks.md for scientific reproducibility and completeness.
scripts:
  sh: scripts/bash/check-prerequisites.sh --json --require-tasks --include-tasks
  ps: scripts/powershell/check-prerequisites.ps1 -Json -RequireTasks -IncludeTasks
---

## User Input

```text
$ARGUMENTS
```

Consider the user input before proceeding (if not empty).

## Goal

Identify gaps, inconsistencies, and reproducibility risks across the three artifacts (`spec.md`, `plan.md`, `tasks.md`) before implementation. Run after `/speckit.tasks` has produced a complete `tasks.md`.

## Operating Constraints

**READ-ONLY**: Do not modify any files. Output a structured analysis report. Offer remediation suggestions that the user must explicitly approve.

**Constitution as Reference**: The research constitution (`/memory/constitution.md`) defines data sources, technical environment, coordinate systems, and quality standards. Inconsistencies with the constitution are flagged for review.

## Execution Steps

### 1. Initialize Analysis Context

Run `{SCRIPT}` from repo root and parse JSON for FEATURE_DIR and AVAILABLE_DOCS. Derive paths:

- SPEC = FEATURE_DIR/spec.md
- PLAN = FEATURE_DIR/plan.md
- TASKS = FEATURE_DIR/tasks.md

Abort with an error message if any required file is missing.

### 2. Load Artifacts

**From spec.md:**

- Research question(s) and hypotheses
- Data description (sources, structure, known issues)
- Desired outputs (figures, statistics, tables)
- Success criteria

**From plan.md:**

- Data cleaning/QC steps
- Analysis methods with justification
- Statistical approach
- Figure list with descriptions
- Dependencies between steps

**From tasks.md:**

- Task IDs and descriptions
- Phase grouping (Setup, Data Acquisition, Preprocessing, Analysis, Visualization, Documentation)
- QC checkpoints between phases
- Referenced data files or scripts

**From constitution:**

- Data sources defined
- Coordinate systems and units
- Figure standards
- Quality check requirements

### 3. Build Analysis Models

Create internal representations:

- **Data lineage map**: Trace each output back through processing steps to raw data sources
- **Method-output mapping**: Which analysis methods produce which figures/tables
- **Constitution alignment**: Check spec/plan against defined standards

### 4. Detection Passes

Focus on high-signal findings. Limit to 50 findings; summarize overflow.

#### A. Reproducibility Checks

- Are all data sources specified with access methods?
- Are random seeds or stochastic elements documented?
- Are environment dependencies captured (packages, versions)?
- Can each output be traced to specific code/data inputs?

#### B. Data Integrity Checks

- Does the plan preserve raw data (no in-place modifications)?
- Are data transformations producing new files, not overwriting?
- Is missing/suspect data handling explicit?
- Are coordinate system transformations documented?

#### C. Provenance Checks

- Does each figure/table reference the method that produces it?
- Are parameter choices documented and justified?
- Can outputs be regenerated from tracked artifacts?

#### D. Constitution Alignment

- Data sources in spec match those defined in constitution?
- Coordinate systems/units consistent with constitution?
- Figure formats match stated standards?
- Quality checks in plan cover constitution requirements?

#### E. Completeness Checks

- Research questions have corresponding analysis methods?
- Each method produces at least one output?
- Success criteria are testable/measurable?
- Tasks cover all planned analysis steps?

#### F. Consistency Checks

- Variable names consistent across artifacts?
- Data file references resolve to defined sources?
- Task dependencies match method dependencies in plan?
- Units consistent throughout?

### 5. Severity Assignment

- **CRITICAL**: Breaks reproducibility (missing data source, untraceable output), raw data modification risk, no path from question to output
- **HIGH**: Missing coordinate system info, ambiguous data handling, figure without method linkage
- **MEDIUM**: Inconsistent terminology, missing quality checks, underspecified parameters
- **LOW**: Style issues, minor redundancy, documentation gaps

### 6. Produce Analysis Report

Output a Markdown report (no file writes):

## Analysis Report

| ID | Category | Severity | Location(s) | Issue | Recommendation |
|----|----------|----------|-------------|-------|----------------|
| R1 | Reproducibility | HIGH | spec.md:L45 | Data source lacks access method | Add URL or file path |

**Data Lineage Summary:**

| Output | Source Data | Processing Steps | Traceable? |
|--------|-------------|------------------|------------|

**Constitution Alignment:**

| Check | Status | Notes |
|-------|--------|-------|
| Data sources match | ✓/✗ | |
| Coordinate systems defined | ✓/✗ | |
| Figure standards met | ✓/✗ | |
| Quality checks covered | ✓/✗ | |

**Metrics:**

- Research questions: N
- Analysis methods: N
- Planned outputs: N
- Tasks: N
- Traceability coverage: N%
- Critical issues: N

### 7. Next Actions

- If CRITICAL issues: Resolve before proceeding to implementation
- If reproducibility gaps: Suggest specific additions to spec or plan
- If constitution misalignment: Recommend updating spec/plan or constitution

### 8. Offer Remediation

Ask: "Would you like me to suggest specific fixes for the top issues?"

## Operating Principles

- **Reproducibility focus**: Every finding should relate to "can someone else reproduce this?"
- **Data integrity priority**: Flag anything that risks corrupting or losing raw data
- **Practical over pedantic**: Focus on issues that would actually cause problems
- **Read-only**: Never modify files during analysis

## Context

{ARGS}
