<script setup lang="ts">
import {RouterLink} from "vue-router";
import { state } from '@/main'

const text = "Besoin de réparer ou d'entretenir votre voiture ? Vous recherchez un véhicule d'occasion ?"

</script>

<template>
  <section class=" py-20 flex flex-col items-center justify-center text-center px-6">

    <!-- Icône -->
    <div class="w-16 h-16 flex items-center justify-center bg-[#a3e635]/10 rounded-full mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#a3e635]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path d="M13 2a9 9 0 0 1 9 9"/>
        <path d="M13 6a5 5 0 0 1 5 5"/>
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
      </svg>
    </div>

    <!-- Texte -->
    <h2 class="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-snug max-w-6xl mb-4">
      {{ state.message }}
    </h2>

    <!-- Numéro de téléphone -->
    <h1 class="text-[#a3e635] text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
      06 61 41 67 12
    </h1>

    <!-- Bouton -->
    <button class="px-6 py-3 bg-[#a3e635] text-white rounded-xl shadow-md hover:bg-[#76b523] transition-colors duration-300">
      <RouterLink to="/contact" >
        Contactez-nous
      </RouterLink>
    </button>
  </section>
</template>

<style scoped>

</style>