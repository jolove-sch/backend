package com.backend.domain.model;

import com.backend.domain.repository.BandRepository;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
class BandTest {

    @Autowired
    TestEntityManager testEntityManager;

    @Autowired
    BandRepository bandRepository;
}