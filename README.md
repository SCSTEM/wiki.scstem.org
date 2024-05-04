# wiki.scstem.org

## Project Setup

1. Install NodeJS. Check `.nvmrc` for the version used by this project.
2. Run `npm install` in the project root to install the necessary dependencies.
3. If using VSCode (you probably should be), install the recommended extensions.

## Development

1. Run `npm run dev` to start the development server.
2. Browse to `http://localhost:3000` to view the development site. It will hot-reload on changes.

### Adding a new page

This project is primarily intended as an internal wiki, so complex pages and rigid styling are not required. Wiki pages should be created inside `./wiki` and should be `.md` or `.mdx` files. Use the existing pages for reference.

> [!NOTE]  
> We are using Docusaurus. To learn more about creating "docs" (wiki) pages, review their [documentation](https://docusaurus.io/docs/create-doc). If you are new to markdown, view the [Markdown Guide](https://www.markdownguide.org/) and/or Docusaurus's list of special [markdown features](https://docusaurus.io/docs/markdown-features).

#### Images

When adding images to a wiki page, place them in an `images` subdirectory where you are adding your wiki page. This helps keeps things scoped and makes it easier to relocate groups of pages.

## Deployment

Please ensure you do the following before pushing to `main`:

1. Run `npm run lint:fix` to ensure the codebase is linted and formatted. Fix any errors that are returned.
2. Test the site by running `npm run dev`.
3. Build the site locally with `npm run build`

Note that we are limited on the number of deploys we can make per month, so push work in batches, rather than one commit at a time.
