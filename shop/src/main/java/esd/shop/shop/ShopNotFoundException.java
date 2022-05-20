package esd.shop.shop;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND) // 404 Error
public class ShopNotFoundException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public ShopNotFoundException(Long id) {
        super("Shop " + id + " not found ") ;
    }
}
