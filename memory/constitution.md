# [PROJECT_NAME] Research Constitution

## Research Context

[RESEARCH_CONTEXT]
<!-- What scientific questions does this project address? How does it fit
     into the broader research program? Who are the intended users of
     the outputs? -->

## Core Principles

### I. Reproducibility

Analysis should be fully reproducible from raw data to final outputs.
Scripts run without manual intervention. Random seeds are fixed and
documented. Environment dependencies are explicit (requirements.txt,
environment.yml, or equivalent).

### II. Data Integrity

Raw data is immutable - all transformations produce new files, never
overwrite sources. Data lineage is traceable through the analysis chain.
Missing or suspect values are flagged, not silently dropped or filled.

### III. Provenance

Every output links back to: the code that produced it, the input data,
and key parameter choices. Figures and tables can be regenerated from
tracked artifacts. If you can't trace how a number was made, it doesn't
belong in the paper.

## Data Sources

[DATA_SOURCES]
<!-- For each major data source:
     - Name and brief description
     - Access method (URL, API, local path)
     - Spatial/temporal coverage
     - Update frequency (if applicable)
     - Known quality issues or limitations
     - Contact or documentation link -->

## Technical Environment

[TECHNICAL_ENVIRONMENT]
<!-- - Language and version (e.g., Python 3.11)
     - Key packages and versions
     - Compute environment (laptop, cluster, cloud)
     - Data storage locations
     - Version control practices -->

## Coordinate Systems & Units

[COORDINATE_SYSTEMS]
<!-- - Spatial reference system(s) with EPSG codes
     - Time zone and calendar conventions
     - Standard units for key variables
     - Missing data conventions (NaN, -9999, etc.) -->

## Figure Standards

[FIGURE_STANDARDS]
<!-- - Color palette (prefer colorblind-safe)
     - Standard dimensions for publication
     - Required elements (scale bars, colorbars, uncertainty)
     - File formats and resolution (e.g., PDF for vectors, 300dpi PNG) -->

## Quality Checks

[QUALITY_CHECKS]
<!-- - Range and sanity checks for key variables
     - Spatial/temporal consistency checks
     - Comparison against reference or validation data
     - How suspect data is flagged and handled -->

## Project Notes

[PROJECT_NOTES]
<!-- - Collaborator agreements or data sharing restrictions
     - Publication timelines or embargo periods
     - Any other project-specific constraints -->
