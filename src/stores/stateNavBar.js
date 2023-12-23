import { defineStore } from 'pinia'
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

export const useStateNavBar = defineStore('active', () => {
  // define
  // const route = useRoute()
  //
  // // state
  // const activeNavBar = ref(null)
  //
  // // actions
  // const onActiveNavbar = computed(() => activeNavBar.value = route)
})
