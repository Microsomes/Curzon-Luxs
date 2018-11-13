<template>

    <div>
        <navi></navi>
        <div class="container">

        <div style="min-height:800px;"  class="m-5">
            <h2 class="display-2" style="text-align:center">About us</h2>

            <img width="100%" src="https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/banner_4.jpg?alt=media&token=99ebf278-0941-46f4-8c67-c273d7295787"/>

            <div class="row">
                <div style="text-align:Center;" class="col">
                    <h3 class="text-muted mt-2 display-0">Mission/Vision</h3>
                <div style="background:none;text-align:center;padding:100px;padding-top:0px;padding-bottom:0px;">
                <p style="width:100%;text-align:center;">Our aim is to become the most elite and well-known hotel in Birmingham within the next 10 years. Also Curzon luxe Ltd aims to become a top employer within Birmingham in the next 5 years.</p>
                <p style="width:100%;">Curzon Luxe Ltd is committed to deliver high quality service and exceed all expectations for the hotel guests. We will provide a safe environment for our hotel guests and provide excellent services at a price that meets every customer’s satisfaction and needs. Also, Curzon Luxe Ltd allows employees to work in the best and professional environment in order to progress in their career path. Our facilities will be high spec and maintain a high standard of quality throughout the whole hotel. To become the best employers we will provide all of our staff the best training services.</p>
                </div>
                </div>
            </div>

            <div class="row">
                <div style="text-align:Center;" class="col">
                    <h3 class="text-muted mt-2 display-0">About us</h3>
                <div style="background:none;text-align:center;padding:100px;padding-top:0px;padding-bottom:0px;">
                <p style="width:100%;text-align:center;">An elite and well-established hotel located near the centre of Birmingham which is yet to become a popular city with the new HSBC bank and HS2 arriving in the oncoming years. Curzon Luxe offers the needs for both tourists and business people. A mini mall, leisure centre, free optimal Wi-Fi and many more facilities to offer you would expect the perfect stay at Curzon Luxe.
Business styled environment with meeting rooms to meet the expectations for business people. A mini mall with high end stores to let tourists shop for their favourite branded clothing. Start your morning with a full English breakfast served in bed along with an appetising 5 star English and French restaurant for a posh dinner. 
</p>
                 </div>
                </div>
            </div>
        </div>
        </div>


        <footie style="position:Absolute;"></footie>
    </div>

</template>


<script>

import nav from './nav.vue';
import footer from './footer.vue';


export default{
    data:function(){
        return {

        }
    },
    components:{
        footie:footer,
        navi:nav
    }
}

</script>