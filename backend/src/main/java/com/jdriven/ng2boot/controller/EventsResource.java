package com.jdriven.ng2boot.controller;

import com.jdriven.ng2boot.entity.Events;
import com.jdriven.ng2boot.service.api.EventsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

/**
 * REST controller for managing Texts.
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class EventsResource {

    private final Logger log = LoggerFactory.getLogger(EventsResource.class);

    private static final String ENTITY_NAME = "events";

    private final EventsService eventsService;

    public EventsResource(EventsService eventsService) {
        this.eventsService = eventsService;
    }

    /**
     * POST  /events : Create a new events.
     *
     * @param event the events to create
     * @return the ResponseEntity with status 201 (Created) and with body the new events, or with status 400 (Bad Request) if the events has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/events")
    public ResponseEntity<Events> createEvent(@RequestBody Events event) throws URISyntaxException {
        log.debug("REST request to save Texts : {}", event);
        if (event.getId() != null) {
            log.debug("A new events cannot already have an ID", ENTITY_NAME);
        }
        Events result = eventsService.save(event);
        return ResponseEntity.created(new URI("/api/events/" + result.getId())).header("MyResponseHeader", "MyValue").body(result);
    }

    /**
     * PUT  /texts : Updates an existing texts.
     *
     * @param events the texts to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated texts,
     * or with status 400 (Bad Request) if the texts is not valid,
     * or with status 500 (Internal Server Error) if the texts couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/events")
    public ResponseEntity<Events> updateEvent(@RequestBody Events events) throws URISyntaxException {
        log.debug("REST request to update Texts : {}", events);
        if (events.getId() == null) {
            return createEvent(events);
        }
        Events result = eventsService.save(events);
        return new ResponseEntity<Events>(result, HttpStatus.OK);
    }

    /**
     * GET  /texts : get all the texts.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of texts in body
     */
    @GetMapping("/events")
    public List<Events> getAllEvents() {
        log.debug("REST request to get all Texts");
        return eventsService.findAll();
        }

    /**
     * GET  /texts/:id : get the "id" texts.
     *
     * @param id the id of the texts to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the texts, or with status 404 (Not Found)
     */
    @GetMapping("/events/{id}")
    public ResponseEntity<Events> getEvent(@PathVariable Long id) {
        log.debug("REST request to get Events : {}", id);
        Events events = eventsService.findOne(id);
        if (events == null) {
            log.error("Event with id {} not found.", id);
        }
        return new ResponseEntity<Events>(events, HttpStatus.OK);
    }

    /**
     * DELETE  /events/:id : delete the "id" event.
     *
     * @param id the id of the event to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/events/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        log.debug("REST request to delete Event : {}", id);
        eventsService.delete(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}