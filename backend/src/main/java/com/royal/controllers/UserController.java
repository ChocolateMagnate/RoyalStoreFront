package com.royal.controllers;

import com.royal.models.products.ElectronicProduct;
import com.royal.services.UserService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/get-cart/{id}")
    public ArrayList<ElectronicProduct> getAllCartItems(@PathVariable String userId, HttpServletResponse response) {
        try {
            return userService.getAllElementsInCart(userId, response);
        } catch (IOException e) {
            // This error means we couldn't have sent the response error message
            // correctly, so we can try to send an empty array list instead.
            return new ArrayList<>();
        }
    }

    @PutMapping("post-into-cart")
    public ResponseEntity<Void> putProductIntoCart(@RequestParam("userId") String userId,
                                                   @RequestParam("productId") String productId) {
        int code = userService.addProductToCart(userId, productId);
        return ResponseEntity.status(code).build();
    }

    @PostMapping("/increment-cart-counter")
    public ResponseEntity<Void> incrementCartCounter(@RequestParam("userId") String userId,
                                                     @RequestParam("productId") String productId) {
        int code = userService.incrementCartCounter(userId, productId);
        return ResponseEntity.status(code).build();
    }
}
