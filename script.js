// Load content from JSON file
async function loadContent() {
    try {
        const response = await fetch('content.json');
        const data = await response.json();
        populateContent(data);
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

// Populate content in the DOM
function populateContent(data) {
    // Personal Info
    document.querySelector('.profile-image').src = data.personalInfo.profileImage;
    document.querySelector('.name').textContent = data.personalInfo.name;
    document.querySelector('.title').textContent = data.personalInfo.title;
    document.querySelector('.bio').textContent = data.personalInfo.bio;

    // Social Links
    const socialLinks = document.querySelector('.social-links');
    Object.entries(data.personalInfo.socialLinks).forEach(([platform, url]) => {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.innerHTML = `<i class="fab fa-${platform}"></i>`;
        socialLinks.appendChild(link);
    });

    // Skills
    const skillsContainer = document.querySelector('.skills-container');
    data.skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card fade-in';
        skillCard.innerHTML = `
            <h3>${skill.name}</h3>
            <div class="skill-level">
                <div class="skill-bar" style="width: ${skill.level}%"></div>
            </div>
        `;
        skillsContainer.appendChild(skillCard);
    });

    // Projects
    const projectsGrid = document.querySelector('.projects-grid');
    data.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank" class="btn">Live Demo</a>
                    <a href="${project.githubLink}" target="_blank" class="btn">GitHub</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Experience
    const experienceTimeline = document.querySelector('.experience .timeline');
    data.experience.forEach(exp => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item fade-in';
        timelineItem.innerHTML = `
            <h3>${exp.title}</h3>
            <h4>${exp.company}</h4>
            <p class="period">${exp.period}</p>
            <p>${exp.description}</p>
        `;
        experienceTimeline.appendChild(timelineItem);
    });

    // Education
    const educationTimeline = document.querySelector('.education .timeline');
    data.education.forEach(edu => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item fade-in';
        timelineItem.innerHTML = `
            <h3>${edu.degree}</h3>
            <h4>${edu.institution}</h4>
            <p class="period">${edu.period}</p>
            <p>${edu.description}</p>
        `;
        educationTimeline.appendChild(timelineItem);
    });

    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        navMenu.classList.remove('active');
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the form data to a server
    // For now, we'll just log it and show a success message
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Load content when the page loads
document.addEventListener('DOMContentLoaded', loadContent); 