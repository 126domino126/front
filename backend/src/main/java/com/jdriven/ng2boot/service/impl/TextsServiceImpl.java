package com.jdriven.ng2boot.service.impl;

import com.jdriven.ng2boot.entity.Texts;
import com.jdriven.ng2boot.entity.TextsRepository;
import com.jdriven.ng2boot.service.api.TextsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing Texts.
 */
@Service
@Transactional
public class TextsServiceImpl implements TextsService {

    private final Logger log = LoggerFactory.getLogger(TextsServiceImpl.class);

    private final TextsRepository textsRepository;

    public TextsServiceImpl(TextsRepository textsRepository) {
        this.textsRepository = textsRepository;
    }

    /**
     * Save a texts.
     *
     * @param texts the entity to save
     * @return the persisted entity
     */
    @Override
    public Texts save(Texts texts) {
        log.debug("Request to save Texts : {}", texts);
        return textsRepository.save(texts);
    }

    /**
     * Get all the texts.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<Texts> findAll() {
        log.debug("Request to get all Texts");
        return textsRepository.findAll();
    }

    /**
     * Get one texts by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Texts findOne(Long id) {
        log.debug("Request to get Texts : {}", id);
        return textsRepository.findOne(id);
    }

    /**
     * Delete the texts by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Texts : {}", id);
        textsRepository.delete(id);
    }
}
