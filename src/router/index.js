import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateGame from "../views/CreateGame.vue";
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/newgame",
    component: CreateGame
  }
];

const router = new VueRouter({
  routes
});
export default router;
