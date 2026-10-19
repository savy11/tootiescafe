// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Interactive Menu Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const menuPanels = document.querySelectorAll('.menu-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active states
        tabButtons.forEach(btn => btn.classList.remove('active'));
        menuPanels.forEach(panel => panel.classList.remove('active'));

        // Activate clicked tab and matching panel
        button.classList.add('active');
        const targetId = button.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});