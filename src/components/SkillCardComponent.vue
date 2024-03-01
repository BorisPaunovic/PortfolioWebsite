<script setup>
import { defineProps,ref } from 'vue';

const props = defineProps(['skill'])


</script>
<template> 
 <a :href="skill.imgSkillLink" target="_blank" style="text-decoration: none;">
    <div class="cardDiv">
    <div class="cardImg">
    <img class="skillImg" :src='skill.imgLink'>
    </div>
    <div class="cardText">
     
    {{ skill.imgName }}
    </div>
   
</div>
 </a>
    
 
    
</template>
<style scoped>
.cardDiv
{
   
    border-style: solid;
   flex-direction: column;
    display: flex;
    width: 10vw;
    height: 10vw;
    border-radius: 1vw;
    padding: 1vw;
    border-color:  rgb(0, 255, 242);
 
}
.cardDiv:hover
{
    background-color:rgb(15, 15, 15);
    transform: rotateX(360);
}
.cardDiv:active
{
    background-color:rgb(42, 97, 99);
}
 
.cardImg
{
width: 100%;
height: 80%;
padding-left: 1.5vw;
padding-right: 1.5vw;
 

}
.skillImg
{
    width: 100%;
    height: auto;
    transition: transform 1s ;
}
.cardDiv:hover .skillImg {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)     ;
    filter: drop-shadow(0 0 5px rgb(0, 0, 0));
    transition: 1s;  
}
.cardText
{
    
    line-height: 1;
     
    width: 100%;
height: 20%;
display: flex;
align-items: center;
justify-content: center;
 text-align: center;
font-family: TekoRegular;
font-size:1.5vw;
color:white
}
@media screen and (max-width:800px)
{
    .cardDiv
{
   
     
 
    width: 15vw;
    height: 20vw;
    
 
}
 
 
 
 
 
.cardText
{
 
height: 30%;
 
font-size:3.5vw;
 
}   
}
</style>