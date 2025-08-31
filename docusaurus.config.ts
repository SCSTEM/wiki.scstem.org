import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "SC2 Wiki",
  tagline: "South Central STEM Collective's internal wiki",
  url: "https://wiki.scstem.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "image/logo.svg",
  i18n: { defaultLocale: "en", locales: ["en"] },
  future: { experimental_faster: true, v4: true },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.config.ts"),
          path: "./wiki",
        },
        theme: {
          customCss: ["./src/css/custom.css", "./src/css/tailwind.css"],
        },
        gtag: { trackingID: "G-LXG6C2VKTG" },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: "South Central STEM Collective Wiki",
      logo: {
        alt: "South Central STEM Collective's logo",
        src: "image/logo.svg",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "wiki",
        //   position: "left",
        //   label: "Overview",
        // },
        { href: "https://scstem.org", label: "Main site", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Where to find us",
          items: [
            { label: "Our website", href: "https://scstem.org" },
            { label: "Facebook", href: "https://go.scstem.tech/facebook" },
            { label: "LinkedIn", href: "https://go.scstem.tech/linkedin" },
            { label: "GitHub", href: "https://go.scstem.tech/github" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} South Central STEM Collective.`,
    },
    colorMode: { defaultMode: "dark", disableSwitch: true },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    zoom: { selector: ".markdown img, .zoomable img" },
  } satisfies Preset.ThemeConfig,
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    [
      require.resolve("@docusaurus/plugin-ideal-image"),
      {
        disableInDev: false,
        sizes: [250, 576, 768, 992, 1200, 1400, 2000],
        name: "image/_optimized/[name].[hash:hex:7].[width].[ext]",
      },
    ],
    async function postcss(_context, _options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
