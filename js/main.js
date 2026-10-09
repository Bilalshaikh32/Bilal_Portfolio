(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const data = window.PORTFOLIO_DATA;
  if (!data) return;
  const icon = (name, extraClass = '') => `<svg class="icon ${extraClass}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);

  function renderSkills() {
    $('#skill-categories').innerHTML = data.skills.map((cat, i) => `<article class="skill-card reveal" style="--card-index:${i}"><div class="skill-card-top"><span class="skill-icon">${icon(cat.icon)}</span><span class="skill-counter">0${i+1}</span></div><h3>${escapeHTML(cat.name)}</h3><p>${escapeHTML(cat.note)}</p><div class="skill-tags">${cat.skills.map(s => `<span class="skill-tag">${escapeHTML(s)}</span>`).join('')}</div></article>`).join('');
    $('#additional-skills').innerHTML = data.additionalSkills.map(skill => `<span class="skill-tag">${escapeHTML(skill)}</span>`).join('');
  }

  function renderServices() {
    $('#services-grid').innerHTML = data.services.map(service => `<article class="service-card reveal"><div class="service-card-top"><span class="service-icon">${icon(service.icon)}</span><span class="service-number">${service.number}</span></div><h3>${escapeHTML(service.title)}</h3><p>${escapeHTML(service.description)}</p><a href="#contact" class="service-action" aria-label="Discuss ${escapeHTML(service.title)}">Let's discuss ${icon('diagonal')}</a></article>`).join('');
  }

  function coverMarkup(project) {
    const name = project.art;
    if (name === 'event') return `<div class="project-art art-event" aria-label="Illustrative EventSphere interface artwork"><div class="art-orbit art-orbit-one"></div><div class="event-window"><div class="event-window-top"><span class="event-logo">EVENT<span>SPHERE</span></span><div class="fake-dots"><i></i><i></i><i></i></div></div><div class="event-window-content"><div class="event-window-menu"><span class="menu-tiny active"></span><span class="menu-tiny"></span><span class="menu-tiny"></span><span class="menu-tiny"></span></div><div class="event-panel"><div class="panel-eyebrow">EVENT OVERVIEW</div><div class="fake-bar-long"></div><div class="event-stat-row"><div><small>ACTIVE EVENTS</small><strong>—</strong></div><div><small>EXHIBITORS</small><strong>—</strong></div><div><small>SESSIONS</small><strong>—</strong></div></div><div class="event-chart"><span style="height:43%"></span><span style="height:72%"></span><span style="height:54%"></span><span style="height:89%"></span><span style="height:63%"></span><span style="height:100%"></span><span style="height:76%"></span><span style="height:93%"></span></div></div></div></div><div class="art-float art-float-event">✳&nbsp; MULTI-ROLE SYSTEM</div><span class="art-caption">ILLUSTRATIVE PROJECT COVER</span></div>`;
    if (name === 'leadflow') return `<div class="project-art art-leadflow" aria-label="Illustrative LeadFlow AI workflow artwork"><div class="flow-grid"></div><div class="lead-window"><div class="lead-header"><span class="lead-mark">✳</span> leadflow<span>.ai</span><span class="lead-pill">● ACTIVE</span></div><div class="lead-subtitle">Your next opportunities, uncovered.</div><div class="lead-search"><span>Website audit & outreach</span> ${icon('arrow')}</div><div class="lead-columns"><div><span>LEADS FOUND</span><strong>128</strong><i></i></div><div><span>AUDITS RUN</span><strong>96</strong><i></i></div></div><div class="lead-bars"><div><span>Northstar Studio</span><b></b></div><div><span>Nova Digital Co.</span><b></b></div><div><span>Brightform Media</span><b></b></div></div></div><div class="lead-floating">AUTOMATE <span>→</span> ANALYZE <span>→</span> EXPORT</div><span class="art-caption">ILLUSTRATIVE PROJECT COVER</span></div>`;
    if (name === 'vaccination') return `<div class="project-art art-vaccination" aria-label="Illustrative booking interface artwork"><div class="vaccine-ring"></div><div class="vaccine-window"><div class="vaccine-head"><span>✳</span> CARE <b>PORTAL</b></div><div class="vaccine-label">BOOK AN APPOINTMENT</div><div class="vaccine-title">Your health, <i>our priority.</i></div><div class="vaccine-calendar"><div class="calendar-row"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span></div><div class="calendar-row dates"><span>18</span><span>19</span><span class="selected">20</span><span>21</span><span>22</span></div></div><div class="vaccine-button">CONFIRM BOOKING <span>↗</span></div></div><span class="art-caption">ILLUSTRATIVE PROJECT COVER</span></div>`;
    if (name === 'gamaxy') return `<div class="project-art art-gamaxy" aria-label="Illustrative gaming project artwork"><span class="game-halo"></span><div class="game-headline">GAM<span>A</span>XY<span class="game-asterisk">✳</span></div><div class="game-subtext">PLAY. EXPLORE. REPEAT.</div><div class="game-controller"><span class="controller-cross">✚</span><span class="controller-buttons">●<br>●</span></div><span class="art-caption">ILLUSTRATIVE PROJECT COVER</span></div>`;
    return `<div class="project-art art-earth" aria-label="Illustrative EarthScape climate project artwork"><div class="earth-globe"><span class="earth-continent continent-a"></span><span class="earth-continent continent-b"></span><span class="earth-continent continent-c"></span><span class="earth-lat lat-a"></span><span class="earth-lat lat-b"></span></div><div class="earth-heading">EARTH<span>SCAPE</span></div><div class="earth-sub">DATA FOR A CHANGING PLANET</div><div class="earth-detail">◉ ENVIRONMENTAL INSIGHTS <span>↗</span></div><span class="art-caption">ILLUSTRATIVE PROJECT COVER</span></div>`;
  }

  const filters = ['All', 'Full Stack', 'Automation', 'Web', 'Data'];
  let activeFilter = 'All';
  function renderFilters() {
    $('#project-filters').innerHTML = filters.map(f => `<button type="button" class="filter-button ${f === activeFilter ? 'active' : ''}" data-filter="${escapeHTML(f)}" aria-pressed="${f === activeFilter}">${escapeHTML(f)}</button>`).join('');
  }
  function renderProjects() {
    const projects = activeFilter === 'All' ? data.projects : data.projects.filter(p => p.category === activeFilter);
    $('#projects-count').textContent = String(projects.length).padStart(2,'0') + (projects.length === 1 ? ' PROJECT' : ' PROJECTS');
    $('#project-grid').innerHTML = projects.map((project, idx) => `<article class="project-card ${activeFilter==='All' ? ['span-seven','span-five','span-six','span-three','span-three'][idx] : 'span-six'} ${project.featured ? 'featured' : ''} reveal is-visible"><div class="project-card-inner"><div class="project-card-media">${coverMarkup(project)}<div class="project-hover-overlay"><span>EXPLORE CASE STUDY ${icon('diagonal')}</span></div></div><div class="project-card-body"><div class="project-overline"><span>${project.number} / ${escapeHTML(project.descriptor)}</span>${project.featured ? '<span class="featured-label">FEATURED</span>' : ''}</div><div class="project-title-row"><h3>${escapeHTML(project.title)}</h3><button class="project-view" type="button" data-project="${escapeHTML(project.id)}" aria-label="View ${escapeHTML(project.title)} details">${icon('diagonal')}</button></div><p>${escapeHTML(project.summary)}</p><div class="project-bottom"><div class="project-tags">${project.tags.slice(0,4).map(tag=>`<span>${escapeHTML(tag)}</span>`).join('')}</div><button class="project-detail-link" type="button" data-project="${escapeHTML(project.id)}">Case study ${icon('arrow')}</button></div></div></div></article>`).join('');
    setupTilt();
  }

  const modal = $('#project-modal');
  const modalPanel = $('.modal-panel', modal);
  let lastFocused = null;
  function openProject(id) {
    const p = data.projects.find(p=>p.id===id);
    if(!p)return;
    lastFocused = document.activeElement;
    $('#modal-content').innerHTML = `
      <div class="modal-overline">CASE STUDY / ${escapeHTML(p.number)} <span>✳</span> ${escapeHTML(p.descriptor)}</div>
      <h2 id="modal-title">${escapeHTML(p.title)}</h2>
      <p class="modal-lead">${escapeHTML(p.summary)}</p>
      <div class="modal-art">${coverMarkup(p)}</div>
      <p class="case-art-note">Visual concept cover — not a screenshot of the running application.</p>
      <div class="case-topics">
        <section class="case-topic"><span class="case-topic-num">01 / CONTEXT</span><h3>The challenge</h3><p>${escapeHTML(p.challenge)}</p></section>
        <section class="case-topic"><span class="case-topic-num">02 / APPROACH</span><h3>What the implementation includes</h3><p>${escapeHTML(p.implementation)}</p></section>
        <section class="case-topic"><span class="case-topic-num">03 / ENGINEERING</span><h3>Technical perspective</h3><p>${escapeHTML(p.technical)}</p></section>
      </div>
      <section class="case-workflow" aria-label="Project architecture or workflow">
        <h3>PROJECT WORKFLOW</h3>
        <ol>${p.flow.map((step,i)=>`<li><span class="flow-step-number">0${i+1}</span><span>${escapeHTML(step)}</span></li>`).join('')}</ol>
      </section>
      <div class="case-evidence-grid">
        <section><h3>WHAT SUPPORTS THIS CASE STUDY</h3><p>${escapeHTML(p.evidence)}</p></section>
        <section><h3>CURRENT LIMITATIONS</h3><p>${escapeHTML(p.limitations)}</p></section>
      </div>
      <section class="case-highlights"><h3>HIGHLIGHTS</h3><ul>${p.facts.map(f => `<li>${escapeHTML(f)}</li>`).join('')}</ul></section>
      <div class="modal-tech">${p.tags.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div>
      <div class="modal-actions">
        ${p.repository ? `<a class="button button-primary" href="${p.repository}" target="_blank" rel="noopener noreferrer">${escapeHTML(p.repositoryText)} ${icon('diagonal')}</a>` : `<span class="private-note">${escapeHTML(p.repositoryText)} — no public source link</span>`}
        <span class="modal-status">${escapeHTML(p.status)}</span>
      </div>`;
    modal.hidden = false;
    modalPanel.scrollTop = 0;
    document.body.classList.add('modal-open');
    ['header', 'main', 'footer'].forEach(tag => document.querySelector(tag)?.setAttribute('inert', ''));
    modalPanel.focus();
  }
  function closeProject() {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    ['header', 'main', 'footer'].forEach(tag => document.querySelector(tag)?.removeAttribute('inert'));
    if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
  }
  document.addEventListener('click', (event) => {
    const filter = event.target.closest('[data-filter]');
    if(filter) { activeFilter = filter.dataset.filter; renderFilters(); renderProjects(); }
    const project = event.target.closest('[data-project]');
    if(project) openProject(project.dataset.project);
    if(event.target.closest('[data-close-modal]')) closeProject();
  });
  document.addEventListener('keydown', event => {
    if (!modal.hidden) {
      if(event.key==='Escape') { closeProject(); return; }
      if(event.key==='Tab') { const focusables=$$('button,a[href],input,[tabindex]:not([tabindex="-1"])',modalPanel).filter(el=>!el.disabled && el.getClientRects().length);if(!focusables.length)return;const first=focusables[0],last=focusables[focusables.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();} }
    }
  });

  function setupTilt() {
    if(!window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    $$('.project-card').forEach(card => {
      const inner=$('.project-card-inner',card);
      card.addEventListener('pointermove', e=>{const r=card.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;inner.style.transform=`perspective(1100px) rotateX(${-y*5}deg) rotateY(${x*5}deg) translateY(-3px)`;});
      card.addEventListener('pointerleave',()=>{inner.style.transform='';});
    });
  }
  function setupTheme() {
    const button=$('#theme-toggle');
    function sync(){const light=document.documentElement.dataset.theme==='light';button.setAttribute('aria-label', light?'Switch to dark mode':'Switch to light mode');document.querySelector('meta[name="theme-color"]').setAttribute('content',light?'#F7F5FC':'#0B0A12');}
    sync();
    button.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;try{localStorage.setItem('bilal-portfolio-theme',next);}catch(e){}sync();});
  }
  function setupMobileNav() {
    const toggle=$('#mobile-menu-toggle'), menu=$('#mobile-menu');
    let lastActive=null;
    const close=(restore=false)=>{menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');document.body.classList.remove('mobile-nav-open'); if(restore)toggle.focus();};
    toggle.addEventListener('click',()=>{const willOpen=menu.hidden;menu.hidden=!willOpen;toggle.setAttribute('aria-expanded',String(willOpen));toggle.setAttribute('aria-label',willOpen?'Close menu':'Open menu');document.body.classList.toggle('mobile-nav-open',willOpen);if(willOpen){lastActive=document.activeElement;menu.querySelector('a')?.focus();}});
    $$('a',menu).forEach(link=>link.addEventListener('click',()=>close()));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden)close(true);});
    document.addEventListener('click',e=>{if(!menu.hidden && !e.target.closest('.header'))close();});
    window.addEventListener('resize',()=>{if(window.innerWidth>=920&&!menu.hidden)close();});
  }
  function setupScroll() {
    const progress=$('#reading-progress'),header=$('#site-header'),toTop=$('#back-to-top');
    let ticking=false;
    function update(){const h=document.documentElement;const total=h.scrollHeight-h.clientHeight;const fraction=total>0?window.scrollY/total:0;progress.style.transform=`scaleX(${Math.max(0,Math.min(1,fraction))})`;header.classList.toggle('scrolled',window.scrollY>24);toTop.classList.toggle('visible',window.scrollY>650);ticking=false;}
    window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true;}},{passive:true});
    window.addEventListener('resize',update);update();
    toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
    $('#copyright-year').textContent=new Date().getFullYear();
    const links=$$('.desktop-nav .nav-link');
    const sections=$$('main section[id]');
    if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>{const active=link.getAttribute('href')==='#'+entry.target.id;link.classList.toggle('is-active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}});},{rootMargin:'-35% 0px -55% 0px',threshold:0});sections.forEach(el=>observer.observe(el));}
  }
  function setupReveal() {
    if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches){$$('.reveal').forEach(el=>el.classList.add('is-visible'));return;}
    const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:.08,rootMargin:'0px 0px -24px 0px'});
    $$('.reveal').forEach(el=>observer.observe(el));
  }
  function setupCursor() {
    if(!window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const ring=$('#cursor-ring'),dot=$('#cursor-dot');
    let x=-100,y=-100,rx=-100,ry=-100,active=false,frame=0;
    const tick=()=>{
      rx+=(x-rx)*.24; ry+=(y-ry)*.24;
      ring.style.transform=`translate3d(${rx}px,${ry}px,0)`;
      if(Math.abs(x-rx)>0.3 || Math.abs(y-ry)>0.3){frame=requestAnimationFrame(tick);}
      else{rx=x;ry=y;ring.style.transform=`translate3d(${rx}px,${ry}px,0)`;frame=0;}
    };
    document.addEventListener('pointermove',e=>{
      x=e.clientX; y=e.clientY;
      dot.style.transform=`translate3d(${x}px,${y}px,0)`;
      if(!frame)frame=requestAnimationFrame(tick);
      if(!active){active=true;ring.classList.add('shown');dot.classList.add('shown');}
    }, {passive:true});
    document.addEventListener('pointerover',e=>{const interactive=Boolean(e.target.closest('a,button,input,textarea'));ring.classList.toggle('cursor-big',interactive);});
    document.addEventListener('pointerout',e=>{if(!e.relatedTarget) {ring.classList.remove('shown');dot.classList.remove('shown');active=false;}});
    $$('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.setProperty('--magnetic-x',`${(e.clientX-r.left-r.width/2)*.11}px`);el.style.setProperty('--magnetic-y',`${(e.clientY-r.top-r.height/2)*.11}px`);});el.addEventListener('pointerleave',()=>{el.style.setProperty('--magnetic-x','0px');el.style.setProperty('--magnetic-y','0px');});});
  }
  function setupForm() {
    const form=$('#contact-form'),result=$('#form-result');
    const rules={name:v=>v.trim().length>=2?'':'Please enter your name (at least 2 characters).',email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())?'':'Enter a valid email address.',subject:v=>v.trim().length>=3?'':'Please enter a subject (at least 3 characters).',message:v=>v.trim().length>=10?'':'Please write a message of at least 10 characters.'};
    const clear=(name)=>{const field=form.elements[name];field.removeAttribute('aria-invalid');$('#error-'+name).textContent='';};
    const validate=(name)=>{const field=form.elements[name];const error=rules[name](field.value);field.setAttribute('aria-invalid',error?'true':'false');$('#error-'+name).textContent=error;return !error;};
    Object.keys(rules).forEach(name=>{const field=form.elements[name];field.addEventListener('blur',()=>validate(name));field.addEventListener('input',()=>{if(field.getAttribute('aria-invalid')==='true')validate(name);else clear(name);});});
    form.addEventListener('submit',async e=>{e.preventDefault();result.hidden=true;let firstInvalid=null;for(const name of Object.keys(rules)){if(!validate(name)&&!firstInvalid)firstInvalid=form.elements[name];}if(firstInvalid){firstInvalid.focus();return;}
      const name=form.elements.name.value.trim(),email=form.elements.email.value.trim(),subject=form.elements.subject.value.trim(),message=form.elements.message.value.trim();
      const body=`Hello Bilal,\n\n${message}\n\nBest,\n${name}\n${email}`;
      const mailto=`mailto:bilal2023sheikh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      result.hidden=false;result.textContent='Your draft is ready. Nothing has been sent. Choose an option below to continue. ';
      const launch=document.createElement('a');launch.href=mailto;launch.className='open-mail-app';launch.textContent='Open email app';result.append(launch);
      const copy=document.createElement('button');copy.type='button';copy.className='copy-message';copy.textContent='Copy message instead';copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(`To: bilal2023sheikh@gmail.com\nSubject: ${subject}\n\n${body}`);copy.textContent='Copied!';}catch(err){copy.textContent='Select the message and copy it manually';const pre=document.createElement('textarea');pre.readOnly=true;pre.value=`To: bilal2023sheikh@gmail.com\nSubject: ${subject}\n\n${body}`;result.append(pre);pre.select();}});result.append(copy);
    });
  }
  renderSkills();renderServices();renderFilters();renderProjects();setupTheme();setupMobileNav();setupScroll();setupReveal();setupCursor();setupForm();
})();
