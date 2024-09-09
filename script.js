// script.ts
var form = document.getElementById('resume-form');
var resume = document.getElementById('resume');
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayEducation = document.getElementById('display-education');
var displayExperience = document.getElementById('display-experience');
var displaySkills = document.getElementById('display-skills');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Update resume
    displayName.textContent = name;
    displayEmail.textContent = email;
    displayEducation.textContent = education;
    displayExperience.textContent = experience;
    displaySkills.textContent = skills.join(', ');
    // Show the resume section
    resume.style.display = 'block';
});
