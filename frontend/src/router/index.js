import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import HomepageView from "@/views/HomepageView.vue";
import ResourceGuidesView from "@/views/ResourceGuidesView.vue";
import CommunitiesView from "@/views/CommunitiesView.vue";
import EventsView from "@/views/EventsView.vue";
import ContactView from "@/views/ContactView.vue";
import BasicCompost from "@/views/BasicCompostView.vue";
import CommunityPage from "@/views/CommunityPageView.vue";
import CommunityPage2 from "@/views/CommunityPageView2.vue";
import CompostingBin from "@/views/CompostingBinView.vue";
import MarketPlace from "@/views/MarketPlaceView.vue";
import Select from "@/views/Select.vue"

import store from "@/store";
import { inject } from "vue";
import { getCurrentUser, isLoggedIn } from "../utils/firebase";

const routes = [

      {
        path: "/",
        redirect: "/index.html", // Redirect the root path to the /home route
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
        path: "/index.html",
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
        meta:{requiresAuth:true},
        
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
      },

      { 
        path: "/communitypage",
        name: "CommunityPage",
        component: CommunityPage,
      },{ 
        path: "/communitypage2",
        name: "CommunityPage2",
        component: CommunityPage2,
      },
      { 
        path: "/CompostingBin",
        name: "CompostingBin",
        component: CompostingBin,
        
      },
      {
        path: "/marketplace",
        name: "MarketPlace",
        component: MarketPlace
      },
      {
        path: "/select",
        name: "Select",
        component: Select
      }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });



    router.beforeEach( async (to, from, next) => {
    // const store = inject()
    // const loggedIn = store.state.user.loggedIn;
    const loggedIn = await isLoggedIn();
    
    console.log(loggedIn)
    if (to.meta.requiresAuth && !loggedIn) {
      // You should call the getter to check if the user is authenticated
      console.log(store.getters.user)
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
      } else {
        // Continue with the navigation
        next();
      }
  });
  

  export default router;