<script setup lang="ts">
import contact from '../components/contact.vue';
import {RouterLink} from "vue-router";
import { state } from '@/main'
import FooterType from "@/components/FooterType.vue";
state.message = "Besoin de réparer ou d'entretenir votre voiture ? Vous recherchez un véhicule d'occasion ?"
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
          Garage automobile et véhicules d'occasion à Dampierre
        </h1>
      </div>
    </div>
  </main>
  <section class="bg-[#363839] py-16 px-6">
    <div class="max-w-5xl mx-auto text-center">
      <p class="text-lg leading-relaxed text-zinc-100 font-medium tracking-wide">
        Le garage <span class="font-bold text-white">Dampierre Autos</span> vous accueille pour tous vos besoins de
        <span class="text-[#a3e635]">mécanique automobile</span> (dépannage, réparation, entretien) et vous propose une
        sélection de véhicules d'occasion ainsi que des pièces détachées.<br><br>
      </p>
    </div>
  </section>
  <section class="bg-white py-16">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">

      <div class="space-y-6">
        <h2 class="text-3xl md:text-4xl font-bold text-[#a3e635]">
          Notre Garage
        </h2>
        <p class="text-gray-600 leading-relaxed">
          Depuis plus de 30 ans, <span class="font-semibold text-gray-800">Dampierre Autos</span> est votre spécialiste de l'automobile à Dampierre, et le garage existe depuis 2016.
          <br><br>
          Mécanique, dépannage, réparation, entretien, vente de pièces détachées... Nous vous offrons tous les services dont vous avez besoin pour prendre soin de votre auto.
          <br><br>
          Notre garage toutes marques intervient sur tous types de véhicules. Nous proposons également la reprise et la vente de véhicules d'occasion.
        </p>
      </div>

      <div>
        <img src="https://placehold.co/555x420" alt="Garage Dampierre"
             class="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500">
      </div>


      <div>
        <img src="https://placehold.co/555x420" alt="Boutique en ligne"
             class="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500">
      </div>

      <div class="space-y-6">
        <h2 class="text-3xl md:text-4xl font-bold text-[#a3e635]">
          Notre boutique en ligne
        </h2>
        <p class="text-gray-600 leading-relaxed">
          Dampierre Autos, c'est aussi une boutique en ligne sur laquelle vous pouvez retrouver un large choix de produits.
        </p>
        <p class="text-gray-600 leading-relaxed">
          En tant que spécialistes des véhicules d'occasion, nous sélectionnons rigoureusement des voitures de qualité, contrôlées et révisées. Achetez en toute sérénité avec l'accompagnement de notre équipe.
        </p>
        <p class="text-gray-600 leading-relaxed">
          Pour les passionnés qui aiment réparer ou personnaliser eux-mêmes leur voiture, nous proposons également un stock important de pièces détachées : freinage, filtration, suspension, transmission, moteur, échappement, ampoules, climatisation, balais d'essuie-glace...
          <br>
          Notre stock évolue en permanence, passez nous voir au garage !
        </p>
        <button class="px-6 py-3 bg-[#a3e635] text-white rounded-xl shadow-md hover:bg-[#76b523] transition-colors duration-300">
          <RouterLink to="/voitures" >
            Découvrez nos véhicules d'occasion
          </RouterLink>

        </button>
      </div>
    </div>
  </section>
  <section class="bg-white py-20">
    <h1 class="font-bold uppercase text-center text-3xl md:text-4xl text-[#a3e635] tracking-wide mb-12">
      Nos atouts
    </h1>

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

      <div class="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
        <div class="w-16 h-16 flex items-center justify-center bg-[#a3e635]/10 rounded-full mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-[#a3e635]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/>
            <circle cx="12" cy="8" r="6"/>
          </svg>
        </div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-3">
          30 ans d'expérience
        </h2>
        <p class="text-gray-600 leading-relaxed">
          Avec 30 années d'expérience dans l'automobile, Dampierre Autos met tout son savoir-faire à votre disposition pour entretenir et réparer votre véhicule au quotidien.
        </p>
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
          Avant toute intervention mécanique, Dampierre Autos vous garantit un devis gratuit et personnalisé, pour des réparations en toute sérénité, sans mauvaises surprises.
        </p>
      </div>

    </div>
  </section>
<contact/>
  <FooterType/>
</template>
<style scoped>
</style>