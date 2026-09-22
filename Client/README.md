# Website

Minimal SvelteKit app using Svelte 5 and TypeScript.

Run commands from this directory:

```sh
bun install
bun run dev
```

Edit `src/routes/+page.svelte` to build the homepage. Shared page markup belongs
in `src/routes/+layout.svelte`. Put reusable code in `src/lib/` and files served
directly in `static/`.

```sh
bun run check    # Check Svelte and TypeScript
bun run build    # Create a production build
bun run preview  # Preview the production build locally
```
