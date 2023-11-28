package com.royal.models.products;

import com.royal.models.products.enumerations.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.util.Pair;

import java.util.ArrayList;
import java.util.HashMap;

@Getter
@Setter
@Document(collection = "smartphones")
public class Smartphone {
    @Id
    private String id;
    private MobileBrand brand;
    private MobileOS os;
    private Float diagonal;
    private Pair<Integer, Integer> resolution;
    private Integer batteryCapacityMAH;
    private ArrayList<Connectivity> connectivities;

    public HashMap<String, Object> asHashMap() {
        HashMap<String, Object> descriptor = new HashMap<>(13);
        descriptor.put("battery-capacity", batteryCapacityMAH);
        descriptor.put("connectivities", connectivities);
        descriptor.put("resolution", resolution);
        descriptor.put("diagonal", diagonal);
        descriptor.put("brand", brand);
        descriptor.put("os", os);
        descriptor.put("id", id);
        return descriptor;
    }
}
