import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateGame from "../views/CreateGame.vue";
import ReadyGame from "../views/ReadyGame.vue";

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
  }
];

const router = new VueRouter({
  routes
});
export default router;
