import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import subwayStations from "../components/admin/stations/SubwayStations.vue"
import subwayLines from "../components/admin/lines/SubwayLines.vue"
import subwayEdges from "../components/admin/edges/SubwayEdges.vue"
import subwayMain from "../components/admin/main/SubwayMain.vue" 
const routes = [
  {
    path: "/",
    component: subwayMain
  },
  {
    path: "/stations",
    component: subwayStations
  },
  {
    path: "/lines",
    component: subwayLines
  },
  {
    path: "/edges",
    component: subwayEdges
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
