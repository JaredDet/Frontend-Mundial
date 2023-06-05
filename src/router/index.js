import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/partidos/:id/alineaciones",
    name: "alineaciones",
    component: () => import("@/views/VistaAlineaciones.vue"),
  },
  {
    path: "/partidos/:id",
    name: "partidos",
    component: () => import("@/views/VistaPartidosPrincipal.vue"),
  },

  {
    path: "/cronologia",
    name: "cronologia",
    component: () => import("@/components/cronologia/InfoCronologia.vue"),
  },
  {
    path: "/miniatura",
    name: "miniatura",
    component: () => import("@/components/miniaturas/FaseMiniatura.vue"),
  },
  {
    path: "/grupos",
    name: "grupos",
    component: () => import("@/views/VistaTablas.vue"),
  },
  {
    path: "/barra",
    name: "barra",
    component: () => import("@/components/tablas/TablaBarra.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
