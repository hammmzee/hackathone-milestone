// Getting references to the form and result area
const form = document.getElementById("resume's-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-result") as HTMLDivElement;

// Handle the form submission
form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    // Getting input values
    const name = (document.getElementById("full-name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const profile = (document.getElementById("linkedin") as HTMLInputElement).value;
    const portfolio = (document.getElementById("portfolio") as HTMLInputElement).value;
    const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
    const job = (document.getElementById("job-title") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;
    const jobDates = (document.getElementById("job-dates") as HTMLInputElement).value;
    const jobDescription = (document.getElementById("job-description") as HTMLTextAreaElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const graduationYear = (document.getElementById("graduation-year") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Generating the resume's content dynamically
    const resumeHTML = `
        ><h2><b> Editable Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Full Name:</b><span contenteditable="true"> ${name}</span></p>
        <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
        <p><b>Phone:</b><span contenteditable="true"> ${phone}</span></p>
        <p><b>LinkedIn Profile:</b><span contenteditable="true"> <a href="${profile}" target="_blank">${profile}</a></span></p>
        <p><b>Portfolio:</b><span contenteditable="true"> <a href="${portfolio}" target="_blank">${portfolio}</a></span></p>

        <h3>Professional Summary</h3>
        <p contenteditable="true">${summary}</p>

        <h3>Work Experience</h3>
        <p contenteditable="true"><b>Job Title:</b> ${job}</p>
        <p contenteditable="true"><b>Company Name:</b> ${company}</p>
        <p contenteditable="true"><b>Duration:</b> ${jobDates}</p>
        <p contenteditable="true"><b>Job Description:</b> ${jobDescription}</p>

        <h3>Education</h3>
        <p contenteditable="true"><b>Degree:</b> ${degree}</p>
        <p contenteditable="true"><b>Institution:</b> ${institution}</p>
        <p contenteditable="true"><b>Graduation Year:</b> ${graduationYear}</p>

        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;

    // Displaying the generated resume in the result area
if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;

    // Scroll smoothly to the result section
    resumeDisplayElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
} else {
    console.error("Missing result element.");
}
});