import client from "./contentful";

export async function getSection() {
  const response = await client.getEntries({ content_type: "section" });
  return response.items;
}
