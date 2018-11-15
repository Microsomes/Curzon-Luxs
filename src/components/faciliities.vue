<template>

    <div style="overflow:hidden" >
        <navi></navi>

        <div style="min-height:700px;" >
            <div class="row">
                <div class="col">
                    <h2 class="display-1 text-muted" style="text-align:Center">Faclities</h2>
                    <div  class="container">

                        <div style="text-align:center;border:1px solid none;display:flex;" class="row">
                            <div style="align-self-center;justify-content:Center;border:1px solid none;display:Flex;"  v-for="(n,i) in facilities" :key="i" class="col-lg-4 col-md-6 col-sm-12 mt-3">
                                <div class="card" style="width: 18rem;">
  <img class="card-img-top" style="height:200px;" :src="n.image" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{n.name}}</h5>
    <p class="card-text">{{n.description}}</p>
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

export default{
    data:function(){
        return {
            facilities:[
                {
                    name:"Grand Hall ",
                    image:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/faci_1.jpg?alt=media&token=b9c3b645-3afb-4e44-b16a-4165bd668f86",
                    description:"The hall in our hotel is a huge room which can be used for many different occasion such as birthdays, weddings and concerts. We also have a beauty parlour and unisex hairdressers to get our guest ready for their special occasions.  This hall is in the heart of a luxury hotel in the city of Birmingham. A luxury hotel with a hotel and a 5 star restaurant, you’ll be able to celebrate your occasion at the very best! "
                },
                {
                   name:"Bar",
                    image:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/faci_2.jpg?alt=media&token=adca65a4-7635-437b-a869-182a2c5e70ba",
                    description:"After a long and busy day our guest can unwind in the hotel alcohol bar. At Curzon Luxe hotel bar we have a wide range of different alcoholic and soft drinks available such as mock tails and cocktails. Also, the Curzon Luxe Ltd offers snacks such as sandwiches, peanuts, crisp and burgers. "
                },
                {
                    name:"Restaurant",
                    image:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/faci_3.jpg?alt=media&token=e31b7760-a6e2-45fa-ba66-e6002dfc9151",
                    description:"Our 5 start restaurant in our hotel has a wide range of food that you can choose for your appetite. With a choice of both posh English and French dishes, you’ll be sure to be satisfied. Food cooked with passion for both our business people and tourists, it will sure get you in the mood in for a relaxing night at one of our luxurious rooms in or hotel.  "
                },
                {
                    name:"Conference rooms",
                    image:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/faci_4.jpg?alt=media&token=07479d7a-6aa9-4086-8501-fa575f8c4c3d",
                    description:"Our conference rooms are specially designed for our business visitors. These meeting rooms are designed and tailored in a business way to make sure business people can feel at home. We have many facilities which can be used such as laptops and business equipment. "
                },
                {
                    name:"Gym",
                    image:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/faci_5.jpg?alt=media&token=a66124a5-24bf-47b7-a41a-f57c908743b8",
                    description:"Curzon Luxe Ltd has a gym which is free for all guests to use. The gym at Curzon Luxe has Treadmill, Cross-trainer, Rowing machine, Dumbbells, Exercise bikes, Machines for your arm/back, Water dispenser and Towels for your convenience.  "
                },
                {
                    name:"Swimming pool",
                    image:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/swimmingpool.jpg?alt=media&token=7af4775e-f64f-47bb-8243-bef73669de6e",
                    description:"Our hotel has a swimming pool which is for our hotel guests to relax and enjoy. It is available for tourists who have come to enjoy a luxury stay in a hotel in Birmingham. What is a stay at a luxury hotel without an indoor heated swimming pool? With a lot of leisure activities to choose from, we’re sure that the swimming pool will be your most favourite activity to enjoy with your friends and family. "
                },
                {
                    name:"Shopping malls",
                    image:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/shoppingmall.jpg?alt=media&token=377976db-1695-470f-ad88-e6379fafae7f",
                    description:"What makes Curzon Luxe different to other hotels in Birmingham? Well the indoor shopping mall of course. At Curzon Luxe our guest will not need to go far to shop as there is a mini mall located inside the lower level of the hotel. This mini mall includes some high end fashion stores such as Ralph Lauren, Louis Vuitton, Gold smiths and many more shops. Our guest can shop in the comfort of the hotel. "
                }
            ]
        }
    },
    components:{
        navi:nav,
        footie:footer
    },
    methods:{
        
    },created(){

    },
    mounted(){

    }
}

</script>