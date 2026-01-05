# Analysis Specification: [ANALYSIS NAME]

**Directory**: `specs/[NNN-short-name]`
**Created**: [DATE]
**Status**: Draft
**Input**: User description: "$ARGUMENTS"

## Research Question(s)

<!--
  What are you trying to learn or test? Frame as specific, answerable questions.
  If hypothesis-driven, state the hypothesis and what would confirm/refute it.
-->

1. [Primary research question]
2. [Secondary question, if applicable]

**Hypothesis** (if applicable): [State expected outcome and reasoning]

## Data Description

<!--
  For each data source, describe:
  - What it is and where it comes from
  - Spatial/temporal coverage
  - Known quality issues or limitations
  - Access method (file path, URL, API)

  This section should let someone else obtain the same data.
-->

### Primary Data

- **Source**: [Name and origin]
- **Coverage**: [Spatial/temporal extent]
- **Format**: [File type, structure]
- **Access**: [How to get it]
- **Known issues**: [Quality concerns, gaps, caveats]

### Secondary Data (if applicable)

- **Source**: [Name and origin]
- **Purpose**: [Why this data is needed]
- **Access**: [How to get it]

## Methods Overview

<!--
  High-level description of the analysis approach. Focus on WHAT you'll do
  and WHY, not the code. Someone should understand the scientific logic
  without seeing implementation details.
-->

1. **Data preparation**: [Cleaning, filtering, transformations needed]
2. **Analysis approach**: [Statistical methods, models, comparisons]
3. **Validation**: [How you'll check results make sense]

**Justification**: [Why this approach suits the research question]

## Expected Outputs

<!--
  What will this analysis produce? Be specific enough that you'll know
  when you're done.
-->

### Figures

- **Figure 1**: [Description - what it shows, why it matters]
- **Figure 2**: [Description]

### Tables/Statistics

- **Table 1**: [Description - what summary statistics or comparisons]

### Key Metrics

- [Specific numbers or comparisons the analysis should produce]

## Validation Approach

<!--
  How will you know the results are correct? What sanity checks apply?
  Reference any validation data or known benchmarks.
-->

- [Sanity check 1 - e.g., "Values should fall within X-Y range"]
- [Sanity check 2 - e.g., "Results should be consistent with [prior work]"]
- [Comparison to validation data, if available]

## Completion Criteria

<!--
  What defines "done"? Be specific enough to know when to stop.
-->

- [ ] Research question(s) answered with evidence
- [ ] All expected outputs generated
- [ ] Validation checks pass
- [ ] Results reproducible from raw data
- [ ] [Project-specific criterion]

## Assumptions & Limitations

<!--
  What are you assuming? What won't this analysis address?
  Being explicit here prevents scope creep and sets expectations.
-->

**Assumptions**:
- [Assumption about data quality, coverage, or applicability]
- [Assumption about methods or models]

**Limitations**:
- [What this analysis won't tell you]
- [Known constraints or caveats]

## Notes

<!--
  Anything else relevant - related work, collaborator input,
  decisions made during scoping.
-->

[Additional context]
