

// Variable Declearing portion starts 
    const footer = document.createElement('footer');
    const today = new Date();
    const thisYear = today.getFullYear();
    const copyright = document.createElement('p');

    const skills = ["JavaScript", "HTML", "CSS", "Android Studio",
                    "GitHub", "Java", "JSON", "FireBase", "XML",];

    const skillsSection = document.getElementById('skills');
    const skillsList = skillsSection.querySelector('ul'); 
    
    

// Variable Declearing portion ends 

// Styling portion start 

footer.style.textAlign = "right";
footer.style.fontSize="15px";
footer.style.marginTop= "15px";
footer.style.textDecoration = 'underline';


skillsSection.style.textDecoration = 'underline';
skillsSection.style.fontWeight = 'bold';
skillsList.style.color = 'grey';

// Styling portion ends


// genral operatioins 

copyright.innerHTML= "&copy; Siddhartha Biswas " +thisYear;
footer.appendChild(copyright);
document.body.appendChild(footer);

for(let i = 0; i < skills.length; i++){

    const skill = document.createElement('li');
    skill.innerHTML=skills[i];
    skillsList.appendChild(skill);

}




