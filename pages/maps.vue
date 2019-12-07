<template>
  <div class="map">{{ view_address_lists }}
    <GmapMap
      v-bind:center="center"
      v-bind:zoom="zoom"
      style="width: 500px; height: 500px"
      >
      <GmapMarker
        v-bind:key="index"

        v-for="(m, index) in view_address_lists"
          v-bind:position="{lat: m.lat , lng: m.lng}"
          v-bind:title="m.name"
          v-bind:clickable="true"
          v-bind:draggable="true"
          v-on:click="view_infowin(m.name, m.lat, m.lng)"
      /> 

      <GmapInfoWindow
          v-bind:options="infoOptions"
          v-bind:position="infoWindowPos"
          v-bind:opened="infoWinOpen"
          @closeclick="infoWinOpen=false"
        >
          <div class="infoWin" v-html="infoContent"></div>
      </GmapInfoWindow>

    </GmapMap>


</div>
  
  
</template>

<script>
  // import googleMapsClient from '@google/maps'
  import {gmapApi} from 'vue2-google-maps'
  export default {
    data: function() {
      return {

        // center: {lat: 35.71, lng: 139.72},
        center: {lat: 35.6553809, lng: 139.7571289},
        zoom: 13,
        infoWindowPos: null,
        infoWinOpen: false,
        infoContent: {
        imageurl: null,
        title: null,
        address: null
        },
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        }

        // markers: [
        // {position: {lat: 35.71, lng: 139.72}, title: 'marker_1'},
        // {position: {lat: 35.72, lng: 139.73}, title: 'marker_2'},
        // {position: {lat: 35.70, lng: 139.71}, title: 'marker_3'},
        // {position: {lat: 35.71, lng: 139.70}, title: 'marker_4'}
        // ]
      }

    },
    created: function() {
      this.$store.dispatch('view_maps/init')
    },
    mounted: function() {
      view_google_maps(this.$store.state.view_maps.all_data)
    },
    methods: {
      view_infowin(title, lat, lng) {
        this.center = {lat: lat , lng: lng};
        this.infoWindowPos = {lat: lat , lng: lng};
        this.infoWinOpen = true;
        this.infoContent = '<table>' +  
          '<tr><th>title</th><td>' + title + '</td></tr>' + 
          '<tr><th>画像</th><td>' + '<img src="./google.png" width="24" height="24" alt="home" />' + '</td></tr>' +
          '<tr><th>URL</th><td>' + '<a href="http://www.google.com/">Google</a>' + '</td></tr></table>';
      },

    },
    computed: {
      view_address_lists() {
        return this.$store.state.view_maps.all_data
      },
      google: gmapApi
    }
  }

  export const view_google_maps = (data) => {
    // alert(data);
  //   // var infowindow = new google.maps.InfoWindow();
  //   var hamamatsu_station = {lat: 35.6553809, lng: 139.7571289};
  //   var tokyo_station = {lat: 35.68123620000001, lng: 139.76712480000003};
  //   var center_point = { lat: (hamamatsu_station.lat + tokyo_station.lat)/2, lng: (hamamatsu_station.lng + tokyo_station.lng)/2 }
    
  //   var map = this.$store.googleMapsClient.Map(document.getElementById('map'), {
  //   // var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 13,
  //     center: center_point
  //   });
  //   var marker1 = this.$store.googleMapsClient.Marker({
  //     position: tokyo_station,
  //     map: map,
  //     title: "tokyo_station"
  //   });
  }

</script>


<style>
.infoWin{
width: 100%;
border-collapse: separate;
border-spacing: 0px;
border-top: 1px solid #ccc;
border-left: 1px solid #ccc;
}
.infoWin th{
width:25%;
padding:10px;
text-align: left;
vertical-align: top;
color: #444;
background-color: #cee7ff;
border-left: 3px double #999;
border-top: 1px solid #fff;
border-right: 1px solid #8fd2ed;
border-bottom: 1px solid #ccc;
}
.infoWin td{
width:75%;
padding:10px;
background-color: #fafafa;
border-right: 1px solid #ccc;
border-bottom: 1px solid #ccc;
}
</style>