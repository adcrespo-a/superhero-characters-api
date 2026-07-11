package com.superhero_characters_api.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CharacterService {

    @Autowired
    private CharacterRepository characterRepository;

    public List<Character> getAllCharacters() {
        return characterRepository.findAll();
    }

    public Character getCharacterById(Long id) {
        return characterRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Character not found with id: " + id));
    }

    public Character createCharacter(Character character) {
        return characterRepository.save(character);
    }

    public Character updateCharacter(Long id, Character characterDetails) {
        Character character = getCharacterById(id);
        character.setName(characterDetails.getName());
        character.setDescription(characterDetails.getDescription());
        character.setCategory(characterDetails.getCategory());
        character.setImageUrl(characterDetails.getImageUrl());
        return characterRepository.save(character);
    }

    public void deleteCharacter(Long id) {
        Character character = getCharacterById(id);
        characterRepository.delete(character);
    }

    public List<Character> getCharactersByCategory(String category) {
        return characterRepository.findByCategory(category);
    }

    public List<Character> searchCharactersByName(String name) {
        return characterRepository.findByNameContainingIgnoreCase(name);
    }
}
