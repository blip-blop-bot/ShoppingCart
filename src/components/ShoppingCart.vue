<template>
  <div class="shoppingCart">
    <h2>Shopping Cart</h2>
    <div v-for="(item, index) in cart" :key="index">
      <p>{{ item.product.name }} - Quantity: {{ item.quantity }}</p>
      <button class="remove" @click="removeFromCart(index)">Remove</button>
      <button class="minus" @click="decreaseQuantity(index)">-</button>
      <button class="add" @click="increaseQuantity(index)">+</button>
    </div>
    <h2>Total Price: {{ totalPrice }}</h2>
    <h2>Total Quantity: {{ totalQuantity }}</h2>
  </div>
</template>

<script>
export default {
  props: ["cart"],
  methods: {
    removeFromCart(index) {
      this.$emit("remove-from-cart", index);
    },
    decreaseQuantity(index) {
      this.$emit("decrease-quantity", index);
    },
    increaseQuantity(index) {
      this.$emit("increase-quantity", index);
    },
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, product) => total + product.price, 0);
    },
  },
  computed: {
    totalQuantity() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
  },
};
</script>
<style scoped>
button {
  margin-right: 8px;
  color: white;
  border-radius: 20px;
  background: blue;
  padding: 8px 16px;
  border: 0;
  cursor: pointer;
}
.remove {
  background: red;
}
.minus {
  background: orange;
}
.add {
  background: green;
}
</style>
