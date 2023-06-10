import type { Site } from 'lume/core.ts';
import sass from 'lume/plugins/sass.ts';

export default () => (site: Site) => {
  const files = [
    '_data/navigation.json',
    '_data/site.json',
    '_includes/layouts/blog.njk',
    '_includes/layouts/page.njk',
    '_includes/partials/head.njk',
    '_includes/partials/heading.njk',
    '_includes/partials/navigation.njk',
    '_includes/sass/_desktop.scss',
    '_includes/sass/_lume-dark-material.scss',
    '_includes/sass/_responsive.scss',
    'assets/logo.jpg', 
    'content/about.markdown',
    'content/contact.markdown',
    'css/index.scss',
    '404.markdown',
    'index.markdown',
  ];

  for (const file of files) {
    site.remoteFile(file, import.meta.resolve(`./{file}`));
  }

  // Configure the site
  site.use(sass());
  site.copy('assets');
};
