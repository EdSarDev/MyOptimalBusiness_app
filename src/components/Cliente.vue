<template>
    <div id="Cliente">
       <h2>
           Cliente <span> {{client_id}}, </span>
        </h2>
    </div>
</template>
<script>
export default {
    name:"Cliente",
    data: function(){
        return {
            client_id: "none",
        };
    },
    created:function() {
        this.client_id=this.$route.params.client_id
    }
};
</script>