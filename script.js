
        // Theme Toggle
        function toggleTheme() {
            document.body.classList.toggle('light-theme');
            const themeToggle = document.querySelector('.theme-toggle i');
            themeToggle.classList.toggle('fa-moon');
            themeToggle.classList.toggle('fa-sun');
        }

        // Scroll Progress Bar
        function updateScrollProgress() {
            const scrollProgress = document.querySelector('.scroll-progress');
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        }

        // Smooth Scrolling for Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // Typing Animation
        function typeWriter() {
            const text = "Full Stack Developer | AI Enthusiast | Open Source Contributor";
            const typingElement = document.getElementById('typing-text');
            let i = 0;
            
            typingElement.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    typingElement.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, 50);
                } else {
                    typingElement.classList.add('typing-animation');
                }
            }
            
            setTimeout(type, 2000);
        }

        // Intersection Observer for Fade-in Animation
        function observeElements() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        }

        // Back to Top Button
        function toggleBackToTop() {
            const backToTop = document.querySelector('.back-to-top');
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Modal Functions
        function openModal(projectId) {
            const modal = document.getElementById('modal');
            const modalBody = document.getElementById('modal-body');
            
            const projectData = {
                project1: {
                    title: 'AI Chat Assistant',
                    description: 'A sophisticated chatbot powered by GPT-4 with real-time conversation capabilities and context awareness. This project demonstrates advanced natural language processing and real-time communication.',
                    features: [
                        'Real-time chat with WebSocket connections',
                        'Context-aware conversations',
                        'Multi-language support',
                        'Custom training on domain-specific data',
                        'Analytics dashboard for conversation insights'
                    ],
                    tech: ['Python', 'OpenAI API', 'FastAPI', 'WebSocket', 'Redis', 'PostgreSQL'],
                    github: '#',
                    demo: '#'
                },
                project2: {
                    title: 'E-commerce Platform',
                    description: 'Full-stack e-commerce solution with microservices architecture, payment integration, and comprehensive admin dashboard. Built for scalability and performance.',
                    features: [
                        'Microservices architecture',
                        'Integrated payment processing',
                        'Real-time inventory management',
                        'Advanced analytics and reporting',
                        'Mobile-responsive design'
                    ],
                    tech: ['Node.js', 'React', 'MongoDB', 'Stripe', 'Docker', 'AWS'],
                    github: '#',
                    demo: '#'
                },
                project3: {
                    title: 'Data Analytics Tool',
                    description: 'Advanced analytics platform for processing large datasets with machine learning insights and interactive visualization capabilities.',
                    features: [
                        'Big data processing capabilities',
                        'Machine learning model integration',
                        'Interactive data visualizations',
                        'Automated report generation',
                        'RESTful API for data access'
                    ],
                    tech: ['Python', 'Pandas', 'Plotly', 'Docker', 'Apache Spark', 'TensorFlow'],
                    github: '#',
                    demo: '#'
                }
            };
            
            const project = projectData[projectId];
            if (project) {
                modalBody.innerHTML = `
                    <h2>${project.title}</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 2rem;">${project.description}</p>
                    
                    <h3 style="margin-bottom: 1rem;">Key Features</h3>
                    <ul style="margin-bottom: 2rem; padding-left: 1.5rem;">
                        ${project.features.map(feature => `<li style="margin-bottom: 0.5rem;">${feature}</li>`).join('')}
                    </ul>
                    
                    <h3 style="margin-bottom: 1rem;">Technologies Used</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
                        ${project.tech.map(tech => `<span class="tag">${tech}</span>`).join('')}
                    </div>
                    
                    <div style="display: flex; gap: 1rem;">
                        <a href="${project.github}" class="btn btn-secondary">
                            <i class="fab fa-github"></i> View Code
                        </a>
                        <a href="${project.demo}" class="btn btn-primary">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    </div>
                `;
            }
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Form Submission
        function submitForm(event) {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(event.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simulate form submission
            const submitButton = event.target.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitButton.style.background = 'linear-gradient(135deg, #10b981, #14b8a6)';
                
                // Reset form
                event.target.reset();
                
                setTimeout(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                }, 2000);
            }, 1500);
        }

        // Download Resume
        function downloadResume() {
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = 'data:text/plain;charset=utf-8,Alex Chen - Resume\n\nThis is a sample resume file.\n\nContact: alex@example.com\nGitHub: github.com/alexchen\nLinkedIn: linkedin.com/in/alexchen';
            link.download = 'Alex_Chen_Resume.txt';
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Update Active Navigation on Scroll
        function updateActiveNav() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                
                if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }

        // Smooth Scroll Behavior Enhancement
        function enhanceScrolling() {
            let isScrolling = false;
            
            function smoothScroll() {
                if (!isScrolling) {
                    window.requestAnimationFrame(() => {
                        updateScrollProgress();
                        toggleBackToTop();
                        updateActiveNav();
                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            }
            
            window.addEventListener('scroll', smoothScroll);
        }

        // Particle Animation Background
        function createParticles() {
            const particlesContainer = document.createElement('div');
            particlesContainer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
                opacity: 0.1;
            `;
            
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: var(--accent-purple);
                    border-radius: 50%;
                    animation: float ${5 + Math.random() * 10}s linear infinite;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation-delay: ${Math.random() * 5}s;
                `;
                particlesContainer.appendChild(particle);
            }
            
            document.body.appendChild(particlesContainer);
            
            // Add CSS animation for particles
            const style = document.createElement('style');
            style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-20px) rotate(90deg); }
                    50% { transform: translateY(0px) rotate(180deg); }
                    75% { transform: translateY(20px) rotate(270deg); }
                }
            `;
            document.head.appendChild(style);
        }

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Start typing animation
            typeWriter();
            
            // Initialize observers and animations
            observeElements();
            enhanceScrolling();
            createParticles();
            
            // Close modal when clicking outside
            document.getElementById('modal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal();
                }
            });
            
            // Handle escape key for modal
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeModal();
                }
            });
            
            // Add smooth animations to skill items
            const skillItems = document.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
                item.classList.add('fade-in');
            });
            
            // Add staggered animation to project cards
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.2}s`;
                card.classList.add('fade-in');
            });
            
            // Add staggered animation to certificate cards
            const certificateCards = document.querySelectorAll('.certificate-card');
            certificateCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.15}s`;
                card.classList.add('fade-in');
            });
        });

        // Add some additional smooth animations
        const style = document.createElement('style');
        style.textContent = `
            .skill-item,
            .project-card,
            .certificate-card {
                animation: slideUp 0.8s ease-out both;
            }
            
            /* Enhanced hover effects */
            .project-card:hover .project-image::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(139, 92, 246, 0.2);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                color: white;
                transition: all 0.3s ease;
            }
            
            .project-card:hover .project-image::after {
                content: '\\f06e';
                font-family: 'Font Awesome 6 Free';
                font-weight: 900;
            }
            
            /* Loading screen improvements */
            .loading-screen {
                background: radial-gradient(circle at center, var(--accent-purple) 0%, var(--primary-bg) 70%);
            }
            
            /* Navbar scroll effect */
            .navbar.scrolled {
                background: rgba(10, 10, 10, 0.95);
                backdrop-filter: blur(20px);
                box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
            }
        `;
        document.head.appendChild(style);

        // Add navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        })
