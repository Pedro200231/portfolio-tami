// ===== MULTILINGUAL TRANSLATIONS =====
const translations = {
    pt: {
        // Navigation
        'nav-home': 'Início',
        'nav-about': 'Sobre',
        'nav-skills': 'Habilidades',
        'nav-experience': 'Experiência',
        'nav-highlights': 'Destaques',
        'nav-contact': 'Contato',
        
        // Hero Section
        'hero-greeting': 'Olá, eu sou',
        'hero-subtitle': 'Analista de QA',
        'hero-description': '"Eu não busco falhas para apontar erros,<br>mas para tornar experiências mais humanas, confiáveis e completas."',
        'hero-btn-about': 'Conhecer mais',
        'hero-btn-contact': 'Entrar em contato',
        
        // About Section
        'about-title': 'Sobre Mim',
        'about-subtitle': 'Uma jornada dedicada à qualidade e excelência',
        'about-bio-1': 'Sou uma analista de QA apaixonada por garantir que cada produto entregue mais do que o esperado. Com empatia, organização e uma visão sistêmica, atuo para promover qualidade em cada detalhe.',
        'about-bio-2': 'Minha trajetória profissional é marcada pelo cuidado com a equipe, com os processos e, principalmente, com quem utiliza os produtos que ajudo a testar e aprimorar.',
        
        // Soft Skills
        'soft-skills-title': 'Soft Skills',
        'soft-skill-vision': 'Visão Panorâmica',
        'soft-skill-communication': 'Comunicação',
        'soft-skill-collaboration': 'Colaboração',
        'soft-skill-proactive': 'Proatividade',
        'soft-skill-organization': 'Organização',
        'soft-skill-learning': 'Aprendizado Rápido',
        
        // Beyond Work
        'beyond-title': 'Além do trabalho',
        'beyond-quote-1': '"Acredito que a tecnologia deve servir às pessoas, não o contrário."',
        'beyond-quote-2': '"Cada bug encontrado é uma oportunidade de melhorar a experiência de alguém."',
        'beyond-quote-3': '"A qualidade não é um destino, é uma jornada constante de aprimoramento."',
        
        // Skills Section
        'skills-title': 'Habilidades Técnicas',
        'skills-subtitle': 'Ferramentas e metodologias que domino',
        
        // Technical Skills
        'skill-testing-title': 'Testes Manuais e Automatizados',
        'skill-testing-desc': 'Execução de testes funcionais, regressivos e exploratórios',
        'skill-orange-title': 'Orange Testing',
        'skill-orange-desc': 'Ferramenta especializada para automação de testes',
        'skill-azure-title': 'Azure DevOps',
        'skill-azure-desc': 'Gestão de projetos, pipelines e controle de versão',
        'skill-bugs-title': 'Gestão de Bugs',
        'skill-bugs-desc': 'Identificação, documentação e acompanhamento de defeitos',
        'skill-docs-title': 'Documentação de Processos',
        'skill-docs-desc': 'Criação de manuais e procedimentos de teste',
        'skill-agile-title': 'Scrum / Kanban',
        'skill-agile-desc': 'Metodologias ágeis e gestão de projetos',
        'skill-proto-title': 'Prototipação de Telas',
        'skill-proto-desc': 'Design e validação de interfaces de usuário',
        
        // Experience Section
        'experience-title': 'Experiência Profissional',
        'experience-subtitle': 'Jornada de crescimento e impacto',
        
        // Timeline Content
        'forlogic-role': 'Analista de QA',
        'forlogic-description': 'Como única QA da pipeline, fui responsável por garantir a qualidade de todo o ciclo de desenvolvimento, desde a concepção até a entrega final.',
        'forlogic-achievement-1': 'Gestão completa de bugs e controle de qualidade',
        'forlogic-achievement-2': 'Implementação de processos de teste eficientes',
        'forlogic-achievement-3': 'Colaboração direta com equipes de desenvolvimento',
        'forlogic-achievement-4': 'Redução significativa de defeitos em produção',
        
        'pa-role': 'Analista de QA',
        'pa-description': 'Focada na documentação detalhada de processos, execução de testes rigorosos e design de interfaces intuitivas.',
        'pa-achievement-1': 'Documentação abrangente de processos de teste',
        'pa-achievement-2': 'Design e prototipação de telas',
        'pa-achievement-3': 'Testes funcionais e de usabilidade',
        'pa-achievement-4': 'Melhoria contínua de processos',
        
        // Hero Badges
        'hero-badge-tests': 'Testes',
        'hero-badge-quality': 'Qualidade',
        'hero-badge-docs': 'Documentação',
        
        // Highlights Section
        'highlights-title': 'Casos Marcantes',
        'highlights-subtitle': 'Momentos que definiram minha trajetória como QA',
        
        'highlight-1-title': 'Capacitação de Equipe',
        'highlight-1-desc': 'Atuei na capacitação e mentoria de 3 novos QAs na empresa, compartilhando conhecimentos e boas práticas.',
        'highlight-1-impact': 'Equipe QA fortalecida',
        
        'highlight-2-title': 'Gestão Simultânea',
        'highlight-2-desc': 'Gerenciei com sucesso 2 sprints de pipelines diferentes simultaneamente, mantendo a qualidade em ambos os projetos.',
        'highlight-2-impact': 'Eficiência operacional',
        
        'highlight-3-title': 'Impacto Estratégico',
        'highlight-3-desc': 'Atuei diretamente em KRs (Key Results) e inúmeros processos estratégicos da empresa, contribuindo para o crescimento organizacional.',
        'highlight-3-impact': 'Resultados estratégicos',
        
        // Contact Section
        'contact-title': 'Vamos Conversar?',
        'contact-subtitle': 'Estou sempre aberta a novas oportunidades e conexões',
        'contact-email': 'Email',
        'contact-form-name': 'Nome',
        'contact-form-email': 'Email',
        'contact-form-message': 'Mensagem',
        'contact-form-send': 'Enviar Mensagem',
        'contact-form-sending': 'Enviando...',
        'contact-success': 'Mensagem enviada com sucesso!',
        
        // Form placeholders
        'placeholder-name': 'Seu nome completo',
        'placeholder-email': 'seu@email.com',
        'placeholder-message': 'Sua mensagem aqui...',
        
        // Validation errors
        'error-name-required': 'Nome é obrigatório',
        'error-email-required': 'Email é obrigatório',
        'error-email-invalid': 'Email inválido',
        'error-message-required': 'Mensagem é obrigatória',
        'error-message-min': 'Mensagem deve ter pelo menos 10 caracteres',
        
        // Resume
        'resume-title': 'Currículo Completo',
        'resume-description': 'Baixe meu currículo em PDF para conhecer mais detalhes sobre minha formação, experiências e certificações.',
        'resume-download': 'Baixar Currículo',
        
        // Footer
        'footer-text': 'Feito com 💜 e dedicação à qualidade.',
        'footer-back': 'Voltar ao topo'
    },
    
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-experience': 'Experience',
        'nav-highlights': 'Highlights',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-greeting': 'Hello, I am',
        'hero-subtitle': 'QA Analyst',
        'hero-description': '"I don\'t seek flaws to point out errors,<br>but to make experiences more human, reliable and complete."',
        'hero-btn-about': 'Learn more',
        'hero-btn-contact': 'Get in touch',
        
        // About Section
        'about-title': 'About Me',
        'about-subtitle': 'A journey dedicated to quality and excellence',
        'about-bio-1': 'I am a QA analyst passionate about ensuring that each product delivers more than expected. With empathy, organization and a systemic vision, I work to promote quality in every detail.',
        'about-bio-2': 'My professional journey is marked by care for the team, processes, and especially for those who use the products I help test and improve.',
        
        // Soft Skills
        'soft-skills-title': 'Soft Skills',
        'soft-skill-vision': 'Panoramic Vision',
        'soft-skill-communication': 'Communication',
        'soft-skill-collaboration': 'Collaboration',
        'soft-skill-proactive': 'Proactivity',
        'soft-skill-organization': 'Organization',
        'soft-skill-learning': 'Fast Learning',
        
        // Beyond Work
        'beyond-title': 'Beyond work',
        'beyond-quote-1': '"I believe technology should serve people, not the other way around."',
        'beyond-quote-2': '"Every bug found is an opportunity to improve someone\'s experience."',
        'beyond-quote-3': '"Quality is not a destination, it\'s a constant journey of improvement."',
        
        // Skills Section
        'skills-title': 'Technical Skills',
        'skills-subtitle': 'Tools and methodologies I master',
        
        // Technical Skills
        'skill-testing-title': 'Manual and Automated Testing',
        'skill-testing-desc': 'Execution of functional, regression and exploratory tests',
        'skill-orange-title': 'Orange Testing',
        'skill-orange-desc': 'Specialized tool for test automation',
        'skill-azure-title': 'Azure DevOps',
        'skill-azure-desc': 'Project management, pipelines and version control',
        'skill-bugs-title': 'Bug Management',
        'skill-bugs-desc': 'Identification, documentation and tracking of defects',
        'skill-docs-title': 'Process Documentation',
        'skill-docs-desc': 'Creation of manuals and testing procedures',
        'skill-agile-title': 'Scrum / Kanban',
        'skill-agile-desc': 'Agile methodologies and project management',
        'skill-proto-title': 'Screen Prototyping',
        'skill-proto-desc': 'Design and validation of user interfaces',
        
        // Experience Section
        'experience-title': 'Professional Experience',
        'experience-subtitle': 'Journey of growth and impact',
        
        // Timeline Content
        'forlogic-role': 'QA Analyst',
        'forlogic-description': 'As the sole QA in the pipeline, I was responsible for ensuring quality throughout the entire development cycle, from conception to final delivery.',
        'forlogic-achievement-1': 'Complete bug management and quality control',
        'forlogic-achievement-2': 'Implementation of efficient testing processes',
        'forlogic-achievement-3': 'Direct collaboration with development teams',
        'forlogic-achievement-4': 'Significant reduction of production defects',
        
        'pa-role': 'QA Analyst',
        'pa-description': 'Focused on detailed process documentation, rigorous test execution, and intuitive interface design.',
        'pa-achievement-1': 'Comprehensive testing process documentation',
        'pa-achievement-2': 'Screen design and prototyping',
        'pa-achievement-3': 'Functional and usability testing',
        'pa-achievement-4': 'Continuous process improvement',
        
        // Hero Badges
        'hero-badge-tests': 'Testing',
        'hero-badge-quality': 'Quality',
        'hero-badge-docs': 'Documentation',
        
        // Highlights Section
        'highlights-title': 'Key Highlights',
        'highlights-subtitle': 'Moments that defined my journey as a QA',
        
        'highlight-1-title': 'Team Training',
        'highlight-1-desc': 'Led the training and mentoring of 3 new QAs in the company, sharing knowledge and best practices.',
        'highlight-1-impact': 'Strengthened QA team',
        
        'highlight-2-title': 'Simultaneous Management',
        'highlight-2-desc': 'Successfully managed 2 sprints from different pipelines simultaneously, maintaining quality in both projects.',
        'highlight-2-impact': 'Operational efficiency',
        
        'highlight-3-title': 'Strategic Impact',
        'highlight-3-desc': 'Worked directly on KRs (Key Results) and numerous strategic company processes, contributing to organizational growth.',
        'highlight-3-impact': 'Strategic results',
        
        // Contact Section
        'contact-title': 'Let\'s Talk?',
        'contact-subtitle': 'I\'m always open to new opportunities and connections',
        'contact-email': 'Email',
        'contact-form-name': 'Name',
        'contact-form-email': 'Email',
        'contact-form-message': 'Message',
        'contact-form-send': 'Send Message',
        'contact-form-sending': 'Sending...',
        'contact-success': 'Message sent successfully!',
        
        // Form placeholders
        'placeholder-name': 'Your full name',
        'placeholder-email': 'your@email.com',
        'placeholder-message': 'Your message here...',
        
        // Validation errors
        'error-name-required': 'Name is required',
        'error-email-required': 'Email is required',
        'error-email-invalid': 'Invalid email',
        'error-message-required': 'Message is required',
        'error-message-min': 'Message must be at least 10 characters',
        
        // Resume
        'resume-title': 'Complete Resume',
        'resume-description': 'Download my PDF resume to learn more details about my education, experiences and certifications.',
        'resume-download': 'Download Resume',
        
        // Footer
        'footer-text': 'Made with 💜 and dedication to quality.',
        'footer-back': 'Back to top'
    },
    
    es: {
        // Navigation
        'nav-home': 'Inicio',
        'nav-about': 'Acerca',
        'nav-skills': 'Habilidades',
        'nav-experience': 'Experiencia',
        'nav-highlights': 'Destacados',
        'nav-contact': 'Contacto',
        
        // Hero Section
        'hero-greeting': 'Hola, soy',
        'hero-subtitle': 'Analista de QA',
        'hero-description': '"No busco fallas para señalar errores,<br>sino para hacer experiencias más humanas, confiables y completas."',
        'hero-btn-about': 'Conocer más',
        'hero-btn-contact': 'Ponerse en contacto',
        
        // About Section
        'about-title': 'Sobre Mí',
        'about-subtitle': 'Un viaje dedicado a la calidad y la excelencia',
        'about-bio-1': 'Soy una analista de QA apasionada por garantizar que cada producto entregue más de lo esperado. Con empatía, organización y una visión sistémica, trabajo para promover la calidad en cada detalle.',
        'about-bio-2': 'Mi trayectoria profesional está marcada por el cuidado del equipo, los procesos y, especialmente, de quienes usan los productos que ayudo a probar y mejorar.',
        
        // Soft Skills
        'soft-skills-title': 'Habilidades Blandas',
        'soft-skill-vision': 'Visión Panorámica',
        'soft-skill-communication': 'Comunicación',
        'soft-skill-collaboration': 'Colaboración',
        'soft-skill-proactive': 'Proactividad',
        'soft-skill-organization': 'Organización',
        'soft-skill-learning': 'Aprendizaje Rápido',
        
        // Beyond Work
        'beyond-title': 'Más allá del trabajo',
        'beyond-quote-1': '"Creo que la tecnología debe servir a las personas, no al revés."',
        'beyond-quote-2': '"Cada error encontrado es una oportunidad para mejorar la experiencia de alguien."',
        'beyond-quote-3': '"La calidad no es un destino, es un viaje constante de mejora."',
        
        // Skills Section
        'skills-title': 'Habilidades Técnicas',
        'skills-subtitle': 'Herramientas y metodologías que domino',
        
        // Technical Skills
        'skill-testing-title': 'Pruebas Manuales y Automatizadas',
        'skill-testing-desc': 'Ejecución de pruebas funcionales, de regresión y exploratorias',
        'skill-orange-title': 'Orange Testing',
        'skill-orange-desc': 'Herramienta especializada para automatización de pruebas',
        'skill-azure-title': 'Azure DevOps',
        'skill-azure-desc': 'Gestión de proyectos, pipelines y control de versiones',
        'skill-bugs-title': 'Gestión de Bugs',
        'skill-bugs-desc': 'Identificación, documentación y seguimiento de defectos',
        'skill-docs-title': 'Documentación de Procesos',
        'skill-docs-desc': 'Creación de manuales y procedimientos de prueba',
        'skill-agile-title': 'Scrum / Kanban',
        'skill-agile-desc': 'Metodologías ágiles y gestión de proyectos',
        'skill-proto-title': 'Prototipado de Pantallas',
        'skill-proto-desc': 'Diseño y validación de interfaces de usuario',
        
        // Experience Section
        'experience-title': 'Experiencia Profesional',
        'experience-subtitle': 'Viaje de crecimiento e impacto',
        
        // Timeline Content
        'forlogic-role': 'Analista de QA',
        'forlogic-description': 'Como única QA del pipeline, fui responsable de garantizar la calidad de todo el ciclo de desarrollo, desde la concepción hasta la entrega final.',
        'forlogic-achievement-1': 'Gestión completa de bugs y control de calidad',
        'forlogic-achievement-2': 'Implementación de procesos de prueba eficientes',
        'forlogic-achievement-3': 'Colaboración directa con equipos de desarrollo',
        'forlogic-achievement-4': 'Reducción significativa de defectos en producción',
        
        'pa-role': 'Analista de QA',
        'pa-description': 'Enfocada en la documentación detallada de procesos, ejecución de pruebas rigurosas y diseño de interfaces intuitivas.',
        'pa-achievement-1': 'Documentación integral de procesos de prueba',
        'pa-achievement-2': 'Diseño y prototipado de pantallas',
        'pa-achievement-3': 'Pruebas funcionales y de usabilidad',
        'pa-achievement-4': 'Mejora continua de procesos',
        
        // Hero Badges
        'hero-badge-tests': 'Pruebas',
        'hero-badge-quality': 'Calidad',
        'hero-badge-docs': 'Documentación',
        
        // Highlights Section
        'highlights-title': 'Casos Destacados',
        'highlights-subtitle': 'Momentos que definieron mi trayectoria como QA',
        
        'highlight-1-title': 'Capacitación de Equipo',
        'highlight-1-desc': 'Actué en la capacitación y mentoría de 3 nuevos QAs en la empresa, compartiendo conocimientos y mejores prácticas.',
        'highlight-1-impact': 'Equipo QA fortalecido',
        
        'highlight-2-title': 'Gestión Simultánea',
        'highlight-2-desc': 'Gestioné con éxito 2 sprints de pipelines diferentes simultáneamente, manteniendo la calidad en ambos proyectos.',
        'highlight-2-impact': 'Eficiencia operacional',
        
        'highlight-3-title': 'Impacto Estratégico',
        'highlight-3-desc': 'Actué directamente en KRs (Key Results) y numerosos procesos estratégicos de la empresa, contribuyendo al crecimiento organizacional.',
        'highlight-3-impact': 'Resultados estratégicos',
        
        // Contact Section
        'contact-title': '¿Hablamos?',
        'contact-subtitle': 'Siempre estoy abierta a nuevas oportunidades y conexiones',
        'contact-email': 'Email',
        'contact-form-name': 'Nombre',
        'contact-form-email': 'Email',
        'contact-form-message': 'Mensaje',
        'contact-form-send': 'Enviar Mensaje',
        'contact-form-sending': 'Enviando...',
        'contact-success': '¡Mensaje enviado con éxito!',
        
        // Form placeholders
        'placeholder-name': 'Tu nombre completo',
        'placeholder-email': 'tu@email.com',
        'placeholder-message': 'Tu mensaje aquí...',
        
        // Validation errors
        'error-name-required': 'Nombre es obligatorio',
        'error-email-required': 'Email es obligatorio',
        'error-email-invalid': 'Email inválido',
        'error-message-required': 'Mensaje es obligatorio',
        'error-message-min': 'Mensaje debe tener al menos 10 caracteres',
        
        // Resume
        'resume-title': 'Currículum Completo',
        'resume-description': 'Descarga mi currículum en PDF para conocer más detalles sobre mi formación, experiencias y certificaciones.',
        'resume-download': 'Descargar Currículum',
        
        // Footer
        'footer-text': 'Hecho con 💜 y dedicación a la calidad.',
        'footer-back': 'Volver arriba'
    }
};

// Language data with flags and codes
const languageData = {
    pt: { flag: '🇧🇷', name: 'Português', code: 'PT' },
    en: { flag: '🇺🇸', name: 'English', code: 'EN' },
    es: { flag: '🇪🇸', name: 'Español', code: 'ES' }
};

export { translations, languageData };
