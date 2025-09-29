<script setup lang="ts">
</script>
<template>
  <section class="bg-[#363839] py-16 px-6">
    <div class="max-w-5xl mx-auto text-center">
      <h1 class="text-4xl leading-relaxed text-zinc-100 font-medium tracking-wide">
        Contactez votre garage automobile à Dampierre
      </h1>
    </div>
  </section>
  <section class="bg-white py-20 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div class="space-y-10">
        <div class="space-y-4">
          <p class="text-gray-600 leading-relaxed">
            Le garage <span class="font-bold text-[#a3e635]"> Dampierre Autos</span> est à votre disposition pour tous vos besoins d'entretien et de réparation automobile.
            Nous sommes aussi à votre service en cas de panne de votre véhicule, avec une intervention rapide et efficace garantie.
            <br><br>
            Dampierre Autos, c'est aussi une <span class="text-[#a3e635] font-semibold">boutique en ligne</span> avec un large choix de voitures d'occasion et de pièces détachées.
            <br><br>
            N'hésitez pas à nous contacter pour prendre rendez-vous à l'atelier ou pour tout autre renseignement.
          </p>
        </div>
        <div class="bg-gray-50 p-6 rounded-2xl shadow-md space-y-2">
          <h2 class="text-2xl font-bold text-[#a3e635] mb-3">Dampierre Autos</h2>
          <p class="text-gray-700 flex items-center gap-2">
            <!-- map-pin (Lucide / Feather style) -->
            <svg class="w-5 h-5 text-[#a3e635]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" role="img">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            25 rue de Vaucogne,
          </p>
          <p class="text-gray-700">10240 Dampierre</p>
          <p class="text-gray-700 font-semibold flex items-center">
            <svg class="text-[#a3e635] w-5 h-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" role="img">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.92.34 1.81.65 2.66a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.42-1.42a2 2 0 0 1 2.12-.45c.85.31 1.74.53 2.66.65A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <a href="tel:+33661416712" class="ml-2">06 61 41 67 12</a>
          </p>
          <p class="flex items-center">
            <svg class="text-[#a3e635] w-5 h-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" role="img">
              <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
              <polyline points="3 7 12 13 21 7"></polyline>
            </svg>
            <a class="text-[#a3e635] hover:text-[#76b523] font-semibold ml-2" href="mailto:birost.stephane@orange.fr">
              birost.stephane@orange.fr
            </a>
          </p>
        </div>
        <div class="bg-gray-50 p-6 rounded-2xl shadow-md">
          <h2 class="text-2xl font-bold text-[#a3e635] mb-4">Heures d'ouverture</h2>
          <div class="grid grid-cols-2 gap-y-2 text-gray-700">
            <p>Lundi - Samedi</p>
            <p class="font-medium">08:30 - 12:00</p>
            <p></p>
            <p class="font-medium">14:00 - 20:00</p>
            <p>Dimanche</p>
            <p class="font-medium text-red-500">Fermé</p>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 p-8 rounded-2xl shadow-md">
        <h2 class="text-2xl font-bold text-[#a3e635] mb-6 text-center">Contactez-nous</h2>
        <form action="" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-700">Nom</label>
            <input type="text" class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a3e635] focus:border-[#a3e635]"/>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Prénom</label>
            <input type="text" class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a3e635] focus:border-[#a3e635]"/>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a3e635] focus:border-[#a3e635]"/>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Type de demande</label>
            <select class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a3e635] focus:border-[#a3e635]">
              <option>Information</option>
              <option>Devis</option>
              <option>Rendez-Vous</option>
            </select>
          </div>
          <button type="submit" class="w-full px-6 py-3 bg-[#a3e635] text-white rounded-xl shadow-md hover:bg-[#76b523] transition-colors duration-300">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
<style scoped>
</style>
