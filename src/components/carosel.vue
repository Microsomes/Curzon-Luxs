<template>

<div>
    <div  id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  style="height:600px;" class="d-block w-100" :src="images[0]" alt="First slide">
    </div>
    <div v-for="(n,i) in images" :key="i" class="carousel-item">
      <img  style="height:600px;" class="d-block w-100" :src="n" alt="Second slide">
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>

</template>


<script>

export default{
    data:function(){
        return {
            placeholderurl:"https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/placeholder.png?alt=media&token=7d4b44c0-1b1d-4038-871a-51675c667c4e",

            images:[
              "https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/banner_1.jpg?alt=media&token=a34becca-de1f-453b-a446-ec80672a2908",
              "https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/banner_2.jpg?alt=media&token=860378cc-4db9-4e78-9de8-0a73231bcf5c",
               "https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/banner_3.jpg?alt=media&token=49310d2f-23a6-4a2e-9e5e-96c9441a4658",
               "https://firebasestorage.googleapis.com/v0/b/hotels4us-a23c7.appspot.com/o/banner_4.jpg?alt=media&token=99ebf278-0941-46f4-8c67-c273d7295787"
            ]
       
       }
    }
}


</script>