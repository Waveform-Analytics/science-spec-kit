---
description: Create an analysis plan from a specification, defining the data pipeline, scripts, and workflow.
handoffs:
  - label: Create Tasks
    agent: speckit.tasks
    prompt: Break the plan into tasks
    send: true
  - label: Create Checklist
    agent: speckit.checklist
    prompt: Create a checklist for this analysis
scripts:
  sh: scripts/bash/setup-plan.sh --json
  ps: scripts/powershell/setup-plan.ps1 -Json
---

## User Input

```text
$ARGUMENTS
```

Consider the user input before proceeding (if not empty). User input typically specifies preferred tools, compute environment, or methodological choices.

## Goal

Transform an analysis specification into a concrete plan: what scripts to write, how data flows through them, and what order to execute them. The plan bridges "what we want to learn" (spec) and "what to actually do" (tasks).

## Execution Steps

### 1. Setup

Run `{SCRIPT}` from repo root and parse JSON for FEATURE_SPEC, IMPL_PLAN, SPECS_DIR, BRANCH.

### 2. Load Context

Read:
- FEATURE_SPEC (`spec.md`) - the analysis specification
- `/memory/constitution.md` - project standards and data sources
- User input - any preferences for tools, environment, methods

### 3. Fill Analysis Environment

Based on the spec and user input, determine:
- **Language/version**: Default to Python 3.11+ unless specified otherwise
- **Key packages**: Infer from data types and methods in spec (e.g., NetCDF → xarray, statistics → scipy)
- **Environment file**: Note whether one exists or needs creation

If user didn't specify tools, make reasonable defaults and note them as assumptions.

### 4. Assess Compute Environment

Based on data scale from the spec:
- **Small data (<1GB)**: Laptop-scale, no special handling needed
- **Medium data (1-50GB)**: May need chunked processing, note in plan
- **Large data (>50GB)**: Likely needs cluster/cloud, flag for user input

If the user specified timeline pressure, factor that into recommendations (e.g., "Given the deadline, parallel processing on the cluster would help").

### 5. Run Constitution Check

Verify the emerging plan aligns with constitution:
- Data sources referenced match those defined
- Coordinate systems will be handled correctly
- Figure outputs will meet stated standards
- Quality checks are planned

Flag any mismatches. These aren't blockers but need acknowledgment.

### 6. Design Project Structure

Propose a directory structure based on:
- Number and type of scripts/notebooks needed
- Data volume and stages
- Output types (figures, tables, intermediate results)

Use the template structure as a starting point, adapt to the specific analysis.

### 7. Design Data Pipeline

Work through the data flow:
1. **Acquisition**: How does raw data get into the project?
2. **Preprocessing**: What cleaning/transformation is needed?
3. **Analysis**: What calculations produce results?
4. **Visualization**: What scripts generate outputs?

For each stage, specify:
- Input files/locations
- Processing steps (conceptual, not code)
- Output files/locations
- Script name

Ensure raw data is never modified in place (constitution principle).

### 8. Create Script/Notebook Plan

List each code artifact to be created:
- Purpose (one sentence)
- Inputs and outputs
- Key operations

This becomes the basis for task generation.

### 9. Map Dependencies

Identify:
- Sequential dependencies (preprocessing must complete before analysis)
- Parallel opportunities (independent figures can be generated simultaneously)

Draw or describe the dependency graph.

### 10. Capture Open Questions

List unknowns that need resolution:
- Method choices not yet decided
- Package selection questions
- Data access issues
- Computational feasibility concerns

These become Phase 0 research tasks.

### 11. Phase 0: Research (if needed)

If open questions exist:

1. For each question, research options:
   - What are the alternatives?
   - What are the tradeoffs?
   - What's the recommendation?

2. Document decisions in `research.md`:
   ```markdown
   ## [Topic]

   **Decision**: [What was chosen]
   **Rationale**: [Why]
   **Alternatives considered**: [What else was evaluated]
   ```

3. Update plan.md with resolved decisions

### 12. Write Plan

Write the completed plan to `specs/[NNN-short-name]/plan.md`.

If research was conducted, also write `specs/[NNN-short-name]/research.md`.

### 13. Report Completion

Summarize:
- Plan file location
- Key decisions made (environment, structure, pipeline stages)
- Any open questions remaining
- Suggested next step: `/speckit.tasks` to create the task breakdown

## Operating Principles

- **Reproducibility focus**: Every step should be traceable and re-runnable
- **Raw data immutability**: Plan must never modify source data
- **Practical defaults**: Make reasonable choices rather than asking about everything
- **Constitution alignment**: Check against project standards
- **Right-sized planning**: Simple analysis gets simple plan; complex analysis gets detailed plan