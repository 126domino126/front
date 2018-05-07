package com.jdriven.ng2boot.service.impl;

import com.jdriven.ng2boot.entity.AppUser;
import com.jdriven.ng2boot.entity.Mark;
import com.jdriven.ng2boot.entity.MarkRepository;
import com.jdriven.ng2boot.service.api.MarkService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing Mark.
 */
@Service
@Transactional
public class MarkServiceImpl implements MarkService {

    private final Logger log = LoggerFactory.getLogger(MarkServiceImpl.class);

    private final MarkRepository markRepository;

    public MarkServiceImpl(MarkRepository markRepository) {
        this.markRepository = markRepository;
    }

    /**
     * Save a mark.
     *
     * @param mark the entity to save
     * @return the persisted entity
     */
    @Override
    public Mark save(Mark mark) {
        log.debug("Request to save Mark : {}", mark);

        return markRepository.save(mark);
    }

    /**
     * Get all the marks.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<Mark> findAll() {
        log.debug("Request to get all Marks");
        return markRepository.findAll();
    }

    /**
     * Get one mark by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Mark findOne(Long id) {
        log.debug("Request to get Mark : {}", id);
        return markRepository.findOne(id);
    }

    /**
     * Get one mark by user_id.
     *
     * @param user_id the id of the user_entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public List<Mark> findByUser(AppUser user_id) {
        log.debug("Request to get Mark : {}", user_id);
        return markRepository.findByUser(user_id);
    }

    /**
     * Delete the mark by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Mark : {}", id);
        markRepository.delete(id);
    }
}