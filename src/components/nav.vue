<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a  style="color:white;margin-left:100px;" class="navbar-brand" href="#">
      <router-link to="/" style="color:white">{{title}}</router-link>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    
    
      <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> -->
      <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> -->
    </ul>
        <div  v-for="n in leftSideLinks" :key="n.name" >

            
        <a v-if="n.type==null" style="color:white" :key="n.name" class="nav-link" href="#">
            <router-link style="color:white" :to="n.link">{{n.name}}</router-link>
        </a>
        <button v-if="n.type" class="btn btn-danger">
                        <router-link style="color:white" :to="n.link">{{n.name}}</router-link>
            </button>
        </div>
      
    <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
  </div>
</nav>
    </div>
</template>

<script>

import {authy} from './db.js';

export default{
    data:function(){
        return {
            title:'CURZON LUXE',
            leftSideLinks:[
                
                {
                    name:"HOME",
                    link:"/"
                },
                {
                    name:"BOOKING",
                    link:"/booking",
                    type:"button"
                }
                ,
                {
                    name:"REVIEWS",
                    link:"/reviews"
                },
                {
                    name:"FACILITIES",
                    link:"/faci"
                },
                {
                    name:"SIGNIN/UP",
                    link:"/signin",
                }
            ]

        }
    
    },
    mounted() {
       var home=this;
        console.log("checking if user is signed in now...");
        authy.onAuthStateChanged(sta=>{
            if(sta!=null){
                        home.leftSideLinks.pop();
                            home.leftSideLinks.push({
                                name:"SIGNOUT",
                                link:"/signout"
                            })
                            home.leftSideLinks.push({
                                name:"MY RESERVATIONS",
                                link:"/reci"
                            })
                        }
            }
             
        
        )
       
    }
}

</script>
