import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateGame from "../views/CreateGame.vue";
import ReadyGame from "../views/ReadyGame.vue";
import PickACard from "../views/PickACard.vue";
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/newgame",
    component: CreateGame
  },
  {
    path: "/ready",
    component: ReadyGame
  },
  {
    path: "/pick",
    component: PickACard
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});
export default router;
