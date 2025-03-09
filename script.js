// Dynamic Content Loading
const experiences = [
    {
        title: "Vertex Labs",
        role: "Research Assistant under Dr. Mayra",
        bullets: [
            "Developing VR simulations for machine learning applications",
            "Implementing 3D visualization tools using WebGL"
        ]
    },
    {
        title: "Persuasive Computing Labs",
        role: "Research Assistant under Dr. Oyebody",
        bullets: [
            "Designing AR interfaces for behavioral research",
            "Developing mobile AR applications using ARCore"
        ]
    }
];

const skills = [
    { name: "Java", icon: "fab fa-java" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "XR Development", icon: "fab fa-vr-cardboard" },
    { name: "Team Leadership", icon: "fas fa-users" }
];

// Initialize Timeline
function initExperience() {
    const timeline = document.getElementById('experienceTimeline');
    
    experiences.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item hover-effect';
        item.innerHTML = `
            <h3>${exp.title}</h3>
            <p>${exp.role}</p>
            <ul>
                ${exp.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
            </ul>
        `;
        timeline.appendChild(item);
    });
}

// Initialize Skills Grid
function initSkills() {
    const grid = document.getElementById('skillsGrid');
    
    skills.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card hover-effect';
        card.innerHTML = `
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
        `;
        grid.appendChild(card);
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initExperience();
    initSkills();
});
// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item, .project-card, .resume-block').forEach((el) => {
    observer.observe(el);
});

// Dynamic year update for copyright (example)
const yearSpan = document.getElementById('current-year');
if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}