<template>
  <div class="w-96 h-96 bg-slate-200">
    <h1 class="text-xl font-bold">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardVue',
  props: {
    title: {
      type: String,
      default: 'Test'
    }
  },
  setup () {
    

    return {}
  }
})
</script>