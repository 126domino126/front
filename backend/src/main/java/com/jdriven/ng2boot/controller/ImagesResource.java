package com.jdriven.ng2boot.controller;

//import com.dominik_dujava.web.rest.util.HeaderUtil;
import com.jdriven.ng2boot.entity.Images;
import com.jdriven.ng2boot.service.api.ImagesService;
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
 * REST controller for managing Images.
 */
@RestController
@RequestMapping("/api")
public class ImagesResource {

    private final Logger log = LoggerFactory.getLogger(ImagesResource.class);

    private final ImagesService imagesService;

    public ImagesResource(ImagesService imagesService) {
        this.imagesService = imagesService;
    }

    /**
     * POST  /images : Create a new images.
     *
     * @param images the images to create
     * @return the ResponseEntity with status 201 (Created) and with body the new images, or with status 400 (Bad Request) if the images has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/images")
    public ResponseEntity<Images> createImages(@RequestBody Images images) throws URISyntaxException {
        log.debug("REST request to save Images : {}", images);
        if (images.getId() != null) {
            log.error("REST request -> ID != null");
        }
        Images result = imagesService.save(images);
        return ResponseEntity.created(new URI("/api/images/" + result.getId())).header("MyResponseHeader", "MyValue").body(result);

//                ResponseEntity.created(new URI("/api/images/" + result.getId()))
//            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
//            .body(result);
    }

    /**
     * PUT  /images : Updates an existing images.
     *
     * @param images the images to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated images,
     * or with status 400 (Bad Request) if the images is not valid,
     * or with status 500 (Internal Server Error) if the images couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/images")
    public ResponseEntity<Images> updateImages(@RequestBody Images images) throws URISyntaxException {
        log.debug("REST request to update Images : {}", images);
        if (images.getId() == null) {
            return createImages(images);
        }

        Images result = imagesService.save(images);
        return new ResponseEntity<Images>(result, HttpStatus.OK);
    }

    /**
     * GET  /images : get all the images.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of images in body
     */
    @GetMapping("/images")
    public List<Images> getAllImages() {
        log.debug("REST request to get all Images");
        return imagesService.findAll();
        }

    /**
     * GET  /images/:id : get the "id" images.
     *
     * @param id the id of the images to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the images, or with status 404 (Not Found)
     */
    @GetMapping("/images/{id}")
    public ResponseEntity<Images> getImages(@PathVariable Long id) {
        log.debug("REST request to get Images : {}", id);
        Images images = imagesService.findOne(id);
        if (images == null) {
            log.error("Image with id {} not found.", id);
        }
        return new ResponseEntity<Images>(images, HttpStatus.OK);
    }

    /**
     * DELETE  /images/:id : delete the "id" images.
     *
     * @param id the id of the images to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/images/{id}")
    public ResponseEntity<Void> deleteImages(@PathVariable Long id) {
        log.debug("REST request to delete Images : {}", id);
        imagesService.delete(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
