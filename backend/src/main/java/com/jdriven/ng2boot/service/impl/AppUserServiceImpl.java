package com.jdriven.ng2boot.service.impl;


import com.jdriven.ng2boot.entity.AppUser;
import com.jdriven.ng2boot.entity.AppUserRepository;
import com.jdriven.ng2boot.service.api.AppUserService;
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
public class AppUserServiceImpl implements AppUserService {

    private final Logger log = LoggerFactory.getLogger(AppUserServiceImpl.class);

    private final AppUserRepository appUserRepository;

    public AppUserServiceImpl(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    @Override
    public AppUser save(AppUser user) {
        log.debug("Request to save User : {}", user);
        return appUserRepository.save(user);
    }

    @Override
    @Transactional(readOnly = true)
    public List<AppUser> findAll() {
        log.debug("Request to get all Events");
        return appUserRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public AppUser findOne(Long id) {
        log.debug("Request to get User : {}", id);
        return appUserRepository.findOne(id);
    }

    @Override
    @Transactional(readOnly = true)
    public AppUser findByName(String username) {
        log.debug("Request to get User : {}", username);
        List<AppUser> users = appUserRepository.findAll();
        for (AppUser user: users){
            if (user.getUsername().equals(username)){
                return user;
            }
        }
        log.warn("TAK ASI NULL");
        return null;
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Event : {}", id);
        appUserRepository.delete(id);
    }
}
