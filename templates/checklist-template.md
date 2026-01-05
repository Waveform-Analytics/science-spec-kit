# Reproducibility Checklist: [ANALYSIS NAME]

**Analysis**: `specs/[NNN-short-name]/`
**Generated**: [DATE]
**Purpose**: Verify this analysis can be reproduced from raw data to final outputs

<!--
  ============================================================================
  IMPORTANT: The checklist items below are EXAMPLES for illustration.

  The /speckit.checklist command MUST replace these with actual items based on:
  - Data sources from spec.md
  - Environment and pipeline from plan.md
  - Task completion status from tasks.md
  - Standards from constitution.md

  Customize items based on the specific analysis context.
  ============================================================================
-->

## Data Accessibility

- [ ] CHK001 All raw data sources documented with access methods
- [ ] CHK002 Data can be obtained by someone outside the project
- [ ] CHK003 Data format and structure documented

## Environment

- [ ] CHK004 Language and version specified
- [ ] CHK005 All dependencies listed with versions
- [ ] CHK006 Environment can be recreated from specification

## Code & Execution

- [ ] CHK007 All scripts tracked in version control
- [ ] CHK008 Scripts run without manual intervention
- [ ] CHK009 Execution order documented (README or run script)

## Data Integrity

- [ ] CHK010 Raw data preserved (not modified in place)
- [ ] CHK011 Transformations produce new files
- [ ] CHK012 Missing data handling documented

## Provenance

- [ ] CHK013 Each output traceable to code and data inputs
- [ ] CHK014 Key parameter choices documented
- [ ] CHK015 Random seeds set (if applicable)

## Outputs

- [ ] CHK016 All expected outputs generated
- [ ] CHK017 Outputs regenerable by running pipeline

## Documentation

- [ ] CHK018 README explains how to reproduce
- [ ] CHK019 Research question answered with traceable evidence

---

**Pass criteria**: All items checked, or unchecked items have documented justification.

## Notes

- Check items off as completed: `- [x]`
- Add inline notes for any items that don't apply or need clarification
- Run this checklist before sharing results or submitting for publication