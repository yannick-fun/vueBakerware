<template>
  <div class="wrapper">
    <h1>Post view page</h1>
  </div>
  <div class="wrapper">
    <form @submit.prevent="submitForm">
      <label class="label">Name</label><br>
      <input type="text" v-model="product.name" class="input"/><br>
      <label class="label">Description</label><br>
      <input type="text" v-model="product.description" class="input"/><br>
      <label class="label">Price</label><br>
      <input type="text" v-model="product.price" class="input"/><br>
      <label class="label">Stock</label><br>
      <input type="number" v-model="product.stock" class="input"/><br>
      <label class="label">Product Code</label><br>
      <input type="text" v-model="product.code" class="input"/><br>
      <button type="submit" class="button">Save</button><br><br>
      <router-link class="button" :to="{ name: 'list' }">Back to list</router-link>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios'
import Product from '../types/Product';
import "../assets/style.css";

export default defineComponent({
  data() {
    return {
      product: {} as Product
    };
  },

  methods: {
    submitForm(): void {
      const url = 'https://127.0.0.1:8000/api/products';
      axios.post(url, {
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        stock: this.product.stock,
        code: this.product.code,
      })
      .then(response => {
        console.log(response);
        this.redirectToAboutPage();
      })
      .catch(error => {
        console.log(error)
      })
    },
    
    redirectToAboutPage(): void {
      this.$router.push('/')
    }
  }
});

</script>
