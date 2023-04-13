<template>
  <div class="wrapper">
    <h1>Detail view page</h1>
  </div>
  <div class="wrapper">
    <p>ID: {{ product.id }}</p>
  </div>
  <div class="wrapper">
    <p>Name: {{ product.name }}</p>
  </div>
  <div class="wrapper">
    <p>Discription: {{ product.description }}</p>
  </div>
  <div class="wrapper">
    <p>Price: {{ product.price }}</p>
  </div>
  <div class="wrapper">
    <p>Stock Amount: {{ product.stock }}</p>
  </div>
  <div class="wrapper">
    <p>Product Code: {{ product.code }}</p>
  </div><br>
  <div class="wrapper">
    <router-link class="button" :to="{ name: 'list' }">Back to list</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Product from '../types/Product';
import "../assets/style.css";


export default defineComponent({
  data(): { product: Product } {
    return {
      product: {} as Product
    };
  },

  mounted(): void {
    const url = 'https://127.0.0.1:8000/api/products/';
    axios.get(url + this.$route.params.id)
      .then(response => {
        this.product = response.data as Product;
      })
      .catch(error => {
        console.log(error);
      });
  },
});

</script>