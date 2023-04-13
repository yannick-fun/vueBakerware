<template>
  <div class="wrapper">
    <h1>List view page</h1>
  </div >
  <div class="wrapper">
    <table class="table"> 
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Product code</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>€ {{ product.price }},-</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.code }}</td>
          <td>
            <router-link :to="{ name: 'detail', params: { id: product.id } }">View</router-link> |  
            <router-link :to="{ name: 'edit', params: { id: product.id } }">Edit</router-link> |
            <router-link :to="{ name: 'delete', params: { id: product.id } }">Delete</router-link>
        </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Product from '../types/Product';
import "../assets/style.css";

export default defineComponent({
  data(): { products: Product[] }  {
    return {
      products: {} as Product[],
    };
  },

  mounted(): void {
    const url = 'https://127.0.0.1:8000/api/products';
    axios.get(url)
      .then(response => {
        this.products = response.data["hydra:member"];
      })
      .catch(error => {
        console.log(error);
      });
  },
});

</script>
