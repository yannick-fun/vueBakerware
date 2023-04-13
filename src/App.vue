<template>
  <nav class="nav">
    <router-link :to="{ name: 'list' }">Product List</router-link> |
    <router-link :to="{ name: 'create' }">Create Product</router-link>
  </nav>
  <router-view/>
</template>

