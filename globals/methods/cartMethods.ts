
/* add to cart method */
/* take list of products , addd to it */
/* remove from cart method */

import { ProductT } from "../../types";

const cartMethods = {
    addToCart: (products: ProductT[], product: ProductT) => {
        const productIndex = products.findIndex((p) => p.id === product.id);
        if (productIndex === -1) {
            products.push({ ...product, quantity: 1 });
        } else {
            products[productIndex].quantity++;
        }
        return products;
    },

    removeFromCart: (products: ProductT[], product: ProductT) => {
        const productIndex = products.findIndex((p) => p.id === product.id);
        if (productIndex !== -1) {
            products.splice(productIndex, 1);
        }
        return products;
    }
}




