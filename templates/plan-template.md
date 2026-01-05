# Analysis Plan: [ANALYSIS NAME]

**Spec**: `specs/[NNN-short-name]/spec.md`
**Created**: [DATE]
**Status**: Draft

## Summary

[One paragraph: What question are we answering, what's the approach, what are the key outputs?]

## Analysis Environment

**Language/Version**: [e.g., Python 3.11]
**Key Packages**: [e.g., xarray, pandas, matplotlib, scipy]
**Environment File**: [e.g., environment.yml, requirements.txt, or "to be created"]

## Compute Environment

<!--
  Optional but helpful for larger analyses. Skip if small-scale exploratory work.
-->

**Where will this run?**
- [ ] Laptop/desktop
- [ ] Shared server
- [ ] HPC cluster
- [ ] Cloud

**Data scale**: [e.g., "~50GB of NetCDF files" or "small, <1GB total"]

**Timeline pressure**: [e.g., "results needed for AGU abstract Dec 1" or "exploratory, no deadline"]

**Known bottlenecks** (if any): [e.g., "similar analysis took 3 days last time" or "N/A"]

## Constitution Check

<!--
  Verify alignment with project constitution. Check the boxes that apply.
-->

- [ ] Data sources match those defined in constitution
- [ ] Coordinate systems/units are consistent
- [ ] Figure standards will be followed
- [ ] Quality checks are incorporated

**Issues to resolve**: [List any conflicts or gaps]

## Project Structure

<!--
  This is a suggested starting point. Adapt to your project:
  - Split scripts if a stage is complex (e.g., 02a_clean.py, 02b_reproject.py)
  - Combine stages if simple
  - Use notebooks instead of scripts if preferred
  The key is maintaining clear stages and data flow, not matching this exactly.
-->

```text
specs/[NNN-short-name]/
├── spec.md              # Analysis specification
├── plan.md              # This file
├── research.md          # Method decisions and rationale
└── tasks.md             # Task breakdown (created by /speckit.tasks)

scripts/                 # Or notebooks/, depending on preference
├── 01_data_download.py
├── 02_preprocessing.py
├── 03_analysis.py
└── 04_figures.py

data/
├── raw/                 # Immutable raw data
├── processed/           # Cleaned/transformed data
└── intermediate/        # Working files (can be regenerated)

outputs/
├── figures/
├── tables/
└── results/
```

**Structure notes**: [Adjust the above to match your project. Add/remove scripts as needed while keeping the overall stage organization.]

## Data Pipeline

<!--
  Describe how data flows from raw inputs to final outputs.
  Each stage should be traceable and reproducible.

  Adjust the number of stages and scripts to fit your project.
  The stages below are a starting point - split or combine as needed.
-->

### Stage 1: Data Acquisition
- **Input**: [Source - URL, API, local path]
- **Output**: `data/raw/[files]`
- **Script**: `scripts/01_data_download.py`

### Stage 2: Preprocessing
- **Input**: `data/raw/[files]`
- **Processing**: [What transformations - cleaning, filtering, reprojection, etc.]
- **Output**: `data/processed/[files]`
- **Script**: `scripts/02_preprocessing.py`

### Stage 3: Analysis
- **Input**: `data/processed/[files]`
- **Processing**: [Statistical methods, models, calculations]
- **Output**: `data/intermediate/[results]` or `outputs/results/[files]`
- **Script**: `scripts/03_analysis.py`

### Stage 4: Visualization
- **Input**: Analysis outputs
- **Output**: `outputs/figures/[files]`
- **Script**: `scripts/04_figures.py`

## Script/Notebook Plan

<!--
  List the code artifacts you'll create. Be specific enough to guide implementation.
-->

| Script | Purpose | Inputs | Outputs |
|--------|---------|--------|---------|
| `01_data_download.py` | Fetch raw data | URLs/credentials | `data/raw/*` |
| `02_preprocessing.py` | Clean and transform | `data/raw/*` | `data/processed/*` |
| `03_analysis.py` | Core calculations | `data/processed/*` | `outputs/results/*` |
| `04_figures.py` | Generate figures | Analysis outputs | `outputs/figures/*` |

## Dependencies

<!--
  Which steps must complete before others? This guides task ordering.
-->

```text
01_data_download
       ↓
02_preprocessing
       ↓
03_analysis
       ↓
04_figures
```

**Parallel opportunities**: [e.g., "Figure 1 and Figure 2 can be generated in parallel once analysis completes"]

## Open Questions

<!--
  Unknowns that need resolution before or during implementation.
  These become research tasks in Phase 0.
-->

- [ ] [Question about method choice, package selection, data access, etc.]
- [ ] [Another question]

## Notes

[Any other context - related prior work, collaborator inputs, etc.]