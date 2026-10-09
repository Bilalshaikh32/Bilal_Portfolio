/* Portfolio content. Case-study claims are scoped to files reviewed in October 2026.
 * Some project covers are illustrations; they are never real application screenshots.
 * No private source, API credentials or fabricated live links are included. */
window.PORTFOLIO_DATA = {
  skills: [
    { name: 'Core web stack', icon: 'code', note: 'My primary full-stack toolkit', skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git & GitHub'] },
    { name: 'Project-based experience', icon: 'server', note: 'Technologies used in learning and development projects', skills: ['Python', 'PHP', 'C# / .NET', 'SQL Server', 'MySQL', 'Streamlit', 'Playwright', 'JWT Authentication'] },
    { name: 'UI, design & integrations', icon: 'palette', note: 'From wireframes to connected interfaces', skills: ['Figma', 'UI/UX Fundamentals', 'API Integration', 'Responsive Design', 'Tailwind CSS', 'Bootstrap', 'Wireframing', 'Prototyping'] }
  ],
  additionalSkills: ['TypeScript', 'Angular', 'AngularJS', 'jQuery', 'Laravel', 'AWS', 'Microsoft Azure', 'Cloudflare', 'Firebase', 'R Programming', 'Hadoop', 'HDFS', 'Apache', 'SSMS'],
  services: [
    { number: '01', title: 'Full Stack Web Apps', icon: 'layers', description: 'Responsive applications that connect clean frontend interfaces with APIs, authentication and data.' },
    { number: '02', title: 'Frontend Development', icon: 'code', description: 'Accessible, mobile-friendly pages and thoughtful React or HTML/CSS/JavaScript interfaces.' },
    { number: '03', title: 'Backend & API Integration', icon: 'server', description: 'REST endpoints, database-connected features and third-party API workflows.' },
    { number: '04', title: 'UI/UX & Figma', icon: 'palette', description: 'Wireframes, interface concepts and designs with a clear focus on usability.' }
  ],
  projects: [
    {
      id: 'eventsphere', number: '01', title: 'EventSphere', descriptor: 'EVENT MANAGEMENT PLATFORM',
      summary: 'A multi-role event and expo management application with dashboards for different participants, event administration and booth workflows.',
      category: 'Full Stack', featured: true, tags: ['React', 'Express.js', 'MongoDB', 'Redux Toolkit'],
      challenge: 'Events involve administrators, organizers, exhibitors and attendees, each needing different permissions and information in one place.',
      implementation: 'The supplied project has a React frontend and Express/MongoDB backend. Its source includes role-based dashboards, event routes and models, interactive booth floor planning, session scheduling and analytics components.',
      technical: 'A shared login leads to role-specific areas. Data is organized across API routes, controllers and Mongoose models. FloorPlanView supports a visual booth layout, while analytics components present summary charts.',
      evidence: 'Reviewed the uploaded eventsphere-complete-v4.zip: frontend/pages and components, backend routes/models/controllers, package files and setup README. This is source-level evidence, not a confirmed public live deployment.',
      limitations: 'Repository is private. Screenshots and an independently verified hosted demo are not available yet. This portfolio does not claim tested production uptime or usage statistics.',
      flow: ['React role-specific UI', 'Express API and authorization', 'MongoDB models and records'],
      facts: ['Role-aware dashboards (admin / organizer / exhibitor / attendee)', 'Booth floor planning and management', 'Event sessions, analytics and attendee flows'],
      repository: null, repositoryText: 'Private repository', status: 'Academic full-stack project · Private code', art: 'event'
    },
    {
      id: 'leadflow', number: '02', title: 'LeadFlow AI', descriptor: 'BUSINESS WORKFLOW AUTOMATION',
      summary: 'A local-first Python dashboard that connects business discovery, website auditing, personalized outreach drafts and Excel reporting.',
      category: 'Automation', featured: true, tags: ['Python', 'Streamlit', 'Playwright', 'APIs'],
      challenge: 'Prospecting requires repeatedly researching businesses, checking websites, preparing outreach messages and organizing information for follow-up.',
      implementation: 'The uploaded code organizes search providers, site inspection, screenshot capture, AI-assisted draft creation and Excel export into separate modules managed from a Streamlit interface.',
      technical: 'The pipeline records progress in checkpoints so interrupted sessions can resume. External business-search and AI APIs require user-provided keys. The workflow prepares drafts but does not send messages.',
      evidence: 'Reviewed rufgdj.zip: app.py, the module directories, README, configuration examples and tests. The public GitHub link is an overview; it may not expose this full local implementation.',
      limitations: 'Requires external provider credentials and Playwright setup. Screenshots of the running dashboard have not yet been provided. Do not mistake illustrative cover art for UI evidence.',
      flow: ['Lead search providers', 'Audit, screenshot & AI draft', 'Excel export and checkpoint'],
      facts: ['Business search with pluggable API providers', 'Website audits and visual evidence collection', 'AI-generated outreach drafts and spreadsheet exports'],
      repository: 'https://github.com/Bilalshaikh32/LeadFlowAI', repositoryText: 'Project repository overview', status: 'Personal automation project · Local-first', art: 'leadflow'
    },
    {
      id: 'vaccination', number: '03', title: 'Vaccination Booking', descriptor: 'APPOINTMENT MANAGEMENT',
      summary: 'An academic PHP web project exploring registration, sign-in, vaccination appointments and administration.',
      category: 'Full Stack', featured: true, tags: ['PHP', 'HTML', 'CSS', 'Web Forms'],
      challenge: 'A booking system needs a straightforward path from registration through appointment requests while keeping administrative tasks separate.',
      implementation: 'The public project structure includes registration, login, booking and admin-related pages. The work demonstrates form-oriented server-side PHP development.',
      technical: 'The application follows a page-based PHP workflow rather than a separate JavaScript SPA/API architecture. Specific security controls, database schema and deployment status require further inspection.',
      evidence: 'Public GitHub repository supplied by the author; portfolio details stay within the previously checked file/page structure and do not claim a successful end-to-end production test.',
      limitations: 'No confirmed hosted demo or real app screenshots. Authentication security and full runtime behavior have not been independently audited.',
      flow: ['Account and login pages', 'Appointment booking forms', 'Administrative pages'],
      facts: ['Registration and login pages', 'Vaccination appointment booking', 'Admin-related management pages'],
      repository: 'https://github.com/Bilalshaikh32/Vaccination_Booking_System', repositoryText: 'View GitHub source', status: 'Academic project · Public repository', art: 'vaccination'
    },
    {
      id: 'gamaxy', number: '04', title: 'Gamaxy', descriptor: 'GAMING WEB EXPERIENCE',
      summary: 'A gaming-themed website project focused on interactive presentation and a responsive web experience.',
      category: 'Web', featured: false, tags: ['.NET', 'JavaScript', 'Three.js', 'SQL'],
      challenge: 'Game-oriented sites benefit from engaging presentation without sacrificing navigability or responsive layout.',
      implementation: 'The supplied resume describes a .NET/SQL-backed gaming website with JavaScript and Three.js interactions. The repository is public; the exact runtime features have not been re-tested for this portfolio.',
      technical: 'This project represents experimentation with interactive frontends and a server-rendered/web-backend stack. Feature-level claims are intentionally limited pending a deeper code review.',
      evidence: 'Public GamaxyWebApplication GitHub link and the creator’s uploaded resume. Current case-study details do not imply a live demo.',
      limitations: 'No confirmed public deployment or running-app screenshots. Exact implementation details should be updated after a complete source review.',
      flow: ['Gaming web interface', 'JavaScript / 3D elements', '.NET and SQL work described in resume'],
      facts: ['Gaming-themed interface', 'Responsive presentation described in resume', 'Repository available for code inspection'],
      repository: 'https://github.com/Bilalshaikh32/GamaxyWebApplication', repositoryText: 'View GitHub source', status: 'Academic project · Public repository', art: 'gamaxy'
    },
    {
      id: 'earthscape', number: '05', title: 'EarthScape', descriptor: 'CLIMATE DATA PROJECT',
      summary: 'An academic project exploring climate and environmental information through a digital application concept.',
      category: 'Data', featured: false, tags: ['Climate', 'Data', 'Academic Project'],
      challenge: 'Climate information often needs a clear interface before people can understand or compare environmental data.',
      implementation: 'A project walkthrough was provided. The uploaded Earth scape.zip contains a video but no code, so detailed claims about the implementation stack are deliberately left unconfirmed.',
      technical: 'The creator’s resume references a web application and authentication/data storage, but the supplied archive alone does not independently confirm the runtime stack or application behavior.',
      evidence: 'Earth scape.zip includes Earth scape.mp4. This is an author-provided walkthrough, not a code archive or independently tested deployment.',
      limitations: 'Source, full stack and live features need confirmation. A public code link and running-app captures are not available.',
      flow: ['Environmental data focus', 'App walkthrough supplied', 'Source verification pending'],
      facts: ['Climate and environmental information focus', 'Author-provided walkthrough video', 'Technical claims pending source review'],
      repository: null, repositoryText: 'Private repository', status: 'Academic project · Walkthrough only', art: 'earthscape'
    }
  ]
};
