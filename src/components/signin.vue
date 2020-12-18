<template>
<div style="min-height:50px;background-image:url('https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/background_image.jpg?alt=media&token=ede936f5-cb48-405c-833a-10d9883ce2a2')">
    <navi></navi>
    <div  class="container">
        <h2 class=" display-3" style="text-align:Center;color:white">
            SIGN IN/UP 
        </h2>
        <p class="text-" style="text-align:Center;color:white;" >Sign in to start booking</p>
    </div>

    
    <form @submit.prevent="submitApp('null')" class="container p-3 bg-dark" style="color:white; border:1px solid lightgrey; border-radius:3px">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
   </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Remember me</label>
  </div>
  <button value="signin" type="submit" class="btn bg-dark" style="color:white">Forgot Password</button>
    
    <div v-if="feedback">{{feedback}}</div>

    <div class="row" style="text-align:Center">
        <div v-for="n in formlinks" :key="n.name" class="col">
            <button @click="submitApp(n.val)"  value="signin" type="submit" class="btn btn-success bg-dark">{{n.name}}</button>
        </div>
 
    </div>

</form>



<footie style=""></footie>


</div>
</template>

<script>

import nav from '../components/nav';

import footie from '../components/footer';

import {db} from '../components/db.js';
import {authy} from '../components/db.js';



export default{
    data:function(){
        return {
            email:'',
            password:'',
            feedback:'',
            formlinks:[
                {
                    name:"SIGNIN",
                    val:"signin"
                },
                {
                    name:"SIGNUP",
                    val:"signup"
                },
                {
                    name:"Redeem Code",
                    val:"redeem"
                }
            ]
        }
    },
    components:{
        navi:nav,
        footie,
    },
    methods:{
        submitApp(payload){
            var home=this;
            if(this.email.length<=0){
                this.feedback="No email address";
                return;
            }
              if(this.password.length<=0){
                this.feedback="No password";
                return;
            }
            switch(payload){
                case "signin":
                console.log("singning in")

                authy.signInWithEmailAndPassword(this.email,this.password).then(status=>{
                    this.$router.push("/");
                    location.reload();
                }).catch(err=>{
                    home.feedback= err;
                })
                

                break;
                case "signup":
                console.log("singing out")
                authy.createUserWithEmailAndPassword(this.email,this.password).then(status=>{
                        this.$router.push("/");
                    location.reload();
                })
                
                break;
            }
        }
    }
}

</script>s