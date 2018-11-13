<template>
    <div>

            booking now:{{$route.params.roomno}}

            {{booking}}
    
    </div>    
</template>


<script>

import nav from './nav.vue';
import footer from './footer';

export default{
    data:function(){
        return {
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
                ]
        }
    }
    ,mounted(){
     
    },components:{
        navi:nav,
        footie:footer
    }
}
