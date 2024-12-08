package com.inter.interdisciplinar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inter.interdisciplinar.entity.User;

@Repository
public interface  UserRepository extends JpaRepository<User, Long> {

    User findFirstByEmail(String email);
}
