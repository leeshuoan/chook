package esd.shop.shop;
import java.util.*;

import javax.persistence.*;





@Table
@Entity
public class Shop {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long shop_id ;
    String name ;
    String location ;
    String shop_url ;
    String tele_url ;
    String bot_id;
    Long telegram_bot_bot_id ;
    public Shop(){
        
    }
    public Shop(Long shop_id, String name, String location, String shop_url, String tele_url, String bot_id,
            Long telegram_bot_bot_id) {
        this.shop_id = shop_id;
        this.name = name;
        this.location = location;
        this.shop_url = shop_url;
        this.tele_url = tele_url;
        this.bot_id = bot_id;
        this.telegram_bot_bot_id = telegram_bot_bot_id;
    }
    public Long getShop_id() {
        return shop_id;
    }
    public void setShop_id(Long shop_id) {
        this.shop_id = shop_id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getShop_url() {
        return shop_url;
    }
    public void setShop_url(String shop_url) {
        this.shop_url = shop_url;
    }
    public String getTele_url() {
        return tele_url;
    }
    public void setTele_url(String tele_url) {
        this.tele_url = tele_url;
    }
    public String getBot_id() {
        return bot_id;
    }
    public void setBot_id(String bot_id) {
        this.bot_id = bot_id;
    }
    public Long getTelegram_bot_bot_id() {
        return telegram_bot_bot_id;
    }
    public void setTelegram_bot_bot_id(Long telegram_bot_bot_id) {
        this.telegram_bot_bot_id = telegram_bot_bot_id;
    }
    

    

    
}
