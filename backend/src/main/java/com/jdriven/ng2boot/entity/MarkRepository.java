package com.jdriven.ng2boot.entity;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Spring Data JPA repository for the Mark entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MarkRepository extends JpaRepository<Mark, Long> {

    @Query("SELECT m FROM Mark m where m.appUser = :user_id")
    List<Mark> findByUser(@Param("user_id") AppUser user_id);

    @Query("SELECT m FROM Mark m where m.qr = :qr")
    Mark findByQr(@Param("qr") String qr);
}
