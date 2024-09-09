// script.ts
const form = document.getElementById('resume-form') as HTMLFormElement;
const resume = document.getElementById('resume') as HTMLElement;

const displayName = document.getElementById('display-name') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayEducation = document.getElementById('display-education') as HTMLElement;
const displayExperience = document.getElementById('display-experience') as HTMLElement;
const displaySkills = document.getElementById('display-skills') as HTMLElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Update resume
    displayName.textContent = name;
    displayEmail.textContent = email;
    displayEducation.textContent = education;
    displayExperience.textContent = experience;
    displaySkills.textContent = skills.join(', ');

    // Show the resume section
    resume.style.display = 'block';
});



