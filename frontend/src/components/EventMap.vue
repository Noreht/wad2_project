<template>
    <div id="mapContainer"></div>
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
    customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
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
    }
</style>