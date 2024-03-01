<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="mainHome">
    
    <div class="divIntroduction">
     <p>
      <h1>Hi, I'm Boris</h1>
      <h2>
       Junior Full Stack Developer
      </h2>
      <p>
        Dedicated and enthusiastic  programmer seeking a challenging developer position to apply theoretical
        knowledge and hands-on experience in software development. Eager to contribute to a dynamic team, learn
        from seasoned professionals, and further enhance programming skills while working on real-world projects.
      </p>
     </p>
     <div class="divSocial">
      <a class="linkGithub" href="https://github.com/BorisPaunovic/BorisPaunovic" target="_blank">
        <img class="imgSocial" src="/Pictures/GitHub.svg">
      </a>
      <a class="linkLinkedIn" href="https://www.linkedin.com/in/boris-paunovic-751198281/"  target="_blank">
        <img class="imgSocial" src="/Pictures/LinkedIn.svg" >
      </a>
     
     </div>
     
    </div>
    
       <div class="imgContainer">
        <img class="pictureMain" src="/Pictures/BorisPortfolioWebsdite2.png" alt="BorisImg">
       
       
    </div>
  </main>
</template>





<style scoped>
.imgSocial
{
  width: 100%;
  height: auto;
}
.imgSocial:hover
{
  filter: drop-shadow(0 0 5px rgb(0, 238, 255));
}
.linkGithub
{
  width: 10%;
 display: flex;
 align-items: center;
  
}
.linkLinkedIn
{
  display: flex;
 align-items: center;
  width: 10%;
  height: fit-content;
 
}
.divSocial
{
  margin-top: 10%;
  display: flex;
 justify-content: center;
 gap: 5%;
  
}
 
.mainHome {
 
  display: flex;
  flex-direction: row;  
   
 align-items:center;
  padding-top: 2vh;
  padding-left: 5vw;
  padding-right: 5vw;
   padding-bottom: 2vh;
   
 height: fit-content;
   min-height: 100%;
}

.imgContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;  
 
   
}

.pictureMain {
  width: 30vw;
  height: auto;
  filter: drop-shadow(0px 12px 12px rgb(0, 238, 255)); 
}

.divIntroduction {
  width: 100%;
   
  
  color: white;
  font-family: TekoRegular;
  font-size: 1.6vw;
  text-align: center;  
}

@media screen  and (min-aspect-ratio: 0.4) and (max-aspect-ratio: 1.3)   {
  
  .mainHome {
  display: flex;
  flex-direction: column;  
  align-items: top;  
  
 padding-bottom: 5vh;
}
.pictureMain {
  margin-top: 10vw;
  width: 50vw;
  height: auto;
  filter: drop-shadow(0px 12px 12px rgb(0, 238, 255)); 
}
.divIntroduction {
     
  width: 100%;
  padding: 20px;  
  color: white;
  font-family: TekoRegular;
  font-size: 2.5vw;
  text-align: center;  
}
 
}
 


 @font-face
 {
  font-family: TekoRegular;
  src: url(/Fonts/Teko-Regular.ttf);
   
 } 
 @media screen and (max-width:800px)
 {
  .linkLinkedIn
{
 
  width: 20%;
 
 
}
  .mainHome {
  display: flex;
  flex-direction: column;  
  align-items: top;  
  padding-top:5vh;
 padding-bottom: 5vh;
}
.pictureMain {
 
  width: 60vw;
  height: auto;
  filter: drop-shadow(0px 12px 12px rgb(0, 238, 255)); 
}
.divIntroduction {
     
  width: 100%;
  padding: 20px;  
  color: white;
  font-family: TekoRegular;
  font-size: 5vw;
  text-align: center;  
}
.linkGithub
{
  width: 20%;
 
  
}
 }
</style>

