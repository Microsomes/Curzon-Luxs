<template>
<div class="bg-dark mt-4" style="width:100%;">
<div class="jumbotron mt-3" style="background:#343A40;color:white">
    
    <div class="row footie">
        <div class="col">
            <h3 class="text-muted" style="text-align:center"> SOCIAL MEDIA</h3>
            <div style="text-align:center;" class="row mt-4">
                <div  v-for="(n,i) in socialLinks" :key="i" class="col">
                   <a target="_blank" :href="n.link"> <img width="50px" :src="n.icon" alt="social link"/></a>
                </div>
              
            </div>
        </div>
      <div class="col">
            <h3 class="text-muted"  style="text-align:center"> COMPANY</h3>

            
            <div style="text-align:Center"  class="col" v-for="n in footerLinks" :key="n.name">
            <a href="#" style="text-align:Center;color:white" >
            <router-link style="color:white;text-decoration:none" :to="n.link">          {{n.name}}</router-link>
                
                </a>
            </div>
        </div>
        <div class="col">
            <h3 class="text-muted" style="text-align:center">CONTACT DETAILS</h3>
          <p style="text-align:center;padding:20px;" >14 Curzon Streen<br>Birmingham<br>B4 7XG<br>01215454545</p>
        </div>
    </div>

</div>
</div>

</template>

<style scoped>
.footie{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 130px;
}
</style>

<script>

    export default{
        data:function(){
            return{
                socialLinks:[
                    {
                        name:"Facebook",
                        link:"https://www.facebook.com/pg/CURZONLUXE/about/?ref=page_internal",
                        icon:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/fbicon.png?alt=media&token=45e19e90-9781-464c-bf35-753face21757"
                    },
                    {
                        name:"Twitter",
                        link:"https://twitter.com/CurzonLuxeLtd",
                        icon:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/twittericon.png?alt=media&token=5bbcd845-03e8-4c2e-85b4-d966c71fd5ed"
                    },
                    {
                        name:"Instagram",
                        link:'https://www.instagram.com/hotelsdotcom/?hl=en',
                        icon:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/instaicon.png?alt=media&token=e8ccd39b-2ccb-4d85-8b06-fd0f6b175c1e"
                    }
                ],
                contactDetails:"14 Curzon ST<br> Birmingham B4 7XG",
                footerLinks:[
                    {
                        name:"About Curson Luxs",
                        link:"/about"
                    },
                    {
                        name:"Help",
                        link:"/"
                    },
                    {
                        name:"Terms of Use",
                        link:"/"
                    },
                    {
                        name:"Site Map",
                        link:"/"
                    },
                    {
                        name:"Careers",
                        link:"/cari"
                    }
                ]
            }
        }
    }

</script>