<template>
  <div>
    <h2>Shopping Cart</h2>
    <div v-for="(item, index) in cart" :key="index">
      <p>{{ item.product.name }} - Quantity: {{ item.quantity }}</p>
      <button @click="removeFromCart(index)">Remove</button>
      <button @click="decreaseQuantity(index)">-</button>
      <button @click="increaseQuantity(index)">+</button>
    </div>
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
};
</script>
