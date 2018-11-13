<template>

    <div>
        <navi></navi>


            <div class="row">
                <div class="col">
                    <h2 class="display-1 text-muted" style="text-align:Center">Faclities</h2>
                </div>
            </div>

        <footie style="position:Absolute;bottom:0"></footie>
        
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