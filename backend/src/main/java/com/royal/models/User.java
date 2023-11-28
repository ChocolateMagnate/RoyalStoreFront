package com.royal.models;

import com.royal.models.products.ElectronicProduct;
import com.royal.models.products.enumerations.Connectivity;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.util.Pair;

import java.net.ConnectException;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Document(collection = "users")
public class User {
    private String username;
    private String password;
    private String email;
    private List<String> roles;
    private Cart cart;
}
