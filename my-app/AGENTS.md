# Repository Guidelines

## Project Structure & Module Organization

The repository root is `my-app/`, using Next.js App Router, React, TypeScript, and Tailwind CSS.

- `app/`: routes, shared `layout.tsx`, and `globals.css`. User-related pages live in `add_usr/` and `show_usr/`; table columns, features, and pagination sit alongside the listing page.
- `components/`: shared components; `components/ui/` contains reusable UI primitives.
- `lib/utils.ts`: shared utilities.
- `public/`: static SVG assets.

## Build, Test, and Development Commands

Run from `my-app/` using Bun; retain `bun.lock`.

- `bun install`: install dependencies.
- `bun run dev`: start the local development server at `http://localhost:3000`.
- `bun run build`: create a production build.
- `bun run start`: serve the production build after building.
- `bun run lint`: run ESLint with Next.js Core Web Vitals and TypeScript rules.

## Coding Style & Naming Conventions

Use strict TypeScript, two-space indentation, and double-quoted strings. Match the surrounding file's semicolon style; no formatter is configured. Use PascalCase component names and camelCase variables/functions. Preserve route names and Next.js filenames such as `page.tsx` and `layout.tsx`. Use `@/` imports for shared modules and relative imports for route-local helpers. Put `"use client"` before imports in interactive client components. Prefer existing UI primitives and Tailwind utilities.

## Testing Guidelines

No test runner, test script, coverage threshold, or test naming convention is configured. Run lint and build before submitting changes, and report existing failures separately. Manually verify affected routes, navigation, and table pagination. If introducing automated tests, document the runner, command, and naming convention in the same PR.

## Commit & Pull Request Guidelines

History contains only `Initial commit from Create Next App`, so no established commit convention exists. Use concise, imperative subjects, such as `Add user table pagination`. Keep commits focused. PRs should describe behavior changes, link relevant issues, list validation results, and include screenshots for visual changes.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
