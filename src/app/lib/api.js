import client from "./contentful";

export async function getSection() {
  try {
    const response = await client.getEntries({ content_type: "section" });
    return response.items;
  } catch (error) {
    console.error("Error fetching sections:", error);
    return [];
  }
}

export async function getCrystalStones() {
  try {
    const response = await client.getEntries({ content_type: "crystalStones" });
    return response.items;
  } catch (error) {
    console.error("Error fetching sections:", error);
    return [];
  }
}

export async function getNavbarData() {
  try {
    const response = await client.getEntries({ content_type: "navbar" });
    return response.items;
  } catch (error) {
    console.error("Error fetching sections:", error);
    return [];
  }
}
