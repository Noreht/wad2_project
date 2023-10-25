<template>
    <div class="map-container w-full rounded-3xl border-4 border-orange-800 relative">
        <div class='sidebar absolute w-1/3 flex flex-col overflow-hidden border border-r-2 rounded-l-3xl'>
                <div class='heading border-b border-black bg-blue-300 px-4 py-3 sm:px-6 flex align-middle rounded-tr-sm sticky'>
                    <h1 class="font-bold text-lg text-black">Our Events</h1>
                </div>
                <div id='listings' class='listings pb-4 flex-1 flex-col overflow-y-auto overflow-hidden overscroll-none  w-full h-full'>
                    <ul class="last:pb-50">
                        <li v-for="(event, index) in events" :key="index" @click="centerMap(event)" class="overflow-auto bg-white hover:bg-gray-200 px-2 py-2 shadow sm:rounded-md sm:px-6 my-2" :class="{ 'bg-amber-200': selectedEvent === event }">
                           
                            <h1 class="font-bold">{{ event.name }}, {{ event.date }} </h1>
                            <p class="italic text-sm"> Organiser: {{ event.organiser }} </p>

                        </li>
                    </ul>
                </div>
        </div>
    
        <div ref="map" class="map absolute left-1/3 w-2/3 overflow-hidden rounded-r-2xl"></div>
    </div>
</template>
  
<script>
    import 'mapbox-gl/dist/mapbox-gl.css';
    import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';
    import mapboxgl from "mapbox-gl";

    export default {
        data() {
        return {
            events: [
            { name: 'Composting Workshop', location: [103.8198, 1.3521], organiser: "Punggol Community Club", date: "12 Oct 2023"}, 
            { name: 'Roof Repair', location: [103.8914, 1.3868], organiser:"Hougang Club", date: "15 Oct 2023" }, 
            { name: 'Composting Bazaar', location: [103.8114, 1.3668], organiser:"Tekong Club", date: "16 Oct 2023" }, 
            { name: 'Family Volunteering Weekend', location: [103.7914, 1.3863], organiser:"Daddy's Club", date: "17 Oct 2023" }, 
            { name: 'IMH Outreach session', location: [103.8847, 1.3819], organiser:"Buangkok Club", date: "17 Oct 2023" }, 
            // Add more events as needed
            ],
        };
        },
        mounted() {
        mapboxgl.accessToken = 'pk.eyJ1IjoibWlzdGVyLWF1cmVvbGUiLCJhIjoiY2xvMmU3NnNyMDA4dTJqcnk0bmI2aTI2MiJ9.JRx9CrBaqCWzOrrrcdJLmA'; // Replace with your Mapbox access token
        this.map = new mapboxgl.Map({
            container: this.$refs.map,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [103.8198, 1.3521], // Centered at Singapore's latitude and longitude
            zoom: 12,
        });
    
        this.addMarkers();
        },
        methods: {
        addMarkers() {
            this.events.forEach((event) => {
            new mapboxgl.Marker()
                .setLngLat(event.location)
                .setPopup(new mapboxgl.Popup().setHTML(`
                        <div class="content-center w-30 h-30">
                            <h1 class='font-bold py-2'>${event.name}</h1>
                        
                            <a href="#" class="bg-amber-400 rounded-sm px-2 py-2" > Login to sign up! </a>
                        </div>`))
                .addTo(this.map);
            });
        },

        centerMap(event) {
            this.map.flyTo({
                center: event.location,
                essential: true,
                zoom: 14,
            });

            this.selectedEvent = event;
            },
        },
    };
    </script>
    
<style>
    .map-container {
        width: 100%;
        height: 400px; /* Set the desired height of the map */
    }
    .map {
        width: 66%;
        height: 100%;
    }
    .sidebar {
        width:33%;
        height:100%;
    }

</style>
  

<!-- <script setup>
  // Import the component and its CSS
  import { StoreLocator } from '@studiometa/vue-mapbox-gl';
  import '@studiometa/vue-mapbox-gl/index.css';

  // Import Mapbox required CSS stylesheets
  import 'mapbox-gl/dist/mapbox-gl.css';
  import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';

  const items = [{lat: 1.3612, lng: 103.8863, id: 1, organiser:"Punggol Club", date:"2023-12-10", event:"Roof Repair"}, 
  {lat: 1.3868, lng: 103.8914, id: 2, organiser:"Hougang Club", date:"2023-15-10", event:"Composting Workshop"} ]

  const token = "pk.eyJ1IjoibWlzdGVyLWF1cmVvbGUiLCJhIjoiY2xvMmU3NnNyMDA4dTJqcnk0bmI2aTI2MiJ9.JRx9CrBaqCWzOrrrcdJLmA"
  const mapStyle = {style:"mapbox://styles/mapbox/streets-v12"}

</script> -->



<!-- <template>
    <div id="mapContainer" ></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";


export default {
name: "LeafletMap",
data() {
    return {
    map: null,
    };
},
mounted() {
    this.map = L.map("mapContainer").setView([1.3521, 103.8198], 12);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    //use a mix of renderers
    var customPane = this.map.createPane("customPane");
    var canvasRenderer = L.canvas({ pane: "customPane" });
    customPane.style.zIndex = 5;
    L.marker([1.3612, 103.8863]).addTo(this.map);

    L.marker([1.3868, 103.8914]).addTo(this.map);
    L.marker([49.5, 19.5]).addTo(this.map);
},
onBeforeUnmount() {
    if (this.map) {
    this.map.remove();
    }
},
};
</script>
  
<style scoped>
    #mapContainer {
        height: 100%;
        width: 100%;
        z-index:5;
    }
</style> -->