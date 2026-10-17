// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightCatppuccin from "@catppuccin/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://tarobytez.github.io',
  base: '/web-bytez',
  integrations: [
    starlight({
      plugins: [starlightCatppuccin()],
      title: "Web Bytez",
      logo: {
        replacesTitle: true,
        light: "./src/assets/tarobytez-dark-logo.svg",
        dark: "./src/assets/tarobytez-light-logo.svg",
      },
      customCss: ["./src/styles/global.css"],
      components: {
        // Override the default `SocialIcons` component.
        Footer: "./src/components/Footer.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/tarobytez",
        },
        {
          icon: "email",
          label: "Email",
          href: "mailto:taroroutly@gmail.com",
        },
      ],
      sidebar: [
        {
					label: 'Web Basics',
					items: [
            { label: 'Intro to Elements', slug: 'web-basics/intro-to-elements' },
            { label: 'SEO Basics', slug: 'web-basics/seo-basics' },
            { label: 'Colors for the Web', slug: 'web-basics/colors' },
            { label: 'Images For The Web', slug: 'web-basics/images' },
            { label: 'Measurement Units for the Web', slug: 'web-basics/measurements' },
            { label: 'Linking Content', slug: 'web-basics/linking-content' },
            { label: 'Spacing Your Content', slug: 'web-basics/spacing' },
            { label: 'Container Types', slug: 'web-basics/flexbox-and-grid' },
            { label: 'Designing for Different Device Sizes', slug: 'web-basics/responsive-design' }
					],
				},
				{
					label: 'Wordpress Guides',
					items: [{ autogenerate: { directory: 'wordpress-guides' } }],
				},
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
