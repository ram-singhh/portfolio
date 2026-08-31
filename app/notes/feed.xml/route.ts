import { notesData } from "@/data/notes";

export async function GET() {
  const baseUrl = "https://www.ramsingh.dev";

  const rssItemsXml = notesData
    .map((note) => {
      const noteUrl = `${baseUrl}/notes/${note.slug}/`;
      const pubDate = new Date(note.date).toUTCString();

      return `
    <item>
      <title><![CDATA[${note.title}]]></title>
      <link>${noteUrl}</link>
      <guid isPermaLink="true">${noteUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${note.description}]]></description>
      <category><![CDATA[${note.category}]]></category>
    </item>`;
    })
    .join("");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ram Singh — Field Notes &amp; Lab Reports</title>
    <link>${baseUrl}/notes/</link>
    <description>First-hand technical field notes, build logs, and architecture documentation by Ram Singh.</description>
    <language>en-us</language>
    <atom:link href="${baseUrl}/notes/feed.xml" rel="self" type="application/rss+xml" />
    ${rssItemsXml}
  </channel>
</rss>`;

  return new Response(rssXml.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
