"use strict";
class ProductUtil{
    static getProductDetails(){
        let cartData = requireLib("data/cart").productsInCart;

        //let cartData = cartData.productsInCart;
        let data = {};
        data.productsInCart = cartData;
        data.subtotal = 0;
        data.itemsNo = cartData.length;
        for(let i = 0; i < cartData.length; i++){
            data.subtotal = data.subtotal + cartData[i].p_price;
        }

        let promotion = {};
        if(data.productsInCart.length === 3 ){
            promotion.code = "JF5";
            promotion.value = 5;
        }else if(data.productsInCart.length > 3 && data.productsInCart.length < 11){
            promotion.code = "JF10";
            promotion.value = 10;
        }else if(data.productsInCart.length > 10){
            promotion.code = "JF25";
            promotion.value = 25;
        }

        data.promotion = promotion;

        data.discount = (data.subtotal * promotion.value) / 100;
        data.totalValue = data.subtotal - data.discount;
        data.c_currency = '$';
        return data;
    }
}
module.exports = ProductUtil;