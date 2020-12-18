<template>
</template>

<script>

import {authy} from './db.js';

export default{
    data:function(){
        return{

        }
    },created(){
        authy.signOut();
        this.$router.push("/");
        location.reload();
    }
}

</script>