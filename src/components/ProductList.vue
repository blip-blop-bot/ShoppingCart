<template>
  <div>
    <h2>Product List</h2>
    <div v-for="product in products" :key="product.id">
      <h3>{{ product.name }}</h3>
      <p>Price: ${{ product.price }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "Tissot", price: 500 },
        { id: 2, name: "Seiko", price: 1000 },
        { id: 3, name: "Rolex", price: 10000 },
      ],
    };
  },
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
    },
  },
};
</script>
<style scoped>
button {
  color: white;
  border-radius: 20px;
  background: blue;
  padding: 8px 16px;
  border: 0;
  cursor: pointer;
}
</style>
