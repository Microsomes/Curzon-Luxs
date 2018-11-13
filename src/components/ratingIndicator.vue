<template>
<div style="padding-right:20px;" class="row">
    
       
    <div @click="updateRate(i)"  v-for="(n,i) in rating" :key="i" class="rating_card col">  <i class="material-icons">{{n.rating}}</i></div>
    
</div>
</template>


<style scoped>
    .rating_card{
        border-left:1px solid grey;
        width: 50px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        flex-flow: column;
        cursor: pointer;
    }
    .rating_card:hover{
        transform: scale(1.2);
        transition: all .5s;
    }
</style>

<script>



export default{
    data:function(){
        return{
            rating:[
                {
                    rating:"star_border"
                },
                 {
                    rating:"star_border"
                },
                 {
                    rating:"star_border"
                }, {
                    rating:"star_border"
                }, {
                    rating:"star_border"
                }
            ]
        }
    },
    props:['ratingNum'],
    created(){
        
            for(var i=0;i<=this.ratingss;i++){
                this.rating[i].rating="stars";
            }

    },
    methods:{
        sendToParent(num){
            this.$router.push("/review/"+num);
        },
        reset(){
            for(var i=0;i<this.rating.length;i++){
                this.rating[i].rating="star_border";
            }
        },
        updateRate(num){
            this.ratingss=num+1;
            this.reset();

            for(var i=0;i<=num;i++){
                this.rating[i].rating="stars";
            }

            this.sendToParent(num);
            
        }
    },
    computed:{
        ratingss(){
            return this.ratingNum
        }
    }
}

</script>