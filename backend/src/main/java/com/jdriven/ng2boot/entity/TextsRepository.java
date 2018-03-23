package com.jdriven.ng2boot.entity;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data JPA repository for the Texts entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TextsRepository extends JpaRepository<Texts, Long> {

}
