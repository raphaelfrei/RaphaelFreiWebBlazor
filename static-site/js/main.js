document.addEventListener('DOMContentLoaded', async () => {
    // Footer year
    const currentYear = new Date().getFullYear();
    const startYear = 2021;
    const footerYear = document.getElementById('footer-year');
    if (footerYear) {
        footerYear.textContent = currentYear === startYear ? `${startYear}` : `${startYear} - ${currentYear}`;
    }

    const isHome = !!document.getElementById('home-projects');
    const isProjects = !!document.getElementById('projects-list');
    const isApps = !!document.getElementById('apps-list');
    const isResume = !!document.getElementById('experience-timeline');

    const loadData = async (url) => {
        try {
            const res = await fetch(url);
            return await res.json();
        } catch (e) {
            console.error(`Failed to load ${url}`, e);
            return null;
        }
    };

    // --- Date helpers (port of DateDisplay.cs) ---
    const formatMonthYear = (dateStr) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    const getDurationDisplay = (startStr, endStr) => {
        const start = new Date(startStr);
        const end = endStr ? new Date(endStr) : new Date();
        let totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
        if (end.getDate() < start.getDate()) totalMonths--;
        if (totalMonths < 0) totalMonths = 0;

        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;
        const parts = [];
        if (years > 0) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
        if (months > 0) parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`);
        return parts.length > 0 ? parts.join(' ') : '< 1 mo';
    };

    const getPeriodDisplay = (startStr, endStr) => {
        const startFmt = formatMonthYear(startStr);
        const endFmt = endStr ? formatMonthYear(endStr) : 'Present';
        return `${startFmt} - ${endFmt}`;
    };

    const getProjectDateDisplay = (project) => {
        if (!project.created && !project.finished) return 'In Development';
        if (project.created && !project.finished) {
            return `${new Date(project.created).getFullYear()} - Present`;
        }
        if (project.created && project.finished) {
            const sy = new Date(project.created).getFullYear();
            const ey = new Date(project.finished).getFullYear();
            return sy === ey ? `${sy}` : `${sy} - ${ey}`;
        }
        return '';
    };

    // --- Project Card (for Home bento grid) ---
    const createProjectCard = (project) => {
        const linkUrl = project.externalUrl || project.repositoryUrl || '#';
        const isEnterprise = project.type === 'enterprise';
        const showClass = isEnterprise ? 'repo-card-featured' : '';
        const tags = (project.tags || []).map(t => `<span class="tech-badge">${t}</span>`).join('');

        return `
        <a href="${linkUrl}" target="_blank" class="repo-card ${showClass}">
            <div class="repo-top">
                <div class="repo-title-group">
                    <i class="bi bi-journal-code repo-icon"></i>
                    <h3 class="repo-name">${project.title}</h3>
                </div>
                <div class="repo-actions">
                    ${isEnterprise ? '<span class="tech-badge enterprise-badge" style="border-color: #e5c07b; color: #e5c07b;">Enterprise</span>' : ''}
                    ${project.externalUrl ? '<i class="bi bi-box-arrow-up-right external-icon"></i>' : ''}
                </div>
            </div>
            <p class="repo-desc">${project.description}</p>
            <div class="repo-tech">${tags}</div>
        </a>`;
    };

    // --- Project Full Card (for /projects page) ---
    const createProjectFullCard = (project) => {
        const isEnterprise = project.type === 'enterprise';
        const dateDisplay = getProjectDateDisplay(project);
        const duration = project.created ? getDurationDisplay(project.created, project.finished) : '';
        const tags = (project.tags || []).map(t => `<span class="tech-badge">${t}</span>`).join('');
        const linkUrl = project.externalUrl || '';
        const repoUrl = project.repositoryUrl || '';

        return `
        <article class="full-repo-card ${isEnterprise ? 'featured-full-repo' : ''}">
            <div class="full-repo-top-meta">
                <div class="meta-left">
                    <div class="period-container">
                        <span class="project-year">${dateDisplay}</span>
                        ${duration ? `<span class="duration"> • ${duration}</span>` : ''}
                    </div>
                    ${isEnterprise
                        ? '<span class="tech-badge enterprise-badge" style="border-color: #e5c07b; color: #e5c07b;">Enterprise</span>'
                        : '<span class="tech-badge" style="border-color: var(--border-subtle); color: var(--text-muted);">Personal</span>'}
                </div>
                <div class="repo-actions">
                    ${repoUrl ? `<a href="${repoUrl}" target="_blank" class="external-icon" title="View Source Code"><i class="bi bi-github"></i></a>` : ''}
                    ${linkUrl ? `<a href="${linkUrl}" target="_blank" class="external-icon" title="View Project"><i class="bi bi-box-arrow-up-right"></i></a>` : ''}
                </div>
            </div>
            <div class="full-repo-title-group">
                <i class="bi bi-journal-code repo-icon"></i>
                <h2 class="project-title">${project.title}</h2>
            </div>
            ${(project.role || project.company) ? `
                <p class="project-role">
                    ${project.role ? `<span class="accent">Role: </span> ${project.role}` : ''}
                    ${project.company ? `<span class="syntax-keyword">&nbsp;@</span>&nbsp;${project.company}` : ''}
                </p>` : ''}
            <p class="project-desc">${project.description}</p>
            <div class="repo-tech mt-auto">${tags}</div>
        </article>`;
    };

    // --- App Card (for /apps page) ---
    const createAppCard = (app) => {
        const iconHtml = app.iconUrl
            ? `<img src="${app.iconUrl}" class="app-icon" alt="${app.name}">`
            : `<div class="app-icon-placeholder"><i class="bi bi-app-indicator"></i></div>`;
        const tags = (app.tags || []).slice(0, 4).map(t => `<span class="tech-badge">${t}</span>`).join('');

        let actions = '';
        if (app.googlePlayUrl) actions += `<a href="${app.googlePlayUrl}" target="_blank" class="btn-terminal"><i class="bi bi-google-play"></i> Play</a>`;
        if (app.appStoreUrl) actions += `<a href="${app.appStoreUrl}" target="_blank" class="btn-terminal"><i class="bi bi-apple"></i> Store</a>`;
        if (app.microsoftStoreUrl) actions += `<a href="${app.microsoftStoreUrl}" target="_blank" class="btn-terminal"><i class="bi bi-microsoft"></i> MS</a>`;
        if (app.websiteUrl) actions += `<a href="${app.websiteUrl}" target="_blank" class="btn-terminal"><i class="bi bi-globe"></i> Website</a>`;

        return `
        <article class="app-card">
            <div class="app-icon-container">${iconHtml}</div>
            <div class="app-content">
                <h2 class="app-title">${app.name}</h2>
                <p class="app-desc">${app.description}</p>
                ${tags ? `<div class="repo-tech">${tags}</div>` : ''}
                <div class="app-actions">${actions}</div>
            </div>
        </article>`;
    };

    // --- Experience Card (for /resume page) ---
    const createExperienceCard = (exp) => {
        const period = getPeriodDisplay(exp.startDate, exp.endDate);
        const duration = getDurationDisplay(exp.startDate, exp.endDate);

        const positionsHtml = exp.positions.map(pos => {
            const posPeriod = exp.positions.length > 1
                ? `<div class="period-container"><span class="period">${getPeriodDisplay(pos.startDate, pos.endDate)}</span></div>`
                : '';

            const softwareHtml = (pos.softwareStack && pos.softwareStack.length)
                ? `<div class="stack-group"><span class="stack-label">Software:</span><div class="repo-tech">${pos.softwareStack.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div></div>`
                : '';
            const dbHtml = (pos.databaseStack && pos.databaseStack.length)
                ? `<div class="stack-group"><span class="stack-label">Database:</span><div class="repo-tech">${pos.databaseStack.map(t => `<span class="tech-badge db-badge">${t}</span>`).join('')}</div></div>`
                : '';

            return `
            <div class="position-item">
                <div class="timeline-header">
                    <h4 class="role">${pos.role}</h4>
                    ${posPeriod}
                </div>
                <p class="description">${pos.description}</p>
                <div class="stacks-container">${softwareHtml}${dbHtml}</div>
            </div>`;
        }).join('');

        return `
        <div class="timeline-item">
            <div class="timeline-header company-main">
                <h3 class="company-title"><span class="syntax-keyword">@</span> <span class="spacer"></span> ${exp.company}</h3>
                <div class="period-container">
                    <span class="period total-period">${period}</span>
                    <span class="duration"> • ${duration}</span>
                </div>
            </div>
            <div class="positions-container">${positionsHtml}</div>
        </div>`;
    };

    // --- Education Card ---
    const createEducationCard = (edu) => {
        const period = getPeriodDisplay(edu.startDate, edu.endDate);
        return `
        <div class="timeline-item">
            <div class="timeline-header">
                <h3 class="role">${edu.degree}</h3>
                <div class="period-container">
                    <span class="period">${period}</span>
                </div>
            </div>
            <p class="company">
                <span class="syntax-keyword">@</span> <span class="spacer"></span> ${edu.institution}
            </p>
        </div>`;
    };

    // --- Certification Card ---
    const createCertCard = (cert) => {
        const period = getPeriodDisplay(cert.issueDate, cert.expirationDate);
        const verifyLink = cert.credentialUrl
            ? `<div class="repo-actions"><a href="${cert.credentialUrl}" target="_blank" class="external-icon" title="Verify Credential"><i class="bi bi-box-arrow-up-right"></i></a></div>`
            : '';
        const credentialId = cert.credentialId
            ? `<div class="credential-info"><span class="credential-id"><span class="accent">ID:</span> ${cert.credentialId}</span></div>`
            : '';

        return `
        <div class="timeline-item">
            <div class="cert-top-meta" style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div class="timeline-header" style="margin-bottom: 0;">
                    <h3 class="role">${cert.name}</h3>
                    <div class="period-container">
                        <span class="period">${period}</span>
                    </div>
                </div>
                ${verifyLink}
            </div>
            <p class="company" style="margin-top: 0.25rem;">
                <span class="syntax-keyword">@</span> <span class="spacer"></span> ${cert.issuer}
            </p>
            ${credentialId}
        </div>`;
    };

    // --- Page rendering ---
    if (isHome) {
        const projects = await loadData('/data/projects.json');
        if (projects) {
            // Show projects that have an externalUrl (deployed), take first 6
            const featured = projects.filter(p => p.externalUrl).slice(0, 6);
            document.getElementById('home-projects').innerHTML = featured.map(p => createProjectCard(p)).join('');
        }
    }

    if (isProjects) {
        const projects = await loadData('/data/projects.json');
        if (projects) {
            document.getElementById('projects-list').innerHTML = projects.map(p => createProjectFullCard(p)).join('');
        }
    }

    if (isApps) {
        const apps = await loadData('/data/apps.json');
        if (apps) {
            document.getElementById('apps-list').innerHTML = apps.map(a => createAppCard(a)).join('');
        }
    }

    if (isResume) {
        const resume = await loadData('/data/resume.json');
        if (resume) {
            if (resume.experiences) {
                document.getElementById('experience-timeline').innerHTML = resume.experiences.map(e => createExperienceCard(e)).join('');
            }
            if (resume.education) {
                document.getElementById('education-timeline').innerHTML = resume.education.map(e => createEducationCard(e)).join('');
            }
            if (resume.certifications) {
                document.getElementById('certifications-grid').innerHTML = resume.certifications.map(c => createCertCard(c)).join('');
            }
        }
    }
});
