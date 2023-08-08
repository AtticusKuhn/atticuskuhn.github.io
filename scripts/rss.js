// src/pages/api/rss/index.ts
import fs from "fs";
import { blog, getBlogs } from "../lib/blog";

// import feed from './feed.json';

const metadata = {
  title: 'Atticus Kuhn Website',
  description: 'Atticus Kuhns RSS Feed',
  link: 'https://atticuskuhn.github.io'
}


/**
 * Respond with an rss.xml
 *
 * @param {object} req NextApiRequest
 * @param {object} res NextApiResponse
 */
const writeRSSFeed = () =>{
    const blogs = getBlogs();
    const postItems = blogs
      .map((page: blog) => {
        const url = `https://atticuskuhn.github.io/blog/${page.slug}`;

        return `<item>
          <title>${page.title}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${page.date}</pubDate>
          <content:encoded>${page.content.replace(/</g, "&gt;").replace(/>/g, "&lt;").replace(/&/g, "&amp;").replace(/"/g, "&quot;")}</content:encoded>
        </item>`;
      })
      .join('');

    // Add urlSet to entire sitemap string
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
      <title>${metadata.title}</title>
      <description>${metadata.description}</description>
      <link>${metadata.link}</link>
      <lastBuildDate>${blogs[0].date}</lastBuildDate>
      ${postItems}
      </channel>
      </rss>`;
    fs.writeFileSync("../public/rss.xml", sitemap)
}
writeRSSFeed();
export default writeRSSFeed;
