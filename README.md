# Science Spec-kit

**A toolkit for reproducible earth science analysis workflows.**

This is an adaptation of [GitHub's Spec Kit](https://github.com/github/spec-kit) for earth science research. The original is designed for software development—building apps, features, and products. This version is designed for building reproducible analyses—from research question to publication-ready figures.

Most earth scientists aren't trained as software developers, but we write a lot of code. AI coding assistants are making this easier—and riskier. They're fast, but they make mistakes. Subtle ones. The kind that end up in your results if you're not careful.

"Vibe coding" (just prompting and hoping) is fun for side projects, but scientific analysis needs to be correct, documented, and reproducible. That's where this toolkit comes in.

> **Early stage**: This is actively being developed and hasn't been tested on many real projects yet. Feedback is very welcome - open an issue or reach out if you try it and have thoughts.

## What is this?

Science Spec-kit gives you a structured way to build analysis code, whether you're writing it yourself, working with an AI assistant, or both. Before you write any code, you write down:

- What question you're trying to answer
- What data you're using
- What outputs you expect
- How you'll know the results are correct

Then you build the code step by step, with checkpoints along the way.

Everything is written in plain English. Your collaborators and reviewers can understand your analysis plan without reading Python. Non-programmers can review your approach, catch logical errors, and understand exactly what the code is supposed to do.

## Why bother?

Mistakes happen in science. There's no way around that. But the goal is to:

- **Catch mistakes earlier** by thinking through the approach before coding
- **Make mistakes easier to find** by logging every decision and change
- **Make reviews more thorough** because reviewers can understand intentions, not just code

This isn't just for AI-assisted coding. It's useful for anyone who wants to organize their thoughts before starting. But if you *are* using an AI assistant and want quality results, you need structure to keep things on track.

## How it works

Instead of diving straight into code, you work through a sequence:

1. **Specify** the research question and expected outputs upfront
2. **Plan** the data pipeline before writing code
3. **Implement** iteratively with built-in QC checkpoints
4. **Verify** reproducibility before sharing results

The specification becomes the source of truth, not an afterthought.

## Core Principles

From the constitution template:

- **Reproducibility**: Analysis runs from raw data to outputs without manual intervention
- **Data Integrity**: Raw data is immutable; transformations produce new files
- **Provenance**: Every output traces back to code, data, and parameter choices

## Quick Start

### 1. Install

```bash
uv tool install specify-cli --from git+https://github.com/Waveform-Analytics/science-spec-kit.git
```

### 2. Initialize a project

```bash
specify init my-analysis --ai claude
cd my-analysis
```

### 3. Set up your research constitution

```bash
/speckit.constitution
```

Define your project's data sources, technical environment, coordinate systems, and standards.

### 4. Create an analysis specification

```bash
/speckit.specify I want to analyze seasonal velocity variations for glaciers in the study region, comparing winter vs summer patterns and identifying any acceleration trends over the 2015-2023 period.
```

### 5. Plan the analysis

```bash
/speckit.plan Using Python with xarray for NetCDF handling, scipy for statistics. Data is on local NAS at /data/velocities/. Running on laptop, ~20GB total data.
```

### 6. Generate tasks

```bash
/speckit.tasks
```

### 7. Implement iteratively

```bash
/speckit.implement
```

Write scripts, review, run, debug, repeat.

### 8. Verify reproducibility

```bash
/speckit.checklist
```

## Commands

### Core Workflow

| Command | Purpose |
|---------|---------|
| `/speckit.constitution` | Define project standards, data sources, and principles |
| `/speckit.specify` | Create analysis specification from research goal |
| `/speckit.plan` | Design data pipeline and script structure |
| `/speckit.tasks` | Generate task list organized by pipeline stage |
| `/speckit.implement` | Iteratively write, run, and debug scripts |

### Quality & Validation

| Command | Purpose |
|---------|---------|
| `/speckit.clarify` | Resolve ambiguities in the specification |
| `/speckit.analyze` | Check consistency across spec, plan, and tasks |
| `/speckit.checklist` | Generate reproducibility checklist |

## Project Structure

After initialization:

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

## Pipeline Stages

Tasks are organized by stage:

1. **Setup** - Environment, dependencies, directory structure
2. **Data Acquisition** - Download/access raw data
3. **Preprocessing** - Clean, transform, filter
4. **Analysis** - Core calculations
5. **Visualization** - Figures, tables
6. **Documentation** - README, reproducibility verification

Each stage has QC checkpoints before proceeding.

## The Iterative Implement Workflow

`/speckit.implement` supports an iterative cycle:

1. **Write** script based on task
2. **Review** - user adds inline comments (`[Q: ...]`, `[C: ...]`, `[TODO: ...]`)
3. **Incorporate** feedback
4. **Run** script
5. **Debug** if needed
6. **Complete** task and move to next

This matches how scientific analysis actually works—you learn as you go.

## Supported AI Agents

Works with any agent supporting slash commands:

- Claude Code
- Cursor
- GitHub Copilot
- Gemini CLI
- And [many others](https://github.com/github/spec-kit#-supported-ai-agents)

## Prerequisites

- [uv](https://docs.astral.sh/uv/) for package management
- Python 3.11+
- Git
- A supported AI coding agent

## Acknowledgements

Science Spec Kit is adapted from [GitHub Spec Kit](https://github.com/github/spec-kit) by Den Delimarsky and John Lam.

## License

MIT License - see [LICENSE](./LICENSE).