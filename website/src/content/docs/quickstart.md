---
title: Quickstart
description: Get up and running with Science Spec-Kit
---

This guide walks you through setting up Science Spec-Kit and creating your first analysis project.

## Prerequisites

Before you start, you'll need:

- **uv**: A Python package manager. If you haven't used it before, it's a faster alternative to pip. [Install uv here](https://docs.astral.sh/uv/).
- **Python 3.11 or newer**: The programming language. You probably already have this if you do scientific computing.
- **Git**: Version control software for tracking changes to your code. [Install Git here](https://git-scm.com/downloads).
- **An AI coding agent**: A tool that helps write code from natural language prompts. Examples include Claude Code, Cursor, GitHub Copilot, or Gemini CLI.

## Step 1: Install the CLI

Open your terminal (the command-line interface where you type commands) and run:

```bash
uv tool install science-specify-cli --from git+https://github.com/Waveform-Analytics/science-spec-kit.git
```

This downloads and installs the Science Spec-Kit command-line tool. The `uv tool install` command makes the tool available globally, so you can use it from any folder.

## Step 2: Create a new project

Navigate to where you want your project to live, then run:

```bash
science-specify init my-analysis --ai claude
cd my-analysis
```

The first command creates a new folder called `my-analysis` with the starter files you need. The `--ai claude` flag configures it for Claude Code (change this if you're using a different AI agent). The second command moves you into that folder.

## Step 3: Set up your research constitution

The constitution defines standards for your project—things like where your data lives, what coordinate systems you use, and what coding conventions to follow. In your AI agent, run:

```
/speckit.constitution
```

This walks you through setting up your project's foundation. You can also provide details directly with the command if you prefer.

## Step 4: Create an analysis specification

Now describe what you want to analyze. For example:

```
/speckit.specify I want to analyze seasonal velocity variations for glaciers in the study region, comparing winter vs summer patterns and identifying any acceleration trends over the 2015-2023 period.
```

The spec captures your research question, expected outputs, and success criteria—all in plain English that non-programmers can review.

## Step 5: Plan the analysis

Tell the system about your technical setup:

```
/speckit.plan Using Python with xarray for NetCDF handling, scipy for statistics. Data is on local NAS at /data/velocities/. Running on laptop, ~20GB total data.
```

This generates a detailed plan for your data pipeline, including what scripts to create and how data flows through them.

## Step 6: Generate tasks

Break the plan into concrete tasks:

```
/speckit.tasks
```

This creates a task list organized by pipeline stage (setup, data acquisition, preprocessing, analysis, visualization, documentation), each with clear acceptance criteria.

## Step 7: Implement iteratively

Start writing code:

```
/speckit.implement
```

This guides you through writing scripts one at a time, with built-in review and debugging cycles. You write, review, run, fix issues, and move on.

## Step 8: Verify reproducibility

When your analysis is complete, check that everything is reproducible:

```
/speckit.checklist
```

This generates a checklist to verify that someone else (or future you) can run the analysis from scratch and get the same results.

## Commands reference

### Core workflow

| Command | What it does |
|---------|--------------|
| `/speckit.constitution` | Define project standards, data sources, and principles |
| `/speckit.specify` | Create an analysis specification from your research goal |
| `/speckit.plan` | Design the data pipeline and script structure |
| `/speckit.tasks` | Generate a task list organized by pipeline stage |
| `/speckit.implement` | Write, run, and debug scripts iteratively |

### Quality and validation

| Command | What it does |
|---------|--------------|
| `/speckit.clarify` | Resolve ambiguities in the specification |
| `/speckit.analyze` | Check consistency across spec, plan, and tasks |
| `/speckit.checklist` | Generate a reproducibility checklist |

## Project structure

After initialization, your project looks like this:

```
my-analysis/
├── memory/
│   └── constitution.md      # Project standards and data sources
├── specs/
│   └── 001-analysis-name/
│       ├── spec.md          # Analysis specification
│       ├── plan.md          # Data pipeline plan
│       ├── tasks.md         # Task breakdown
│       └── research.md      # Method decisions
├── scripts/                 # Analysis scripts
├── data/
│   ├── raw/                 # Immutable raw data
│   ├── processed/           # Transformed data
│   └── intermediate/        # Working files
└── outputs/
    ├── figures/
    └── tables/
```

Each folder has a clear purpose. Raw data stays untouched, processed data captures transformations, and outputs hold your final figures and tables.
