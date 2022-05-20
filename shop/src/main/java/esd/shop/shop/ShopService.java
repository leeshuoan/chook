package esd.shop.shop;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ShopService {
    private ShopRepository shopRepository;
    @Autowired
    public ShopService(ShopRepository shopRepository) {
        this.shopRepository = shopRepository;
    }
    public List<Shop> getShops() {
        return shopRepository.findAll();
    }
    public Shop getShop(Long id){
        return shopRepository.findById(id).orElse(null);
    }
}
