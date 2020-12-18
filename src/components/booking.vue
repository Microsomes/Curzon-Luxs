<template>
<div>
    <!-- booking model-->

            <button id="bookingModel" style="display:none" type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <h1 style="text-align:center;" class="text-muted">Booking now</h1>
                <p style="text-align:center">Details:<br>{{processingBooking.type.type}} {{processingBooking.type.size}} Room</p>
                
                <p style="text-align:center">Please book in the next 10 minutes to secure your reservation</p>
                  
                <div v-if="isLoggedIn==true">
                    <div class="row">
                        <div style="border:1px solid none;text-align:center;display:flex;flex-flow:column;align-items:center;" class="col">
                    <p style="text-align:center">Please pick a start date</p>
                    <datePicker v-model="date" ></datePicker>
                    <em>please click the box above to pick a date</em>
                    <input v-model="days" type="text" placeholder="0-30 days max"/>
                    <em>Pick how many days you would like to stay 0-30</em>
                    <button @click="bookConfirm" class="btn-success">Book now</button>
                    {{orderfeedback}}
                    </div>

                    </div>
                </div>
               <div v-show="isLoggedIn==false"> 
                <div class="alert alert-danger container" role="alert">
                    Whoops please sign in to continue. Once signed in you may continue with your booking. 
                </div>
                <button  @click="gotosignin" style="cursor:pointer" class="btn-success">SIGNIN/UP</button>
               </div>
            </div>
        </div>
        </div>

    <!-- end of booking model-->
    <div style="overflow:hidden" class="mb-4">
        <navi></navi>
        <h2  class="text-muted display-3" style="text-align:Center;position:absolute;z-index:3;width:100%;">Bookings</h2>
        <carosell></carosell>

        <div class="container">
  <div class="row mt-3">
    <div v-for="n in booking" :key="n.name" class="col-sm">
      <h2 class="text-muted">{{n.name}}</h2>
      <div v-for="(nim,i) in n.sub" :key="i" >
          <h3 class="mt-3 text-muted">{{nim.name}}:</h3>
          <img  style="height:100px;" class="mt-3" width="100%" :src="nim.image"/>
            Price per night {{nim.price}}
            <orderBooker @booknow="triggerBooking" :price="nim.price" :type="{type:nim.name,size:n.name}"></orderBooker>

      </div>
      

    </div>
  
  </div>
  
</div>

    </div>
 <footier style="position:absolute;"></footier>
       

</div>
</template>


<script>



    import {authy} from './db.js';
    import {db} from './db.js'

    import carosell from './carosel';

    import orderBooker from './orderPriceChecker';

import Datepicker from 'vuejs-datepicker';

import moment from 'moment';

    
import nav from './nav';
import footer from './footer';


    export default{
        data:function(){
            return {
                    orderfeedback:'',
                    date: new Date(2016, 9,  16),
                    days:'',
                processingBooking:{
                    type:"",
                    size:""
                },
                booking:[
                    {
                        name:"Single",
                        sub:[
                            {
                                name:"Standard",
                                image:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/booking%2Fsingle_standard.jpg?alt=media&token=eeb20037-58c0-47d1-b2d4-b0fc251a8e63",
                                price:20
                            },
                            {
                                name:"Delux",
                                image:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/booking%2Fsingle_deluxe.jpg?alt=media&token=8a719846-87b3-4f15-9077-45b65fc80801",
                                price:50
                            }
                        ]
                    },
                    {
                        name:"Double",
                         sub:[
                            {
                                name:"Standard",
                                image:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/booking%2Fdouble_standard.jpg?alt=media&token=3fdfdfca-0207-4161-a12b-0d642d214d63",
                                price:40
                            },
                            {
                                name:"Delux",
                                image:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/booking%2Fdouble_deluxe.jpg?alt=media&token=40323ed3-aada-4494-befe-7ee245172c50",
                                price:80
                            }
                        ]
                    },
                    {
                        name:"Family Suit",
                         sub:[
                            {
                                name:"Standard",
                                image:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/booking%2Ffamily_suit.jpg?alt=media&token=d3708f5b-544f-4634-972d-798ae511d178",
                                price:100
                            }
                        ]
                    }
                ],

                flashMessage:"",
                name:"",
                placeholderurl:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/placeholder.png?alt=media&token=7d4b44c0-1b1d-4038-871a-51675c667c4e",
            }
        },
        components:{
            navi:nav,
            carosell:carosell,
            orderBooker:orderBooker,
            footier:footer,
            datePicker:Datepicker
        },
        methods:{
            bookConfirm(){
                var email=authy.currentUser.email;
                var bookingdetails= this.processingBooking;
                var timestamp= moment().format();
                var days=this.days;
                var home=this;

                var date= this.date;
                if(this.days.length<=0){
                    this.orderfeedback="choose how many days you want to stay";
                    return;
                }

                if(email!=null){
                    db.collection("bookings").doc(email).collection("orders").add({
                        bookingdetails,
                        timestamp:timestamp,
                        days,
                        bookDate:date
                    }).then(status=>{
                        home.orderfeedback="Success order was successful. You may view your reservation on the my reservations page.";
                    }).catch(err=>{
                        home.orderfeedback="error please try again or try calling us to report the issue."
                    })
                }
            },
            gotosignin(){
                this.$router.push("/signin");
                location.reload();
            },
            triggerBooking(val){
                console.log("starting the booking process now");
                console.log(val);
                this.processingBooking=val;
                var triggerBooking= document.getElementById("bookingModel").click();
            }
        },
        mounted(){
//                         var triggerBooking= document.getElementById("bookingModel").click();

        },
        computed:{
            isLoggedIn(){
               return auth.currentUser!=null
            }
        }
        
    }

</script>
