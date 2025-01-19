// Getting references to the form and result area
var form = document.getElementById("resume's-form");
var resumeDisplayElement = document.getElementById("resume-result");
// Handle the form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Getting input values
    var name = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var profile = document.getElementById("linkedin").value;
    var portfolio = document.getElementById("portfolio").value;
    var summary = document.getElementById("summary").value;
    var job = document.getElementById("job-title").value;
    var company = document.getElementById("company").value;
    var jobDates = document.getElementById("job-dates").value;
    var jobDescription = document.getElementById("job-description").value;
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var graduationYear = document.getElementById("graduation-year").value;
    var skills = document.getElementById("skills").value;
    // Generating the resume's content dynamically
    var resumeHTML = "\n        ><h2><b> Editable Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Full Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n        <p><b>Phone:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n        <p><b>LinkedIn Profile:</b><span contenteditable=\"true\"> <a href=\"").concat(profile, "\" target=\"_blank\">").concat(profile, "</a></span></p>\n        <p><b>Portfolio:</b><span contenteditable=\"true\"> <a href=\"").concat(portfolio, "\" target=\"_blank\">").concat(portfolio, "</a></span></p>\n\n        <h3>Professional Summary</h3>\n        <p contenteditable=\"true\">").concat(summary, "</p>\n\n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\"><b>Job Title:</b> ").concat(job, "</p>\n        <p contenteditable=\"true\"><b>Company Name:</b> ").concat(company, "</p>\n        <p contenteditable=\"true\"><b>Duration:</b> ").concat(jobDates, "</p>\n        <p contenteditable=\"true\"><b>Job Description:</b> ").concat(jobDescription, "</p>\n\n        <h3>Education</h3>\n        <p contenteditable=\"true\"><b>Degree:</b> ").concat(degree, "</p>\n        <p contenteditable=\"true\"><b>Institution:</b> ").concat(institution, "</p>\n        <p contenteditable=\"true\"><b>Graduation Year:</b> ").concat(graduationYear, "</p>\n\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Displaying the generated resume in the result area
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        // Scroll smoothly to the result section
        resumeDisplayElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else {
        console.error("Missing result element.");
    }
});
