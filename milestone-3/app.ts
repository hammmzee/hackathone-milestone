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
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Full Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>LinkedIn Profile:</b> <a href="${profile}" target="_blank">${profile}</a></p>
        <p><b>Portfolio:</b> <a href="${portfolio}" target="_blank">${portfolio}</a></p>

        <h3>Professional Summary</h3>
        <p>${summary}</p>

        <h3>Work Experience</h3>
        <p><b>Job Title:</b> ${job}</p>
        <p><b>Company Name:</b> ${company}</p>
        <p><b>Duration:</b> ${jobDates}</p>
        <p><b>Job Description:</b> ${jobDescription}</p>

        <h3>Education</h3>
        <p><b>Degree:</b> ${degree}</p>
        <p><b>Institution:</b> ${institution}</p>
        <p><b>Graduation Year:</b> ${graduationYear}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
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
