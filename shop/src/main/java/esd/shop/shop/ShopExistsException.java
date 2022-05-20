package esd.shop.shop;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST) // 404 Error
public class ShopExistsException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public ShopExistsException (String name) {
        super("There is not such shop, Shop name: " + name) ;
    }
}
