# Superhero Characters API

Live deployment: https://superhero-characters-api.onrender.com

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/characters` | Get all characters |
| GET | `/api/characters/{id}` | Get a character by ID |
| POST | `/api/characters` | Create a new character |
| PUT | `/api/characters/{id}` | Update an existing character |
| DELETE | `/api/characters/{id}` | Delete a character |
| GET | `/api/characters/category/{category}` | Get all characters in a given category |
| GET | `/api/characters/search?name={query}` | Search characters by name (contains, case-insensitive) |

### Example Request Body (POST / PUT)

```json
{
  "name": "Spider-Man",
  "description": "A teenager named Peter Parker was bitten by a radioactive spider.",
  "category": "Marvel",
  "imageUrl": "https://images.unsplash.com/photo-1635805737707-575885ab0820"
}
```
