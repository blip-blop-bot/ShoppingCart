<template>
  <div class="navBar">
    <nav>
      <router-link class="login" :to="{ name: 'login' }">Login</router-link>
      <router-link class="cart" :to="{ name: 'cart' }">Cart</router-link>
    </nav>
  </div>

  <router-view> </router-view>
  <RouterView class="hidden-router-view">
    <div id="app">
      <div class="productList">
        <ProductList @add-to-cart="addToCart" />
        <ShoppingCart
          :cart="cart"
          @remove-from-cart="removeFromCart"
          @decrease-quantity="decreaseQuantity"
          @increase-quantity="increaseQuantity"
        />
      </div>
    </div>
  </RouterView>
</template>
<script>
import ShoppingCart from "./components/ShoppingCart.vue";
import ProductList from "./components/ProductList.vue";

export default {
  components: {
    ProductList,
    ShoppingCart,
  },
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      const existingItem = this.cart.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ product: product, quantity: 1 });
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      }
    },
    increaseQuantity(index) {
      this.cart[index].quantity++;
    },
  },
};
</script>

<style scoped>
.productList {
  justify-content: center;
  display: flex;
  display: none;
}
a {
  margin: 0 20px;
  text-decoration: none;
}
.navBar {
  margin: 20px;
  display: flex;
  justify-content: center;
}
.routerView {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
</style>
