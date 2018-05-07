package com.jdriven.ng2boot.controller;

import com.jdriven.ng2boot.entity.AppUser;
import com.jdriven.ng2boot.service.api.AppUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

/**
 * REST controller for managing Images.
 */
@CrossOrigin
//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AppUserResource {

    private final Logger log = LoggerFactory.getLogger(AppUserResource.class);
    private final AppUserService appUserService;

    public AppUserResource(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @PostMapping("/appUsers")
    public ResponseEntity<AppUser> createUser(@RequestBody AppUser appUser) throws URISyntaxException {
        log.debug("REST request to save AppUser : {}", appUser);
        log.info(appUser.toString());
        if (appUser.getId() != null) {
            log.error("REST request -> ID != null");
        }
        AppUser result = appUserService.save(appUser);
        return ResponseEntity.created(new URI("/api/appUser/" + result.getId())).header("MyResponseHeader", "MyValue").body(result);
    }

    @PutMapping("/appUsers")
    public ResponseEntity<AppUser> updateUser(@RequestBody AppUser appUser) throws URISyntaxException {
        log.warn("REST request to update Images : {}", appUser);
        if (appUser.getId() == null) {
            return createUser(appUser);
        }

        AppUser result = appUserService.save(appUser);
        return new ResponseEntity<AppUser>(result, HttpStatus.OK);
    }

    @GetMapping("/appUsers")
    public List<AppUser> getAllUsers() {
        log.debug("REST request to get all Images");
        return appUserService.findAll();
    }

    @GetMapping("/appUsers/{id}")
    public ResponseEntity<AppUser> getUser(@PathVariable Long id) {
        log.debug("REST request to get Images : {}", id);
        AppUser appUsers = appUserService.findOne(id);
        if (appUsers == null) {
            log.error("User with id {} not found.", id);
        }
        return new ResponseEntity<AppUser>(appUsers, HttpStatus.OK);
    }

    @GetMapping("/appUser/{username}")
    public ResponseEntity<AppUser> getUserByName(@PathVariable String username) {
        log.debug("REST request to get Images : {}", username);
        AppUser appUsers = appUserService.findByName(username);
        if (appUsers == null) {
            log.error("User with name {} not found.", username);
        }
        return new ResponseEntity<AppUser>(appUsers, HttpStatus.OK);
    }
}

