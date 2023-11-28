package com.royal.repositories;

import com.royal.models.products.ElectronicProduct;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ElectronicProductRepository extends MongoRepository<ElectronicProduct, String> {
}
