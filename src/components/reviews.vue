<style scoped>
.line{
    border-top:6px solid #A9A9A9;
     border-radius: 2px;
    width: 20%;
    
}
.line2{
    border-top:6px solid #A9A9A9;
     border-radius: 2px;
    width: 10%;
}
</style>
<template>

<div>

    <navi></navi>

    <div style="background:none;min-height:600px;" class="container">

        <div style="min-height:300px;" class="row mt-3">
            <div class="col">
                <img width="100%" height="100%" :src="imageTop"/>
            </div>
            <div style="overflow-y:scroll" class="card col">
                <h2 class="ml-2">CURZON LUXE</h2>
                <p class="ml-2">Reviews: ({{totalReviews}})</p>
                <p class="ml-2">Average: ({{averageRating}})</p>
                <div class="card mt-2 p-2" v-for="(n,i) in reviews" :key="i">{{n.comment}} ({{n.roundDown}} stars)</div>
            </div>
        </div>

    <div style="height:140px;" class="row mt-3 card">
            <div style="background:;" class="col">
                <div style="border:0px solid black;height:100%;" class="row">
                    <div  class="col">
                        <div style="border:0px solid black;height:100%;display:flex;align-items:center;justify-content:Center;flex-flow:column" class="circular">   
                        <i style="color:#A9A9A9;border:1px solid grey;padding:20px;font-size:30px;" class="material-icons rounded">people</i>
                        <div class="line mt-3"></div>
                        <div class="line2 mt-3"></div>
                        </div>
                    </div>
                    <div class="col">
                        <h3 class="text-muted;" style="text-align:Center;">Review Curzon Luxe</h3>
                        <rating ratingNum=-1></rating>
                     </div>
                </div>
            </div>
        </div>
    </div>

    <footie style="position:absolute"></footie>


</div>


</template>

<script>

    import tayyabsratingsystem from './ratingIndicator.vue';

    import {db} from './db.js'; 
    import nav from './nav';
    import footer from './footer';
    import StarRate from 'star-rate-component'


    export default{
        data:function(){
            return {
                reviews:[],
                totalReviews:0,
                averageRating:0,
                rating:"",
                imageTop:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/banner_1.jpg?alt=media&token=a34becca-de1f-453b-a446-ec80672a2908"
            }
    },
    methods:{
        loadReviews(){
            var home=this;
            db.collection("reviews").get().then(data=>{
               (data.docs.forEach(d=>{
                   home.reviews.push(d.data());
               }))

                var total=0;
                var amountOfReviews=0;

                home.reviews.forEach(d=>{
                    d.roundDown= parseInt(d.rating/10);
                    total+=d.roundDown;
                    amountOfReviews++;
                })
                
                this.averageRating= total/amountOfReviews;
                this.averageRating= this.averageRating.toFixed(1);
               home.totalReviews= this.reviews.length;
            })
        }
    },
    components:{
        navi:nav,
        footie:footer,
        rating:tayyabsratingsystem
 
     },
    created(){
        this.loadReviews();
    },
    mounted(){

    }

    }//export defaults
</script>
