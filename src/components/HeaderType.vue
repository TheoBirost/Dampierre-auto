<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router"; // Import de RouterLink

// état du menu mobile
const isMenuOpen = ref(false);
</script>

<template>
  <header
      class="bg-[#363839] fixed top-0 left-0 w-full z-50 text-zinc-50 px-6 py-4 flex items-center justify-between"
  >
    <!-- Logo -->
    <div class="px-4 py-2 flex-shrink-0">
      <h2 class="text-3xl font-bold text-[#a3e635]">Dampierre Auto</h2>
    </div>

    <!-- Navigation desktop -->
    <nav class="hidden md:flex flex-1 justify-center space-x-8">
      <RouterLink to="/" class="relative text-base font-semibold tracking-wide uppercase group">
        Accueil
        <span class="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-[#a3e635] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
      </RouterLink>
      <RouterLink to="/pieces" class="relative text-base font-semibold tracking-wide uppercase group">
        Pièces détachées auto
        <span class="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-[#a3e635] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
      </RouterLink>
      <RouterLink to="/voitures" class="relative text-base font-semibold tracking-wide uppercase group">
        Voitures d’occasion
        <span class="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-[#a3e635] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
      </RouterLink>
      <RouterLink to="/depannage" class="relative text-base font-semibold tracking-wide uppercase group">
        Dépannage & réparation
        <span class="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-[#a3e635] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
      </RouterLink>

      <RouterLink to="/contact" class="relative text-base font-semibold tracking-wide uppercase group">
        Contact
        <span class="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-[#a3e635] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
      </RouterLink>
    </nav>

    <!-- Panier desktop -->
    <div class="hidden md:flex items-center ">
      <RouterLink to="/Panier" class="transition">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shopping-cart"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path
              d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
          />
        </svg>
      </RouterLink>
    </div>

    <!-- Bouton menu mobile -->
    <button
        id="menu-btn"
        class="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
        @click="isMenuOpen = !isMenuOpen"
    >
      <span
          class="block w-6 h-0.5 bg-[#a3e635] transition-transform duration-300"
          :class="{ 'rotate-45 translate-y-1.5': isMenuOpen }"
      ></span>
      <span
          class="block w-6 h-0.5 bg-[#a3e635] my-1 transition-opacity duration-300"
          :class="{ 'opacity-0': isMenuOpen }"
      ></span>
      <span
          class="block w-6 h-0.5 bg-[#a3e635] transition-transform duration-300"
          :class="{ '-rotate-45 -translate-y-1.5': isMenuOpen }"
      ></span>
    </button>

    <!-- Menu mobile -->
    <div
        v-show="isMenuOpen"
        id="mobile-menu"
        class="bg-[#363839] absolute top-full left-0 w-full  text-[#E5E2D6] flex flex-col space-y-4 py-6 px-6 md:hidden border-[#E5E2D6] border-b-2"
    >
      <RouterLink to="/" class="relative text-lg font-semibold uppercase group" @click="isMenuOpen = false">
        Accueil
        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#a3e635] transition-all duration-300 group-hover:w-20"></span>
      </RouterLink>
      <RouterLink to="/pieces" class="relative text-lg font-semibold uppercase group" @click="isMenuOpen = false">
        Pièces détachées auto
        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#a3e635] transition-all duration-300 group-hover:w-56"></span>
      </RouterLink>
      <RouterLink to="/voitures" class="relative text-lg font-semibold uppercase group" @click="isMenuOpen = false">
        Voitures d’occasion
        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#a3e635] transition-all duration-300 group-hover:w-52"></span>
      </RouterLink>
      <RouterLink to="/depannage" class="relative text-lg font-semibold uppercase group" @click="isMenuOpen = false">
        Dépannage & réparation
        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#a3e635] transition-all duration-300 group-hover:w-60"></span>
      </RouterLink>
      <RouterLink to="/contact" class="relative text-lg font-semibold uppercase group" @click="isMenuOpen = false">
        Contact
        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#a3e635] transition-all duration-300 group-hover:w-20"></span>
      </RouterLink>

      <div class="flex space-x-6 mt-4">
        <RouterLink to="/Panier" class="transition" @click="isMenuOpen = false">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path
                d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
            />
          </svg>
        </RouterLink>
      </div>
    </div>
  </header>
</template>
