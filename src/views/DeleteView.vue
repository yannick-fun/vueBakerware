<template>
  <div class="wrapper">
    <h1>Delete view page</h1>
  </div>
  <div class="wrapper">
    <h2>Are you sure want to delete this item?</h2>
  </div>
  <div class="wrapper">
    <button class="button" @click="deleteItem">Delete item</button>
  </div><br>
  <div class="wrapper">
    <router-link class="button" :to="{ name: 'list' }">Back to list</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import "../assets/style.css";

export default defineComponent({
  methods: {
    deleteItem(): void {
      const url = 'https://127.0.0.1:8000/api/products/';
      axios.delete( url + this.$route.params.id) 
      .then(response => {
        this.redirectToAboutPage();
      })
      .catch(error => {
        console.log(error);
      });
    },
    redirectToAboutPage(): void {
      this.$router.push('/')
    }
  }
});

</script>
