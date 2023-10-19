import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import HomepageView from "@/views/HomepageView.vue";
import ResourceGuidesView from "@/views/ResourceGuidesView.vue";
import DiscussionsView from "@/views/DiscussionsView.vue";
import EventsView from "@/views/EventsView.vue";
import ContactView from "@/views/ContactView.vue";


const routes = [

      {
        path: "/login",
        name: "Login",
        component: LoginView,
      },

      {
        path: "/registration",
        name: "Registration",
        component: RegistrationView,
      },

      { 
        path: "/home",
        name: "Homepage",
        component: HomepageView,
      },

      { 
        path: "/resourceguides",
        name: "Resource & Guides",
        component: ResourceGuidesView,
      },

      { 
        path: "/discussions",
        name: "Discussions",
        component: DiscussionsView,
      },


      { 
        path: "/events",
        name: "Events",
        component: EventsView,
      },

      { 
        path: "/contact",
        name: "Contact",
        component: ContactView,
      },

];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });
  
  export default router;