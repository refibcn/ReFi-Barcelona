# ReFi Barcelona Agent Guide

Quartz website for ReFi Barcelona (alternate or archive site).

## Quick Facts
- **Type**: Quartz static site
- **Purpose**: ReFi Barcelona content

## Commands
```bash
npx quartz build --serve    # Local dev
npx quartz build            # Production build
```

## Structure
```
content/          # Content files
quartz/           # Configuration
```

## Cursor AI Resources

### Project-Specific Resources

**Skills**: None (uses inherited resources)

**Agents**: None (uses root-level agents as needed)

**Rules**: None (follows root-level rules)

**Master Plans**: None (operational site)

### Inherited Resources

**From Root-Level** (`.cursor/` in Zettelkasten root):
- `refi-content-generation` - Generate ReFi ecosystem content
- `quick-push` - Quick git workflow operations
- `knowledge-curator` - Deep research and synthesis
- `meeting-processor` - Process meeting transcripts
- `docs-consolidator` - Consolidate documentation
- `project-reviewer` - Analyze project status

**From User-Level** (`~/.cursor/skills/`):
- `quartz-publishing` - Build, develop, and deploy Quartz static sites
- `git-workflows` - Git operations and PR creation
- `knowledge-synthesis` - Curate and synthesize content

## Context Gathering

### Essential Reading (First Pass)
1. This `AGENTS.md` file
2. `README.md` - Project overview (if present)

### Architecture Understanding
- Quartz static sites
- Content: Regional ReFi node content
- Structure: Standard Quartz structure

### Planning Context
- No master plans (operational sites)
- Status: Active maintenance
- Template: Based on `quartz-refi-template`

### Code Navigation
- **Content**: `content/` (markdown files)
- **Config**: `quartz.config.ts`
- **Styles**: `quartz/styles/` (custom styling)

### Search Patterns
**When looking for content**: Check `content/` directory  
**When working on site**: Reference `quartz-refi-template` patterns

### Integration Points
- Depends on: quartz-refi-template (upstream template)
- Used by: Regional ReFi nodes (public presence)
- Shares patterns with: Other Quartz-based ReFi websites

**For Complete Context**: See root `CONTEXT-GATHERING-GUIDE.md` for regional websites section.

## Content Management
Edit `content/` markdown files. Use `quartz-publishing` skill for operations.

## Integration
Part of ReFi BCN ecosystem. See also: ReFi-BCN-Website (main site).
