import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import HomepageView from "@/views/HomepageView.vue";
import ResourceGuidesView from "@/views/ResourceGuidesView.vue";
import CommunitiesView from "@/views/CommunitiesView.vue";
import EventsView from "@/views/EventsView.vue";
import ContactView from "@/views/ContactView.vue";
import BasicCompost from "@/views/BasicCompostView.vue";


const routes = [

      {
        path: "/",
        redirect: "/home", // Redirect the root path to the /home route
      },

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
        path: "/communities",
        name: "Communities",
        component: CommunitiesView,
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
      { 
        path: "/basiccompost",
        name: "BasicCompost",
        component: BasicCompost,
      }

];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });


  export default router;