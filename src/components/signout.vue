<template>
</template>

<script>

import {auth} from './db.js';

export default{
    data:function(){
        return{

        }
    },created(){
        auth.signOut();
        this.$router.push("/");
        location.reload();
    }
}

</script>