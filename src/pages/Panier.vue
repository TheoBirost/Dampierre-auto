```vue
<script setup lang="ts">
import { ref, onMounted } from "vue"
import Avantages from "@/components/Avantages.vue"
import FooterType from "@/components/FooterType.vue"

interface Item {
  id: number
  name: string
  price: number
  qty: number
  image: string
}

const cart = ref<Item[]>([])
const total = ref(0)

onMounted(() => {
  const saved = JSON.parse(localStorage.getItem("cart") || "[]")
  cart.value = saved
  updateTotal()
})

function removeFromCart(id: number) {
  const item = cart.value.find((p) => p.id === id)
  if (!item) return

  const confirmDelete = window.confirm(`Voulez-vous vraiment retirer "${item.name}" du panier ?`)
  if (!confirmDelete) return

  cart.value = cart.value.filter((p) => p.id !== id)
  localStorage.setItem("cart", JSON.stringify(cart.value))
  updateTotal()
}

function updateTotal() {
  total.value = cart.value.reduce((acc, item) => acc + item.price * item.qty, 0)
}
</script>

<template>
  <section class="bg-white py-16 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold text-center mb-6">Votre panier</h2>

      <div v-if="cart.length === 0" class="text-center text-gray-500">Votre panier est vide.</div>

      <div v-else class="overflow-x-auto">
        <table class="min-w-full bg-white shadow rounded-2xl overflow-hidden">
          <thead class="bg-gray-100">
          <tr>
            <th class="py-3 px-4 text-left">Article</th>
            <th class="py-3 px-4 text-left">Quantité</th>
            <th class="py-3 px-4 text-left">Prix</th>
            <th class="py-3 px-4"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in cart" :key="item.id" class="border-b">
            <td class="py-3 px-4 flex items-center gap-3">
              <img :src="item.image" alt="" class="w-12 h-12 object-cover rounded-lg" />
              {{ item.name }}
            </td>
            <td class="py-3 px-4">{{ item.qty }}</td>
            <td class="py-3 px-4 font-semibold">{{ (item.price * item.qty).toFixed(2) }} €</td>
            <td class="py-3 px-4">
              <button @click="removeFromCart(item.id)" class="text-red-500 hover:underline">Retirer</button>
            </td>
          </tr>
          </tbody>
        </table>

        <div class="flex justify-between items-center mt-6">
          <p class="text-lg font-bold">Sous-total : {{ total.toFixed(2) }} €</p>
          <button
              class="bg-[#a3e635] text-black font-semibold px-6 py-3 rounded-xl hover:bg-lime-500 transition">
            Passer la commande
          </button>
        </div>
      </div>
    </div>
  </section>

  <Avantages />
  <FooterType />
</template>
```
