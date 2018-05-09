package com.jdriven.ng2boot.service.impl;

import com.jdriven.ng2boot.entity.AppUser;
import com.jdriven.ng2boot.entity.Events;
import com.jdriven.ng2boot.entity.EventsRepository;
import com.jdriven.ng2boot.service.api.EventsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.awt.*;
import java.util.List;

/**
 * Service Implementation for managing Texts.
 */
@Service
@Transactional
public class EventsServiceImpl implements EventsService {

    private final Logger log = LoggerFactory.getLogger(EventsServiceImpl.class);

    private final EventsRepository eventsRepository;

    public EventsServiceImpl(EventsRepository eventsRepository) {
        this.eventsRepository = eventsRepository;
    }

    /**
     * Save a texts.
     *
     * @param events the entity to save
     * @return the persisted entity
     */
    @Override
    public Events save(Events events) {
        log.debug("Request to save Texts : {}", events);
        log.warn(events.starting.toString());
        return eventsRepository.save(events);
    }

    /**
     * Get all the events.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<Events> findAll() {
        log.debug("Request to get all Events");
        log.warn(eventsRepository.findAll().toString());
        return eventsRepository.findAll();
    }

    /**
     * Get one event by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Events findOne(Long id) {
        log.debug("Request to get Event : {}", id);
        return eventsRepository.findOne(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Events> findByUser(AppUser user_id) {
        log.debug("Request to get Events by user : {}", user_id);
        return eventsRepository.findByUser(user_id);
    }

    /**
     * Delete the event by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Event : {}", id);
        eventsRepository.delete(id);
    }
}
