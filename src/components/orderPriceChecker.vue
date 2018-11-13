<template>
<div style="background:none;width:100%;text-align:center">
    <div  class="complextype mt-4">
        
    
        
        <div  class="btn-group btn-group-toggle" data-toggle="buttons">
            <label  class="btn btn-secondary active">
              
                <select   @change="calculatePrice" class="custom-select" id="inputGroupSelect02">
                    <option selected>Days...</option>
                    <option  v-for="n in 30" :key="n" :value="n">{{n}} days</option>
                </select>

            </label>
            <label class="btn btn-secondary">
                <button @click="bookNow" class="btn">Book Now</button>
            </label>
            <label  class="btn btn-secondary">
                <input style="max-width:50px;height:100%" type="text" placeholder="" value="$0" v-model="priceShow">
            </label>

        </div>
    </div>
</div>
</template>

<script>

export default{
    data:function(){
        return{
            priceShow:'',
            amountOfDays:'0'
        }
    },
    props:['price','type'],
    methods:{
        bookNow(){
            var price= this.price;
            var type= this.type;
            //send an emit message to the parent component to start the booking procedure
            this.$emit("booknow",{
                price,
                type,
            })
        },
        calculatePrice(evt){
            var target= evt.target;
            var strUser = target.options[target.selectedIndex].text;
            var days= parseInt(strUser.split(" ")[0]);
            //pares the days selected to an interger
            var priceOfRoom= this.priceo*days;
            this.priceShow= "£"+priceOfRoom;
        }
    },
    computed:{
        priceo(){
            return parseFloat(this.price)
        }
    }
}



</script>