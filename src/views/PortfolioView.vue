<script setup>
import { RouterView,RouterLink } from 'vue-router';

</script>
<template>
<main class="mainPorfolio">
 <div class="">
    <div class="thankYouDiv">
        <p>
            Thank you for visiting! I'm excited about the possibility of working together on projects. 
            My CV highlights my skills and experiences, offering insight into what I bring to the table. 
            Feel free to download it to learn more. Let's  <RouterLink  class="contactMeHyperLink" :to="{name:'contact'}">connect</RouterLink>   and discuss how we can collaborate to bring ideas to life! 
        </p>
    </div>
        <div class="CVsDiv">
        
        
      <a class="downloadCVHyperLink" href="/CV/Boris-Paunovic-CV-Minimalistic.pdf" download="Boris-Paunovic-Minimalistic-CV.pdf">
        <div   class="cvDownloadButton">
         <span class="downloadText">Download Minimalistic CV</span> 
        </div>
      </a>
        
     
       <a   class="downloadCVHyperLink" href="/CV/Boris-Paunovic-CV-Modern.pdf" download="Boris-Paunovic-Modern-CV.pdf" >

        <div class="cvDownloadButton">
       <span class="downloadText">Download Modern CV</span> 
         </div>
     </a>
      </div>
 </div>
 
</main>
</template>
<style scoped>
.downloadCVHyperLink
{
  text-decoration: none;
  color: rgb(39, 36, 36);
}
.contactMeHyperLink
{
  color: white;
 
}
.contactMeHyperLink:hover {
  filter: drop-shadow(0 0 5px rgb(0, 238, 255));
   
}

.downloadText
{
  font-family: TekoRegular;
   
  font-size: 2vw;
}
.CVsDiv{
  display: grid;
  grid-template-columns: repeat(2,1fr);
    grid-template-columns: repeat(2,1fr);
   
   width: 100%;
  margin-top: 4vw;
    
}

 


.cvDownloadButton
 {
  display:flex;
  justify-content: center;
 width: 100%;
 height: auto;
  
 
 background-image: url('/Pictures/ButtontBackground.svg');
  padding-left:10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
background-size:100% 100%;
background-repeat: no-repeat;
 }
 .cvDownloadButton:hover {
  filter: drop-shadow(0 0 5px rgb(0, 238, 255));
   
}

 









.thankYouDiv
{
    color: white;
    display: flex;
    text-align: center;
    margin-top: 3vw;
    font-family: TekoRegular;
    font-size: 2vw;
    width: 50vw;
}
.mainPorfolio
{
      
  height: fit-content;
   min-height: 100%;
  width: 100%;
  padding: 3vw;
  font-family: TekoRegular;
 display :flex;
justify-content: center;
  
}
@media screen  and (min-aspect-ratio: 0.4) and (max-aspect-ratio: 1.3)   {

  .mainPorfolio
  {
    padding: 6vw;
  }
  .thankYouDiv
{
    color: white;
    display: flex;
    text-align: center;
    margin-top: 3vw;
    font-family: TekoRegular;
    font-size: 3vw;
    width: 60vw;
}
.CVsDiv{
  
  margin-top: 10vw;
    
}

}
@media screen and (max-width:800px)
 {
  .mainPorfolio
  {
    padding: 6vw;
  }
  .thankYouDiv
{
    color: white;
    display: flex;
    text-align: center;
    margin-top: 3vw;
    font-family: TekoRegular;
    font-size: 5vw;
    width: 60vw;
}
.CVsDiv{
  display: grid;
  grid-template-columns: repeat(1,1fr);
   gap: 3vw;
   
   width: 100%;
  margin-top: 10vw;
    
}
.downloadText
{
   
   
  font-size: 5vw;
}
 }
</style>