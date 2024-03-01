<script setup>
import {ref} from 'vue';
import SkillCardComponent from '@/components/SkillCardComponent.vue';
 
const imgList = ref([

{
    imgLink :'/Pictures/HTML.svg',
    imgName:'HTML',
    imgSkillType:'programmingLanguage',
    imgSkillLink:"https://www.w3schools.com/html"
},
{
    imgLink :'/Pictures/JavaScript.svg',
    imgName:'Java Script',
    imgSkillType:'programmingLanguage',
    imgSkillLink:"https://www.w3schools.com/js/"
    
},
{
    imgLink :'/Pictures/CSharp.svg',
    imgName:'C#',
     imgSkillType:'programmingLanguage',
     imgSkillLink:"https://www.w3schools.com/cs/index.php"
},

{
    imgLink :'/Pictures/CSS.svg',
    imgName:'.CSS',
    imgSkillType:'programmingLanguage',
    imgSkillLink:"https://www.w3schools.com/html"
},
{
    imgLink :'/Pictures/AdvancedRestClient.svg',
    imgName:'Advanced Rest Client ',
     imgSkillType:'tool',
     imgSkillLink:"https://www.advancedrestclient.com/"

},

{
    imgLink :'/Pictures/DBGate.svg',
    imgName:'DB Gate',
    imgSkillType:'tool',
    imgSkillLink:"https://dbgate.org/"
},



{
    imgLink :'/Pictures/MariaDB.svg',
    imgName:'Maria DB',
    imgSkillType:'database',
    imgSkillLink:"https://mariadb.org/"
},

{
    imgLink :'/Pictures/MarsEngine.svg',
    imgName:'Mars Engine',
    imgSkillType:'tool',
    imgSkillLink:"https://mars-server.net/"
},
{
    imgLink :'/Pictures/MSSQLSMS.svg',
    imgName:'MSSQLSMS',
    imgSkillType:'tool',
    imgSkillLink:"https://learn.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms?view=sql-server-ver16"
},

{
    imgLink :'/Pictures/MYSQL.svg',
    imgName:'My SQL',
    imgSkillType:'database',
    imgSkillLink:"https://www.mysql.com/"
},

{
    imgLink :'/Pictures/MYSQLWorkbentch.svg',
    imgName:'My SQL Workbentch',
    imgSkillType:'tool',
    imgSkillLink:"https://www.mysql.com/products/workbench/"
},
{
    imgLink :'/Pictures/Postman.svg',
    imgName:'Postman',
    imgSkillType:'tool',
    imgSkillLink:"https://www.postman.com/"
},

{
    imgLink :'/Pictures/TSQL.svg',
    imgName:'T-SQL',
    imgSkillType:'database',
    imgSkillLink:"https://learn.microsoft.com/en-us/sql/t-sql/language-reference?view=sql-server-ver16"
},

{
    imgLink :'/Pictures/VisualStudio.svg',
    imgName:'Visual Studio',
    imgSkillType:'tool',
    imgSkillLink:"https://visualstudio.microsoft.com/"
},

{
    imgLink :'/Pictures/VSCode.svg',
    imgName:'VS Code',
    imgSkillType:'tool',
    imgSkillLink:"https://code.visualstudio.com/"
},

{
    imgLink :'/Pictures/VueJs.svg',
    imgName:'VueJs',
    imgSkillType:'framework',
    imgSkillLink:"https://vuejs.org/"
},
{
    imgLink :'/Pictures/dotNET.svg',
    imgName:'.NET',
    imgSkillType:'framework',    
    imgSkillLink:"https://dotnet.microsoft.com/en-us/"

},
{
    imgLink :'/Pictures/Asp.NETCore.svg',
    imgName:'Asp .NET Core',
     imgSkillType:'framework',
     imgSkillLink:"https://dotnet.microsoft.com/en-us/apps/aspnet"
},

{
    imgLink :'/Pictures/Winforms.svg',
    imgName:'WinForms',
    imgSkillType:'framework',
    imgSkillLink:"https://learn.microsoft.com/en-us/dotnet/desktop/winforms/overview/?view=netdesktop-8.0"
},

{
    imgLink :'/Pictures/Windows.svg',
    imgName:'Windows',
    imgSkillType:'tool',
    imgSkillLink:"https://www.microsoft.com/sr-latn-rs/software-download/windows10"
},


{
    imgLink :'/Pictures/Git.svg',
    imgName:'Git',
    imgSkillType:'versionControl',
    imgSkillLink:"https://git-scm.com/"
},

{
    imgLink :'/Pictures/GitHub.svg',
    imgName:'Git Hub',
    imgSkillType:'versionControl',
    imgSkillLink:"https://github.com/"
},
{
    imgLink :'/Pictures/Trello.svg',
    imgName:'Trello',
    imgSkillType:'tool',
    imgSkillLink:"https://trello.com/"
},
{
    imgLink :'/Pictures/Srbija.svg',
    imgName:'Serbian',
    imgSkillType:'language',
    imgSkillLink:"https://sr.wikipedia.org/sr-ec/%D0%A1%D1%80%D0%BF%D1%81%D0%BA%D0%B8_%D1%98%D0%B5%D0%B7%D0%B8%D0%BA"
},

{
    imgLink :'/Pictures/England.svg',
    imgName:'English',
    imgSkillType:'language',
    imgSkillLink:"https://en.wikipedia.org/wiki/English_language"
},



])
 


</script>
<template>
 <main class="mainSkils">

    <div>
        <h1  class="skillText">Programming Languges</h1>
        <div  class="languagesNote">
            <details  class="languagesNote2"  >
                <summary>
                     Note
                </summary> 
                <p>HTML and CSS are markup and styling languages respectively, used for structuring and styling web content. That's why I've included them here.</p> 
            </details>
        </div>
         
        <div class="divProgrammingLanguages">
    <template v-for="element in imgList">
        <div v-if="element && element.imgSkillType === 'programmingLanguage'">
            <SkillCardComponent :skill="element"></SkillCardComponent>
        </div>
    </template>
   </div>
    </div>
    
    <div>
        <h1 class="skillText">Tools</h1>
        <div class="divTools">
    <template v-for="element in imgList">
        <div v-if="element && element.imgSkillType === 'tool'">
            <SkillCardComponent :skill="element"></SkillCardComponent>
        </div>
    </template>
   </div>
    </div>

    <div>
        <h1 class="skillText">Frameworks</h1>
        <div class="divFrameworks">
    <template v-for="element in imgList">
        <div v-if="element && element.imgSkillType === 'framework'">
            <SkillCardComponent :skill="element"></SkillCardComponent>
        </div>
    </template>
   </div>
    </div>

    <div>
        <h1 class="skillText">Version Control</h1>
        <div class="divVersionControl">
    <template v-for="element in imgList">
        <div v-if="element && element.imgSkillType === 'versionControl'">
            <SkillCardComponent :skill="element"></SkillCardComponent>
        </div>
    </template>
   </div>
    </div>

    <div>
        <h1 class="skillText">Databases</h1>
        <div class="divDatabase">
    <template v-for="element in imgList">
        <div v-if="element && element.imgSkillType === 'database'">
            <SkillCardComponent :skill="element"></SkillCardComponent>
        </div>
    </template>
   </div>
    </div>
    
    <div>
        <h1 class="skillText">Languages</h1>
        <div class="divLanguage">
    <template v-for="element in imgList">
        <div v-if="element && element.imgSkillType === 'language'">
            <SkillCardComponent :skill="element"></SkillCardComponent>
        </div>
    </template>
   </div>
    </div>
    


    
    
 </main>
</template>
<style scoped>
.languagesNote2
{
    width: 25vw;
}
.languagesNote
{
    font-family: TekoRegular;
    font-size: 1.5vw;
    color: whitesmoke;
    text-align: center;
    display: flex;
    justify-content: center;
   margin-bottom: 2vw;
}
  .skillText
  {
    text-align: center;
    font-family: TekoRegular;
    color: white;
    font-size: 4vw;
  }
  .divLanguage
  {
    margin-top: 1vw;
    display: grid;
    grid-template-columns: repeat(2, 10vw);
    justify-content: center;  
    align-items: center; 
    gap: 2vw;
 
  }
  .divDatabase
  {
    margin-top: 1vw;
    display: grid;
    grid-template-columns: repeat(3, 10vw);
    justify-content: center;  
    align-items: center; 
    gap: 2vw;
 
  }
  .divVersionControl
  {
    margin-top: 1vw;
    display: grid;
    grid-template-columns: repeat(2, 10vw);
    justify-content: center; 
    align-items: center;  
    gap: 2vw;
    
  }
  .divFrameworks
{
    margin-top: 1vw;
    display: grid;
    grid-template-columns: repeat(4, 10vw);
    justify-content: center; 
    align-items: center;  
    gap: 2vw;
 
}
.divProgrammingLanguages
{
  
    display: grid;
    grid-template-columns: repeat(4, 10vw);
    justify-content: center;  
    align-items: center; 
    gap: 2vw;
    
 
}
 
.divTools
{
    margin-top: 1vw;
    display: grid;
    grid-template-columns: repeat(3, 10vw);
    justify-content: center;  
    align-items: center;  
    gap: 2vw;
    
}
.divTools > div:last-child {
    grid-column: 2 / 4;  
}
 
 
.mainSkils
{
     
      margin-top: 1vw;
  height: fit-content;
   min-height: 100%;
  width: 100%;
  padding: 3vw;
  font-family: TekoRegular;
  display: flex;
  gap: 5vw;
  flex-direction: column;
 
}
@media screen and (max-width:800px)
{
    .languagesNote2
{
    width: 50vw;
}
 
    .languagesNote
{
     
    font-size: 3vw;
   
   
}
  .skillText
  {
     
    font-size: 10vw;
  }
  .divLanguage
  {
  
    grid-template-columns: repeat(2, 15vw);
   
    
 
  }
  .divDatabase
  {
   
    grid-template-columns: repeat(3, 15vw);
 
  }
  .divVersionControl
  {
  
    grid-template-columns: repeat(2, 15vw);
  
    
  }
  .divFrameworks
{ 
    grid-template-columns: repeat(4, 15vw);
   
 
}
.divProgrammingLanguages
{
   
    grid-template-columns: repeat(4, 15vw);
    
    
     
    
 
}
 
.divTools
{
    
    grid-template-columns: repeat(3, 15vw);
    
    
}
 
 
 
}
</style>