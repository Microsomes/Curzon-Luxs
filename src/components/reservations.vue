<template>

    <div style="overflow:hidden" >
        <navi></navi>

        <div style="min-height:700px;" >
            <div class="row">
                <div class="col">
                    <h2 class="display-1 text-muted" style="text-align:Center">My Reservations</h2>
                    <div  class="container">

                       <div style="text-align:center;border:1px solid none;display:flex;" class="row">
                            <div style="align-self-center;justify-content:Center;border:1px solid none;display:Flex;"  v-for="(n,i) in reservations" :key="i" class="col-lg-4 col-md-6 col-sm-12 mt-3">
                                <div class="card" style="width: 18rem;">
   <div class="card-body">
    <h5 class="card-title">{{n.bookingdetails.type.size}}</h5>
    <p class="card-text">£{{n.bookingdetails.price}} paid for {{n.days}} days stay. </p>
    <p class="card-text">Your stay will be on {{n.ts}} </p>
    
   </div>
</div>
                            </div>
                    
                            
                            
                        </div>
                        
                    </div>
                </div>
                
            </div>

            
        </div>

        <footie style="position:Absolute;bottom:"></footie>
        
    </div>

</template>

<script>


import nav from './nav.vue';
import footer from './footer.vue';

import {db} from './db.js';
import {authy} from './db.js';

import moment from 'moment';

export default{
    data:function(){
        return {
           reservations:[]
        }
    },
    components:{
        navi:nav,
        footie:footer
    },
    methods:{
        
    },created(){
        var home=this;
        authy.onAuthStateChanged(change=>{
            var email= change.email;
        if(email!=null){
            db.collection("bookings").doc(email).collection("orders").get().then(data=>{
                data.forEach(d=>{
                    var resData= d.data();
                    home.reservations.push(resData);
                    var seconds=resData.bookDate.seconds;
                    console.log(seconds);
                    var timestamp= moment().utc(seconds).format("D-M-Y")
                    resData.ts=timestamp;
                })
            })
        }
        })
        
    },
    mounted(){

    },
    computed:{
        humanDate(){
         }
    }
}

</script>