<script setup lang="ts">
import HeaderType from "@/components/HeaderType.vue";
</script>
<template>
  <HeaderType />
  <div class="flex flex-col min-h-screen">
    <main class="flex-1 pt-20">
      <router-view />
    </main>
  </div>
</template>
