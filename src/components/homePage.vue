<template>
<div style="overflow:hidden;background:#E9ECEF">

        <navigation></navigation>
        <!--above is the navigation-->

        <carosell></carosell>

<div id="middle" class="container">
<div class="row mt-3"><!-- start of row-->
    <div class="col-md col-sm-12 m-3">

        <h2 class="text-muted pt-2" style="text-align:center;">Vision</h2>
        <p class="m-2 p-4">{{missionStatement}}</p>
        <h2 class="text-muted pt-2" style="text-align:center;">Mission</h2>
        <p class="m-2 p-4">{{missionStatementtwo}}</p>
    </div>
    <div class="col-md col-sm-12 m-3">
        <img width="100%" :src="placeholderurl"/>
    </div>
</div><!-- end of row-->
</div>

      
      <div style="" id="attractions"><!-- start of attractions-->

        <h2 class="text-muted" style="text-align:center;margin-bottom:30px;">Birmingham Attractions</h2>
<div style="text-align:center;width:100%;background:none;" class="row">
    
    <div class="col">
        <div class="pl-5" style="background:none;display:flex;justify-content:center;">
    <GmapMap
    
        :center="{lat:52.477564, lng:-2.003713}"
        :zoom="12"
        map-type-id="terrain"
        style="width: 100%; height: 300px"
        >

          <GmapMarker
    :key="index"
    v-for="(m, index) in attractionsCoords"
    :position="{lat:m.lat, lng:m.lng}"
    :clickable="true"
    :draggable="false"
   />

    </GmapMap>

     

        </div>
    </div>
</div>
      </div><!-- end of attractions-->

<footie style="position:absolute;"></footie>



</div>

  
</template>

<script>

import nav from './nav';
import footer from './footer';

import carosell from './carosel';

import {gmapApi} from 'vue2-google-maps'




export default {
    data:function(){
        return {
            attractionsCoords:[
                {
                    name:"Birmingham Museum and Art Gallery",
                    coords:"52.4801142,-1.9056507",
                    link:"",
                    image:""
                },
                {
                    name:"St Philip's Cathedral, Birmingham",
                    coords:"52.4811939,-1.9011199",
                    link:"",
                    image:""
                },
                {
                    name:"Birmingham Town Hall, Victoria Square, Birmingham",
                    coords:"52.4794502,-1.9058377",
                    link:"",
                    image:""
                },
                {
                    name:"Cadbury World, Birmingham",
                    coords:"52.4300556,-1.9343041",
                    link:"",
                    image:""
                },
                {
                    name:"National Sea Life Centre, Brindley Place, Birmingham",
                    coords:"52.4786972,-1.9156627",
                    link:"",
                    image:""
                },
                {
                    name:"Thinktank Birmingham Science Museum, Curzon Street, Birmingham",
                    coords:"52.4825342,-1.8889617",
                    link:"",
                    image:""
                },
                {
                    name:"Bullring Shopping Centre Bullring, Birmingham",
                    coords:"52.4779157,-1.8953881",
                    link:"",
                    image:""
                },
                {
                    name:"New Street Station, Birmingham",
                    coords:"52.477658,-1.9010819",
                    link:"",
                    image:""
                },
                {
                    name:"Curzon Luxe",
                    coords:"52.4815975,-1.8885219" ,
                    link:"",
                    image:""  
                }
            ],
            placeholderurl:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/image_4_home.jpg?alt=media&token=8e79a3a5-946a-4011-9890-81713d9047dd",
            missionStatementtwo:"Curzon Luxe Ltd is committed to deliver high quality service and exceed all expectations for the hotel guests.  We will provide a safe environment for our hotel guests and provide excellent services at a price that meets every customer’s satisfaction and needs. Also, Curzon Luxe Ltd allows employees to work in the best and professional environment in order to progress in their career path. Our facilities will be high spec and maintain a high standard of quality throughout the whole hotel. To become the best employers we will provide all of our staff the best training services."
            ,missionStatement:"Our aim is to become the most elite and well-known hotel in Birmingham within the next 10 years. Also Curzon luxe Ltd aims to become a top employer within Birmingham in the next 5 years.  "
       }
    },
    created(){   
        this.loadPointers();
    },
    methods:{
        openDescription(){
            alert(1);
        },
        loadPointers(googleobj){
                this.attractionsCoords.forEach(e=>{
                var coord= e.coords;
                var lat= coord.split(",")[0];
                var lng= coord.split(",")[1];
                e.lat= Number(lat);
                e.lng= Number(lng);
        })
        }
    },
    
    components:{
        navigation:nav,
        footie:footer,
        carosell:carosell
    },
    computed:{
        google:gmapApi
    }
}
</script>

<style>

</style>
