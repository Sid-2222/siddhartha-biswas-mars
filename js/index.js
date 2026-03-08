

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


// Lesson 12 Asynchronous Programming and Promises

const messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function(event){
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage =document.createElement("li");

    newMessage.innerHTML = `
      <a href="mailto:${usersEmail}">${usersName}</a>
      <span> ${usersMessage} </span>
    `;

    
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

     removeButton.addEventListener("click", function() {
      const entry = removeButton.parentNode;
      entry.remove();
    });

     newMessage.appendChild(removeButton);
     messageList.appendChild(newMessage);    
     messageForm.reset();
    });

 // Lesson 13 codes Fetch API
    
const apiUrl = "https://api.github.com/users/Sid-2222/repos";
const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('ul')


fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(repositories => {

        for (let i = 0; i < repositories.length; i++) {

            const project = document.createElement('li');
            const title = document.createElement("h3");
            const desc = document.createElement("p");
            title.textContent =repositories[i].name;
           
            if(repositories[i].description== null){
                desc.textContent = "No Description So far";
            }else{
                
                desc.textContent = repositories[i].description;
            }
            
            project.appendChild(title);
            project.appendChild(desc);
            projectList.appendChild(project);
        }

        console.log(repositories); 

    })
    .catch(error => {
        console.error("Error fetching the repositories:", error);
    });
