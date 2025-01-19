// Get references to DOM elements
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-result');
var shareableUrlElement = document.getElementById('shareable-url');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect form values
    var formData = new FormData(form);
    var username = formData.get('username');
    var name = formData.get('name');
    var email = formData.get('email');
    var phone = formData.get('phone');
    var linkedin = formData.get('linkedin') || '';
    var portfolio = formData.get('portfolio') || '';
    var degree = formData.get('degree');
    var institution = formData.get('institution');
    var graduationYear = formData.get('graduation-year');
    var jobTitle = formData.get('job-title');
    var company = formData.get('company');
    var jobDescription = formData.get('job-description');
    var skills = formData.get('skills');
    // Create resume HTML
    var resumeHTML = "\n        <h2>".concat(name, "'s Resume</h2>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n        <p><b>LinkedIn:</b> <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n        <p><b>Portfolio:</b> <a href=\"").concat(portfolio, "\" target=\"_blank\">").concat(portfolio, "</a></p>\n        <h3>Education</h3>\n        <p><b>").concat(degree, "</b> - ").concat(institution, " (").concat(graduationYear, ")</p>\n        <h3>Work Experience</h3>\n        <p><b>").concat(jobTitle, "</b> at ").concat(company, "</p>\n        <p>").concat(jobDescription, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display resume
    resumeDisplayElement.innerHTML = resumeHTML;
    resumeDisplayElement.style.display = 'block';
    // Save data to localStorage
    var resumeData = { name: name, email: email, phone: phone, linkedin: linkedin, portfolio: portfolio, degree: degree, institution: institution, graduationYear: graduationYear, jobTitle: jobTitle, company: company, jobDescription: jobDescription, skills: skills };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Generate shareable link
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
    shareableUrlElement.style.display = 'block';
});
// Load data if username is in URL
window.addEventListener('DOMContentLoaded', function () {
    var params = new URLSearchParams(window.location.search);
    var username = params.get('username');
    if (username) {
        var savedData = localStorage.getItem(username);
        if (savedData) {
            var resumeData_1 = JSON.parse(savedData);
            Object.keys(resumeData_1).forEach(function (key) {
                var input = document.querySelector("[name=\"".concat(key, "\"]"));
                if (input)
                    input.value = resumeData_1[key];
            });
        }
    }
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
