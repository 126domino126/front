package com.jdriven.ng2boot.service.api;

import com.jdriven.ng2boot.entity.AppUser;
import java.util.List;

/**
 * Service Interface for managing Texts.
 */
public interface AppUserService {

    AppUser save(AppUser user);

    List<AppUser> findAll();

    AppUser findOne(Long id);

    AppUser findByName(String username);

    void delete(Long id);
}

