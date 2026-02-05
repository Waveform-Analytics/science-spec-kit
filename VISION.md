# Science Spec-Kit Vision

This document defines what Science Spec-Kit is, who it's for, and the principles that guide its development. When making decisions about features, scope, or design, refer back to this.

---

## 1. Who Is This For?

**Earth scientists with deep domain expertise but limited programming experience, who are willing to engage deeply with understanding what gets built.**

They know exactly what analysis they want to perform. They understand their data, their domain, and what scientifically valid results look like. What they lack is the ability to translate that knowledge into working code. [C: or maybe they are not entirely lacking? i mean, i can make working code but doesn't mean my code is always good, well-documented, reproducible...]

They are not looking for a black box. They want to understand the code as it's written - not at the level of syntactic details, but at the level of mental scaffolding: how pieces fit together, why certain approaches are used, what best practices apply.

This is someone who will ask: "Explain where this file fits in the larger context" rather than "just make it work."

---

## 2. What Problem Does This Solve?

**The gap between domain knowledge and implementation.**

Earth scientists write a lot of code, but most aren't trained as software developers. AI coding assistants make this faster - and riskier. They're fast, but they make subtle mistakes. The kind that end up in results if you're not careful.

Science Spec-Kit provides the structure that makes AI-assisted coding rigorous:

- The researcher articulates what they want in domain terms
- The specification becomes a contract for what "correct" means
- The AI implements against that contract
- The researcher can verify correctness through outputs and QC checks, not just code review

The spec-driven approach forces clarity of intent, creates documentation as a byproduct, and builds the researcher's programming understanding over time.

---

## 3. What This Is NOT

**Not vibe coding.** "Just prompt and hope" doesn't produce reproducible science. This toolkit exists because rigor matters.

**Not black-box automation.** The user must engage with understanding. If you can't explain what your code does at a conceptual level, you can't catch when it does the wrong thing.

**Not a replacement for learning.** It's a scaffold that accelerates learning while producing real results. The goal is a researcher who understands more over time, not one who understands less.

**Not for software products.** This is for analysis workflows that answer research questions and produce figures for papers - not for building applications, APIs, or user-facing tools.

---

## 4. Core Philosophy

[TODO: One sentence that everything else derives from. Candidates:]

- "The specification is the researcher's interface with the code." [C: i like this one best]
- "Domain expertise drives implementation, not the other way around."
- "Reproducibility is non-negotiable; everything else is design choice."

---

## 5. Scope Boundaries

### In Scope

- Project initialization and structure
- Specification templates tailored to earth science workflows
- Pipeline stages common to research analysis (data acquisition, preprocessing, analysis, visualization)
- QC checkpoints and reproducibility verification
- Multi-agent support (Claude, Copilot, Cursor, etc.)
- Constitution/standards for project-level decisions

### Out of Scope

- [TODO: What is permanently out?]

### Maybe Later

- [TODO: What's interesting but not now?]

---

## 6. Success Criteria

**The friction disappears.**

A domain expert who has always struggled to translate their ideas into code sits down with this tool and can't stop using it. They produce working, reproducible analysis in a fraction of the time it would have taken before - and they understand what they built.

Specific indicators:

- A researcher can go from research question to publication-ready figures without hitting walls that require a "real programmer"
- The resulting code is reproducible by others without the original researcher present
- The researcher's programming understanding grows through use, not despite it
- Collaborators and reviewers can understand the analysis by reading the spec, not just the code

---

## 7. Design Principles

[TODO: Specific principles that guide implementation decisions]

---

## 8. Open Questions

- How much earth-science-specific structure should be baked in vs. left generic?
- What's the right balance between guidance and flexibility in templates?
- Should there be a "learning path" for complete beginners vs. just tools?
- How do we handle the tension between "move fast" and "verify everything"?

---

*This is a living document. Update it as understanding evolves.*
