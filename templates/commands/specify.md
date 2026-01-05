---
description: Create an analysis specification from a natural language description of the research goal.
handoffs:
  - label: Build Analysis Plan
    agent: speckit.plan
    prompt: Create a plan for this analysis. I'm working with...
  - label: Clarify Requirements
    agent: speckit.clarify
    prompt: Clarify specification requirements
    send: true
---

## User Input

```text
$ARGUMENTS
```

Consider the user input before proceeding (if not empty).

## Goal

Transform a research goal or question into a structured analysis specification that supports reproducibility. The spec captures WHAT you want to learn and from WHAT data, not HOW you'll code it.

## Execution Steps

### 1. Parse the Research Goal

Extract from the user's description:
- **Research question(s)**: What they want to learn or test
- **Data involved**: What data sources, variables, or measurements
- **Expected outputs**: Figures, statistics, comparisons they need
- **Constraints**: Deadlines, data access issues, collaborator requirements

If the description is empty or too vague to identify a research question, ask for clarification.

### 2. Generate Short Name

Create a 2-4 word slug from the research goal:
- "I want to compare glacier velocities between seasons" → `glacier-velocity-seasonal`
- "Analyze the correlation between temperature and runoff" → `temp-runoff-correlation`
- "Generate figures for the 2024 field campaign" → `2024-field-figures`

### 3. Determine Next Spec Number

Find the highest existing spec number across all sources:

1. **Fetch remote branches** (if in a git repo):
   ```bash
   git fetch --all --prune
   ```

2. **Scan all sources for numbered specs**:
   - Remote branches: `git ls-remote --heads origin | grep -E 'refs/heads/[0-9]+-'`
   - Local branches: `git branch | grep -E '^[* ]*[0-9]+-'`
   - Specs directories: `ls -d specs/[0-9][0-9][0-9]-* 2>/dev/null`

3. **Extract the highest number** from all sources, increment by 1. If none exist, start at 001.

Format as 3-digit zero-padded: `001`, `002`, ... `042`, etc.

### 4. Create Spec Directory and Branch

Create the directory and branch with synchronized names:

```bash
mkdir -p specs/[NNN]-[short-name]
git checkout -b [NNN]-[short-name]
```

Example: If highest existing is `003-runoff-analysis`, new spec becomes `004-glacier-velocity` (both directory and branch).

If branch already exists, ask user whether to use existing or choose a different name.

### 5. Load the Specification Template

Read `templates/spec-template.md` to understand required sections.

### 6. Fill the Specification

Work through each section:

**Research Question(s)**:
- Frame as specific, answerable questions
- If the user described a hypothesis, include it
- If vague, make it concrete and note the interpretation

**Data Description**:
- Identify all data sources mentioned or implied
- Check `/memory/constitution.md` for defined data sources - use those details if available
- For each source: what is it, where does it come from, known issues
- Flag if access method is unclear: `[TODO: How is this data accessed?]`

**Methods Overview**:
- Describe the analysis approach at a conceptual level
- Focus on scientific logic, not implementation
- If multiple approaches are reasonable, note the choice and why

**Expected Outputs**:
- Be specific: "Figure showing X vs Y" not "some figures"
- Include key statistics or comparisons
- These become your checklist for completion

**Validation Approach**:
- What sanity checks apply to this data/analysis?
- Are there known values or prior results to compare against?
- Reference quality checks from constitution if relevant

**Completion Criteria**:
- Convert expected outputs into checkboxes
- Add "reproducible from raw data" as standard criterion

**Assumptions & Limitations**:
- Document scope boundaries
- Note what the analysis won't address

### 7. Handle Unknowns

For unclear aspects, apply this hierarchy:

1. **Infer from context**: Use constitution, existing data files, or domain knowledge
2. **Make a reasonable choice**: Document it in Assumptions
3. **Mark for clarification**: Only if the choice significantly affects scope or validity

Limit to 3 clarification questions per round - prioritize the most critical gaps first. Continue iterating until you have enough to write a meaningful spec.

Prioritize:
- Data access/availability (can't proceed without data)
- Scope boundaries (what's in vs. out)
- Validation approach (how to know results are correct)

If clarifications needed, present as:

```markdown
## Clarification Needed: [Topic]

**Context**: [What you understood]

**Question**: [Specific question]

**Options**:
| Choice | Description | Implication |
|--------|-------------|-------------|
| A | [Option] | [What this means for the analysis] |
| B | [Option] | [What this means for the analysis] |
```

### 8. Write the Specification

Write the completed spec to `specs/[NNN]-[short-name]/spec.md`.

### 9. Validate Against Constitution

If `/memory/constitution.md` exists, check alignment:
- Data sources referenced in spec match those defined in constitution?
- Coordinate systems/units consistent?
- Figure standards acknowledged?

Flag any mismatches for user review.

### 10. Report Completion

Summarize:
- Spec number, directory, and branch created (e.g., `004-glacier-velocity`)
- Spec file location
- Any sections marked TODO or needing clarification
- Suggested next step: `/speckit.plan` to create the analysis plan

## Operating Principles

- **Reproducibility focus**: Someone else should be able to understand what this analysis does from the spec alone
- **Data-first**: Get the data description right - everything else depends on it
- **Scope discipline**: A clear spec prevents "while I'm at it" scope creep
- **Constitution alignment**: Use defined standards when available
- **Practical over pedantic**: The spec is a working document, not a contract