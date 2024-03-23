<template>
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

<script></script>
<style scoped></style>
