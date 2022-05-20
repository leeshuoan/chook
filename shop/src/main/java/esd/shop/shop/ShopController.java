package esd.shop.shop;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class ShopController {
    private final ShopService shopService;

    @Autowired
    public ShopController(ShopService shopService) {
        this.shopService = shopService;
    }


    @GetMapping("/allShops")
    public List<Shop> getShops() {
        return shopService.getShops();
    }

    @GetMapping("/allShops/{shop_id}")
    public Shop getShop(@PathVariable Long shop_id){
        Shop shop = shopService.getShop(shop_id);
        if(shop == null){
            new ShopNotFoundException(shop_id);
        }
        return shop;
    }


}
