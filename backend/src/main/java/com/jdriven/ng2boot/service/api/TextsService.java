package com.jdriven.ng2boot.service.api;

import com.jdriven.ng2boot.entity.Texts;

import java.util.List;

/**
 * Service Interface for managing Texts.
 */
public interface TextsService {

    /**
     * Save a texts.
     *
     * @param texts the entity to save
     * @return the persisted entity
     */
    Texts save(Texts texts);

    /**
     * Get all the texts.
     *
     * @return the list of entities
     */
    List<Texts> findAll();

    /**
     * Get the "id" texts.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Texts findOne(Long id);

    /**
     * Delete the "id" texts.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
