<template>
    <div class="wrapper">
    <h1>Edit view page</h1>
  </div>
  <div class="wrapper">
    <h3>Edit Product: {{ productId }}</h3>
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
  <div class="wrapper">
    <h1>{{ activeChangesMessage }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Product from '../types/Product';
import "../assets/style.css";

export default defineComponent({
  data() {
    return {
      product: {} as Product,
      activeChangesMessage: '',
      oldPruductName: '',
      isMounted: false,
      url: 'https://127.0.0.1:8000/api/products/',
    };
  },

  computed: {
    productId: function (): string {
      return this.oldPruductName + ' ID: ' + this.product.id
    }
  },

  watch: {
    product: {
      handler(newValue: object, oldValue: object): void {
        if (this.isMounted) {
          this.activeChangesMessage = 'Please make sure to save your changes!';
        }
      },
      deep: true,
    },
  },

  mounted(): void {
    axios.get(this.url + this.$route.params.id)
      .then(response => {
        this.product = response.data as Product;
        this.oldPruductName = response.data.name as string
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.isMounted = true;
      });
  },

  methods: {
    submitForm(): void {
      axios.put(this.url + this.$route.params.id, {
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        stock: this.product.stock,
        code: this.product.code,
      })
      .then(response => {
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
