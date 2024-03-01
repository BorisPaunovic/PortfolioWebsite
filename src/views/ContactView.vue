<script setup>
import {ref,onMounted} from 'vue'

 

const isDialogOpen = ref(false);
function OpenCloseDialog()
{
  
  isDialogOpen.value = !isDialogOpen.value;
}


</script>
<template>
 <main class="mainContact"  >


  <div class="socialMediaDiv">

    <div class="containerLink">
       <div class="divImgLink">
           <a class="hyperlinkImg" href="https://github.com/BorisPaunovic/BorisPaunovic" target="_blank">
             <img class="imgSocialLink" src="/Pictures/GitHub.svg">
           </a>
       </div>

       <div class="divTextLink">
           <a class="textLink" href="https://github.com/BorisPaunovic/BorisPaunovic" target="_blank">
              <span>Boris Paunovic</span>
           </a>
        </div>  
    </div>

    <div class="containerLink">
       <div class="divImgLink">
           <a class="hyperlinkImg" href="https://www.linkedin.com/in/boris-paunovic-751198281/" target="_blank">
             <img class="imgSocialLink" src="/Pictures/LinkedIn.svg">
           </a>
       </div>

       <div class="divTextLink">
           <a class="textLink" href="https://www.linkedin.com/in/boris-paunovic-751198281/" target="_blank">
              <span>boris-paunovic-751198281</span>
           </a>
        </div>  
   </div>
   

   <div class="containerLink">
       <div class="divImgLink">
           <a class="hyperlinkImg" href="mailto:boris.paunovic2111@gmail.com" target="_blank">
             <img class="imgSocialLink" src="/Pictures/E-Mail.svg">
           </a>
       </div>

       <div class="divTextLink">
           <a class="textLink" href="mailto:boris.paunovic2111@gmail.com" target="_blank">
              <span>boris.paunovic2111@gmail</span>
           </a>
        </div>  
   </div>



</div>


<div class="sendEmailDiv">

 <form action="mailto:boris.paunovic2111@gmail.com" method="post" enctype="text/plain" target="_blank" class="sendEmailForm">
   <div class="emailInputDiv">
     <input class="emailInput" type="text" placeholder="Your Email" name="name"> 
   </div >
   <div class="emailInputDiv">
    <input  class="emailInput" type="text" placeholder="Your Name" name="email"  > 
  </div>
 
  <div class="emailContentInputDiv">
    <textarea  class="emailContentInput" placeholder="Email Content" name="EmailContent"></textarea>
  </div>
   
      <div class="sendEmailButtonDiv">
           <button @click="OpenCloseDialog()" class="sendEmailButton"   value="Send"><img src="/Pictures/ButtontBackground.svg" class="sendEmailImg"><span class="buttonText">Send</span></button>
      </div>
      
       

 
 

 

</form>
</div>
 </main>
  <dialog :open="isDialogOpen" id="dialog" class="dialog">You will be redirected to your email provider<button @click="OpenCloseDialog()" class="closeDialogButton"> </button></dialog> 
 
</template>
<style scoped>
 @font-face
 {
  font-family: TekoRegular;
  src: url(../src/Fonts/Teko-Regular.ttf);
   
 }
.containerLink
{
  font-family: TekoRegular;
  
    gap: 1vw;
     display: flex;
     flex-direction: row;

    width: 100%;
    
}
.divImgLink
{
  width: 10vw;
   display: flex;
 

}
.textLink:hover
{
  filter: drop-shadow(0 0 5px rgb(255, 255, 255));
}
.textLink
{
  
  color: white;
  font-size: 3vw;
  text-decoration: none;
   
}
.divTextLink
{
 
 display: flex;
 justify-content: left;
 align-items: center;
  width: 100%;
}
.hyperlinkImg
{
  
   
display: flex;
justify-content: center;
  width: 100%;
  height: 100%;
}
.imgSocialLink
{
width: 100%;
height: auto;
 
}
.imgSocialLink:hover
{
  filter: drop-shadow(0 0 5px rgb(0, 238, 255));
}







 .buttonText {
 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 color: rgb(39, 36, 36);
   
  font-size: 2vw; 
  
  text-align: center;  
  
}
.closeDialogButton
{
  
  height: 1vw;
  width: 1vw;
  margin: 0.2vw;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  background-size: 100% 100%;
background-repeat: no-repeat;
background-color:  rgb(39, 36, 36);
border: none;
background-image: url('/Pictures/cancelDialogThicker.svg');
}
 .dialog
 {
   text-align: center;
  bottom: 20px;  
  right: 100px;
  background-color:rgb(39, 36, 36);
  color: white;
  padding:2vw;
  border-style: solid;
  border-radius: 10px;
  border-color:  rgb(0, 238, 255);
   width: 20vw;
   height: fit-content;
   font-family: TekoRegular;
   font-size: 1.5vw;
 }
 
 .sendEmailButtonDiv
 {
  position: relative;
  text-align: center;
 
  display:flex;
  justify-content: center;
 width: 100%;
height: 6vw;
 
  
 
 

 }
 .sendEmailImg:hover
 {
  filter: drop-shadow(0 0 5px rgb(0, 238, 255));
 }
 .sendEmailImg
 {
   width: 100%;
   height:  100%;
 }
 .sendEmailButton
 {
 background-color:rgb(39, 36, 36);
   color: rgb(39, 36, 36);
   text-align: center;
    
  font-family: TekoRegular;
  font-size:2vw;
  border: none;
  outline: none;
   width: 100%;
   height:  100%;
   
   background-size: 100% 100%;
background-repeat: no-repeat;

 }


 .emailContentInput:focus
 {
  font-size:1vw;
  text-align: left;
 
  
 }
 .emailContentInput
 {
  background-color: rgb(255, 255, 255);
   text-align: center;
   padding-left: 10px;
   padding-right: 10px;
  font-family: TekoRegular;
  font-size:2vw;
  border:solid;
  border-color: #43f7f7;
  border-radius: 1vw 1vw 0 1vw;
   color: white;
  resize: vertical;
  min-height: 5vw;
  height: 6vw;
  outline: none;
   width: 100%;
   background-color:rgb(39, 36, 36);
   scrollbar-width: thin;
   scrollbar-color:  #43f7f7 rgb(39, 36, 36)  ;
  
 }
 .emailContentInput:hover
{
  filter: drop-shadow(0 0 5px rgb(0, 238, 255));
}
 
 .emailContentInputDiv
 {
  display:flex;
  justify-content: center;
 width: 100%;
 height: auto;
 
 
 }
 
 .emailInputDiv
 {
  display:flex;
  justify-content: center;
 width: 100%;
 height: auto;
  
 
 background-image: url('/Pictures/InputBackground.png');
  padding-left:10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
background-size:100% 100%;
background-repeat: no-repeat;
 }

 .emailInput
 {
  background-color:rgb(39, 36, 36);
   color: white;
   text-align: center;
   padding-left: 10px;
   padding-right: 10px;
  font-family: TekoRegular;
  font-size:2vw;
  border: none;
  outline: none;
   width: 100%;
   height: 100%;
 }
 .emailInputDiv:hover {
  filter: drop-shadow(0 0 5px rgb(0, 238, 255));
   
}

 .emailInput:focus
 {
  border-left: 0.5vw solid rgb(0, 238, 255);
    border-right: 0.5vw solid rgb(0, 238, 255);
   border-radius: 10%;
 }


 .sendEmailForm
 {
   
  display: flex;
  gap: 2vh;
  flex-direction: column;
  width: 100%;
   
  padding-left: 5vw;
  padding-right:5vw;
 }

 
 .mainContact
 { 
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    padding: 5%;
    height: fit-content;
    min-height: 100%;


    
 }
 .socialMediaDiv
 {
    flex:1;
   display: flex;
   flex-direction: column;
  
   justify-content:top;
    
   gap: 1vw;
 
 }
 .sendEmailDiv
 {
  
    flex:1;
 }

 @media screen  and (min-aspect-ratio: 0.4) and (max-aspect-ratio: 1.3)   
{
  .sendEmailForm
 {
   
  display: flex;
  gap: 2vh;
  flex-direction: column;
  width: 100%;
   
  padding-top: 5vw;
  padding-left: 10vw;
  padding-right:10vw;
 }
  .socialMediaDiv
 {
  justify-content:space-around;
    flex:0;
   display: flex;
   flex-direction: row;
   height: fit-content;
  padding: 3vw;
   gap: 0;
 
 }
  .mainContact
 { 
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 5%;
    height: fit-content;
    min-height: 100%;


    
 }
.containerLink
{
  font-family: TekoRegular;
  
    gap: 1vw;
     display: flex;
     flex-direction: column;
    width: 15vw;
    align-items: center;
}
.divImgLink
{
  width: 10vw;
}
.textLink
{
  font-size: 3vw;
}
.divTextLink
{
  
   display: flex;
 text-align: center;
 justify-content: center;
  width: 100%;
}
 
.imgSocialLink
{
width: 100%;
height: auto;
}
.emailContentInput
 {
  
   
   
  height: 10vw;
   
  
 }


}
@media screen and (max-width:800px)
 { 
  .emailInput
 {
  
 
  font-size:5vw;
 
 }

  .sendEmailForm
 {
   
  display: flex;
  gap: 2vh;
  flex-direction: column;
  width: 100%;
   
  padding-top: 5vw;
  padding-left: 10vw;
  padding-right:10vw;
 }
  .socialMediaDiv
 {
 
  justify-content:space-around;
    flex:0;
   display: flex;
   flex-direction: row;
   height: fit-content;
  padding: 3vw;

   gap: 0;
 
 }
  .mainContact
 { 
 
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 5%;
    padding-top: 10vw;
     
    height: fit-content;
    min-height: 100%;

 
    
 }
.containerLink
{
  font-family: TekoRegular;
  
    gap: 1vw;
     display: flex;
     flex-direction: column;
    width: 20vw;
    align-items: center;
}
.divImgLink
{
  width: 15vw;
}
.textLink
{
  font-size: 4vw;
}
.divTextLink
{
  
   display: flex;
 text-align: center;
 justify-content: center;
  width: 100%;
}
 
.imgSocialLink
{
width: 100%;
height: auto;
}
.emailContentInput
 {
  
   font-size: 5vw;
   
  height: 20vw;
   
  
 }
 .emailContentInput:focus
 {
  font-size: 3.5vw;
 }
 .sendEmailButton
 {
  font-size: 5vw;
 }
 .sendEmailButtonDiv
 {
  
 
height: 15vw;
 }
 .buttonText
 {
  font-size: 5vw;
 }
  
 
 



 }
</style>