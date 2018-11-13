<template>
<div >
    
    <navi></navi>

        <div class="container">

        <div style="background:#F2F2F2;min-height:500px;" class="row card mt-3">
            <div class="row">
                <div style="border:1px solid none;height:100px;" class="col">
                    <rating style="width:500px;padding:0px;border:1px solid none;margin-left:30px;margin-top:20px;" :ratingNum="$route.params.rating"></rating>
                </div>
            </div>
            <div class="row">
                <div  class="col">
                    <h2 class="ml-4 text-muted">Your review</h2>
                    <textarea v-model="review_text" style="width:70%;height:200px;position:relative;left:30px;" placeholder="your review"></textarea>
                </div>
            </div>
            <div style="padding:30px;" class="row">
                <div class="col">
                    <button @click="submitReview" class="btn btn-success">Submit</button>
                    {{feedback}}
                </div>
            </div>
        </div>
        </div>

    <footie style="position:Absolute;"></footie>
</div>




</template>

<script>
    import tayyabsratingsystem from './ratingIndicator.vue';

    import nav from './nav.vue';
    import footer from './footer.vue';

    import {db} from './db.js';

export default{
    data:function(){
        return {
            curRating:0,
            review_text:'',
            feedback:''
        }
    },
    components:{
        rating:tayyabsratingsystem,
        navi:nav,
        footie:footer
    },
    created(){

    },methods:{
        submitReview(){
            if(this.review_text.length<=0){
                this.feedback="no comment to submit"
                return;
            }
            var rating= this.$route.params.rating;
            rating+=1;
            var home=this;

            
            

            db.collection("reviews").add({
                rating:rating,
                comment:home.review_text,
                name:"annonymous"
            }).then(status=>{
                home.comment="";
                home.feedback="Review Submitted";
                this.$router.push("/reviews")

            }).catch(err=>{
                home.feedback=err;
            })
        }
    }
}

</script>