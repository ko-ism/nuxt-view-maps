<template>
  <!-- <div>
    {{ view_address_lists }}
    <table>
      <tr>
        <th>name</th>
        <th>lat(緯度)</th>
        <th>lng(経度)</th>
      </tr>
      <tr v-for="address in view_address_lists" :key="address.id">
        <td>{{address.name}}</td>
        <td>{{address.lat}}</td>
        <td> {{address.lng}}</td>
      </tr>
    </table>
  </div> -->
  <div id="map">{{ view_address_lists }}</div>
  
</template>

<script>
  // import googleMapsClient from '@google/maps'
  export default {
    data: function() {
      return {
        name: '',
        lat: 0,
        lng: 0
      }

    },
    created: function() {
      this.$store.dispatch('view_maps/init')
    },
    mounted: function() {
      view_google_maps(this.$store.state.view_maps.all_data)
    },
    methods: {
    },
    computed: {
      view_address_lists() {
        return this.$store.state.view_maps.all_data
      }
    }
  }

  export const view_google_maps = (data) => {
    alert(data);
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
table {
  width: 70%;
  border-collapse:separate;
  border-spacing: 0;
}

table th:first-child{
  border-radius: 5px 0 0 0;
}

table th:last-child{
  border-radius: 0 5px 0 0;
  border-right: 1px solid #3c6690;
}

table th{
  text-align: center;
  color:white;
  background: linear-gradient(#829ebc,#225588);
  border-left: 1px solid #3c6690;
  border-top: 1px solid #3c6690;
  border-bottom: 1px solid #3c6690;
  box-shadow: 0px 1px 1px rgba(255,255,255,0.3) inset;
  width: 10%;
  padding: 10px 0;
}

table td{
  text-align: center;
  border-left: 1px solid #a8b7c5;
  border-bottom: 1px solid #a8b7c5;
  border-top:none;
  box-shadow: 0px -3px 5px 1px #eee inset;
  width: 10%;
  padding: 10px 0;
}


table td:last-child{
  border-right: 1px solid #a8b7c5;
}

table tr:last-child td:first-child {
  border-radius: 0 0 0 5px;
}

table tr:last-child td:last-child {
  border-radius: 0 0 5px 0;
}
</style>