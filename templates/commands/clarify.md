---
description: Identify underspecified areas in the analysis spec by asking up to 5 targeted clarification questions and encoding answers back into the spec.
handoffs:
  - label: Build Analysis Plan
    agent: speckit.plan
    prompt: Create a plan for the analysis. I'm working with...
scripts:
  sh: scripts/bash/check-prerequisites.sh --json --paths-only
  ps: scripts/powershell/check-prerequisites.ps1 -Json -PathsOnly
---

## User Input

```text
$ARGUMENTS
```

Consider the user input before proceeding (if not empty).

## Goal

Detect and reduce ambiguity in the analysis specification. Record clarifications directly in the spec file so the document becomes more precise over time.

Note: This workflow runs BEFORE `/speckit.plan`. If the user wants to skip clarification for exploratory work, proceed but note that scope creep risk increases.

## Execution Steps

### 1. Setup

Run `{SCRIPT}` from repo root and parse JSON for FEATURE_DIR and FEATURE_SPEC.

### 2. Load and Scan Spec

Load the spec file. Perform a structured ambiguity scan using this taxonomy. For each category, mark status: Clear / Partial / Missing.

**Research Question & Scope**:
- Is the question specific and answerable?
- Are scope boundaries explicit (what's in vs. out)?
- Is the hypothesis stated (if hypothesis-driven)?
- Are success criteria measurable?

**Data Sources**:
- Are all data sources identified?
- Is access method clear (URL, API, local path)?
- Is spatial/temporal coverage specified?
- Are known quality issues documented?
- Is data format specified?

**Methods & Approach**:
- Is the analysis approach described at a conceptual level?
- Are key method choices identified (even if not yet decided)?
- Are assumptions stated?
- Is justification provided for the approach?

**Expected Outputs**:
- Are outputs specific ("Figure showing X vs Y" not "some figures")?
- Are key statistics/comparisons identified?
- Is it clear what "done" looks like?

**Validation & QC**:
- Are sanity checks identified?
- Is there reference data or prior work to compare against?
- Are expected value ranges stated?

**Constraints & Context**:
- Are timeline pressures noted (if any)?
- Are collaborator requirements captured?
- Are data sharing or publication constraints noted?

**Terminology & Definitions**:
- Are domain-specific terms defined?
- Are variable names/units consistent?

For each category with Partial or Missing status, note candidate questions unless:
- Clarification wouldn't materially change the analysis
- Information is better determined during planning (note for later)

### 3. Generate Question Queue

Create a prioritized queue of up to 5 clarification questions. Constraints:

- Maximum 5 questions total
- Each question should be answerable with:
  - A short multiple-choice selection (2-4 options), OR
  - A short phrase (≤10 words)
- Only ask questions whose answers affect: data selection, method choice, output definition, or validation approach
- Prioritize by impact: data availability > scope boundaries > method choices > output details
- Skip questions already answered in the spec or constitution

**Priority order for science specs**:
1. Data access/availability (can't proceed without data)
2. Scope boundaries (what's in vs. out)
3. Validation approach (how to know results are correct)
4. Method choices (when multiple valid approaches exist)
5. Output specifics (what exactly to produce)

### 4. Ask Questions (Interactive Loop)

Present ONE question at a time.

**For multiple-choice questions**:

Analyze options and provide a recommendation based on:
- Common practice in the field
- Alignment with constitution standards
- Simplicity (prefer simpler approaches unless complexity is justified)

Format:
```
**Recommended:** Option [X] - [brief reasoning]

| Option | Description |
|--------|-------------|
| A | [description] |
| B | [description] |
| C | [description] |

Reply with option letter, "yes" to accept recommendation, or provide your own answer.
```

**For short-answer questions**:

Format:
```
**Suggested:** [your proposed answer] - [brief reasoning]

Reply "yes" to accept, or provide your own answer (≤10 words).
```

**After each answer**:
- Validate the response
- Record in working memory
- Move to next question

**Stop when**:
- All critical ambiguities resolved
- User signals completion ("done", "good", "proceed")
- 5 questions asked

### 5. Integrate Answers

After EACH accepted answer:

1. Ensure a `## Clarifications` section exists in the spec
2. Under it, create `### Session YYYY-MM-DD` if not present
3. Append: `- Q: [question] → A: [answer]`
4. Update the relevant spec section:
   - Data question → update Data Description
   - Scope question → update Research Question or Assumptions
   - Method question → update Methods Overview
   - Output question → update Expected Outputs
   - Validation question → update Validation Approach
5. Save spec immediately after each integration

**Rules**:
- If clarification contradicts earlier text, replace the old text
- Keep insertions minimal and specific
- Preserve existing structure and formatting

### 6. Validate

After each write:
- Clarifications section has one bullet per answer
- Updated sections contain no placeholders the answer resolved
- No contradictory statements remain
- Markdown structure intact

### 7. Report Completion

Output:
- Number of questions asked/answered
- Path to updated spec
- Sections updated
- Coverage summary:

| Category | Status |
|----------|--------|
| Research Question | Clear/Resolved/Deferred/Outstanding |
| Data Sources | ... |
| Methods | ... |
| Expected Outputs | ... |
| Validation | ... |
| Constraints | ... |

- If Outstanding items remain, recommend whether to proceed to `/speckit.plan` or run clarify again
- Suggested next step

## Operating Principles

- **Bias toward proceeding**: Scientists often figure things out as they go. Don't over-clarify upfront.
- **Data access is critical**: If data availability is unclear, that's the #1 question.
- **Scope discipline**: Vague scope leads to scope creep. Pin it down.
- **5 questions max**: Respect the user's time. More questions ≠ better spec.
- **Record decisions**: The spec should get more precise, not just discussed.