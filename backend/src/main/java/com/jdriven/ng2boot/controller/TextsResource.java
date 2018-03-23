package com.jdriven.ng2boot.controller;

import com.jdriven.ng2boot.entity.Texts;
import com.jdriven.ng2boot.service.api.TextsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Texts.
 */
@RestController
@RequestMapping("/api")
public class TextsResource {

    private final Logger log = LoggerFactory.getLogger(TextsResource.class);

    private static final String ENTITY_NAME = "texts";

    private final TextsService textsService;

    public TextsResource(TextsService textsService) {
        this.textsService = textsService;
    }

    /**
     * POST  /texts : Create a new texts.
     *
     * @param texts the texts to create
     * @return the ResponseEntity with status 201 (Created) and with body the new texts, or with status 400 (Bad Request) if the texts has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/texts")
    public ResponseEntity<Texts> createTexts(@RequestBody Texts texts) throws URISyntaxException {
        log.debug("REST request to save Texts : {}", texts);
        if (texts.getId() != null) {
            log.debug("A new texts cannot already have an ID", ENTITY_NAME);
        }
        Texts result = textsService.save(texts);
        return ResponseEntity.created(new URI("/api/texts/" + result.getId())).header("MyResponseHeader", "MyValue").body(result);

//                ResponseEntity.created(new URI("/api/texts/" + result.getId()))
//            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
//            .body(result);
    }

    /**
     * PUT  /texts : Updates an existing texts.
     *
     * @param texts the texts to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated texts,
     * or with status 400 (Bad Request) if the texts is not valid,
     * or with status 500 (Internal Server Error) if the texts couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/texts")
    public ResponseEntity<Texts> updateTexts(@RequestBody Texts texts) throws URISyntaxException {
        log.debug("REST request to update Texts : {}", texts);
        if (texts.getId() == null) {
            return createTexts(texts);
        }
        Texts result = textsService.save(texts);
        return new ResponseEntity<Texts>(result, HttpStatus.OK);
    }

    /**
     * GET  /texts : get all the texts.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of texts in body
     */
    @GetMapping("/texts")
    public List<Texts> getAllTexts() {
        log.debug("REST request to get all Texts");
        return textsService.findAll();
        }

    /**
     * GET  /texts/:id : get the "id" texts.
     *
     * @param id the id of the texts to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the texts, or with status 404 (Not Found)
     */
    @GetMapping("/texts/{id}")
    public ResponseEntity<Texts> getTexts(@PathVariable Long id) {
        log.debug("REST request to get Texts : {}", id);
        Texts texts = textsService.findOne(id);
        if (texts == null) {
            log.error("User with id {} not found.", id);
        }
        return new ResponseEntity<Texts>(texts, HttpStatus.OK);
    }

    /**
     * DELETE  /texts/:id : delete the "id" texts.
     *
     * @param id the id of the texts to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/texts/{id}")
    public ResponseEntity<Void> deleteTexts(@PathVariable Long id) {
        log.debug("REST request to delete Texts : {}", id);
        textsService.delete(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
