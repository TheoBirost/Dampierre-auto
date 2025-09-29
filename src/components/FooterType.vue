<script setup lang="ts">

</script>

<template>
  <section class="bg-white py-20 px-6">
    <h1 class="font-bold uppercase text-center text-3xl md:text-4xl text-[#a3e635] tracking-wide mb-12">
      Dampierre Autos
    </h1>

    <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

      <!-- Adresse -->
      <div class="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center space-y-3">
        <div class="w-16 h-16 flex items-center justify-center bg-[#a3e635]/10 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#a3e635]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M12 17v5"/>
            <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>
          </svg>
        </div>
        <p class="text-gray-800">25 rue de Vaucogne</p>
        <p class="text-gray-800">10240 Dampierre</p>
      </div>

      <!-- Contact -->
      <div class="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center space-y-3">
        <div class="w-16 h-16 flex items-center justify-center bg-[#a3e635]/10 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#a3e635]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M15 13a3 3 0 1 0-6 0"/>
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>
            <circle cx="12" cy="8" r="2"/>
          </svg>
        </div>
        <p class="text-gray-800 font-semibold">06 61 41 67 12</p>
        <a class="text-[#a3e635] hover:text-[#76b523] font-semibold" href="mailto:birost.stephane@orange.fr">birost.stephane@orange.fr</a>
      </div>

      <!-- Horaires -->
      <div class="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center space-y-3">
        <div class="w-16 h-16 flex items-center justify-center bg-[#a3e635]/10 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#a3e635]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M12 6v6l4 2"/>
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </div>
        <p class="text-gray-800">Lundi à samedi</p>
        <p class="text-gray-800">8:30 – 17:30</p>
      </div>

    </div>
  </section>

  <section class="bg-[#363839] py-6 px-6">
    <p class="text-center text-white text-sm sm:text-base">
      © 2025 | <span class="text-[#a3e635]  font-medium">Dampierre Autos</span> | Tous droits réservés |
     Mentions légales
    </p>
  </section>

</template>

<style scoped>

</style>