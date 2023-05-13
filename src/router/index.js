import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/partido/:id/alineaciones",
    name: "alineaciones",
    component: () => import("../components/AlineacionesInfo.vue"),
  },
  {
    path: "/ronda/:id",
    name: "ronda",
    component: () => import("../components/PartidoResumen.vue"),
  },
  {
    path: "/partido/:id/estadisticas",
    name: "estadisticas",
    component: () => import("../components/EstadisticasInfo.vue"),
  },
  {
    path: "/partido/:id/tecnicos",
    name: "tecnicos",
    component: () => import("../components/TecnicosInfo.vue"),
  },
  {
    path: "/partido/:id/suplentes",
    name: "suplentes",
    component: () => import("../components/SuplentesInfo.vue"),
  },
  {
    path: "/grupo/:id",
    name: "grupo",
    component: () => import("../components/TablaInfo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
