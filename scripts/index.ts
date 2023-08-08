// src/pages/api/rss/index.ts
import fs from "fs";
import { blog, getBlogs } from "../lib/blog";

import { Feed } from 'feed';

export default async function generateRssFeed() {
  const allPosts = await getBlogs();
  const site_url = "atticuskuhn.github.io"

  const feedOptions = {
    title: 'Atticus Kuhns Website',
    description: 'The Blog of Atticus Kuhn',
    id: site_url,
    link: site_url,
    image: `${site_url}/logo.png`,
    favicon: `${site_url}/favicon.png`,
    copyright: `MIT License: ${new Date().getFullYear()}, Ibas`,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      // other feed formats
      json: `${site_url}/rss.json`,
      atom: `${site_url}/atom.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  allPosts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${site_url}/blog/${post.slug}`,
      link: `${site_url}/blog/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
    });
  });

  fs.writeFileSync('./public/rss.xml', feed.rss2());

  // write other feed formats to public folder
  fs.writeFileSync('./public/rss.json', feed.json1());
  fs.writeFileSync('./public/atom.xml', feed.atom1());
}
