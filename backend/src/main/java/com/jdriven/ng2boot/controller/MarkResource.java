package com.jdriven.ng2boot.controller;

//import com.dominik_dujava.web.rest.util.HeaderUtil;
import com.jdriven.ng2boot.entity.Mark;
import com.jdriven.ng2boot.service.api.MarkService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

/**
 * REST controller for managing Mark.
 */
@RestController
@RequestMapping("/api")
public class MarkResource {

    private final Logger log = LoggerFactory.getLogger(MarkResource.class);

    private static final String ENTITY_NAME = "mark";

    private final MarkService markService;

    public MarkResource(MarkService markService) {
        this.markService = markService;
    }

    /**
     * POST  /marks : Create a new mark.
     *
     * @param mark the mark to create
     * @return the ResponseEntity with status 201 (Created) and with body the new mark, or with status 400 (Bad Request) if the mark has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/marks")
    public ResponseEntity<Mark> createMark(@RequestBody Mark mark) throws URISyntaxException {
        log.debug("REST request to save Mark : {}", mark);
        if (mark.getId() != null) {
            log.error("A new mark cannot already have an ID");
        }
        Mark result = markService.save(mark);
        return ResponseEntity.created(new URI("/api/marks/" + result.getId())).header("MyResponseHeader", "MyValue").body(result);

//                ResponseEntity.created(new URI("/api/marks/" + result.getId()))
//            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
//            .body(result);
    }

    /**
     * PUT  /marks : Updates an existing mark.
     *
     * @param mark the mark to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated mark,
     * or with status 400 (Bad Request) if the mark is not valid,
     * or with status 500 (Internal Server Error) if the mark couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/marks")
    public ResponseEntity<Mark> updateMark(@RequestBody Mark mark) throws URISyntaxException {
        log.debug("REST request to update Mark : {}", mark);
        if (mark.getId() == null) {
            return createMark(mark);
        }
        Mark result = markService.save(mark);
        return new ResponseEntity<Mark>(result, HttpStatus.OK);
    }

    /**
     * GET  /marks : get all the marks.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of marks in body
     */
    @GetMapping("/marks")
    public List<Mark> getAllMarks() {
        log.debug("REST request to get all Marks");
        return markService.findAll();
        }

    /**
     * GET  /marks/:id : get the "id" mark.
     *
     * @param id the id of the mark to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the mark, or with status 404 (Not Found)
     */
    @GetMapping("/marks/{id}")
    public ResponseEntity<Mark> getMark(@PathVariable Long id) {
        log.debug("REST request to get Mark : {}", id);
        Mark mark = markService.findOne(id);
        if (mark == null) {
            log.error("Mark with id {} not found.", id);
        }
        return new ResponseEntity<Mark>(mark, HttpStatus.OK);
    }

    /**
     * DELETE  /marks/:id : delete the "id" mark.
     *
     * @param id the id of the mark to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/marks/{id}")
    public ResponseEntity<Void> deleteMark(@PathVariable Long id) {
        log.debug("REST request to delete Mark : {}", id);
        markService.delete(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
