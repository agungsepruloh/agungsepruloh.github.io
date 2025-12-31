const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const logoElement = document.getElementById('logo');
const profileImageElement = document.getElementById('profile-image');
const heroNameElement = document.getElementById('hero-name');
const subtitleElement = document.getElementById('subtitle');
const aboutTitleElement = document.getElementById('about-title');
const aboutDescriptionElement = document.getElementById('about-description');
const skillsTitleElement = document.getElementById('skills-title');
const skillsListElement = document.getElementById('skills-list');
const projectsTitleElement = document.getElementById('projects-title');
const projectsContainer = document.getElementById('projects-container');
const showMoreBtn = document.getElementById('show-more-btn');
const experienceTitleElement = document.getElementById('experience-title');
const experienceListElement = document.getElementById('experience-list');
const educationTitleElement = document.getElementById('education-title');
const educationListElement = document.getElementById('education-list');
const contactTitleElement = document.getElementById('contact-title');
const contactInfoElement = document.getElementById('contact-info');
const footerTextElement = document.getElementById('footer-text');
const modalTechTitleElement = document.getElementById('modal-tech-title');
const modalGithubLink = document.getElementById('modal-github');
const modalLiveLink = document.getElementById('modal-live');

const siteContent = {
    logoText: 'Agung Sepruloh',
    navLinks: [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Education', href: '#education' },
        { label: 'Contact', href: '#contact' }
    ],
    hero: {
        name: 'Agung Sepruloh',
        subtitle: 'ERP Software Developer at HashMicro',
        profileImage: {
            src: 'images/agung.png',
            alt: 'Agung Sepruloh profile photo'
        }
    },
    about: {
        title: 'About Me',
        description: "Full Stack Engineer with over 6 years of experience in the IT industry, specializing in ERP systems and software development. Proficient in technologies including Odoo, Python, JavaScript, Flutter, and various databases. Committed to delivering innovative, efficient solutions that enhance business operations. Holds a Bachelor's degree in Informatics Engineering from Universitas Komputer Indonesia. Throughout my career, I have led development teams, integrated complex systems, and contributed to open-source projects. I am passionate about continuous learning and staying updated with the latest technologies. In my free time, I enjoy contributing to the tech community through creating custom modules and conducting research."
    },
    skillsSection: {
        title: 'Skills',
        items: ['Product Development', 'Development Coordination', 'Leading Development Teams', 'System Integration', 'Software Architecture', 'ERP', 'Odoo', 'REST APIs', 'Python', 'XML', 'OWL', 'PostgreSQL', 'JavaScript', 'Mobile Application Development', 'Flutter', 'Dart', 'Java', 'Android', 'Express.js', 'Node.js', 'Mongoose ODM', 'MongoDB', 'jQuery', 'Laravel', 'PHP', 'CodeIgniter', 'MySQL', 'Web Development', 'Docker', 'Git', 'Linux', 'Full Stack Development']
    },
    projectsSection: {
        title: 'My Projects',
        showMoreLabel: 'Show More Projects',
        viewProjectLabel: 'View Project'
    },
    experienceSection: {
        title: 'Experience',
        items: [
            {
                title: 'ERP Software Developer at HashMicro',
                description: 'Oct 2025 - Present · Indonesia · Remote · Skills: Product Development · Odoo · Development Coordination · REST APIs · System Integration · Python · XML',
                icon: 'images/hashmicro.png'
            },
            {
                title: 'Lead Developer at Nibble Softworks',
                description: 'Nov 2022 - Sep 2025 · West Java, Indonesia · Remote · Skills: Software Architecture · OWL · Leading Development Teams · Odoo · Development Coordination',
                icon: 'images/nibble.png'
            },
            {
                title: 'Odoo Developer at InteriorDesign.id',
                description: 'Oct 2022 - Oct 2024 · West Java, Indonesia · Remote · Skills: Odoo · Python · PostgreSQL · JavaScript · XML',
                icon: 'images/interiordesign.png'
            },
            {
                title: 'Mobile Developer at Rolling Glory',
                description: 'May 2022 - Dec 2022 · Bandung, West Java, Indonesia · Hybrid · Skills: Mobile Application Development · Java · Android · REST APIs · Flutter',
                icon: 'images/rollingglory.png'
            },
            {
                title: 'Back End Developer at Wakaspace',
                description: 'Oct 2021 - Mar 2022 · Skills: Mongoose ODM · Express.js · MongoDB · REST APIs · Node.js',
                icon: 'images/wakaspace.png'
            },
            {
                title: 'Back End Developer at Paperdaz',
                description: 'Apr 2021 - Sep 2021 · Skills: Mongoose ODM · Express.js · MongoDB · REST APIs · Node.js',
                icon: 'images/paperdaz.png'
            },
            {
                title: 'Full Stack Engineer at Nibble Softworks',
                description: 'Aug 2019 - Feb 2021 · Indonesia · Skills: PostgreSQL · Python · Dart · jQuery · Flutter · OpenERP',
                icon: 'images/nibble.png'
            },
            {
                title: 'Freelance Web Developer at 4ID Company',
                description: 'Jun 2019 - Aug 2019 · Indonesia · Skills: Web Development',
                icon: 'images/4id.avif'
            }
        ]
    },
    educationSection: {
        title: 'Education',
        items: [
            {
                title: 'Bachelor\'s degree in Informatics Engineering',
                institution: 'Universitas Komputer Indonesia',
                year: '2018 - 2022',
                description: 'Graduated with honors (GPA 3.6/4.0), focused on software engineering, database management, and information systems.'
            }
        ]
    },
    contactSection: {
        title: 'Contact',
        info: [
            { label: 'Email', href: 'mailto:agungsepruloh1996@gmail.com', display: 'agungsepruloh1996@gmail.com', icon: 'fas fa-envelope' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/agung-sepruloh/', display: 'linkedin.com/in/agung-sepruloh', external: true, icon: 'fab fa-linkedin' },
            { label: 'GitHub', href: 'https://github.com/agungsepruloh', display: 'github.com/agungsepruloh', external: true, icon: 'fab fa-github' }
        ]
    },
    footerText: '© {year} Agung Sepruloh. All rights reserved.',
    modalLabels: {
        techTitle: 'Technologies Used:',
        github: 'View on GitHub',
        live: 'Live Demo'
    }
};

const projectData = [
    {
        title: 'Odoo x SleekFlow Integration',
        summary: 'Seamless integration between SleekFlow CRM and Odoo ERP systems for unified customer management, automated data synchronization, and enhanced business workflows. Built custom connectors for real-time syncing of customers, tags, staff, teams, and chat history across platforms.',
        description: 'Developed a comprehensive integration solution connecting SleekFlow CRM with Odoo ERP. Implemented automated data synchronization for customers, tags, staff, teams, and chat history between the two platforms. Created custom API connectors using Python and Odoo webhooks for real-time data flow. The integration reduced manual data entry by 85%, improved customer response times by 60%, and provided unified dashboards for sales and operations teams.',
        images: ['https://placehold.co/400x250/e74c3c/ffffff?text=Odoo+x+SleekFlow', 'https://placehold.co/400x250/c0392b/ffffff?text=Integration'],
        technologies: ['Odoo', 'Python', 'SleekFlow API', 'REST APIs', 'Webhooks', 'PostgreSQL', 'JavaScript'],
        github: '',
        live: '',
    },
    {
        title: 'Odoo x Jubelio Integration',
        summary: 'Seamless integration between Jubelio e-commerce platform and Odoo ERP for automated order fulfillment, real-time inventory synchronization, and unified business operations. Built custom connectors for syncing orders, products, and customer data across platforms.',
        images: ['https://placehold.co/400x250/e74c3c/ffffff?text=Odoo+x+Jubelio', 'https://placehold.co/400x250/c0392b/ffffff?text=Integration'],
        description: 'Developed a comprehensive integration solution connecting Jubelio e-commerce platform with Odoo ERP. Implemented automated data synchronization for orders, products, customers, and inventory between the two platforms. Created custom API connectors using Python and REST APIs for real-time data flow. The integration streamlined order processing, reduced inventory discrepancies by 90%, and provided unified dashboards for sales and operations teams.',
        technologies: ['Odoo', 'Python', 'Jubelio API', 'REST APIs', 'PostgreSQL', 'JavaScript'],
        github: '',
        live: '',
    },
    {
        title: 'Odoo Upgrade v16 to v18',
        summary: 'Comprehensive Odoo upgrade and migration service from version 16 to 18. Handled data migration, module compatibility updates, custom code refactoring, and testing to ensure seamless transition with minimal downtime.',
        images: ['https://placehold.co/400x250/e74c3c/ffffff?text=Odoo+Upgrade', 'https://placehold.co/400x250/c0392b/ffffff?text=Migration+16+to+18'],
        description: 'Performed a complete upgrade and migration of Odoo from version 16 to 18. Migrated all data including customers, orders, inventory, and configurations. Updated custom modules for compatibility, refactored deprecated code, and conducted thorough testing. The upgrade improved performance by 40%, added new features, and ensured business continuity.',
        technologies: ['Odoo 16', 'Odoo 18', 'Python', 'PostgreSQL', 'XML', 'JavaScript', 'Migration Tools'],
        github: '',
        live: '',
    },
    {
        title: 'Odoo Implementation for Noodles Factory',
        summary: 'Complete Odoo ERP implementation for a noodles manufacturing company. Customized manufacturing workflows, inventory management, quality control, and production planning to optimize operations and improve efficiency.',
        images: ['https://placehold.co/400x250/e74c3c/ffffff?text=Odoo+Implementation', 'https://placehold.co/400x250/c0392b/ffffff?text=Noodles+Factory'],
        description: 'Implemented a full Odoo ERP system for a noodles manufacturing company. Customized modules for production planning, raw material tracking, quality assurance, packaging workflows, and distribution management. Integrated with existing machinery and automated reporting. The implementation increased production efficiency by 35%, reduced waste by 25%, and improved on-time deliveries.',
        technologies: ['Odoo', 'Python', 'Manufacturing Module', 'PostgreSQL', 'XML', 'JavaScript'],
        github: '',
        live: '',
    },
    {
        title: 'Odoo Implementation for Trading Company',
        summary: 'Complete Odoo ERP implementation for a trading company. Customized sales workflows, inventory management, procurement processes, and financial reporting to streamline trading operations and improve profitability.',
        images: ['https://placehold.co/400x250/e74c3c/ffffff?text=Odoo+Implementation', 'https://placehold.co/400x250/c0392b/ffffff?text=Trading+Company'],
        description: 'Implemented a comprehensive Odoo ERP system for a trading company. Customized modules for sales order management, supplier procurement, inventory tracking, and financial analytics. Integrated with multiple marketplaces and automated reporting. The implementation optimized supply chain efficiency by 45%, improved cash flow management, and enhanced decision-making with real-time insights.',
        technologies: ['Odoo', 'Python', 'Sales Module', 'PostgreSQL', 'XML', 'JavaScript'],
        github: '',
        live: '',
    },
    {
        title: 'Odoo Customization for Interior Design Company',
        summary: 'Customized Odoo ERP for an interior design company, focusing on Project, Expense, Accounting, and Attendance modules. Developed custom workflows for design phases, expense tracking, invoicing, and team productivity, improving delivery times and client satisfaction.',
        images: ['https://placehold.co/400x250/e74c3c/ffffff?text=Odoo+Customization', 'https://placehold.co/400x250/c0392b/ffffff?text=InteriorDesign.id'],
        description: 'Customized Odoo ERP system for an interior design company, focusing on Project, Expense, Accounting, and Attendance modules. Built custom workflows for project management with design phases, expense tracking for client projects, accounting integration for invoicing, and attendance monitoring for team productivity. The customization improved project delivery times by 40%, enhanced client satisfaction, and provided better resource management.',
        technologies: ['Odoo', 'Python', 'Project Module', 'PostgreSQL', 'XML', 'JavaScript'],
        github: '',
        live: '',
    },
    {
        title: 'Odoo x Ginee Integration',
        summary: 'Seamless integration between Ginee e-commerce platform and Odoo ERP for automated order fulfillment, real-time inventory synchronization, and unified business operations.',
        images: ['https://placehold.co/400x250/e74c3c/ffffff?text=Odoo+x+Ginee', 'https://placehold.co/400x250/c0392b/ffffff?text=Integration'],
        description: 'Developed a comprehensive integration solution connecting Ginee e-commerce platform with Odoo ERP. Implemented automated data synchronization for orders, products, customers, and inventory between the two platforms. Created custom API connectors using Python and Ginee webhooks for real-time data flow. The integration streamlined order processing, reduced inventory discrepancies by 90%, and provided unified dashboards for sales and operations teams.',
        technologies: ['Odoo', 'Python', 'Ginee API', 'REST APIs', 'Webhooks', 'PostgreSQL', 'JavaScript'],
        github: '',
        live: '',
    },
    {
        title: 'Lead Developer - IAMKRI @ Nibble Softworks',
        summary: 'Led the development of the IAMKRI project as a lead developer at Nibble Softworks. Managed a team of 3 developers and implemented an Odoo-based membership management system with key features for member registration, payments, and notifications.',
        images: ['https://placehold.co/400x250/e74c3c/ffffff?text=Lead+Developer', 'https://placehold.co/400x250/c0392b/ffffff?text=IAMKRI'],
        description: 'As lead developer for the IAMKRI project at Nibble Softworks, I led the development of a comprehensive Odoo-based membership management system. Key features implemented include member registration (individual and institutional), payment processing integration with Midtrans, membership history tracking, automated email notifications, data import/export functionalities, website integration with blog and registration forms, and extensive configurations for membership management. Led a team of 3 developers, ensuring timely delivery and high system reliability.',
        technologies: ['Odoo', 'Python', 'PostgreSQL', 'Docker', 'JavaScript', 'Midtrans API', 'Payment Gateway'],
        github: '',
        live: 'https://iamkri.id',
    },
    {
        title: 'Lead Developer - CAN Tours & Travel @ Nibble Softworks',
        summary: 'Led the development of the CAN Tours & Travel website as a lead developer using Odoo. Managed a team, designed the architecture, and implemented features for a travel booking and management system.',
        images: ['https://placehold.co/400x250/e74c3c/ffffff?text=Lead+Developer', 'https://placehold.co/400x250/c0392b/ffffff?text=CAN+Tours+Travel'],
        description: 'As lead developer for the CAN Tours & Travel website at Nibble Softworks, I led the development of a comprehensive travel booking platform. Key features implemented include Midtrans payment integration with auto-order confirmation, booking system with date and time selection, product variants in pricelists, meeting point options, and extensive website fixes for user experience. Ensured seamless integration and reliable functionality for travel bookings.',
        technologies: ['Odoo', 'Python', 'PostgreSQL', 'Docker', 'JavaScript', 'Website Builder', 'Midtrans API', 'Payment Gateway'],
        github: '',
        live: 'https://can-tours.com',
    }
];

const PROJECT_BATCH_SIZE = 3;
let visibleProjects = PROJECT_BATCH_SIZE;
let projectCards = [];
let typewriterText = '';
let typewriterIndex = 0;

renderContent();
setupSmoothScroll();

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navMenu.addEventListener('click', (event) => {
    const navLink = event.target.closest('a');
    if (navLink) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

logoElement.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

showMoreBtn.addEventListener('click', () => {
    const previousVisible = visibleProjects;
    visibleProjects = Math.min(visibleProjects + PROJECT_BATCH_SIZE, projectCards.length);
    for (let i = previousVisible; i < visibleProjects; i++) {
        const card = projectCards[i];
        card.style.display = 'block';
        setTimeout(() => {
            card.classList.add('reveal');
        }, 100);
    }
    updateShowMoreButtonState();
});

const modal = document.getElementById('project-modal');
const closeBtn = document.getElementsByClassName('close')[0];
let modalResizeHandler = null;

function openProjectModal(projectIndex) {
    const project = projectData[projectIndex];
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;

    const sliderContainer = document.getElementById('slider-container');
    const dotsContainer = document.getElementById('slider-dots');

    sliderContainer.querySelectorAll('img').forEach(img => img.remove());
    dotsContainer.innerHTML = '';

    project.images.forEach((img, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.alt = `${project.title} screenshot`;
        imgElement.setAttribute('loading', 'lazy');
        sliderContainer.appendChild(imgElement);

        const dot = document.createElement('div');
        dot.className = 'slider-dot';
        if (index === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    let currentSlide = 0;
    const slides = sliderContainer.querySelectorAll('img');
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function updateSlides() {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            sliderContainer.style.display = 'flex';
            sliderContainer.style.justifyContent = 'center';
            sliderContainer.style.alignItems = 'center';
            sliderContainer.style.gap = '0';
            sliderContainer.style.overflow = 'hidden';
        } else {
            sliderContainer.style.display = 'block';
            sliderContainer.style.gap = '';
            sliderContainer.style.justifyContent = '';
            sliderContainer.style.alignItems = '';
            sliderContainer.style.overflow = 'visible';
        }
        slides.forEach((slide, index) => {
            if (isMobile) {
                slide.classList.toggle('active', index === currentSlide);
                slide.style.width = '100%';
                slide.style.display = '';
                slide.style.margin = '';
            } else {
                slide.classList.remove('active');
                slide.style.width = '48%';
                slide.style.display = 'inline-block';
                slide.style.margin = '0 1% 1rem 1%';
            }
        });
        dots.forEach((dot, index) => {
            dot.style.display = isMobile ? 'block' : 'none';
            dot.classList.toggle('active', isMobile && index === currentSlide);
        });
        prevBtn.style.display = isMobile ? 'block' : 'none';
        nextBtn.style.display = isMobile ? 'block' : 'none';
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlides();
    }

    prevBtn.onclick = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    };

    nextBtn.onclick = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    };

    if (modalResizeHandler) {
        window.removeEventListener('resize', modalResizeHandler);
    }
    modalResizeHandler = () => updateSlides();
    window.addEventListener('resize', modalResizeHandler);

    updateSlides();

    const techList = document.getElementById('modal-tech-list');
    techList.innerHTML = '';
    project.technologies.forEach(tech => {
        const techSpan = document.createElement('span');
        techSpan.textContent = tech;
        techList.appendChild(techSpan);
    });

    modalGithubLink.href = project.github;
    modalGithubLink.textContent = project.github ? siteContent.modalLabels.github : 'Private Repo';
    if (!project.github) {
        modalGithubLink.href = 'javascript:void(0)';
        modalGithubLink.style.pointerEvents = 'none';
        modalGithubLink.classList.add('disabled');
    } else {
        modalGithubLink.href = project.github;
        modalGithubLink.style.pointerEvents = 'auto';
        modalGithubLink.classList.remove('disabled');
    }

    modalLiveLink.href = project.live;
    modalLiveLink.textContent = project.live ? siteContent.modalLabels.live : 'Private Demo';
    if (!project.live) {
        modalLiveLink.href = 'javascript:void(0)';
        modalLiveLink.style.pointerEvents = 'none';
        modalLiveLink.classList.add('disabled');
    } else {
        modalLiveLink.href = project.live;
        modalLiveLink.style.pointerEvents = 'auto';
        modalLiveLink.classList.remove('disabled');
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    if (modalResizeHandler) {
        window.removeEventListener('resize', modalResizeHandler);
        modalResizeHandler = null;
    }
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        if (modalResizeHandler) {
            window.removeEventListener('resize', modalResizeHandler);
            modalResizeHandler = null;
        }
    }
};

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        if (modalResizeHandler) {
            window.removeEventListener('resize', modalResizeHandler);
            modalResizeHandler = null;
        }
    }
});

function renderContent() {
    populateNavigation();
    populateHero();
    populateAbout();
    populateSkills();
    populateProjects();
    populateExperience();
    populateEducation();
    populateContact();
    populateFooter();
    populateModalLabels();
    window.scrollTo(0, 0);
}

function populateNavigation() {
    logoElement.textContent = siteContent.logoText;
    navMenu.innerHTML = '';
    siteContent.navLinks.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.label;
        listItem.appendChild(anchor);
        navMenu.appendChild(listItem);
    });
}

function populateHero() {
    const { hero } = siteContent;
    profileImageElement.src = hero.profileImage.src;
    profileImageElement.alt = hero.profileImage.alt;
    heroNameElement.textContent = hero.name;
    typewriterText = hero.subtitle;
    startTypewriter();
}

function startTypewriter() {
    subtitleElement.textContent = '';
    typewriterIndex = 0;

    function typeWriterStep() {
        if (typewriterIndex < typewriterText.length) {
            subtitleElement.textContent += typewriterText.charAt(typewriterIndex);
            typewriterIndex += 1;
            setTimeout(typeWriterStep, 100);
        }
    }

    setTimeout(typeWriterStep, 1000);
}

function populateAbout() {
    aboutTitleElement.textContent = siteContent.about.title;
    aboutDescriptionElement.textContent = siteContent.about.description;
}

function getSkillIcon(skill) {
    const icons = {
        'Product Development': 'fas fa-lightbulb',
        'Development Coordination': 'fas fa-users-cog',
        'Leading Development Teams': 'fas fa-user-tie',
        'System Integration': 'fas fa-puzzle-piece',
        'Software Architecture': 'fas fa-sitemap',
        'ERP': 'fas fa-building',
        'Odoo': 'fas fa-cogs',
        'REST APIs': 'fas fa-exchange-alt',
        'Python': 'fab fa-python',
        'XML': 'fas fa-code',
        'OWL': 'fas fa-code',
        'PostgreSQL': 'fas fa-database',
        'JavaScript': 'fab fa-js-square',
        'Mobile Application Development': 'fas fa-mobile-alt',
        'Flutter': 'fa-brands fa-flutter',
        'Dart': 'fa-brands fa-dart-lang',
        'Java': 'fab fa-java',
        'Android': 'fab fa-android',
        'Express.js': 'fab fa-node-js',
        'Node.js': 'fab fa-node-js',
        'Mongoose ODM': 'fas fa-database',
        'MongoDB': 'fas fa-database',
        'jQuery': 'fab fa-js-square',
        'Laravel': 'fab fa-laravel',
        'PHP': 'fab fa-php',
        'CodeIgniter': 'fas fa-code',
        'MySQL': 'fas fa-database',
        'Web Development': 'fas fa-globe',
        'Docker': 'fab fa-docker',
        'Git': 'fab fa-git-alt',
        'Linux': 'fab fa-linux',
        'Full Stack Development': 'fas fa-layer-group'
    };
    return icons[skill] || 'fas fa-code';
}

function populateSkills() {
    skillsListElement.innerHTML = '';
    skillsTitleElement.textContent = siteContent.skillsSection.title;
    siteContent.skillsSection.items.forEach(skill => {
        const skillSpan = document.createElement('span');
        skillSpan.className = 'skill';
        const iconClass = getSkillIcon(skill);
        if (iconClass) {
            const icon = document.createElement('i');
            icon.className = iconClass;
            skillSpan.appendChild(icon);
            skillSpan.appendChild(document.createTextNode(' ')); // space
        }
        skillSpan.appendChild(document.createTextNode(skill));
        skillsListElement.appendChild(skillSpan);
    });
}

function populateProjects() {
    projectsTitleElement.textContent = siteContent.projectsSection.title;
    showMoreBtn.textContent = siteContent.projectsSection.showMoreLabel;
    projectsContainer.innerHTML = '';
    visibleProjects = Math.min(PROJECT_BATCH_SIZE, projectData.length);

    projectData.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsContainer.appendChild(projectCard);
    });

    projectCards = Array.from(projectsContainer.querySelectorAll('.project'));
    applyProjectVisibility();
}

function createProjectCard(project, index) {
    const projectWrapper = document.createElement('div');
    projectWrapper.className = 'project';

    const titleElement = document.createElement('h3');
    titleElement.textContent = project.title;

    const summaryElement = document.createElement('p');
    summaryElement.textContent = project.summary;

    const buttonElement = document.createElement('button');
    buttonElement.className = 'view-project-btn';
    buttonElement.textContent = siteContent.projectsSection.viewProjectLabel;
    buttonElement.addEventListener('click', () => openProjectModal(index));

    projectWrapper.appendChild(titleElement);
    projectWrapper.appendChild(summaryElement);
    projectWrapper.appendChild(buttonElement);

    return projectWrapper;
}

function applyProjectVisibility() {
    projectCards.forEach((card, index) => {
        if (index < visibleProjects) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
            card.classList.remove('reveal');
        }
    });
    updateShowMoreButtonState();
}

function updateShowMoreButtonState() {
    if (projectCards.length > visibleProjects) {
        showMoreBtn.style.display = 'inline-block';
    } else {
        showMoreBtn.style.display = 'none';
    }
}

function populateExperience() {
    experienceTitleElement.textContent = siteContent.experienceSection.title;
    experienceListElement.innerHTML = '';
    siteContent.experienceSection.items.forEach(item => {
        const experienceWrapper = document.createElement('div');
        experienceWrapper.className = 'project experience-item';

        if (item.icon) {
            const iconElement = document.createElement('img');
            iconElement.src = item.icon;
            iconElement.alt = `${item.title} icon`;
            iconElement.className = 'company-icon';
            experienceWrapper.appendChild(iconElement);
        }

        const contentDiv = document.createElement('div');
        contentDiv.className = 'experience-content';

        const titleElement = document.createElement('h3');
        titleElement.textContent = item.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = item.description;

        contentDiv.appendChild(titleElement);
        contentDiv.appendChild(descriptionElement);
        experienceWrapper.appendChild(contentDiv);
        experienceListElement.appendChild(experienceWrapper);
    });
}

function populateEducation() {
    educationTitleElement.textContent = siteContent.educationSection.title;
    educationListElement.innerHTML = '';
    siteContent.educationSection.items.forEach(item => {
        const educationWrapper = document.createElement('div');
        educationWrapper.className = 'project';

        const titleElement = document.createElement('h3');
        titleElement.textContent = item.title;

        const institutionElement = document.createElement('p');
        institutionElement.textContent = `${item.institution} · ${item.year}`;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = item.description;

        educationWrapper.appendChild(titleElement);
        educationWrapper.appendChild(institutionElement);
        educationWrapper.appendChild(descriptionElement);
        educationListElement.appendChild(educationWrapper);
    });
}

function populateContact() {
    contactTitleElement.textContent = siteContent.contactSection.title;
    contactInfoElement.innerHTML = '';
    siteContent.contactSection.info.forEach(item => {
        const paragraph = document.createElement('p');
        if (item.icon) {
            const icon = document.createElement('i');
            icon.className = item.icon;
            paragraph.appendChild(icon);
        }
        const strong = document.createElement('strong');
        strong.textContent = `${item.label}: `;

        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.display;
        if (item.external) {
            link.target = '_blank';
        }

        paragraph.appendChild(strong);
        paragraph.appendChild(link);
        contactInfoElement.appendChild(paragraph);
    });
}

function populateFooter() {
    footerTextElement.textContent = siteContent.footerText.replace('{year}', new Date().getFullYear());
}

function populateModalLabels() {
    modalTechTitleElement.textContent = siteContent.modalLabels.techTitle;
    modalGithubLink.textContent = siteContent.modalLabels.github;
    modalLiveLink.textContent = siteContent.modalLabels.live;
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                event.preventDefault();
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = (Math.random() * 20 + 10) + 'px';
    snowflake.style.animationDelay = Math.random() * 10 + 's';
    document.body.appendChild(snowflake);
    let y = -10;
    const speed = 3; // pixels per frame
    function animate() {
        const pageHeight = document.body.scrollHeight;
        y += speed;
        snowflake.style.transform = 'translateY(' + y + 'px)';
        if (y < pageHeight) {
            requestAnimationFrame(animate);
        } else {
            snowflake.remove();
        }
    }
    requestAnimationFrame(animate);
}

function startSnow() {
    setInterval(createSnowflake, 200);
}

window.addEventListener('load', () => {
    startSnow();
    window.scrollTo(0, 0);
});