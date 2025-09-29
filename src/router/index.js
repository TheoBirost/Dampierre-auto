import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Pieces from "@/pages/Pieces.vue";
import Voitures from "@/pages/Voitures.vue";
import Depannage from "@/pages/Depannage.vue";
import Contact from "@/pages/Contact.vue";
import Panier from "@/pages/Panier.vue";

const routes = [
    { path: "/", name: "Accueil", component: Home },
    { path: "/pieces", name: "Pièces détachées auto", component: Pieces },
    { path: "/voitures", name: "Voitures d’occasion", component: Voitures },
    { path: "/depannage", name: "Dépannage & réparation", component: Depannage },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/Panier", name: "Panier", component: Panier },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            // si on utilise "back/forward" → restaure la position précédente
            return savedPosition;
        } else {
            // sinon revient tout en haut
            return { top: 0 };
        }
    },
});

export default router;
