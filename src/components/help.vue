<template>

    <div style="overflow:hidden">
        <navi></navi>


            <div class="row">
                <div class="col">
                    <h2 class="display-1 text-muted" style="text-align:Center">Help</h2>
                </div>
            </div>
            <div class="container">
            <div v-for="(n,i) in help" :key="i" class="row mt-5">
               <div style="border:1px solid none;display:flex;align-items:Center;" class="col">
                    <div style="background:;width:100px;height:100px;display:Flex;align-items:center;justify-content:Center;color:white;" class="rounded-circle bg-dark">
                        <i style="font-size:60px;" class="material-icons">{{n.icon}}</i>
    
                    </div>
                    <div>
                    <h4 class="text-muted ml-3">{{n.title}}</h4>
                    <p class=" ml-3">{{n.description}}</p>
                    </div>
               </div>
            </div>
            </div>
            


        <footie style="position:relative;bottom:-50px"></footie>
        
    </div>

</template>

<script>


import nav from './nav.vue';
import footer from './footer.vue';

export default{
    data:function(){
        return {
            help:[
                {
                    icon:'local_phone',
                    title:'Phone us',
                    description:"Give our friendly team a ring on 01215454545"
                },
                 {
                    icon:'local_post_office',
                    title:'Post a letter',
                    description:"Please sent all enquiries by letter to 14 Curzon Streen Birmingham B4 7XG"
                },
                {
                    icon:'loyalty',
                    title:'Phone us',
                    description:"Please call 01213432343 for more infomation on our loyalty program"
                },
                {
                    icon:'map',
                    title:'Location',
                    description:"We are located next to the city centre in town"
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