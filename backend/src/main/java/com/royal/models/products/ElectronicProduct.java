package com.royal.models.products;

import com.royal.models.products.enumerations.BuildMaterial;
import com.royal.models.products.enumerations.Processor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "base-electronic-products")
public class ElectronicProduct {
    @Id
    private String id;
    private float price;
    private int memory;
    private int storage;
    private int weight;
    private Processor processor;
    private BuildMaterial material;
    private byte[] photo;
    private String description;
}
