import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
    loadPortfolio();
    loadTestimonials();
    setupContactForm();
});

async function loadPortfolio() {
    try {
        const portfolioItems = await backend.getPortfolioItems();
        const portfolioGrid = document.getElementById('portfolio-grid');
        portfolioGrid.innerHTML = '';
        
        portfolioItems.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'col-md-4';
            portfolioItem.innerHTML = `
                <div class="portfolio-item">
                    <img src="${item.imageUrl}" alt="${item.title}">
                    <div class="portfolio-info">
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                    </div>
                </div>
            `;
            portfolioGrid.appendChild(portfolioItem);
        });
    } catch (error) {
        console.error('Error loading portfolio:', error);
    }
}

async function loadTestimonials() {
    try {
        const testimonials = await backend.getTestimonials();
        const testimonialsContainer = document.getElementById('testimonials-container');
        testimonialsContainer.innerHTML = '';
        
        testimonials.forEach(testimonial => {
            const testimonialElement = document.createElement('div');
            testimonialElement.className = 'col-md-4';
            testimonialElement.innerHTML = `
                <div class="testimonial-card">
                    <img src="${testimonial.avatarUrl}" alt="${testimonial.name}">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.text}</p>
                </div>
            `;
            testimonialsContainer.appendChild(testimonialElement);
        });
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Sending...';
        
        try {
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            await backend.submitContactForm(formData);
            
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your message. Please try again.');
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = 'Send Message';
        }
    });
}
