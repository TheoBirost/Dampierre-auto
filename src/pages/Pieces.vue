<script setup lang="ts">
import { ref } from "vue"
import Contact from "@/components/contact.vue"
import Avantages from "@/components/Avantages.vue"
import { state } from "@/main"
import FooterType from "@/components/FooterType.vue"

state.message = "Besoin d'un conseil ? Vous recherchez une pièce en particulier ?"

interface Item {
  id: number
  name: string
  price: number
  qty: number
  image: string
}

const products = ref<Item[]>([
  { id: 1, name: "Filtre à huile", price: 15.9, qty: 1, image: "https://placehold.co/300x200" },
  { id: 2, name: "Plaquettes de frein", price: 49.0, qty: 1, image: "https://placehold.co/300x200" },
  { id: 3, name: "Batterie 12V", price: 89.5, qty: 1, image: "https://placehold.co/300x200" },
  { id: 4, name: "Ampoules H7", price: 12.0, qty: 1, image: "https://placehold.co/300x200" },
])

function addToCart(product: Item) {
  // ici tu pourrais connecter à un store global (Pinia/Vuex) ou localStorage
  const cart = JSON.parse(localStorage.getItem("cart") || "[]")
  const existing = cart.find((p: Item) => p.id === product.id)
  if (existing) {
    existing.qty++
  } else {
    cart.push({ ...product })
  }
  localStorage.setItem("cart", JSON.stringify(cart))
  alert(`${product.name} ajouté au panier`)
}
</script>

<template>
  <main>
    <!-- Hero -->
    <div class="relative">
      <img class="w-full object-cover" src="https://placehold.co/1920x1000" alt="Garage automobile" />
      <div
          class="absolute bottom-6 md:bottom-20 left-1/2 transform -translate-x-1/2 z-10
                text-center px-4 py-4 md:px-12 md:py-11 max-w-[95%] md:max-w-3xl">
        <h1
            class="uppercase text-base sm:text-xl md:text-2xl lg:text-3xl font-bold
                 text-white drop-shadow-xl leading-relaxed
                 bg-black/50 backdrop-blur-sm px-3 py-2 sm:px-6 sm:py-4
                 border-t-4 border-[#a3e635] rounded">
          Vente de pièces détachées à Dampierre
        </h1>
      </div>
    </div>
  </main>

  <!-- Intro -->
  <section class="bg-[#363839] py-16 px-6">
    <div class="max-w-5xl mx-auto text-center">
      <p class="text-lg leading-relaxed text-zinc-100 font-medium tracking-wide">
        <span class="font-bold text-white">Dampierre Autos</span> vous propose un grand choix de pièces détachées pour
        <span class="text-[#a3e635]">entretenir ou réparer</span> votre véhicule quelle que soit sa marque. <br />
        N'hésitez pas à nous contacter pour toute demande !
      </p>
    </div>
  </section>

  <!-- Catalogue -->
  <section class="bg-gray-50 py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold text-center mb-10">Nos pièces détachées</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
            v-for="product in products"
            :key="product.id"
            class="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
          <img :src="product.image" alt="" class="w-full h-40 object-cover" />
          <div class="p-4 flex flex-col flex-grow">
            <h3 class="font-semibold text-lg">{{ product.name }}</h3>
            <p class="text-[#a3e635] font-bold text-xl mt-2">{{ product.price.toFixed(2) }} €</p>
            <button
                @click="addToCart(product)"
                class="mt-auto bg-[#a3e635] text-black font-medium rounded-xl px-4 py-2 hover:bg-lime-500 transition">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Avantages />
  <Contact />
  <FooterType />
</template>
