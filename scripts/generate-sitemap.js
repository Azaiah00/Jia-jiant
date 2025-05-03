const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

// Array of root pages that should be included in the sitemap
const pages = [
  '/',
  '/music',
  '/modeling',
  '/acting',
  '/blog',
  '/shop',
  '/contact',
]

// Your website URL
const domain = 'https://jiathejiant.com'

;(async () => {
  try {
    // Generate sitemap items for static pages
    const staticPages = pages.map((page) => ({
      url: `${domain}${page}`,
      lastmod: new Date().toISOString(),
      changefreq: page === '/' ? 'daily' : 'weekly',
      priority: page === '/' ? 1.0 : 0.8,
    }))

    // Generate sitemap XML
    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
          .map(
            (page) => `
          <url>
            <loc>${page.url}</loc>
            <lastmod>${page.lastmod}</lastmod>
            <changefreq>${page.changefreq}</changefreq>
            <priority>${page.priority}</priority>
          </url>
        `
          )
          .join('')}
      </urlset>
    `

    // Format the XML
    const formatted = await prettier.format(sitemap, {
      parser: 'html',
    })

    // Write the sitemap to the public directory
    fs.writeFileSync('public/sitemap.xml', formatted)

    console.log('Sitemap generated successfully!')
  } catch (error) {
    console.error('Error generating sitemap:', error)
    process.exit(1)
  }
})() 