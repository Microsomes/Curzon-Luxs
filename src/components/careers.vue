<template>

    <div>
        <navi></navi>


            <div class="row">
                <div class="col">
                    <h2 class="display-1 text-muted" style="text-align:Center">Careers</h2>
                    <h4 class="display-5 text-muted" style="text-align:Center">JOIN OUR DEDICATED TEAM</h4>
                    
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <img style="width:100%;" src="https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/careers.jpg?alt=media&token=644b9a31-0922-474d-9bbd-640f7964f05e"/>
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
                    name:"Swimming Pool",
                    image:"",
                    description:""
                },
                {
                   name:"Swimming Pool",
                    image:"",
                    description:""
                },
                {
                    name:"Swimming Pool",
                    image:"",
                    description:""
                },
                {
                    name:"Swimming Pool",
                    image:"",
                    description:""
                },
                {
                    name:"Swimming Pool",
                    image:"",
                    description:""
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