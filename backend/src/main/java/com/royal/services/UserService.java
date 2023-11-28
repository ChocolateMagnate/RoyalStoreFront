package com.royal.services;

import com.royal.models.CartPair;
import com.royal.models.User;
import com.royal.models.products.ElectronicProduct;
import com.royal.repositories.LaptopRepository;
import com.royal.repositories.SmartphoneRepository;
import com.royal.repositories.UserRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import javax.management.AttributeNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public ArrayList<ElectronicProduct> getAllElementsInCart(String userId, HttpServletResponse response) throws IOException {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND,
                    "The requested user by ID " + userId + " does not exist.");
            return new ArrayList<>();
        }

        try {
            User userInDatabase = user.get();
            return userInDatabase.getCart().getAllElectronicProducts();
        } catch (AttributeNotFoundException e) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND, e.getMessage());
            return new ArrayList<>();
        }
    }

    public int addProductToCart(String userId, String productId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) return HttpStatus.NOT_FOUND.value();
        User userFromDatabase = user.get();
        if (userFromDatabase.getCart().contains(productId)) return HttpStatus.FOUND.value();
        userFromDatabase.getCart().add(new CartPair(productId, 0));
        userRepository.save(userFromDatabase);
        return HttpStatus.OK.value();
    }

    public int incrementCartCounter(String userId, String productId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) return HttpStatus.NOT_FOUND.value();
        User userFromDatabase = user.get();
        if (!userFromDatabase.getCart().contains(productId)) return HttpStatus.NOT_FOUND.value();
        try {
            int index = userFromDatabase.getCart().whereProductIdEquals(productId);
            CartPair updatedCartPair = userFromDatabase.getCart().get(index);
            updatedCartPair.setCount(updatedCartPair.getCount() + 1);
            userFromDatabase.getCart().set(index, updatedCartPair);
            userRepository.save(userFromDatabase);
            return HttpStatus.OK.value();
        } catch (AttributeNotFoundException e) {
            return HttpStatus.NOT_FOUND.value();
        }
    }
}
