package com.jdriven.ng2boot.service.api;

import com.jdriven.ng2boot.entity.Events;

import java.awt.*;
import java.util.List;

/**
 * Service Interface for managing Texts.
 */
public interface EventsService {

    /**
     * Save a texts.
     *
     * @param texts the entity to save
     * @return the persisted entity
     */
    Events save(Events texts);

    /**
     * Get all the texts.
     *
     * @return the list of entities
     */
    List<Events> findAll();

    /**
     * Get the "id" texts.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Events findOne(Long id);

    /**
     * Delete the "id" texts.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
