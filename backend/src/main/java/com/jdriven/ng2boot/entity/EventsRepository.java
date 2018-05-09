package com.jdriven.ng2boot.entity;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Spring Data JPA repository for the Texts entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EventsRepository extends JpaRepository<Events, Long> {


    @Query("SELECT e FROM Mark m INNER JOIN m.events e WHERE m.appUser = :user_id")
    List<Events> findByUser(@Param("user_id") AppUser user_id);

}
