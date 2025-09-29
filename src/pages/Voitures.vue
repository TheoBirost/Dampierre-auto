<script setup lang="ts">
import Contact from '@/components/contact.vue';
import Avantages from '@/components/Avantages.vue';
import { state } from '@/main'
import FooterType from "@/components/FooterType.vue";
state.message = "Besoin d'un conseil ? Vous recherchez une pièce en particulier ?"
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
          Nos véhicules d'occasion à Dampierre
        </h1>
      </div>
    </div>
  </main>
  <section class="bg-[#363839] py-16 px-6">
    <div class="max-w-5xl mx-auto text-center">
      <p class="text-lg leading-relaxed text-zinc-100 font-medium tracking-wide">
        <span class="font-bold text-white">Dampierre Autos</span> vous propose un grand choix de voitures d'occasion
        toutes marques. Tous nos véhicules sont rigoureusement
        <span class="text-[#a3e635]">contrôlés et révisés </span>  et bénéficient d'une garantie
        <span class="text-[#a3e635]"> 3 mois </span> (extension
        de garantie possible). Vous souhaitez aussi revendre votre véhicule ? Contactez-nous pour en savoir plus sur
        les possibilités de reprise !
        <br><br>
      </p>
    </div>
  </section>
  <Avantages/>
  <contact/>
  <FooterType/>

</template>

<style scoped>

</style>