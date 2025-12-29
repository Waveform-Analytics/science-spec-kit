---
description: Create or update the project research constitution with scientific context, data sources, and analysis standards.
handoffs:
  - label: Build Specification
    agent: speckit.specify
    prompt: Create a specification for analysis based on this constitution. I want to analyze...
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

You are updating the project research constitution at `/memory/constitution.md`. This file defines the scientific context, core principles, and standards for the project. Your job is to collect concrete details from the user and fill in the template.

Follow this execution flow:

1. Load the existing constitution at `/memory/constitution.md`.
   - Identify placeholder tokens in square brackets (e.g., `[PROJECT_NAME]`, `[DATA_SOURCES]`).

2. Collect values for each section:
   - If user input supplies details, use them.
   - Otherwise, infer from existing repo context (README, existing scripts, data files).
   - For sections the user hasn't addressed, ask focused questions or mark as `[TODO: description]`.

3. Section-specific guidance:

   **Research Context**: Get the big picture - what questions, why this matters, who uses the outputs.

   **Data Sources**: For each source, capture: name, access method, coverage, known issues. Scientists often underspecify this - probe for details.

   **Technical Environment**: Check for existing environment files (requirements.txt, environment.yml, pyproject.toml). If found, summarize. If not, ask what they're using.

   **Coordinate Systems & Units**: Critical for earth science. Ask explicitly about spatial reference systems, time handling, and missing data conventions.

   **Figure Standards**: Ask about target venue (journal, presentation) to inform format/resolution. Suggest colorblind-safe palettes if not specified.

   **Quality Checks**: Ask what validations would catch errors in their specific data type.

   **Project Notes**: Probe for constraints that might not be obvious - data embargoes, collaborator agreements, deadlines.

4. Draft the completed constitution:
   - Replace placeholders with concrete text.
   - Keep HTML comments as guidance unless the user asks to remove them.
   - Use clear, direct language - this is a working document, not a legal contract.

5. Consistency check:
   - If `/memory/spec.md` exists, verify data sources and scope align.
   - If analysis scripts exist, verify stated environment matches actual dependencies.
   - Flag any inconsistencies to the user.

6. Write the completed constitution to `/memory/constitution.md`.

7. Summarize for the user:
   - What sections are complete vs. marked TODO.
   - Any inconsistencies found.
   - Suggested next steps (e.g., "Run `speckit specify` to create your first analysis spec").

If the user provides partial updates, focus on those sections but still scan others for obvious gaps.

If critical information is missing and you can't infer it, insert `[TODO: what's needed]` rather than guessing.
