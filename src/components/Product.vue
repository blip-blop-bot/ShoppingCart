<template>
  <div>
    <h3>{{ product.name }}</h3>
    <p>Price: {{ product.price }}</p>
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
    },
  },
};
</script>
