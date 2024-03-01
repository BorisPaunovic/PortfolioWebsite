<script setup>
import { onMounted, ref,watch,onUnmounted } from 'vue';
import { RouterView, RouterLink, useRoute   } from 'vue-router';
const route = useRoute();

const activeLinkHome = ref(false);
const activeLinkAbout = ref(false);
const activeLinkSkills = ref(false);
const activeLinkPortfolio = ref(false);
const activeLinkContact = ref(false);
 



     
onMounted(() => {
  watch(() => route.name, () => {
 
   if(route.name==='home')
   {
    activeLinkHome.value=true;
   }
   else
   {
    activeLinkHome.value=false;
   }


   if(route.name==='about')
   {
    activeLinkAbout.value=true; 
   }
   else
   {
    activeLinkAbout.value=false;
   }


   if(route.name==='skils')
   {
    activeLinkSkills.value=true; 
  }
   else
   {
    activeLinkSkills.value=false;
   }


   if(route.name==='portfolio')
   {
    activeLinkPortfolio.value=true; 
   }
   else
   {
    activeLinkPortfolio.value=false;
   }


   if(route.name==='contact')
   {
    activeLinkContact.value=true;  
   }
   else
   {
    activeLinkContact.value=false;
   }


{
  
}

  }); 
});
 
</script>

<template>
  <div class="mainLayout">
    <header class="header">
     
     <h1 class="portfolioHeader"> Portfolio </h1> 
         
    <nav class="nav">
      <div class="dropdown">
       <button class="dropbtn" > </button>
        <div  class="dropdown-content">
         <RouterLink :class="{ 'hyperlink':!activeLinkHome ,'activePage': activeLinkHome}"   :to="{name:'home'}">Home</RouterLink> 
         <RouterLink   :class="{ 'hyperlink':!activeLinkAbout ,'activePage': activeLinkAbout}" :to="{name:'about'}">About</RouterLink> 
         <RouterLink   :class="{ 'hyperlink':!activeLinkSkills ,'activePage': activeLinkSkills}" :to="{name:'skils'}">Skils</RouterLink> 
        <RouterLink   :class="{ 'hyperlink':!activeLinkPortfolio ,'activePage': activeLinkPortfolio}" :to="{name:'portfolio'}">CV</RouterLink> 
        <RouterLink  :class="{ 'contactMeHyperLink':!activeLinkContact ,'activeContact': activeLinkContact}" :to="{name:'contact'}">Contact Me</RouterLink> 
      </div>
      </div>
    </nav>
      
    </header>
    
    <div   class="outerMainContentOld" >
      <main class="innerMainContentOld" >
      <RouterView/> 
    </main>
    </div>
    
  </div>


  
</template>
<style>
 @font-face
 {
  font-family: TekoRegular;
  src: url(/Fonts/Teko-Regular.ttf);
  
   
 }
 @font-face
 {
  font-family: Syxtyfour;
  src: url(/Fonts/ProtestGuerrilla-Regular.ttf);
 }
</style>


<style scoped>
 
.activeContact
{
  color: #43f7f7;
  font-size: clamp(10px, 7vw, 20px);
}
.activePage
{
 
 
  font-size: clamp(10px, 7vw, 20px);
 color: white;
   
}

 

.hyperlink:hover
{
  text-shadow: 1px 1px 2px black, 0 0 25px#fdfdfd, 0 0 5px #ffffff;
}
 
.contactMeHyperLink
{
  text-decoration: none;
  color: #43f7f7;
  font-size: clamp(10px, 7vw, 20px);

}
.contactMeHyperLink:hover

{
  text-shadow: 1px 1px 2px black, 0 0 25px#43f7f7, 0 0 5px #43f7f7;
}
 
.outerMainContentOld
{
  overflow: hidden;
 border-color:#43f7f7;;
  border-style: solid;
 background-color:rgb(39, 36, 36);
 border-radius: 50px;
  grid-row: 3/12;
  grid-column: 2/12;
  z-index: 3;
   padding-right: 1px;

 
}
 

.innerMainContentOld
{
  scrollbar-width: thin;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  scrollbar-color:  #43f7f7 rgb(39, 36, 36)  ;
  height:100%;
  width: 100%;
  min-height: auto;
   z-index: 2;
   padding-right: 1px;
} 

 



.mainLayout {
  display: grid;
  height: 100vh;
  grid-template-rows: 100px repeat(11, 1fr);
  grid-template-columns: repeat(12, 1fr);
  background-color:rgb(39, 36, 36);
  background-image: url('/Pictures/backgroundHexagonCyan.svg');
   background-repeat: no-repeat;
  background-attachment: fixed;  
  background-size: cover;
 
}
 
.hyperlink
{
   color: white;
   text-decoration: none;
   font-size: clamp(10px, 7vw, 20px);
   
}

.nav{
 display: flex;
 justify-content: right;
 width: 100%;

} 

.header {
  display: flex;  
  align-items: center;
   font-family:Syxtyfour ;
padding-left: 50px;
padding-right: 50px;
   color: antiquewhite;
  z-index: 5;
  position: sticky;
  top: 0;
  border-color:#43f7f7;
  border-radius: 50px;
  border-style: solid;
  grid-column: 1/13;
  grid-row: 1/2;
  background-color:rgb(39, 36, 36);
 
  
}


 
 
.dropbtn
{
  display: none;
}
.dropdown-content
{
 
  display: flex;
 
 gap: 2vw;
}
.portfolioHeader
{
 
  font-size: clamp(20px, 7vw, 30px);
}
 

  

 @media screen and (max-width:800px) {
  .contactMeHyperLink{
    font-size: 4vw;
  }
  .activePage{
    font-size: 4vw;
  }
  .mainLayout {
  display: grid;
  height: 100vh;
  grid-template-rows: clamp(50px,20vw,100px) repeat(11, 1fr);
  grid-template-columns: repeat(12, 1fr);
  background-color:rgb(39, 36, 36);
 
}
 
.outerMainContentOld
{
  overflow: hidden;
 border-color:#43f7f7;
  border-style: solid;
 background-color:rgb(39, 36, 36);
 border-radius: 50px;
  grid-row: 3/12;
  grid-column: 2/12;
  z-index: 3;
   padding-right: 1px;
}

.portfolioHeader
{
 
  font-size: clamp(20px, 7vw, 30px);
}
 

 .header
 {
  border-radius: 10vw;
  
  
  padding-left: min(max(20px, 5%), 50px);
  padding-right: 10vw;
 }
  .dropbtn {
    
    background-color:rgb(39, 36, 36);  
    background-image: url('/Pictures/HamburgerMenu.svg');
    background-size: 100% 100%;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: block;
  
  width: 100%;
  height: 100%;
   
    border-radius: 10px;
}
.hyperlink{
 font-size: 4vw;
 
}

.dropdown {
  position: relative;
  display: inline-block;
  width: clamp(40px,10vw,60px);
 height: clamp(40px,10vw,60px);
}

.dropdown-content {
  display: none;
  position: absolute;
   background-color:rgb(39, 36, 36); 
  
  border-radius: 20%;
   
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 10px;
 
}

.dropdown-content a {
  color: rgb(209, 206, 206);
  padding: 12px 16px;
  text-decoration: none;
  display: block;

}

.dropdown-content a:hover {
  background-color:rgb(15, 15, 15);
}

.dropdown:hover .dropdown-content {
  display: block;
  
  
}

.dropdown:hover .dropbtn {
  background-color:rgb(15, 15, 15);
  
}

 

 }

 @media screen  and (max-width: 200px) and (max-height:200px) {
   .mainLayout
   {
    width: 200px;
    height: 200px;
   }
   
}
@media screen  and (max-height:200px) {
   .mainLayout
   {
    
    height: 200px;
   }
   }
</style>
