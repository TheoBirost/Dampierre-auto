<script setup lang="ts">
import Contact from "@/components/contact.vue";
import { state } from '@/main'
import {RouterLink} from "vue-router";
import FooterType from "@/components/FooterType.vue";
state.message = "Faites réparer et entretenir votre véhicule par un garagiste expérimenté"
</script>
<template>
  <main>
    <div class="relative">
      <img class="w-full object-cover"
           src="https://placehold.co/1920x1000"
           alt="Garage automobile">
      <div class="absolute bottom-6 md:bottom-20 left-1/2 transform -translate-x-1/2 z-10
                text-center px-4 py-4 md:px-12 md:py-11 max-w-[95%] md:max-w-3xl">
        <h1 class="uppercase text-base sm:text-xl md:text-2xl lg:text-3xl font-bold
                 text-white drop-shadow-xl leading-relaxed
                 bg-black/50 backdrop-blur-sm px-3 py-2 sm:px-6 sm:py-4
                 border-t-4 border-[#a3e635] rounded">
          Dépannage et mécanique automobile à Dampierre
        </h1>
      </div>
    </div>
  </main>
  <section class="bg-[#363839] py-16 px-6">
    <div class="max-w-5xl mx-auto text-center">
      <p class="text-lg leading-relaxed text-zinc-100 font-medium tracking-wide">
        Le garage toutes marques
        <span class="font-bold text-white">Dampierre Autos</span>  est à votre service pour tous vos besoins
        <span class="text-[#a3e635]">d'entretien, de réparation et de dépannage</span>   N'hésitez pas à contacter votre garagiste !<br><br>
      </p>
    </div>
  </section>
  <section class="bg-white py-16">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
      <div class="space-y-6">
        <h2 class="text-3xl md:text-4xl font-bold text-[#a3e635]">
          Réparation de véhicules
        </h2>
        <p class="text-gray-600 leading-relaxed">
          Besoin d'entretenir ou de réparer votre véhicule ? Le garage Dampierre Autos est à votre service du lundi au samedi, de 08h30 à 17h30.
        </p>
        <p class="text-gray-600 leading-relaxed">
          Quelle que soit la panne ou le dysfonctionnement, notre service de mécanique toutes marques est à votre disposition. Nos garagistes interviennent sur tous types de véhicules et vous conseillent pour trouver les solutions les plus adaptées.
        </p>
        <p class="text-gray-600 leading-relaxed">
          Transparence garantie : chaque intervention est précédée d’un devis gratuit et personnalisé. Chez Dampierre Autos, pas de mauvaises surprises !
        </p>
        <RouterLink to="/Pieces">
          <button class="px-6 py-3 bg-[#a3e635] text-white rounded-xl shadow-md hover:bg-[#76b523] transition-colors duration-300">
            Découvrez aussi nos pièces détachées
          </button>
        </RouterLink>
      </div>
      <div>
        <img src="https://placehold.co/555x420" alt="Réparation de véhicule"
             class="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500">
      </div>
      <div>
        <img src="https://placehold.co/555x420" alt="Service de dépannage"
             class="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500">
      </div>
      <div class="space-y-6">
        <h2 class="text-3xl md:text-4xl font-bold text-[#a3e635]">
          Notre service de dépannage
        </h2>
        <p class="text-gray-600 leading-relaxed">
          Votre voiture ne démarre plus ? Une panne de carburant ? Un problème mécanique vous oblige à vous arrêter en urgence ?
        </p>
        <p class="text-gray-600 leading-relaxed">
          Pas d’inquiétude : Dampierre Autos intervient rapidement et efficacement pour vous dépanner, où que vous soyez dans les environs de Dampierre.
        </p>
      </div>
    </div>
  </section>
  <section class="bg-white py-20">
    <h1 class="font-bold uppercase text-center text-3xl md:text-4xl text-[#a3e635] tracking-wide mb-12">
      Nos Points forts
    </h1>
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
      <div class="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
        <div class="w-16 h-16 flex items-center justify-center bg-[#a3e635]/10 rounded-full mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 text-[#a3e635] lucide lucide-car-icon lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
        </div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-3">
          Intervention rapide
        </h2>
        <p class="text-gray-600 leading-relaxed">
          Que ce soit pour un dépannage d'urgence ou le changement d'une pièce sur votre voiture, Dampierre Autos vous garantit une intervention rapide et efficace. </p>
      </div>
      <div class="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
        <div class="w-16 h-16 flex items-center justify-center bg-[#a3e635]/10 rounded-full mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-[#a3e635]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M15 18h-5"/>
            <path d="M18 14h-8"/>
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/>
            <rect width="8" height="4" x="10" y="6" rx="1"/>
          </svg>
        </div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-3">
          Devis gratuit
        </h2>
        <p class="text-gray-600 leading-relaxed">
          Avant toute intervention mécanique ou dépannage, Dampierre Autos s'engage à vous adresser un devis gratuit et personnalisé, sans mauvaises surprises !</p>
      </div>
    </div>
  </section>
  <contact/>
  <FooterType/>
</template>
<style scoped>
</style>