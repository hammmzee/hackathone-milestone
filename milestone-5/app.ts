// Get references to DOM elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-result') as HTMLDivElement;
const shareableUrlElement = document.getElementById('shareable-url') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Collect form values
    const formData = new FormData(form);
    const username = formData.get('username') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const linkedin = formData.get('linkedin') as string || '';
    const portfolio = formData.get('portfolio') as string || '';
    const degree = formData.get('degree') as string;
    const institution = formData.get('institution') as string;
    const graduationYear = formData.get('graduation-year') as string;
    const jobTitle = formData.get('job-title') as string;
    const company = formData.get('company') as string;
    const jobDescription = formData.get('job-description') as string;
    const skills = formData.get('skills') as string;

    // Create resume HTML
    const resumeHTML = `
        <h2>${name}'s Resume</h2>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>LinkedIn:</b> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        <p><b>Portfolio:</b> <a href="${portfolio}" target="_blank">${portfolio}</a></p>
        <h3>Education</h3>
        <p><b>${degree}</b> - ${institution} (${graduationYear})</p>
        <h3>Work Experience</h3>
        <p><b>${jobTitle}</b> at ${company}</p>
        <p>${jobDescription}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display resume
    resumeDisplayElement.innerHTML = resumeHTML;
    resumeDisplayElement.style.display = 'block';

    // Save data to localStorage
    const resumeData = { name, email, phone, linkedin, portfolio, degree, institution, graduationYear, jobTitle, company, jobDescription, skills };
    localStorage.setItem(username, JSON.stringify(resumeData));

    // Generate shareable link
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
    shareableUrlElement.style.display = 'block';
});

// Load data if username is in URL
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const username = params.get('username');
    if (username) {
        const savedData = localStorage.getItem(username);
        if (savedData) {
            const resumeData = JSON.parse(savedData);
            Object.keys(resumeData).forEach((key) => {
                const input = document.querySelector(`[name="${key}"]`) as HTMLInputElement | HTMLTextAreaElement;
                if (input) input.value = resumeData[key];
            });
        }
    }
});

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
    window.print();
});
