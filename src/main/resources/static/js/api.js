// Central place for the API base URL.
// Since these static files are served by the same Spring Boot app as the API,
// a relative path works both locally and on Render.
const API_BASE = "/api/characters";

async function getAllCharacters() {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error("Failed to load characters");
  return res.json();
}

async function getCharacterById(id) {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error("Character not found");
  return res.json();
}

async function searchCharactersByName(name) {
  const res = await fetch(`${API_BASE}/search?name=${encodeURIComponent(name)}`);
  if (!res.ok) throw new Error("Search failed");
  return res.json();
}

async function getCharactersByCategory(category) {
  const res = await fetch(`${API_BASE}/category/${encodeURIComponent(category)}`);
  if (!res.ok) throw new Error("Failed to load category");
  return res.json();
}

async function createCharacter(character) {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(character),
  });
  if (!res.ok) throw new Error("Failed to create character");
  return res.json();
}

async function updateCharacter(id, character) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(character),
  });
  if (!res.ok) throw new Error("Failed to update character");
  return res.json();
}

async function deleteCharacter(id) {
  const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete character");
}
