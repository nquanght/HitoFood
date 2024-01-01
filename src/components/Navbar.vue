<template>
  <nav class="navbar navbar-expand-lg bg-white">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="navBar in listNavBar">
          <router-link
              :to="navBar.path"
              class="nav-link fw-bold"
              :active="route.path === navBar.path"
              aria-current="page"
          >
              {{ navBar.title }}
          </router-link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script setup>
import { reactive } from 'vue';
import {useRoute} from "vue-router";

import Order from '@/pages/order/Order.vue'
import History from '@/pages/history/History.vue'
import Billing from '@/pages/billing/Billing.vue'
import Feedback from '@/pages/feedback/Feedback.vue'

const navbar = [
  {
    path: '/order',
    title: 'Order',
  },
  {
    path: '/history',
    title: 'History',
  },
  {
    path: '/billing',
    title: 'Billing',
  },
  {
    path: '/feedback',
    title: 'Feedback',
  }
]
const listNavBar = reactive(navbar)
const route = useRoute()
</script>

<style scoped>
.router-link-active {
  color: red;
}

/*.sticky-nav {*/
/*  position: sticky;*/
/*  top: 0;*/
/*  z-index: 100;*/
/*}*/
</style>
