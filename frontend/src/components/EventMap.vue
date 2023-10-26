<template>
    <div class="map-container w-full rounded-3xl border-4 border-orange-800 relative">
        <div class='sidebar absolute w-1/3 flex flex-col overflow-hidden border border-r-2 rounded-l-3xl'>
                <div class='heading border-b border-black bg-blue-300 px-4 py-3 sm:px-6 flex align-middle rounded-tr-sm sticky'>
                    <h1 class="font-bold text-lg text-black">Events Near You: {{  this.currentEventsInArea }}</h1>
                    
                </div>
                <div id='listings' class='listings pb-4 flex-1 flex-col overflow-y-auto overflow-hidden overscroll-none  w-full h-full'>
                    <ul class="last:pb-50">
                        <template v-for="(event, index) in eventList">
                        <li v-if="event.isVisible== true" :key="index" @click="centerMap(event)" class="overflow-auto  bg-amber-200 px-2 py-2 shadow sm:rounded-md sm:px-6 my-2" >
                           
                            <h1 class="font-bold">{{ event.EventName }}, {{ event.EventDate }} </h1>
                            <p class="italic text-sm"> Organiser: {{ event.EventOrganiser }} </p>

                        </li>
                        <li v-if="event.isVisible== false" :key="index" @click="centerMap(event)" class="overflow-auto bg-white hover:bg-gray-200 px-2 py-2 shadow sm:rounded-md sm:px-6 my-2" >
                           
                           <h1 class="font-bold">{{ event.EventName }}, {{ event.EventDate }} </h1>
                           <p class="italic text-sm"> Organiser: {{ event.EventOrganiser }} </p>

                       </li>
                        </template>
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
    import { getAllEvents } from "@/utils/firebase";

    let loadLatitude = 1.3521;
    let loadLongitude = 103.8198;

    function getLocation() {
            let status = false;
            if (navigator.geolocation) {
                console.log("  Geolocation is supported by this browser.")
                status = true;
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                console.log( "Geolocation is not supported by this browser.");
                
            }
            }

    function showPosition(position) {
            loadLatitude = position.coords.latitude 
            loadLongitude = position.coords.longitude; 

            //console.log(loadLatitude);
            //console.log(loadLongitude);
            }

    getLocation()

    export default {

        async setup() {
            console.log("Setup Initiated for Event Map")
            const eventList = await getAllEvents();
            console.log(eventList[0].EventType)

            return {
                eventList
            };
            
        },

        data() {
        return {

            // events: eventList,
            // events: [
            // { name: 'Composting Workshop', location: [103.8198, 1.3521], organiser: "Punggol Community Club", date: "12 Oct 2023", isVisible: true}, 
            // { name: 'Roof Repair', location: [103.8914, 1.3868], organiser:"Hougang Club", date: "15 Oct 2023", isVisible: false}, 
            // { name: 'Composting Bazaar', location: [103.8114, 1.3668], organiser:"Tekong Club", date: "16 Oct 2023", isVisible: true }, 
            // { name: 'Family Volunteering Weekend', location: [103.7914, 1.3863], organiser:"Daddy's Club", date: "17 Oct 2023", isVisible: false }, 
            // { name: 'IMH Outreach session', location: [103.8847, 1.3819], organiser:"Buangkok Club", date: "17 Oct 2023", isVisible: false }, 
            // // Add more events as needed
            // ],
            currentEventsInArea: 2,
        };
        },
        mounted() {
        mapboxgl.accessToken = 'pk.eyJ1IjoibWlzdGVyLWF1cmVvbGUiLCJhIjoiY2xvMmU3NnNyMDA4dTJqcnk0bmI2aTI2MiJ9.JRx9CrBaqCWzOrrrcdJLmA'; // Replace with your Mapbox access token
       
        this.map = new mapboxgl.Map({
            container: this.$refs.map,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [loadLongitude, loadLatitude], // Centered at Singapore's latitude and longitude
            zoom: 12,
        });
    
        this.addMarkers();
        this.map.on('moveend', this.filterEventsInCurrentArea);
        },
        methods: {
        addMarkers() {
            //console.log("Add markers initiated, for the following events: " + this.eventList)
            this.eventList.forEach((event) => {
                let eventLocation = JSON.stringify(event.EventLocation);
                let lat = JSON.parse(eventLocation)["latitude"];
                let long = JSON.parse(eventLocation)["longitude"];
            //console.log("Location " + eventLocation);
            //console.log("Lat" + lat);
            new mapboxgl.Marker()
                .setLngLat([long, lat])
                .setPopup(new mapboxgl.Popup().setHTML(`
                        <div class="content-center w-30 h-30">
                            <h1 class='font-bold py-2'>${event.name}</h1>
                        
                            <a href="#" class="bg-amber-400 rounded-sm px-2 py-2" > Login to sign up! </a>
                        </div>`))
                .addTo(this.map);
            });
        },

        centerMap(event) {
            console.log("Centre Map function activated")
            let eventLocation = JSON.stringify(event.EventLocation)
            let lat = JSON.parse(eventLocation)["latitude"]
            let long = JSON.parse(eventLocation)["longitude"]
            console.log("Event coordinates: " + lat + " " + long)
            this.map.flyTo({

                center: [long, lat],
                essential: true,
                zoom: 16,
            });

            this.selectedEvent = event;
            },

        filterEventsInCurrentArea() {

            const bounds = this.map.getBounds();
            const filteredEvents = this.eventList.filter(event => {
                let eventLocation = JSON.stringify(event.EventLocation)
                let lat = JSON.parse(eventLocation)["latitude"]
                let long = JSON.parse(eventLocation)["longitude"]

                let location = [long, lat]
                //console.log("Location in bounds: " + location + bounds.contains(location))
                
                return bounds.contains(location);
            });
            //console.log("Filtered Events: " + JSON.stringify(filteredEvents))
            this.currentEventsInArea = filteredEvents.length;
            
            this.eventList.forEach(event => {
                let eventLocation = JSON.stringify(event.EventLocation)
                let lat = JSON.parse(eventLocation)["latitude"]
                let long = JSON.parse(eventLocation)["longitude"]

                let location = [long, lat]

                if (bounds.contains(location)) {
                    event.isVisible = true;
                   // console.log("Event: ", event.EventName, event.isVisible)
                } else {
                    event.isVisible = false;
                    //console.log("Event: ", event.EventName, event.isVisible)
                }
            });
            this.eventList.sort((a, b) => (b.isVisible ? 1 : 0) - (a.isVisible ? 1 : 0));
            // this.events.sort((a, b) => { a.isVisible ? -1 : 1 })
            
            //console.log("Sorted Events, " + JSON.stringify(this.eventList));
            return this.eventList;
           

        }
    },

};

    
</script>
    
<style>
    .map-container {
        width: 100%;
        height: 400px;
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