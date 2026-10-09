/**
 * KARAN KUMAR S — PORTFOLIO SELECTED WORKS 2026
 * AI Creative Strategist & E-Commerce Visual Designer
 * Interactive Engine: Scrolltide-Grade Dynamics & Tactile Atelier Motion
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // ==========================================
  // 1. WEB AUDIO API TACTILE SYNTHESIZER (DISABLED PER USER REQUEST)
  // ==========================================
  let isAudioEnabled = false;

  function initAudio() {
    // Disabled: no UI tap sounds
  }

  // Soft tactile mechanical click — disabled per user request: "not nneded tap sound"
  function playClickSound() {
    return;
  }

  // Retro telephone bell ring synthesis — disabled
  function playTelephoneRing() {
    return;
  }

  // ==========================================
  // 2. SCROLL PROGRESS BAR
  // ==========================================
  const progressBar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }
  }, { passive: true });

  // ==========================================
  // 3. FLUID MAGNETIC CURSOR
  // ==========================================
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const cursorText = document.getElementById('cursorText');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  }, { passive: true });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    if (cursorRing) {
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover target detection
  function attachCursorHoverHandlers() {
    const targets = document.querySelectorAll('a, button, [data-cursor], .card-tilt, .logo-card-item, .ad-card-item, .zoomable-asset');
    targets.forEach((target) => {
      target.addEventListener('mouseenter', () => {
        if (!cursorRing) return;
        cursorRing.classList.add('active-hover');
        const customText = target.getAttribute('data-cursor');
        if (cursorText) {
          cursorText.textContent = customText || (target.tagName === 'A' ? 'GO' : (target.tagName === 'BUTTON' ? 'TAP' : 'VIEW'));
        }
        playClickSound(900, 0.02);
      });

      target.addEventListener('mouseleave', () => {
        if (!cursorRing) return;
        cursorRing.classList.remove('active-hover');
        if (cursorText) {
          cursorText.textContent = '';
        }
      });
    });
  }
  attachCursorHoverHandlers();

  // ==========================================
  // 4. HERO 3D TELEPHONE PARALLAX & RINGING
  // ==========================================
  const phoneStage = document.getElementById('phoneStage');
  const phoneHandset = document.getElementById('phoneHandset');
  const ringPhoneBtn = document.getElementById('ringPhoneBtn');

  if (phoneStage && phoneHandset) {
    phoneStage.addEventListener('mousemove', (e) => {
      const rect = phoneStage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotY = (x / (rect.width / 2)) * 12; // -12deg to 12deg
      const rotX = -(y / (rect.height / 2)) * 10; // -10deg to 10deg
      phoneHandset.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(20px)`;
    });

    phoneStage.addEventListener('mouseleave', () => {
      phoneHandset.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });

    function triggerPhoneRing() {
      initAudio();
      playTelephoneRing();
      phoneHandset.classList.add('ringing');
      showToast('☎ Ringing Karan Kumar\'s Studio Desk (+91 63692 91778)...');

      setTimeout(() => {
        phoneHandset.classList.remove('ringing');
      }, 1600);
    }

    if (ringPhoneBtn) {
      ringPhoneBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerPhoneRing();
      });
    }

    phoneStage.addEventListener('click', () => {
      triggerPhoneRing();
    });
  }

  // ==========================================
  // 5. 3D CARD TILT & SPECULAR SHEEN (Scrolltide Glow)
  // ==========================================
  function init3DCardTilt() {
    // Only enable heavy 3D tilt on precision pointer devices (mouse/trackpad), not touch screens
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const tiltCards = document.querySelectorAll('.card-tilt');
    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        card.style.setProperty('--mouse-x', `${xPercent}%`);
        card.style.setProperty('--mouse-y', `${yPercent}%`);

        const rotateX = ((y / rect.height) - 0.5) * -10;
        const rotateY = ((x / rect.width) - 0.5) * 12;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }
  init3DCardTilt();

  // ==========================================
  // 6. SOCIAL MEDIA & PERFORMANCE CREATIVES (SPORTSTECH & POSTERS VAULT)
  // ==========================================
  const socialMediaData = [
    {
      id: 'sportstech-hook',
      title: 'Dein Rücken Liebt Bewegung.',
      subhead: 'Langes Sitzen belastet — jeden Tag.',
      angleBadge: 'WISSENSCHAFT',
      angleType: 'badge-hook',
      stageName: 'Hook & Awareness',
      category: 'funnel',
      stepIndex: 0,
      slideNum: '01 / 05',
      brand: 'SportsTech Berlin',
      niche: 'Ergonomic Fitness & Workstation',
      img: '/behance_assets/social_media/sportstech_01_hook_dein_rucken.jpg',
      metric: '3.92% CTR (Top Hook)',
      cta: 'MEHR ERFAHREN —',
      strategy: 'Thumb-stopping top-of-funnel ad hook. Pairs a warm Scandinavian lifestyle setting with bold direct-response editorial typography. Positions ergonomic movement as natural science to lower customer resistance and drive initial feed stops.',
      englishTranslation: 'Science: "Your Back Loves Movement. Prolonged sitting puts strain on you — every single day. Learn More —"'
    },
    {
      id: 'sportstech-problem',
      title: 'Langes Sitzen Schadet Deinem Rücken.',
      subhead: 'Schmerzen entstehen nicht im Fitnessstudio — sondern am Schreibtisch.',
      angleBadge: 'DAS PROBLEM',
      angleType: 'badge-problem',
      stageName: 'Pain Point Agitation',
      category: 'funnel',
      stepIndex: 1,
      slideNum: '02 / 05',
      brand: 'SportsTech Berlin',
      niche: 'Remote Work & Posture Health',
      img: '/behance_assets/social_media/sportstech_04_problem_langes_sitzen.jpg',
      metric: '4.15% Engagement Rate',
      cta: 'WORKPLACE FATIGUE',
      strategy: 'High-empathy problem agitation. Depicts a remote worker experiencing chronic desk fatigue alongside an adjustable desk and compact treadmill. The core insight ("pain is born at the desk, not the gym") deeply resonates with WFH and corporate desk workers.',
      englishTranslation: 'The Problem: "Prolonged sitting harms your back. Pain is not born in the gym — but at the desk."'
    },
    {
      id: 'sportstech-study',
      title: 'Was Langes Sitzen Wirklich Macht.',
      subhead: '01: 21,7% Chronische Rückenschmerzen | 02: 9,6% Bei aktiven Menschen (Frontiers in Public Health)',
      angleBadge: 'STUDIE & DATA',
      angleType: 'badge-study',
      stageName: 'Clinical Authority',
      category: 'funnel',
      stepIndex: 2,
      slideNum: '03 / 05',
      brand: 'SportsTech Berlin',
      niche: 'Clinical Data & Medical Proof',
      img: '/behance_assets/social_media/sportstech_02_study_sitting_data.jpg',
      metric: '+52% Skeptic Conversion',
      cta: 'FRONTIERS IN PUBLIC HEALTH',
      strategy: 'Authority-driven proof catalyst. Combines an isometric 3D render of the SportsTech treadmill with vivid blue LED light guides and hard peer-reviewed clinical research from "Frontiers in Public Health". Eliminates skepticism among analytical buyers.',
      englishTranslation: 'Study: "What prolonged sitting really does. 01: 21.7% Chronic back pain in sedentary lifestyle vs 02: 9.6% In active people — nearly half as much. Source: Frontiers in Public Health"'
    },
    {
      id: 'sportstech-solution',
      title: 'Smart Trainieren. Zu Hause.',
      subhead: 'Auch beim Arbeiten nutzbar — Flexibel — morgens, abends, zwischendurch — Platzsparend & leise',
      angleBadge: 'UNSERE LÖSUNG',
      angleType: 'badge-solution',
      stageName: 'Product Value Props',
      category: 'funnel',
      stepIndex: 3,
      slideNum: '04 / 05',
      brand: 'SportsTech Berlin',
      niche: 'Whisper-Quiet Home Staging',
      img: '/behance_assets/social_media/sportstech_03_solution_smart_trainieren.jpg',
      metric: '+34% Add-to-Cart Lift',
      cta: 'COMPACT & WHISPER-QUIET',
      strategy: 'Direct solution reveal and core objection handling. Luxury interior timber flooring and ambient sunset tones highlight the slim, stowable form factor and whisper-quiet motor, eliminating fears about noise and living room clutter.',
      englishTranslation: 'Our Solution: "Train smart. At home. — Usable while working — Flexible: morning, evening, in-between — Space-saving & whisper quiet"'
    },
    {
      id: 'sportstech-active',
      title: 'Beweg Dich Beim Arbeiten.',
      subhead: 'Kurze Bewegungseinheiten im Alltag — einfach, flexibel, effektiv.',
      angleBadge: 'ACTIVE LIVING',
      angleType: 'badge-lifestyle',
      stageName: 'Active Lifestyle CTA',
      category: 'funnel',
      stepIndex: 4,
      slideNum: '05 / 05',
      brand: 'SportsTech Berlin',
      niche: 'Active Workstation Transformation',
      img: '/behance_assets/social_media/sportstech_05_active_living_bewegen.jpg',
      metric: '4.42% CTR (Final CTA)',
      cta: 'JETZT ENTDECKEN →',
      strategy: 'Aspirational daily integration and bottom-of-funnel CTA. Portrays effortless multi-tasking — typing and taking calls while walking in natural sunlight. Overcomes the objection "I don\'t have time to exercise during busy workdays."',
      englishTranslation: 'Active Living: "Move while you work. Short movement sessions in daily life — simple, flexible, effective. Discover Now →"'
    },
    // COMMERCIAL & EVENT POSTERS (From pt content/Posters)
    {
      id: 'poster-apple-vision-pro',
      title: 'Apple Vision Pro — Spatial Computing Spec Poster',
      subhead: 'Infinite Canvas • Cinematic 4K Micro-OLED • Spatial Audio Immersion',
      angleBadge: 'SPATIAL TECH',
      angleType: 'badge-hook',
      stageName: 'Hardware Innovation',
      category: 'posters',
      slideNum: 'POSTER 01',
      brand: 'Apple Concept Creative',
      niche: 'Spatial Computing Spec Creative',
      img: '/posters/apple_vision_pro_poster.png',
      metric: '5.2% Spec CTR',
      cta: 'EXPLORE CANVAS →',
      strategy: 'Editorial hardware poster emphasizing the curved laminated glass front, aluminum alloy frame, and the feeling of digital apps existing naturally within physical living spaces.',
      englishTranslation: 'Apple Vision Pro: "Welcome to the era of spatial computing. Where your digital world seamlessly blends with your physical environment."'
    },
    {
      id: 'poster-heel-toe-cricket',
      title: 'Heel Toe Cricket Tournament Season 1',
      subhead: 'Grand Community Championship • Avadi, Chennai Sports Arena',
      angleBadge: 'LIVE SPORTS',
      angleType: 'badge-lifestyle',
      stageName: 'Event Announcement',
      category: 'posters',
      slideNum: 'POSTER 02',
      brand: 'Heel Toe Turf',
      niche: 'Community Sports Arena',
      img: '/posters/heel_toe_cricket_tournament.webp',
      metric: '100% Slot Fill',
      cta: 'REGISTER SQUAD →',
      strategy: 'High-voltage event typography, floodlight stadium atmosphere, and clear registration parameters designed to trigger rapid team formation across local sports clubs.',
      englishTranslation: 'Heel Toe Cricket Tournament: "Season 1 Championship kicking off under certified floodlights in Avadi."'
    },
    {
      id: 'poster-heel-toe-football',
      title: 'Heel Toe Turf — Youth Football Academy',
      subhead: 'Where the Community Grows Through Sport • Ages 5 & Above',
      angleBadge: 'YOUTH ACADEMY',
      angleType: 'badge-solution',
      stageName: 'Academy Launch',
      category: 'posters',
      slideNum: 'POSTER 03',
      brand: 'Heel Toe Turf',
      niche: 'Grassroots Sports Training',
      img: '/posters/heel_toe_football_academy.jpeg',
      metric: '3.4x Signups',
      cta: 'JOIN ACADEMY →',
      strategy: 'Vibrant green turf aesthetics, clear weekly training schedules (Tue/Thu evening + Saturday mornings), and energetic young player imagery inspiring parents to enroll children.',
      englishTranslation: 'Football Coaching Academy: "Professional coaching, character development, and community growth through sport."'
    },
    // 4K AI CAMPAIGN SPEC POSTERS (From pt content/Posters/social_media)
    {
      id: 'poster-ai-01',
      title: 'Cyberpunk Kinetic Speed — 4K Spec Film Poster',
      subhead: '4096×4096 Ultra-HD • Neural Particle Physics & Atmospheric Smoke',
      angleBadge: 'AI CINEMA',
      angleType: 'badge-hook',
      stageName: 'Visual Synthesis',
      category: 'ai_posters',
      slideNum: 'SPEC 01',
      brand: 'Generative Spec Series',
      niche: 'Midjourney + ComfyUI Master',
      img: '/posters/ai_posters/poster_ai_01.png',
      metric: '4K MASTER',
      cta: 'INSPECT 4K →',
      strategy: 'Exploring dynamic kinetic particle scattering, rim lighting, and neon color theory for futuristic athletic campaign key visuals.',
      englishTranslation: 'Kinetic Synthesis 01: "Pure velocity synthesized with ComfyUI node workflows and physical lighting."'
    },
    {
      id: 'poster-ai-02',
      title: 'Neo-Tokyo Runner — High-Contrast Neon Sprint',
      subhead: 'Night Circuit Staging • Volumetric Rain Reflections & Neon Bloom',
      angleBadge: '4K RETOUCH',
      angleType: 'badge-problem',
      stageName: 'Atmospheric Staging',
      category: 'ai_posters',
      slideNum: 'SPEC 02',
      brand: 'Generative Spec Series',
      niche: 'Cinematic Visual Direction',
      img: '/posters/ai_posters/poster_ai_02.png',
      metric: '4K DIFFUSION',
      cta: 'INSPECT 4K →',
      strategy: 'Atmospheric cyberpunk lighting with high micro-contrast, specular ground reflections, and vivid magenta-cyan color balance.',
      englishTranslation: 'Kinetic Synthesis 02: "Atmospheric street sprint with complex specular reflections."'
    },
    {
      id: 'poster-ai-03',
      title: 'Urban Velocity — High-Impact Motion Flare',
      subhead: 'Volumetric Smoke • Dynamic Forced Perspective Staging',
      angleBadge: 'KINETIC FLARE',
      angleType: 'badge-study',
      stageName: 'Light Interaction',
      category: 'ai_posters',
      slideNum: 'SPEC 03',
      brand: 'Generative Spec Series',
      niche: 'Commercial Motion Design',
      img: '/posters/ai_posters/poster_ai_03.png',
      metric: '4K COMPOSITING',
      cta: 'INSPECT 4K →',
      strategy: 'Testing lens flare physics, camera shutter blur simulation, and high-frequency edge definition.',
      englishTranslation: 'Kinetic Synthesis 03: "High-energy motion dynamics with volumetric smoke."'
    },
    {
      id: 'poster-ai-04',
      title: 'Aerodynamic Horizon — Extreme Speed Trial',
      subhead: 'Desert Heat Distortion • Wind-Tunnel Shockwave Geometry',
      angleBadge: 'AERODYNAMICS',
      angleType: 'badge-solution',
      stageName: 'Environmental Lighting',
      category: 'ai_posters',
      slideNum: 'SPEC 04',
      brand: 'Generative Spec Series',
      niche: 'Atmospheric Physics',
      img: '/posters/ai_posters/poster_ai_04.png',
      metric: '4K SYNTHESIS',
      cta: 'INSPECT 4K →',
      strategy: 'Simulating heat mirage and aerodynamic shockwave particle streams across high-speed sports apparel.',
      englishTranslation: 'Kinetic Synthesis 04: "Shockwave aerodynamics and harsh desert sunlight simulation."'
    },
    {
      id: 'poster-ai-05',
      title: 'Bionic Stride — Mechanical Exoskeleton Sprint',
      subhead: 'Sub-Pixel Joint Precision • Titanium Alloy Material Reflections',
      angleBadge: 'BIONIC TECH',
      angleType: 'badge-hook',
      stageName: 'Hardware Materiality',
      category: 'ai_posters',
      slideNum: 'SPEC 05',
      brand: 'Generative Spec Series',
      niche: 'Sci-Fi Product Design',
      img: '/posters/ai_posters/poster_ai_05.png',
      metric: '4K RENDERING',
      cta: 'INSPECT 4K →',
      strategy: 'Proving mechanical hardware coherence, non-repeating carbon textures, and accurate titanium reflection shaders.',
      englishTranslation: 'Kinetic Synthesis 05: "Bionic mechanical sprint with sub-pixel surface textures."'
    },
    {
      id: 'poster-ai-06',
      title: 'Apex Champion — Stadium Gold Flare Aura',
      subhead: 'Triumphant Championship Staging • Anamorphic Gold Flare Lighting',
      angleBadge: 'CHAMPION AURA',
      angleType: 'badge-lifestyle',
      stageName: 'Hero Key Visual',
      category: 'ai_posters',
      slideNum: 'SPEC 06',
      brand: 'Generative Spec Series',
      niche: 'Commercial Hero Creative',
      img: '/posters/ai_posters/poster_ai_06.png',
      metric: '4K MASTER',
      cta: 'INSPECT 4K →',
      strategy: 'Anamorphic horizontal flare lighting and golden volumetric backlight designed for global hero billboard campaigns.',
      englishTranslation: 'Kinetic Synthesis 06: "Championship key visual with anamorphic gold flaring."'
    }
  ];

  const socialMediaGrid = document.getElementById('socialMediaGrid');

  function renderSocialMedia(filter = 'all') {
    if (!socialMediaGrid) return;
    socialMediaGrid.innerHTML = '';

    const filtered = filter === 'all'
      ? socialMediaData
      : socialMediaData.filter(item => item.category === filter || (filter === 'funnel' && item.category === 'funnel') || item.angleBadge.toLowerCase().includes(filter.toLowerCase()));

    filtered.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'social-card-item card-tilt zoomable-asset';
      card.setAttribute('data-zoom-src', item.img);
      card.setAttribute('data-cursor', 'INSPECT');
      card.setAttribute('id', `social-card-${item.id}`);

      card.innerHTML = `
        <div class="social-card-media">
          <img src="${item.img}" alt="${item.title} &mdash; SportsTech Performance Creative" class="social-card-img" loading="lazy">
          <div class="social-badges-bar">
            <span class="social-angle-pill ${item.angleType}">${item.angleBadge}</span>
            <span class="social-seq-pill">${item.slideNum}</span>
          </div>
        </div>
        <div class="social-card-body">
          <div class="social-brand-line">
            <span class="client-tag">${item.brand}</span>
            <span>${item.niche}</span>
          </div>
          <h3 class="social-card-heading">${item.title}</h3>
          <p class="social-card-sub">${item.subhead}</p>
          <div class="social-card-action-bar">
            <span class="social-metric-pill">
              <svg viewBox="0 0 20 20" width="12" height="12" fill="currentColor">
                <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 9.586 14.586 6H12z" clip-rule="evenodd" />
              </svg>
              <span>${item.metric}</span>
            </span>
            <span class="social-inspect-link">
              <span>View Ad Copy</span>
            </span>
          </div>
        </div>
        <div class="card-glow" aria-hidden="true"></div>
      `;

      card.addEventListener('click', () => {
        const captionHtml = `
          <div style="max-width: 680px; text-align: left; line-height: 1.5; padding: 4px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; border-bottom:1px solid rgba(255,255,255,0.15); padding-bottom:6px; flex-wrap:wrap; gap:8px;">
              <span style="color:var(--accent-gold); font-family:var(--font-mono); font-size:11px; font-weight:700;">${item.brand} &bull; SLIDE ${item.slideNum} &bull; ${item.stageName}</span>
              <span style="background:rgba(255,194,38,0.18); color:var(--accent-gold); font-family:var(--font-mono); font-size:10.5px; padding:2px 8px; border-radius:4px; font-weight:700;">${item.metric}</span>
            </div>
            <h4 style="font-family:var(--font-display-modern); font-size:17px; color:#FFFFFF; margin-bottom:6px; font-weight:800;">${item.title}</h4>
            <p style="font-family:var(--font-mono); font-size:11.5px; color:#FFC226; margin-bottom:8px;">${item.englishTranslation}</p>
            <p style="font-size:12.5px; color:#EFE8DD; margin-bottom:6px;"><strong>Direct-Response Strategy:</strong> ${item.strategy}</p>
            <div style="font-family:var(--font-mono); font-size:10.5px; color:#9E9AA4; margin-top:8px;">
              Angle: ${item.angleBadge} &bull; Audience: Office Workers, WFH Professionals &bull; Format: 1080x1080 Feed Ad
            </div>
          </div>
        `;
        openLightbox(item.img, captionHtml);
      });

      socialMediaGrid.appendChild(card);
    });

    // Append Campaign Summary Card in "All" view to complete the 3x2 grid layout
    if (filter === 'all') {
      const summaryCard = document.createElement('div');
      summaryCard.className = 'campaign-summary-card card-tilt';
      summaryCard.innerHTML = `
        <div>
          <div class="summary-badge">
            <span class="funnel-pulse-dot"></span>
            <span>DIRECT-RESPONSE CAMPAIGN SUITE</span>
          </div>
          <h3 class="summary-heading">SportsTech Germany Meta Ad Architecture</h3>
          <p class="summary-text">
            Engineered by Karan Kumar S for SportsTech &amp; Beeyoond Gaming. This 5-stage carousel funnel orchestrates hook awareness, pain agitation, clinical validation, and product transformation to lower CPA across German &amp; European markets.
          </p>
          <div class="summary-stats-cluster">
            <div class="summary-stat-box">
              <span class="stat-val">+38%</span>
              <span class="stat-lbl">CTR vs Standard Ad</span>
            </div>
            <div class="summary-stat-box">
              <span class="stat-val">4.15%</span>
              <span class="stat-lbl">Average Engagement</span>
            </div>
            <div class="summary-stat-box">
              <span class="stat-val">€2.14</span>
              <span class="stat-lbl">Blended Social CPA</span>
            </div>
            <div class="summary-stat-box">
              <span class="stat-val">92%</span>
              <span class="stat-lbl">Hook 3s Hold Rate</span>
            </div>
          </div>
        </div>
        <div class="summary-tools-row">
          <span class="summary-tool-tag">Midjourney v6</span>
          <span class="summary-tool-tag">ComfyUI</span>
          <span class="summary-tool-tag">Adobe Photoshop</span>
          <span class="summary-tool-tag">German Ad Copy</span>
          <span class="summary-tool-tag">Meta Ads Manager</span>
        </div>
        <div class="card-glow" aria-hidden="true"></div>
      `;
      socialMediaGrid.appendChild(summaryCard);
    }

    init3DCardTilt();
    attachCursorHoverHandlers();
  }

  // Initialize Social Media Grid
  renderSocialMedia('all');

  // Social Filter Buttons
  const socialFilterPills = document.querySelectorAll('[data-social-filter]');
  socialFilterPills.forEach((btn) => {
    btn.addEventListener('click', () => {
      initAudio();
      playClickSound(750, 0.04);
      socialFilterPills.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.getAttribute('data-social-filter');
      renderSocialMedia(f);
    });
  });

  // Funnel Step Buttons (Interactive Funnel Sequence)
  const funnelStepItems = document.querySelectorAll('.funnel-step-item[data-step]');
  funnelStepItems.forEach((btn) => {
    btn.addEventListener('click', () => {
      initAudio();
      playClickSound(850, 0.04);
      funnelStepItems.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const stepIdx = parseInt(btn.getAttribute('data-step'), 10);
      const targetItem = socialMediaData[stepIdx];
      if (targetItem) {
        // Render all and scroll or open target
        renderSocialMedia('all');
        // Reset filter pills to All
        socialFilterPills.forEach(p => {
          if (p.getAttribute('data-social-filter') === 'all') p.classList.add('active');
          else p.classList.remove('active');
        });
        const targetEl = document.getElementById(`social-card-${targetItem.id}`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetEl.style.outline = '2px solid var(--accent-gold)';
          targetEl.style.boxShadow = '0 0 35px rgba(255, 194, 38, 0.4)';
          setTimeout(() => {
            targetEl.style.outline = '';
            targetEl.style.boxShadow = '';
          }, 1800);
        }
      }
    });
  });

  // ==========================================
  // 7. SHOPIFY PRODUCT GALLERY & INTERACTIVE OVERCARD
  // ==========================================

  // (A) Unified Card View Switcher (Working Person vs Product Machine Only)
  function switchCardAngle(cardId, angle) {
    const card = document.querySelector(`.shopify-gallery-card[data-card-id="${cardId}"]`);
    if (!card) return;

    const switcher = card.querySelector(`.overcard-angle-switcher[data-target="${cardId}"]`);
    const pill = card.querySelector(`.card-toggle-view-pill[data-toggle-card="${cardId}"]`);

    // Update buttons in drawer
    if (switcher) {
      switcher.querySelectorAll('.angle-btn').forEach(b => {
        if (b.getAttribute('data-angle') === angle) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
    }

    // Swap images with smooth crossfade
    const allImgs = card.querySelectorAll('.gallery-card-img');
    allImgs.forEach((img) => {
      img.classList.remove('active-view-img');
      img.style.opacity = '0';
      img.style.pointerEvents = 'none';
    });

    const targetImg = document.getElementById(`img-${cardId}-${angle}`);
    if (targetImg) {
      targetImg.classList.add('active-view-img');
      targetImg.style.opacity = '1';
      targetImg.style.pointerEvents = 'auto';
    }

    // Update floating pill status on the card image
    if (pill) {
      const statusLabel = pill.querySelector('.toggle-status-label');
      const hintLabel = pill.querySelector('.card-toggle-hint');
      if (angle === 'secondary') {
        pill.classList.add('is-machine-active');
        if (statusLabel) statusLabel.textContent = 'Studio Machine Only';
        if (hintLabel) hintLabel.textContent = 'Click → Workout Action ⚡';
      } else if (angle === 'tertiary') {
        pill.classList.add('is-machine-active');
        if (statusLabel) statusLabel.textContent = 'Full Pro Bundle';
        if (hintLabel) hintLabel.textContent = 'Click → Workout Action ⚡';
      } else {
        pill.classList.remove('is-machine-active');
        if (statusLabel) statusLabel.textContent = 'Workout Action';
        if (hintLabel) hintLabel.textContent = 'Click → Machine Only 🛠';
      }
    }
  }

  // (A1) Overcard Angle Switchers
  const angleButtons = document.querySelectorAll('.overcard-angle-switcher .angle-btn');
  angleButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudio();
      playClickSound(750, 0.03);

      const switcher = btn.closest('.overcard-angle-switcher');
      const cardId = switcher ? switcher.getAttribute('data-target') : null;
      const angle = btn.getAttribute('data-angle'); // 'primary', 'secondary', 'tertiary'

      if (cardId && angle) {
        switchCardAngle(cardId, angle);
      }
    });
  });

  // (A2) Click on Card Media Wrapper or Toggle Pill to Toggle Machine Only vs Workout Person
  const mediaWrappers = document.querySelectorAll('.gallery-card-media-wrapper');
  mediaWrappers.forEach((wrap) => {
    wrap.addEventListener('click', (e) => {
      // Don't toggle if user clicked on zoom button
      if (e.target.closest('.card-zoom-btn')) return;

      const card = wrap.closest('.shopify-gallery-card');
      if (!card) return;
      const cardId = card.getAttribute('data-card-id');
      if (!cardId) return;

      initAudio();
      playClickSound(780, 0.03);

      // Check current active view
      const secondaryImg = document.getElementById(`img-${cardId}-secondary`);
      const isShowingMachine = secondaryImg && secondaryImg.classList.contains('active-view-img');

      // Toggle: if currently showing machine -> switch to primary (workout person); otherwise switch to secondary (machine only)
      const nextAngle = isShowingMachine ? 'primary' : 'secondary';
      switchCardAngle(cardId, nextAngle);
    });
  });

  // (B) Mobile / Touch Tap to expand Overcard Drawer
  const overcardDrawers = document.querySelectorAll('.overcard-drawer');
  overcardDrawers.forEach((drawer) => {
    const handle = drawer.querySelector('.overcard-pull-handle');
    const header = drawer.querySelector('.overcard-header');
    
    [handle, header].forEach((el) => {
      if (!el) return;
      el.addEventListener('click', (e) => {
        if (e.target.closest('.angle-btn') || e.target.closest('.btn-inspect-overcard')) return;
        initAudio();
        playClickSound(650, 0.02);
        drawer.classList.toggle('is-expanded');
      });
    });
  });

  // (C) Inspect High-Res Zoom on Overcard Cards with Direct Machine/Athlete Toggle
  const cardZoomTriggers = document.querySelectorAll('[data-zoom-card]');
  cardZoomTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const cardId = trigger.getAttribute('data-zoom-card');
      const card = document.querySelector(`.shopify-gallery-card[data-card-id="${cardId}"]`);
      if (!card) return;

      // Get currently active image or primary image
      const activeImg = card.querySelector('.gallery-card-img.active-view-img') || card.querySelector('.gallery-card-img');
      const primaryImg = document.getElementById(`img-${cardId}-primary`);
      const secondaryImg = document.getElementById(`img-${cardId}-secondary`);
      const titleEl = card.querySelector('.overcard-product-title');
      const captionTitle = titleEl ? titleEl.textContent : 'SportsTech Shopify Product Visual';

      let caption = `<strong>${captionTitle}</strong> (2000 &times; 2000px Ultra-HD Master)`;
      if (primaryImg && secondaryImg) {
        caption += `<br><span style="display:inline-flex; gap:10px; margin-top:10px; flex-wrap:wrap; justify-content:center;">
          <button type="button" class="btn-primary-header" style="padding:4px 14px; font-size:11px; cursor:pointer;" onclick="document.getElementById('lightboxImg').src='${primaryImg.src}'">⚡ View With Athlete</button>
          <button type="button" class="btn-primary-header" style="padding:4px 14px; font-size:11px; cursor:pointer; background:#10B981;" onclick="document.getElementById('lightboxImg').src='${secondaryImg.src}'">🛠 View Machine Only</button>
        </span>`;
      }

      if (activeImg) {
        openLightbox(activeImg.src, caption);
      }
    });
  });

  // (D) Shopify Gallery Category Filters
  const galleryFilterPills = document.querySelectorAll('[data-gallery-filter]');
  const galleryCards = document.querySelectorAll('.shopify-gallery-card');

  galleryFilterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      initAudio();
      playClickSound(800, 0.03);

      galleryFilterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-gallery-filter');

      // Filter Overcard Cards
      galleryCards.forEach((card) => {
        const cats = card.getAttribute('data-category') || '';
        if (filter === 'all' || cats.includes(filter)) {
          card.classList.remove('is-hidden');
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // ==========================================
  // 8. PRODUCT GALLERY SUITES (WRX 500, AQUAELITE & AMAZON ASIN STACK)
  // ==========================================
  const wrxSlidesData = [
    {
      index: 1,
      title: "01. CHAMPION CHOICE — Florentina Riffel Ruder Weltmeisterin",
      badge: "AUTHORITY HOOK",
      impact: "Conversion Catalyst: Endorsement by Olympic/World Champion Florentina Riffel lifts social proof by +48%",
      desc: '"Trainieren Sie hautnah mit einer Weltmeisterin und heben Ihre Fitness aufs nächste Level." Features Florentina in full rowing cadence with dual SportsTech Live app download badges for iOS & Android.',
      src: "/gallery/product_gallery/wrx_01_champion_choice.jpg"
    },
    {
      index: 2,
      title: "02. FLEXIBLE 360° DISPLAY — Smart TV & Console Integration",
      badge: "CONNECTED HARDWARE",
      impact: "Hardware Usability: 360° multi-angle rotatable display extends usage beyond rowing into HIIT and floor yoga",
      desc: '"360° schwenkbares Display für ein ganzheitliches Workout." Shows the ergonomic aluminum pivot arm allowing the HD display to rotate freely for off-machine strength sessions.',
      src: "/gallery/product_gallery/wrx_02_flexible_360_display.jpg"
    },
    {
      index: 3,
      title: "03. PLATZWUNDER — 0.2m² Space-Saving Vertical Fold",
      badge: "OBJECTION CRUSHER",
      impact: "Friction Buster: Overcomes 72% of European apartment size objections with upright 0.2m² storage",
      desc: '"Kompakt & platzsparend mit integrierten Transportrollen." Demonstrates vertical upright wall-stowage taking up less footprint than an armchair, equipped with whisper-glide wheels.',
      src: "/gallery/product_gallery/wrx_03_platzwunder_foldable.jpg"
    },
    {
      index: 4,
      title: "04. STREAM & ROW — Synchronous River Simulation",
      badge: "DIGITAL ECOSYSTEM",
      impact: "Engagement Lift: Synchronous streaming on 65\" 4K TV increases customer retention and daily active sessions",
      desc: '"Live-Streaming & virtuelle Wasserstrecken für maximalen Realismus." Features smart TV pairing simulating real-world lake rowing with live cadence and split times.',
      src: "/gallery/product_gallery/wrx_04_stream_and_row.jpg"
    },
    {
      index: 5,
      title: "05. STYLISH WOOD CRAFT — Handcrafted FSC Certified Ash Wood",
      badge: "PREMIUM LIVING",
      impact: "Aesthetic Living: Bridges athletic machinery with Scandinavian luxury furniture, boosting partner buy-in",
      desc: '"Echtholz-Design in edler Handwerkskunst für jedes Wohnzimmer." Highlights high-density wood grain, acoustic dampening, and moisture-resistant oil finish.',
      src: "/gallery/product_gallery/wrx_05_stylish_wood_craft.jpg"
    },
    {
      index: 6,
      title: "06. DESIGNED IN GERMANY — Berlin Engineering Headquarters",
      badge: "ORIGIN PROOF",
      impact: "Trust Multiplier: Berlin R&D certification stamp yields +28% checkout conversion on European marketplaces",
      desc: '"Deutsche Ingenieurskunst & Qualitätssicherung aus Berlin." Showcases precision laser-cut steel rails, reinforced bearing housings, and German engineering standards.',
      src: "/gallery/product_gallery/wrx_06_designed_in_germany.jpg"
    },
    {
      index: 7,
      title: "07. GUARANTEE & PATENTS — 5-Year Protection & Certified Safety",
      badge: "RISK REVERSAL",
      impact: "Risk Elimination: 5-year warranty badge and TÜV safety seal decrease purchase hesitation and checkout abandonment",
      desc: '"5 Jahre Herstellergarantie und zertifizierte TÜV & ISO Standards." Explicit warranty seals, rapid European customer service response, and official patent badges.',
      src: "/gallery/product_gallery/wrx_07_guarantee_and_patents.jpg"
    },
    {
      index: 8,
      title: "08. BIO-REACTIVE LED PULSE — Immersive Heart-Rate Lighting",
      badge: "BIOMETRIC SENSORY",
      impact: "Differentiator: Color-shifting ambient tank LED matches heart-rate zone (Blue = Warmup, Red = Peak VO2 Max)",
      desc: '"LED-Farblicht-Feedback reagiert in Echtzeit auf Ihre Pulszone." Highlights ambient tank illumination reflecting biometric exertion levels inside the water cylinder.',
      src: "/gallery/product_gallery/wrx_08_led_pulse_lighting.jpg"
    },
    {
      index: 9,
      title: "09. NEXT LEVEL FITNESS — Full Studio Transformation",
      badge: "CLOSING VALUE CTA",
      impact: "Basket Value: Bundled accessory package drives higher average order value (AOV) across direct Shopify store",
      desc: '"Das ultimative Rudererlebnis für Ihr Zuhause." Comprehensive bundle overview including water purification tablets, high-grade floor protection mat, and live coach subscription.',
      src: "/gallery/product_gallery/wrx_09_next_level_fitness.jpg"
    }
  ];

  const aplusSuitesData = {
    pt500: {
      badge: "PT500 Calisthenics",
      desc: "Engineered to conquer customer objections, prove heavy-duty 300kg stability, and drive high-intent conversions. Built with modular 1961×802 layout modules.",
      choice: "Amazon's <em>Choice</em>",
      category: "in Parallel Dip Bars & Calisthenics Equipment",
      title: "PT500 Professional Calisthenics Dip Bar Station • 300kg Load Capacity • 9 Adjustable Height & Width Settings • Multi-Surface Anti-Slip Rubber Grip",
      stars: "★★★★★",
      score: "4.8 out of 5 stars",
      count: "1,248 ratings",
      notice: "📌 <strong>FROM THE MANUFACTURER</strong> • Complete Visual A+ Merchandising Stack (Scroll to Inspect 6 Continuous Modules)",
      metrics: [
        { val: "+38%", lbl: "Amazon Listing Conversion Lift" },
        { val: "300 KG", lbl: "Verified Heavy-Duty Load Capacity" },
        { val: "-45%", lbl: "Return Rate for Dimension Inquiries" },
        { val: "100+", lbl: "Full-Body Exercise Versatility" }
      ],
      modules: [
        {
          id: 1,
          title: 'Hero Planche & 300kg Load Capacity',
          tag: 'HERO HOOK & STRUCTURAL INTEGRITY',
          img: '/aplus_pages/pt500/module_01.png',
          strategy: 'Instantly commands authority with an advanced gymnastic planche. Visually communicates unmatched structural stability and 300kg maximum weight capacity to defeat cheap competitor alternatives.'
        },
        {
          id: 2,
          title: '100+ Exercises & 9 Adjustable Settings',
          tag: 'VERSATILITY & FULL-BODY UTILITY',
          img: '/aplus_pages/pt500/module_02.png',
          strategy: 'Expands perceived buyer value beyond simple dips. Highlights versatile full-body calisthenics, chest presses, knee raises, and L-sits across 9 ergonomic settings.'
        },
        {
          id: 3,
          title: 'Intelligent Safety Connector & Dimensions',
          tag: 'SAFETY & ANTI-WOBBLE ENGINEERING',
          img: '/aplus_pages/pt500/module_03.png',
          strategy: 'Overcomes wobble and tip-over fears. Annotates 80 to 90 cm height adjustments and 7-stage width stabilization bar (83.5 to 101.5 cm) for rock-solid confidence.'
        },
        {
          id: 4,
          title: 'Lightweight & 5 Real-World Storage Contexts',
          tag: 'PORTABILITY & OBJECTION HANDLING',
          img: '/aplus_pages/pt500/module_04.png',
          strategy: 'Answers the critical buyer question: "Where will I put this in my small apartment?" Shows 5 practical storage scenarios: Room Corner, Outdoor, Storage Room, Car Trunk, and Garage.'
        },
        {
          id: 5,
          title: 'Penthouse Home Workout Lifestyle Integration',
          tag: 'LIFESTYLE ASPIRATION & VALUE ELEVATION',
          img: '/aplus_pages/pt500/module_05.png',
          strategy: 'High-income lifestyle aspiration. Warm natural lighting, hardwood floors, and panoramic mountain view position the PT500 as luxury fitness equipment.'
        },
        {
          id: 6,
          title: 'Multi-Surface Anti-Slip Floor Stability',
          tag: 'FLOOR PROTECTION & GRIP ANNOTATION',
          img: '/aplus_pages/pt500/module_06.png',
          strategy: 'Eliminates floor scratching concerns. Visualizes micro-grooved anti-slip rubber endcaps tested across hardwood, garden lawn, ceramic tile, and gym rubber flooring.'
        }
      ]
    },
    sx175: {
      badge: "SX175 Studio Speedbike",
      desc: "High-performance German engineered indoor speedbike architecture: precision magnetic resistance, silent whisper-drive belt, ergonomic aero cockpit, and live fitness app connectivity.",
      choice: "Amazon's <em>Choice</em>",
      category: "in Indoor Exercise Bikes & Studio Cycling",
      title: "Sportstech SX175 Smart Studio Speedbike • Precision Magnetic Flywheel Resistance • Ultra-Silent Whisper Belt Drive • Aero Cockpit Mount",
      stars: "★★★★★",
      score: "4.9 out of 5 stars",
      count: "894 ratings",
      notice: "📌 <strong>FROM THE MANUFACTURER</strong> • Sportstech SX175 Studio Speedbike Modular Visual Story (7 Continuous Modules)",
      metrics: [
        { val: "+42%", lbl: "Studio Bike Conversion Velocity" },
        { val: "<28 dB", lbl: "Whisper-Quiet Magnetic Belt Drive" },
        { val: "16 LVL", lbl: "Precision Stepless Resistance" },
        { val: "100%", lbl: "German Engineering & R&D Quality" }
      ],
      modules: [
        {
          id: 1,
          title: 'Hero Studio Speedbike & Aerodynamic Cockpit',
          tag: 'HERO HOOK & DESIGN SPEED',
          img: '/aplus_pages/sx175/module_01.jpg',
          strategy: 'Commands immediate attention with athletic racing posture and dark titanium chassis, positioning the SX175 as high-performance studio equipment.'
        },
        {
          id: 2,
          title: 'Precision Magnetic Flywheel & Step-Free Dial',
          tag: 'SMOOTH RESISTANCE ENGINEERING',
          img: '/aplus_pages/sx175/module_02.jpg',
          strategy: 'Highlights frictionless magnetic eddy-current brake system for silent, wear-free resistance control across all workout intensities.'
        },
        {
          id: 3,
          title: 'Ultra-Silent Whisper Belt Drive Architecture',
          tag: 'ACOUSTIC LUXURY FOR APARTMENTS',
          img: '/aplus_pages/sx175/module_03.jpg',
          strategy: 'Addresses apartment noise objections: ribbed rubber belt drive operating under 28 decibels for undisturbed morning or late-night rides.'
        },
        {
          id: 4,
          title: 'Multi-Position Aero Handlebars & Live App Mount',
          tag: 'IMMERSIVE DIGITAL STREAMING',
          img: '/aplus_pages/sx175/module_04.jpg',
          strategy: 'Focuses on cockpit ergonomics: sweat-resistant multi-grip aero bars, integrated heart rate pulse sensors, and universal tablet/smartphone tray.'
        },
        {
          id: 5,
          title: 'SPD Click Pedals & Anatomical Comfort Saddle',
          tag: 'BIOMECHANICAL POWER TRANSFER',
          img: '/aplus_pages/sx175/module_05.jpg',
          strategy: 'Proves dual pedal versatility for both clip-in cycling shoes and regular trainers, paired with pressure-relieving prostate relief saddle.'
        },
        {
          id: 6,
          title: 'Space-Saving Living Room Footprint & Transport Rollers',
          tag: 'EFFORTLESS HOME MOBILITY',
          img: '/aplus_pages/sx175/module_06.jpg',
          strategy: 'Demonstrates compact 0.6m² floor footprint and smooth polyurethane transport wheels for single-handed tilt-and-roll relocation.'
        },
        {
          id: 7,
          title: 'German R&D Guarantee & TÜV Certified Quality',
          tag: 'TRUST & RISK REVERSAL',
          img: '/aplus_pages/sx175/module_07.jpg',
          strategy: 'Reinforces customer confidence with official German safety seals, multi-year warranty, and dedicated European customer service.'
        }
      ]
    },
    hx720: {
      badge: "HX720 Sprint Pro",
      desc: "Commercial-grade sprint treadmill designed for maximum acceleration: 5.5 HP high-torque motor, orthopedic joint damping, and competitor comparison matrix.",
      choice: "Amazon's <em>Choice</em>",
      category: "in Commercial Treadmills & Cardio Equipment",
      title: "Sportstech HX720 Commercial Treadmill • 5.5 HP Peak Motor • Multi-Zone Joint Damping • 22 km/h Max Speed & Power Incline",
      stars: "★★★★★",
      score: "4.9 out of 5 stars",
      count: "612 ratings",
      notice: "📌 <strong>FROM THE MANUFACTURER</strong> • Sportstech HX720 Heavy-Duty Performance Suite (4 Continuous Modules)",
      metrics: [
        { val: "+47%", lbl: "High-Ticket Treadmill Velocity" },
        { val: "5.5 HP", lbl: "Peak Motor Output Power" },
        { val: "22 KM/H", lbl: "Top Sprint Velocity Range" },
        { val: "8-ZONE", lbl: "Orthopedic Joint Cushioning" }
      ],
      modules: [
        {
          id: 1,
          title: 'Hero Sprint Velocity & Stadium Energy',
          tag: 'HIGH-VELOCITY HERO HOOK',
          img: '/aplus_pages/hx720/module_01.jpg',
          strategy: 'Captures full-sprint dynamic energy at 22 km/h, instantly communicating commercial-grade durability and Olympic-level training capabilities.'
        },
        {
          id: 2,
          title: 'Emotional Home Cardio & Real-Time Biometrics',
          tag: 'ASPIRATIONAL LIVING STAGING',
          img: '/aplus_pages/hx720/module_02.jpg',
          strategy: 'Combines modern luxury home staging with synchronized pulse LED telemetry, elevating cardio workouts into daily wellness rituals.'
        },
        {
          id: 3,
          title: '5.5 HP High-Torque Motor & Multi-Zone Cushioning',
          tag: 'HEAVY-DUTY HARDWARE SUPREMACY',
          img: '/aplus_pages/hx720/module_03.jpg',
          strategy: 'Detailed cutaway visualization of the commercial motor and 8-zone damping deck, protecting knees and joints during high-impact sprints.'
        },
        {
          id: 4,
          title: 'Competitor Comparison Matrix & Closing Spec Sheet',
          tag: 'COMPREHENSIVE CONVERSION CLOSER',
          img: '/aplus_pages/hx720/module_04.jpg',
          strategy: 'Clear side-by-side benchmark chart against market rivals proving superior motor wattage, wider running belt, and lower decibel levels.'
        }
      ]
    },
    aura: {
      badge: "Aura Smart Ambient",
      desc: "Direct-to-consumer circadian wellness lamp: sleep-wake cycle restoration, organic Scandinavian frosted glass, touch dimmer, and eye-safe flicker-free certification.",
      choice: "Amazon's <em>Choice</em>",
      category: "in Smart Wellness Lighting & Circadian Devices",
      title: "Aura Circadian Rhythm Smart Ambient Light • Clinically Engineered Sleep-Wake Spectrum • Touch Dimming & Organic Glass Finish",
      stars: "★★★★★",
      score: "4.8 out of 5 stars",
      count: "438 ratings",
      notice: "📌 <strong>FROM THE MANUFACTURER</strong> • Aura Smart Circadian Light Merchandising Architecture (6 Continuous Modules)",
      metrics: [
        { val: "+36%", lbl: "DTC Wellness Conversion Lift" },
        { val: "100%", lbl: "Flicker-Free Eye-Safe Spectrum" },
        { val: "2200K-6500K", lbl: "Dynamic Circadian Range" },
        { val: "30 DAYS", lbl: "Clinical Sleep Guarantee" }
      ],
      modules: [
        {
          id: 1,
          title: 'Circadian Rhythm Synchronization & Dawn Awakening',
          tag: 'NATURAL SLEEP-WAKE HOOK',
          img: '/aplus_pages/aura/module_01.png',
          strategy: 'Positions Aura as a daily wellness ritual: gradually waking the brain with calibrated sunrise frequencies to reset the master biological clock.'
        },
        {
          id: 2,
          title: 'Organic Scandinavian Glass Silhouette',
          tag: 'SCULPTURAL BEDROOM ART',
          img: '/aplus_pages/aura/module_02.png',
          strategy: 'Showcases the matte-frosted curved blown glass silhouette, turning the wellness light into a luxury architectural accent on any bedside table.'
        },
        {
          id: 3,
          title: 'Intuitive Touch Dimmer & Spectrum Modulation',
          tag: 'TACTILE ERGONOMIC CONTROL',
          img: '/aplus_pages/aura/module_03.png',
          strategy: 'Highlights step-free capacitive touch controls on brushed aluminum base, letting users dial smoothly between warm candle amber and daylight.'
        },
        {
          id: 4,
          title: 'Melatonin-Promoting Warm Ambient Twilight',
          tag: 'DEEP SLEEP HORMONE ALIGNMENT',
          img: '/aplus_pages/aura/module_04.png',
          strategy: 'Clinical explanation of 2200K zero-blue twilight mode that promotes natural melatonin production for deeper, uninterrupted sleep.'
        },
        {
          id: 5,
          title: 'Minimalist Nightstand Cordless Freedom',
          tag: 'MODERN INTERIOR HARMONY',
          img: '/aplus_pages/aura/module_05.png',
          strategy: 'Depicts clean cordless operation with high-capacity rechargeable battery for clutter-free Scandinavian bedroom aesthetics.'
        },
        {
          id: 6,
          title: 'Certified Eye-Safe Specifications & Architecture',
          tag: 'CLINICAL BACKING & CERTIFICATION',
          img: '/aplus_pages/aura/module_06.png',
          strategy: 'Provides technical reassurance: RG0 eye safety certification, zero flicker, 95+ CRI natural color rendering, and 30-day sleep trial.'
        }
      ]
    }
  };

  const gallerySuitesData = {
    wrx500: {
      title: "SportsTech WRX 500 AquaElite",
      desc: "Complete end-to-end direct-to-consumer 9-slide product gallery: 4K Scandinavian living room staging, world champion endorsement, German patent badges, and bio-reactive LED pulse illumination engineered to maximize PDP conversion velocity.",
      heroImg: "/gallery/wrx500_aquaelite_hero.jpg",
      heroTitle: "Real Wood Water Rower in Scandinavian Luxury Interior",
      heroSub: "Synchronized smart TV river simulation with real-time biometric telemetry.",
      slides: wrxSlidesData
    },
    aquaelite: {
      title: "AquaElite Scandinavian Living Staging",
      desc: "Architectural 4K lifestyle render suite: real-wood Ash joinery, Scandinavian penthouse interior design, hydro-acoustic water chamber reflections, and luxury wellness furniture.",
      heroImg: "/gallery/aquaelite/aquaelite_01.jpg",
      heroTitle: "4K Architectural Staging: WRX 500 AquaElite in Modern Penthouse",
      heroSub: "Harmonizing heavy-duty athletic water rowing with high-end Scandinavian living interior aesthetics.",
      slides: [
        {
          index: 1,
          title: "01. ARCHITECTURAL MASTER — Real Wood Oak Staging",
          badge: "LUXURY FURNITURE",
          impact: "Elevates perception from athletic equipment to sculptural Scandinavian home furniture.",
          desc: "Full-profile perspective in a modern living space featuring natural oak joinery, floor-to-ceiling glass, and warm morning ambient sunlight.",
          src: "/gallery/aquaelite/aquaelite_01.jpg"
        },
        {
          index: 2,
          title: "02. HYDRO-CYLINDER DYNAMICS — Dual-Blade Water Resistance",
          badge: "HYDRODYNAMICS",
          impact: "Communicates natural water resistance and rhythmic splash acoustics.",
          desc: "Macro visual detailing the polycarbonate water chamber, active dual blades, and smooth pull pulley mechanism.",
          src: "/gallery/aquaelite/aquaelite_02.jpg"
        },
        {
          index: 3,
          title: "03. CONSOLE INTEGRITY — Dual-Axis Smart Mount",
          badge: "DIGITAL COCKPIT",
          impact: "Highlights connected workout telemetry and streaming integration.",
          desc: "Close-up cockpit perspective showing anti-vibration smartphone/tablet holder and intuitive live biometric dials.",
          src: "/gallery/aquaelite/aquaelite_03.jpg"
        },
        {
          index: 4,
          title: "04. ERGONOMIC FOOTREST — Micro-Adjustable Heel Locking",
          badge: "BIOMECHANICS",
          impact: "Assures ergonomic foot stability for athletes of all heights.",
          desc: "Anatomically contoured footplate with quick-pull nylon straps and anti-slip ribbed heel cups.",
          src: "/gallery/aquaelite/aquaelite_04.jpg"
        },
        {
          index: 5,
          title: "05. PRECISION RAIL GLIDE — Ball-Bearing Dual Carriage",
          badge: "SMOOTH GLIDE",
          impact: "Conveys whisper-quiet movement across high-density aluminum rails.",
          desc: "Multi-roller silent carriage engineered for zero-friction movement and silent evening training.",
          src: "/gallery/aquaelite/aquaelite_05.jpg"
        },
        {
          index: 6,
          title: "06. AMBIENT LIVING HARMONY — Twilight Lighting Setup",
          badge: "WARM ATMOSPHERE",
          impact: "Shows seamless integration into evening relaxation routines.",
          desc: "Ambient twilight living room render highlighting the warm glow of the bio-reactive LED water tank.",
          src: "/gallery/aquaelite/aquaelite_06.jpg"
        },
        {
          index: 7,
          title: "07. SCULPTURAL COMPACT STORAGE — Minimalist Upright Footprint",
          badge: "SPACE-SAVING",
          impact: "Proves upright storage blends naturally into small apartment corners.",
          desc: "Vertical wall-side storage showing integrated silicone pads and transport wheels for effortless moving.",
          src: "/gallery/aquaelite/aquaelite_07.jpg"
        },
        {
          index: 8,
          title: "08. FINISHING CRAFT — German Engineering Seals",
          badge: "QUALITY FINISH",
          impact: "Reassures customers with German manufacturing and R&D standards.",
          desc: "Close-up of laser-etched Sportstech Berlin branding, moisture-sealed timber joints, and satin coat.",
          src: "/gallery/aquaelite/aquaelite_08.jpg"
        },
        {
          index: 9,
          title: "09. LIFESTYLE CADENCE — World Champion Endorsement",
          badge: "CHAMPION PROOF",
          impact: "Final conversion catalyst linking elite athleticism with home workout.",
          desc: "Athletic rowing form demonstrated in realistic Scandinavian penthouse environment.",
          src: "/gallery/aquaelite/aquaelite_09.jpg"
        }
      ]
    },
    amazon_asin: {
      title: "SportsTech Calisthenics PT Series ASIN Listing",
      desc: "High-converting Amazon ASIN product gallery stack for calisthenics parallettes: heavy-duty 300kg testing, 100+ exercise utility, 9 height adjustments, and multi-surface stability.",
      heroImg: "/gallery/amazon_asin/pt_asin_01.webp",
      heroTitle: "Amazon ASIN Listing Graphic Stack: PT Calisthenics Dip Station",
      heroSub: "Optimized for mobile Amazon shopper conversion, objection handling, and feature verification.",
      slides: [
        {
          index: 1,
          title: "01. HERO HOOK — Professional Calisthenics Parallelettes",
          badge: "HERO ASIN",
          impact: "Main listing visual delivering immediate category authority and Prime click-through.",
          desc: "Full equipment overview highlighting 300kg heavy-duty steel tube frame and multi-surface anti-slip feet.",
          src: "/gallery/amazon_asin/pt_asin_01.webp"
        },
        {
          index: 2,
          title: "02. 300 KG LOAD CAPACITY — Heavy-Duty Steel Integrity",
          badge: "LOAD PROOF",
          impact: "Crushes durability objections with industrial load testing and structural guarantees.",
          desc: "Structural breakdown illustrating reinforced triangular bracing and high-density carbon steel construction.",
          src: "/gallery/amazon_asin/pt_asin_02.webp"
        },
        {
          index: 3,
          title: "03. 100+ EXERCISE VERSATILITY — Full-Body Transformation",
          badge: "FULL-BODY UTILITY",
          impact: "Expands use cases from simple dips to comprehensive calisthenics progressions.",
          desc: "Visual matrix demonstrating L-sits, planche progressions, push-ups, dips, and inverted rows.",
          src: "/gallery/amazon_asin/pt_asin_03.webp"
        },
        {
          index: 4,
          title: "04. 9 HEIGHT & WIDTH ADJUSTMENTS — Custom Biomechanics",
          badge: "MICRO-ADJUSTABLE",
          impact: "Ensures ergonomic fit for all body types, heights, and wing spans.",
          desc: "Safety quick-lock pin system adjusting height between 80-90cm and 7-stage width stabilization connector.",
          src: "/gallery/amazon_asin/pt_asin_04.webp"
        },
        {
          index: 5,
          title: "05. INTELLIGENT CONNECTOR BAR — Anti-Tip Stabilization",
          badge: "SAFETY CONNECTOR",
          impact: "Eliminates fear of tipping or wobbling during explosive movements.",
          desc: "Heavy-duty connecting crossbar locking both parallel bars into a rock-solid monolithic unit.",
          src: "/gallery/amazon_asin/pt_asin_05.webp"
        },
        {
          index: 6,
          title: "06. MULTI-SURFACE GRIP — Floor Protection & Stability",
          badge: "NON-SLIP FEET",
          impact: "Assures floor protection across wood, tile, lawn, and gym floors.",
          desc: "Heavy-duty grooved rubber endcaps tested for zero slippage and zero scuffing on polished hardwood.",
          src: "/gallery/amazon_asin/pt_asin_06.webp"
        },
        {
          index: 7,
          title: "07. COMPACT STOWAGE — Effortless Space-Saving Design",
          badge: "PORTABILITY",
          impact: "Solves apartment storage worries with quick tool-free disassembly.",
          desc: "Shows nested compact storage in room corners, under beds, and vehicle trunks for outdoor sessions.",
          src: "/gallery/amazon_asin/pt_asin_07.webp"
        }
      ]
    }
  };

  let activeGallerySuite = 'wrx500';
  let currentWrxSlideIndex = 0;

  const getActiveSlides = () => (gallerySuitesData[activeGallerySuite] ? gallerySuitesData[activeGallerySuite].slides : wrxSlidesData);

  const wrxActiveSlideTitle = document.getElementById('wrxActiveSlideTitle');
  const wrxSlideCounter = document.getElementById('wrxSlideCounter');
  const wrxActiveSlideImg = document.getElementById('wrxActiveSlideImg');
  const wrxSlideBadge = document.getElementById('wrxSlideBadge');
  const wrxSlideImpact = document.getElementById('wrxSlideImpact');
  const wrxSlideDesc = document.getElementById('wrxSlideDesc');
  const wrxThumbnailsStrip = document.getElementById('wrxThumbnailsStrip');
  const wrxPrevBtn = document.getElementById('wrxPrevBtn');
  const wrxNextBtn = document.getElementById('wrxNextBtn');
  const galleryActiveTitle = document.getElementById('galleryActiveTitle');
  const galleryActiveDesc = document.getElementById('galleryActiveDesc');

  function renderWrxSlide(index) {
    const slides = getActiveSlides();
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentWrxSlideIndex = index;

    const data = slides[currentWrxSlideIndex];
    if (!data) return;

    const totalStr = slides.length < 10 ? `0${slides.length}` : `${slides.length}`;
    const curStr = data.index < 10 ? `0${data.index}` : `${data.index}`;

    if (wrxActiveSlideTitle) wrxActiveSlideTitle.textContent = data.title;
    if (wrxSlideCounter) wrxSlideCounter.innerHTML = `<span>SLIDE ${curStr} / ${totalStr}</span>`;
    if (wrxSlideBadge) wrxSlideBadge.textContent = data.badge;
    if (wrxSlideImpact) wrxSlideImpact.textContent = data.impact;
    if (wrxSlideDesc) wrxSlideDesc.textContent = data.desc;

    if (wrxActiveSlideImg) {
      wrxActiveSlideImg.style.opacity = '0';
      setTimeout(() => {
        wrxActiveSlideImg.src = data.src;
        wrxActiveSlideImg.setAttribute('data-zoom-src', data.src);
        wrxActiveSlideImg.setAttribute('alt', data.title);
        wrxActiveSlideImg.style.opacity = '1';
      }, 150);
    }

    // Update thumbnails active state
    if (wrxThumbnailsStrip) {
      const thumbs = wrxThumbnailsStrip.querySelectorAll('.wrx-thumb');
      thumbs.forEach((t, i) => {
        if (i === currentWrxSlideIndex) {
          t.classList.add('active');
          t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          t.classList.remove('active');
        }
      });
    }
  }

  function renderWrxThumbnails() {
    if (!wrxThumbnailsStrip) return;
    wrxThumbnailsStrip.innerHTML = '';
    const slides = getActiveSlides();
    slides.forEach((slide, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `wrx-thumb ${idx === currentWrxSlideIndex ? 'active' : ''}`;
      thumb.setAttribute('title', slide.title);
      thumb.innerHTML = `<img src="${slide.src}" alt="${slide.title}" loading="lazy">`;
      thumb.addEventListener('click', () => {
        initAudio();
        playClickSound(800, 0.03);
        renderWrxSlide(idx);
      });
      wrxThumbnailsStrip.appendChild(thumb);
    });
  }

  // Prev / Next button listeners
  if (wrxPrevBtn) {
    wrxPrevBtn.addEventListener('click', () => {
      initAudio();
      playClickSound(700, 0.03);
      renderWrxSlide(currentWrxSlideIndex - 1);
    });
  }

  if (wrxNextBtn) {
    wrxNextBtn.addEventListener('click', () => {
      initAudio();
      playClickSound(700, 0.03);
      renderWrxSlide(currentWrxSlideIndex + 1);
    });
  }

  // Touch Swipe for WRX Slide Stage
  const wrxSlideViewport = document.querySelector('.wrx-slide-viewport');
  if (wrxSlideViewport) {
    let wrxTouchStartX = 0;
    let wrxTouchStartY = 0;

    wrxSlideViewport.addEventListener('touchstart', (e) => {
      wrxTouchStartX = e.changedTouches[0].screenX;
      wrxTouchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    wrxSlideViewport.addEventListener('touchend', (e) => {
      const wrxTouchEndX = e.changedTouches[0].screenX;
      const wrxTouchEndY = e.changedTouches[0].screenY;
      const diffX = wrxTouchEndX - wrxTouchStartX;
      const diffY = wrxTouchEndY - wrxTouchStartY;

      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          initAudio();
          playClickSound(700, 0.03);
          renderWrxSlide(currentWrxSlideIndex + 1);
        } else {
          initAudio();
          playClickSound(700, 0.03);
          renderWrxSlide(currentWrxSlideIndex - 1);
        }
      }
    }, { passive: true });
  }

  // Mode Switcher (Interactive Reader vs Show All Slides Grid)
  const wrxModeReaderBtn = document.getElementById('wrxModeReaderBtn');
  const wrxModeGridBtn = document.getElementById('wrxModeGridBtn');
  const wrxReaderView = document.getElementById('wrxReaderView');
  const wrxGridView = document.getElementById('wrxGridView');

  // Amazon Listing Modal Logic
  const amazonModalOverlay = document.getElementById('amazonModalOverlay');
  const amazonModalClose = document.getElementById('amazonModalClose');
  const amazonModalBackdrop = document.getElementById('amazonModalBackdrop');
  const amazonThumbs = document.getElementById('amazonThumbs');
  const amazonMainImg = document.getElementById('amazonMainImg');
  const amazonTitle = document.getElementById('amazonTitle');
  const amazonBullets = document.getElementById('amazonBullets');

  // Modal View Switcher & Creative Board Logic
  const btnViewMatrix = document.getElementById('btnViewMatrix');
  const btnViewAmzStore = document.getElementById('btnViewAmzStore');
  const creativeBoardView = document.getElementById('creativeBoardView');
  const amazonStoreView = document.getElementById('amazonStoreView');
  const creativeBoardGrid = document.getElementById('creativeBoardGrid');
  const creativeFooterSub = document.getElementById('creativeFooterSub');
  const creativeFooterBrand = document.getElementById('creativeFooterBrand');
  const modalProductCategory = document.getElementById('modalProductCategory');
  const modalProductTitle = document.getElementById('modalProductTitle');

  function setModalView(view) {
    if (view === 'matrix') {
      if (btnViewMatrix) btnViewMatrix.classList.add('active');
      if (btnViewAmzStore) btnViewAmzStore.classList.remove('active');
      if (creativeBoardView) creativeBoardView.style.display = 'block';
      if (amazonStoreView) amazonStoreView.style.display = 'none';
    } else {
      if (btnViewMatrix) btnViewMatrix.classList.remove('active');
      if (btnViewAmzStore) btnViewAmzStore.classList.add('active');
      if (creativeBoardView) creativeBoardView.style.display = 'none';
      if (amazonStoreView) amazonStoreView.style.display = 'block';
    }
  }

  if (btnViewMatrix) {
    btnViewMatrix.addEventListener('click', () => {
      initAudio();
      playClickSound(850, 0.03);
      setModalView('matrix');
    });
  }
  if (btnViewAmzStore) {
    btnViewAmzStore.addEventListener('click', () => {
      initAudio();
      playClickSound(850, 0.03);
      setModalView('amazon');
    });
  }

  window.openAmazonListingPage = function(suiteKey) {
    if (!amazonModalOverlay) return;
    initAudio();
    playClickSound(800, 0.04);

    const aplusSuite = typeof aplusSuitesData !== 'undefined' ? aplusSuitesData[suiteKey] : null;
    const gallerySuite = typeof gallerySuitesData !== 'undefined' ? gallerySuitesData[suiteKey] : null;

    if (!aplusSuite && !gallerySuite) return;

    // Default to the 3x3 Creative Matrix View matching the user reference
    setModalView('matrix');

    let title = '';
    let heroImg = '';
    let category = 'in Sports & Fitness Equipment';
    let stars = '★★★★★';
    let count = '1,248 ratings';
    let priceWhole = '199';
    let priceFraction = '99';
    let buyBoxPrice = '$199.99';
    let bulletList = [];
    let slides = [];

    if (aplusSuite) {
      title = aplusSuite.title;
      heroImg = aplusSuite.modules[0].img;
      category = aplusSuite.category || 'in Sports & Fitness Equipment';
      stars = aplusSuite.stars || '★★★★★';
      count = aplusSuite.count || '1,248 ratings';

      if (suiteKey === 'pt500') {
        priceWhole = '189'; priceFraction = '99'; buyBoxPrice = '$189.99';
        bulletList = [
          '<strong>300kg Verified Load Capacity:</strong> Heavy-duty industrial steel chassis built for explosive calisthenics, weighted dips, and gymnastic planche training.',
          '<strong>9 Ergonomic Adjustments:</strong> 80cm to 90cm height adjustments with 7-stage width stabilization bar (83.5 to 101.5 cm) for wobble-free stability.',
          '<strong>Anti-Slip Floor Protection:</strong> Micro-grooved rubber endcaps tested across hardwood, garden lawn, tile, and gym rubber flooring.',
          '<strong>Modular 1961×802 A+ Suite:</strong> Complete visual merchandising stack reducing dimension inquiry returns by 45%.'
        ];
      } else if (suiteKey === 'sx175') {
        priceWhole = '449'; priceFraction = '00'; buyBoxPrice = '$449.00';
        bulletList = [
          '<strong>Precision Magnetic Flywheel:</strong> Frictionless magnetic eddy-current brake delivers whisper-quiet (<28dB) workouts.',
          '<strong>Aerodynamic Cockpit:</strong> Multi-position aero handlebars with pulse telemetry and universal tablet holder.',
          '<strong>SPD Dual Pedals:</strong> Biomechanically engineered for both SPD clip-in cycling shoes and standard trainers.',
          '<strong>German R&D Quality:</strong> TÜV certified construction with compact living room transport wheels.'
        ];
      } else if (suiteKey === 'hx720') {
        priceWhole = '799'; priceFraction = '00'; buyBoxPrice = '$799.00';
        bulletList = [
          '<strong>5.5 HP High-Torque Motor:</strong> Explosive acceleration up to 22 km/h top sprint speed and 15% motorized incline.',
          '<strong>8-Zone Orthopedic Joint Damping:</strong> Multi-layer shock absorption system protecting knees during high-intensity intervals.',
          '<strong>Hydraulic Soft-Drop Folding:</strong> Effortless single-touch folding system for modern living spaces.',
          '<strong>Synchronized Console:</strong> Live pulse LED guidance and interactive workout streaming.'
        ];
      } else if (suiteKey === 'aura') {
        priceWhole = '129'; priceFraction = '00'; buyBoxPrice = '$129.00';
        bulletList = [
          '<strong>Circadian Rhythm Restoration:</strong> Clinically calibrated sunrise/sunset spectrum gently resets the biological clock.',
          '<strong>Matte Frosted Blown Glass:</strong> Sculptural Scandinavian aesthetic elevates modern bedside nightstands.',
          '<strong>RG0 Certified Eye Safety:</strong> 100% flicker-free with 95+ CRI natural color spectrum for zero eye strain.',
          '<strong>Capacitive Touch Slider:</strong> Step-free dimming modulation between warm 2200K twilight and 6500K daylight.'
        ];
      }

      slides = aplusSuite.modules.map((m, idx) => ({
        index: m.id || idx + 1,
        title: `Module 0${m.id}: ${m.title}`,
        badge: m.tag || `MODULE 0${m.id}`,
        impact: 'A+ Conversion Architecture',
        desc: m.strategy,
        src: m.img
      }));
    } else {
      title = gallerySuite.title;
      heroImg = gallerySuite.heroImg || (gallerySuite.slides[0] && gallerySuite.slides[0].src);
      slides = gallerySuite.slides;

      if (suiteKey === 'wrx500') {
        category = 'in Home Rowing Machines & Cardio';
        priceWhole = '899'; priceFraction = '00'; buyBoxPrice = '$899.00';
        count = '2,419 ratings';
      } else if (suiteKey === 'aquaelite') {
        category = 'in Architectural Fitness Equipment';
        priceWhole = '1,199'; priceFraction = '00'; buyBoxPrice = '$1,199.00';
        count = '854 ratings';
      } else {
        category = 'in Functional Fitness Systems';
        priceWhole = '149'; priceFraction = '99'; buyBoxPrice = '$149.99';
        count = '1,024 ratings';
      }

      bulletList = [
        `<strong>Strategic Conversion Hook:</strong> ${title}`,
        '<strong>Target Buyer Demographics:</strong> High-intent e-commerce shoppers looking for premium German engineering.',
        `<strong>Visual Merchandising:</strong> ${gallerySuite.desc}`,
        '<strong>Conversion Optimization:</strong> Engineered to decrease customer CPA, increase hold time, and elevate PDP add-to-cart velocity.'
      ];
    }

    // Update Header Text
    if (modalProductCategory) {
      modalProductCategory.textContent = aplusSuite ? '02. AMAZON A+ MERCHANDISING ARCHITECTURE' : '01. PRODUCT DETAIL & CONVERSION GALLERY';
    }
    if (modalProductTitle) {
      modalProductTitle.textContent = title;
    }

    // Update Creative Board Footer Branding
    if (creativeFooterSub) {
      creativeFooterSub.textContent = aplusSuite ? 'Amazon A+ Merchandising' : 'Product Listing & PDP';
    }
    if (creativeFooterBrand) {
      if (suiteKey === 'aura') {
        creativeFooterBrand.textContent = 'AURA';
      } else {
        creativeFooterBrand.textContent = 'SPORTSTECH';
      }
    }

    // Populate Creative Showcase (Adaptive: Widescreen Banners for A+, 3x3 Grid for Gallery)
    if (creativeBoardGrid) {
      if (aplusSuite) {
        creativeBoardGrid.classList.add('is-aplus-suite');
        if (btnViewMatrix) {
          const pillSpan = btnViewMatrix.querySelector('span');
          if (pillSpan) pillSpan.textContent = '✨ A+ Modular Banners';
        }
      } else {
        creativeBoardGrid.classList.remove('is-aplus-suite');
        if (btnViewMatrix) {
          const pillSpan = btnViewMatrix.querySelector('span');
          if (pillSpan) pillSpan.textContent = '✨ 3×3 Creative Matrix';
        }
      }

      creativeBoardGrid.innerHTML = '';
      slides.forEach((slide) => {
        const card = document.createElement('div');
        card.className = 'creative-board-card';
        card.setAttribute('data-cursor', 'ZOOM');
        const curStr = slide.index < 10 ? `0${slide.index}` : `${slide.index}`;
        card.innerHTML = `
          <img src="${slide.src}" alt="${slide.title}" class="creative-board-img" loading="eager" decoding="async">
          <span class="creative-slide-pill">${slide.badge || `SLIDE ${curStr}`}</span>
          <div class="creative-card-overlay">
            <span class="creative-card-title">${slide.title}</span>
            <span class="creative-card-zoom-hint">🔍 CLICK TO INSPECT HIGH-RES</span>
          </div>
        `;
        card.addEventListener('click', (e) => {
          e.stopPropagation();
          if (typeof openLightbox === 'function') {
            openLightbox(slide.src, `<strong>${slide.title}</strong><br><span style="font-size:12px; color:#EFE8DD;">${slide.desc}</span>`);
          }
        });
        creativeBoardGrid.appendChild(card);
      });
    }

    // Set Amazon Simulator Image, Title & Bullets
    if (amazonMainImg) amazonMainImg.src = heroImg;
    if (amazonTitle) amazonTitle.innerHTML = title;
    if (amazonBullets) amazonBullets.innerHTML = bulletList.map(b => `<li>${b}</li>`).join('');

    // Dynamic Element IDs for Amazon Simulator
    const catEl = document.getElementById('amazonChoiceCategory');
    if (catEl && category) catEl.textContent = category;

    const starsEl = document.getElementById('amazonStars');
    if (starsEl) starsEl.textContent = stars;

    const countEl = document.getElementById('amazonRatingCount');
    if (countEl) countEl.textContent = count;

    const wholeEl = document.getElementById('amazonPriceWhole');
    if (wholeEl) wholeEl.textContent = priceWhole;

    const fracEl = document.getElementById('amazonPriceFraction');
    if (fracEl) fracEl.textContent = priceFraction;

    const buyPriceEl = document.getElementById('amazonBuyBoxPrice');
    if (buyPriceEl) buyPriceEl.textContent = buyBoxPrice;

    // Populate Thumbnails for Amazon Simulator
    if (amazonThumbs) {
      amazonThumbs.innerHTML = '';
      slides.slice(0, 7).forEach((s, idx) => {
        const thumb = document.createElement('img');
        thumb.src = s.src;
        thumb.loading = 'eager';
        thumb.decoding = 'async';
        thumb.className = 'amazon-thumb-item' + (idx === 0 ? ' active' : '');
        thumb.alt = s.title;
        thumb.addEventListener('click', () => {
          initAudio();
          playClickSound(900, 0.02);
          document.querySelectorAll('.amazon-thumb-item').forEach(el => el.classList.remove('active'));
          thumb.classList.add('active');
          if (amazonMainImg) amazonMainImg.src = s.src;
        });
        amazonThumbs.appendChild(thumb);
      });
    }

    // Populate Amazon A+ Content Grid
    const aplusGrid = document.getElementById('amazonAplusGrid');
    if (aplusGrid) {
      aplusGrid.innerHTML = '';
      const totalStr = slides.length < 10 ? `0${slides.length}` : `${slides.length}`;

      slides.forEach((slide) => {
        const card = document.createElement('div');
        card.className = 'social-card-item card-tilt';
        card.setAttribute('data-cursor', 'ZOOM');
        const curStr = slide.index < 10 ? `0${slide.index}` : `${slide.index}`;
        card.innerHTML = `
          <div class="social-card-media">
            <img src="${slide.src}" alt="${slide.title}" class="social-card-img" loading="lazy">
            <div class="social-badges-bar">
              <span class="social-angle-pill badge-hook">${slide.badge}</span>
              <span class="social-seq-pill">Slide ${curStr} / ${totalStr}</span>
            </div>
          </div>
          <div class="social-card-body">
            <div class="social-brand-line">
              <span class="client-tag">SportsTech Germany</span>
              <span>Amazon PDP Merchandising</span>
            </div>
            <h3 class="social-card-heading">${slide.title}</h3>
            <p class="social-card-sub">${slide.desc}</p>
            <div class="social-card-action-bar">
              <span class="social-metric-pill">
                <svg viewBox="0 0 20 20" width="12" height="12" fill="currentColor">
                  <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 9.586 14.586 6H12z" clip-rule="evenodd" />
                </svg>
                <span>${slide.impact}</span>
              </span>
              <span class="social-inspect-link">
                <span>Inspect High-Res</span>
              </span>
            </div>
          </div>
          <div class="card-glow" aria-hidden="true"></div>
        `;
        card.addEventListener('click', (e) => {
          e.stopPropagation();
          if (typeof openLightbox === 'function') openLightbox(slide.src, `<strong>${slide.title}</strong><br><span style="font-size:12px; color:#EFE8DD;">${slide.desc}</span>`);
        });
        aplusGrid.appendChild(card);
      });
    }

    amazonModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeAmazonModal = () => {
    if (!amazonModalOverlay) return;
    amazonModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  if (amazonModalClose) amazonModalClose.addEventListener('click', closeAmazonModal);
  if (amazonModalBackdrop) amazonModalBackdrop.addEventListener('click', closeAmazonModal);

  // Switch Gallery Suite logic
  function switchGallerySuite(suiteKey) {
    if (!gallerySuitesData[suiteKey]) return;
    activeGallerySuite = suiteKey;
    const suite = gallerySuitesData[suiteKey];

    // Update section headlines
    if (galleryActiveTitle) galleryActiveTitle.textContent = suite.title;
    if (galleryActiveDesc) galleryActiveDesc.textContent = suite.desc;

    // Update hero banner if exists
    const heroImg = document.querySelector('.wrx-hero-banner-img');
    const heroTitle = document.querySelector('.wrx-hero-title');
    const heroSub = document.querySelector('.wrx-hero-sub');
    if (heroImg && suite.heroImg) {
      heroImg.src = suite.heroImg;
      heroImg.setAttribute('data-zoom-src', suite.heroImg);
    }
    if (heroTitle && suite.heroTitle) heroTitle.textContent = suite.heroTitle;
    if (heroSub && suite.heroSub) heroSub.textContent = suite.heroSub;

    currentWrxSlideIndex = 0;
    renderWrxSlide(0);
    renderWrxThumbnails();
    // renderWrxGrid();
  }

  // Product Gallery Tabs Event Listeners
  const productGalleryTabs = document.querySelectorAll('#productGalleryTabs .gallery-tab-btn');
  productGalleryTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      initAudio();
      playClickSound(800, 0.03);
      productGalleryTabs.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const suiteKey = btn.getAttribute('data-gallery-suite');
      switchGallerySuite(suiteKey);
    });
  });

  // Initial render of gallery
  renderWrxThumbnails();
  renderWrxSlide(0);
  // renderWrxGrid();

  if (wrxModeReaderBtn && wrxModeGridBtn && wrxReaderView && wrxGridView) {
    // renderWrxGrid();

    wrxModeReaderBtn.addEventListener('click', () => {
      initAudio();
      playClickSound(750, 0.04);
      wrxModeReaderBtn.classList.add('active');
      wrxModeGridBtn.classList.remove('active');
      wrxReaderView.classList.remove('is-hidden');
      wrxGridView.classList.remove('active');
    });

    wrxModeGridBtn.addEventListener('click', () => {
      initAudio();
      playClickSound(750, 0.04);
      wrxModeGridBtn.classList.add('active');
      wrxModeReaderBtn.classList.remove('active');
      wrxReaderView.classList.add('is-hidden');
      wrxGridView.classList.add('active');
    });
  }

  // Section 01: Product Gallery Filters (Matching Section 07 UI/UX)
  const productFilterPills = document.querySelectorAll('#productGalleryFilters [data-product-filter]');
  const productCards = document.querySelectorAll('#mainProductGalleryCards .social-card-item');

  productFilterPills.forEach((btn) => {
    btn.addEventListener('click', () => {
      initAudio();
      playClickSound(750, 0.04);
      productFilterPills.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-product-filter');
      productCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Section 01: 9-Slide Funnel Step Architecture Ribbon (Matching Section 07)
  const productStepItems = document.querySelectorAll('#productStepsTrack .funnel-step-item');
  productStepItems.forEach((btn) => {
    btn.addEventListener('click', () => {
      initAudio();
      playClickSound(850, 0.04);
      productStepItems.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      window.openAmazonListingPage('wrx500');
    });
  });

  // ==========================================
  // 9. AI CASE STUDIES & STRATEGIC RESEARCH LAB
  // ==========================================
  const presentationsData = {
    redbull: {
      name: 'Red Bull Racing Spec Commercial: "Unleash The Beast" End-to-End AI Pipeline',
      sub: 'Multi-Model Generative Video Production • Custom LoRA Character Consistency • ComfyUI Inpainting & Motion Dynamics',
      hireTag: 'FLAGSHIP AI COMMERCIAL: Multi-modal AI direction from storyboard & Kohya LoRA training to Kling 1.5 motion diffusion and neural foley.',
      whyHire: 'Proves high-level Creative Direction & AI Technical Artistry: maintaining driver face persistence (Karan Kumar S) across extreme lighting shifts, matching genuine Red Bull Racing livery without brand hallucination, and generating complex physics (sparks, rain, galloping bull) that traditional 3D pipelines take months to simulate.',
      outcomes: 'Turnaround in 48 hours vs 6 weeks traditional CGI studio; zero 3D rigging costs; generated 1080p 60fps cinema-grade spec commercial with synchronized multi-track audio.',
      tools: 'ComfyUI • Kling 1.5 Pro • Wan 2.1 • Custom SDXL Face LoRA • Topaz Video AI 5K • Adobe Premiere Pro • ElevenLabs Sound FX',
      pdfUrl: '/ai_creation/redbull/RedBull_Ad.mp4',
      masterImg: '/ai_creation/redbull/frames/frame_01.jpg',
      slides: [
        { num: 1, title: 'Scene 01: Circuit Breakdown & Desolation — Setting the Stakes', img: '/ai_creation/redbull/frames/frame_01.jpg' },
        { num: 2, title: 'Scene 02: Pit Crew Catalyst — The Frosted Aluminum Chest', img: '/ai_creation/redbull/frames/frame_02.jpg' },
        { num: 3, title: 'Scene 03: Macro Can Tab Ignition — Fluid Dynamics & Micro-Droplets', img: '/ai_creation/redbull/frames/frame_03.jpg' },
        { num: 4, title: 'Scene 04: The Cold Ingestion — First-Person Sensory Restart', img: '/ai_creation/redbull/frames/frame_04.jpg' },
        { num: 5, title: 'Scene 05: Cockpit Awakening — Custom LoRA Character Persistence (Karan Kumar S)', img: '/ai_creation/redbull/frames/frame_05.jpg' },
        { num: 6, title: 'Scene 06: Midnight Duel at 330 KM/H — Wheel-to-Wheel F1 High Dynamics', img: '/ai_creation/redbull/frames/frame_06.jpg' },
        { num: 7, title: 'Scene 07: Climax — Riding the Raging Bull Down the Main Straight', img: '/ai_creation/redbull/frames/frame_07.jpg' }
      ]
    },
    rufus: {
      name: 'Amazon Rufus AI Shopping Assistant Audit',
      sub: 'Algorithmic Product Ranking & GEO (Generative Engine Optimization) Audit • ASIN B0F9L1STZ5',
      hireTag: 'HIRING HIGHLIGHT: Shows real-world algorithmic reverse-engineering of Amazon’s AI shopping assistant across 18 live multi-turn tests.',
      whyHire: 'Directly addresses what e-commerce brand directors and aggregators care about in 2026: how AI shopping assistants (Amazon Rufus) discover, evaluate, and recommend products, and how to optimize listing imagery and copy for GEO (Generative Engine Optimization).',
      outcomes: 'Uncovered 5 specific ranking levers deciding Rufus recommendations; developed defensive PDP visual strategies to block competitor substitution; engineered offensive conquesting on rival ASINs.',
      tools: 'Amazon DE Market Audit • 18 Multi-Turn Live Tests • ASIN B0F9L1STZ5 • Competitive Spec Benchmarks',
      pdfUrl: '/case_studies_docs/Rufus_AI_Test_and_Analysis.pdf',
      masterImg: '/case_studies/rufus/slide_01.jpg',
      slides: [
        { num: 1, title: 'Rufus AI Shopping Assistant Audit: sWalkLite Family', img: '/case_studies/rufus/slide_01.jpg' },
        { num: 2, title: 'Methodology: 5 Rufus Conversations, 5 Strategic Angles', img: '/case_studies/rufus/slide_02.jpg' },
        { num: 3, title: 'Test 1: Keyword Suggestion (\'Suggested Home Office Treadmill?\')', img: '/case_studies/rufus/slide_03.jpg' },
        { num: 4, title: 'Test 2: Recommendation Logic (\'Why Should Rufus Recommend This?\')', img: '/case_studies/rufus/slide_04.jpg' },
        { num: 5, title: 'Test 3: Value Judgment & Direct Spec Comparisons', img: '/case_studies/rufus/slide_05.jpg' },
        { num: 6, title: 'Test 4: Price History & Competitive Pricing Dynamics', img: '/case_studies/rufus/slide_06.jpg' },
        { num: 7, title: 'Test 5: Finding Better Alternatives & Substitution Behavior', img: '/case_studies/rufus/slide_07.jpg' },
        { num: 8, title: 'Part 2: On-Page Defensive Testing (sWalkLite PDP)', img: '/case_studies/rufus/slide_08.jpg' },
        { num: 9, title: 'Test 6: Defensive Testing — Direct Endorsement vs Competitors', img: '/case_studies/rufus/slide_09.jpg' },
        { num: 10, title: 'Test 7: Feature Requirement — Incline & Form Factor Match', img: '/case_studies/rufus/slide_10.jpg' },
        { num: 11, title: 'Test 8: Compact Footprint for Small Apartments', img: '/case_studies/rufus/slide_11.jpg' },
        { num: 12, title: 'Test 9: Purchase Decision & Non-Biased Deliberation', img: '/case_studies/rufus/slide_12.jpg' },
        { num: 13, title: 'Test 10: Weakness Test — Customer-Reported Limitations', img: '/case_studies/rufus/slide_13.jpg' },
        { num: 14, title: 'Test 11: Specific Use Case — Walking While Working from Home', img: '/case_studies/rufus/slide_14.jpg' },
        { num: 15, title: 'Part 2 Summary: Key Defensive Findings & Search Safeguards', img: '/case_studies/rufus/slide_15.jpg' },
        { num: 16, title: 'Part 3: Offensive Testing — Competitor Page Conquesting', img: '/case_studies/rufus/slide_16.jpg' },
        { num: 17, title: 'Offensive Test 1: Alternatives on Competitor KALWOL PDP', img: '/case_studies/rufus/slide_17.jpg' },
        { num: 18, title: 'Offensive Tests 2-4: Spec Gap Explanations by the Numbers', img: '/case_studies/rufus/slide_18.jpg' },
        { num: 19, title: 'Offensive Test 5: Specific WFH Needs Recommendation', img: '/case_studies/rufus/slide_19.jpg' },
        { num: 20, title: 'Offensive Test 6: Direct Catalog Comparison & Model Hierarchy', img: '/case_studies/rufus/slide_20.jpg' },
        { num: 21, title: 'Offensive Test 7: Switching Triggers (\'Why Choose Another?\')', img: '/case_studies/rufus/slide_21.jpg' },
        { num: 22, title: 'Final Synthesis: The 5 Levers Driving Every Rufus Recommendation', img: '/case_studies/rufus/slide_22.jpg' }
      ]
    },
    higgsfield: {
      name: 'Higgsfield Canvas — Automated Amazon Gallery Pipeline',
      sub: 'Node-Based Generative AI Workflows & Autonomous Agent Construction',
      hireTag: 'ENTERPRISE AUTOMATION: Node architectures reducing product gallery design time from days to hours.',
      whyHire: 'Demonstrates enterprise-scale pipeline engineering rather than single one-off prompts. Karan designed a node-based architecture that identifies product types (treadmill, sbike, dumbbells) from reference images and automatically generates multi-angle Amazon gallery visual sets using autonomous AI agent wiring.',
      outcomes: 'Achieved 80% reduction in listing image turnaround time; enabled automated batch visual generation across multi-SKU fitness catalogs; established brand-consistent lighting templates.',
      tools: 'Higgsfield Canvas • Node Visual Pipelines • Automated AI Agents • Multi-SKU Fitness Workflows',
      pdfUrl: '/case_studies_docs/Higgsfiled_Node By Karankumar.pdf',
      masterImg: '/case_studies/higgsfield/slide_01.jpg',
      slides: [
        { num: 1, title: 'Higgsfield Canvas: AI Creative Workspace by KaranKumar.S', img: '/case_studies/higgsfield/slide_01.jpg' },
        { num: 2, title: 'What is Higgsfield Canvas? Beyond Single-Prompt Generation', img: '/case_studies/higgsfield/slide_02.jpg' },
        { num: 3, title: 'Node Architecture for Amazon Gallery Image Generation', img: '/case_studies/higgsfield/slide_03.jpg' },
        { num: 4, title: 'Autonomous AI Agent for Node Creation & Auto-Wiring', img: '/case_studies/higgsfield/slide_04.jpg' },
        { num: 5, title: 'Input / Output Result Pipeline Demonstration', img: '/case_studies/higgsfield/slide_05.jpg' },
        { num: 6, title: 'High-Speed Iteration & Lighting Harmony', img: '/case_studies/higgsfield/slide_06.jpg' },
        { num: 7, title: 'Multi-Angle Pose & Machine Context Preservation', img: '/case_studies/higgsfield/slide_07.jpg' },
        { num: 8, title: 'Batch Processing for Multi-SKU Fitness Catalogs', img: '/case_studies/higgsfield/slide_08.jpg' },
        { num: 9, title: 'Production Impact: 80% Reduction in Production Turnaround', img: '/case_studies/higgsfield/slide_09.jpg' }
      ]
    },
    tech_benchmark: {
      name: 'Commercial AI Benchmark: Nano Banana 2 Lite vs. ChatGPT Image 2',
      sub: 'Empirical Enterprise E-Commerce Image Model Evaluation',
      hireTag: 'MODEL BENCHMARK: Rigorous empirical evaluation across multi-reference consistency and relighting.',
      whyHire: 'Proves rigorous empirical testing of vision models for commercial production: character consistency across poses, machine reference integration, background relighting, and production output fidelity, establishing a clear framework for when to deploy each model.',
      outcomes: 'Pinpointed ChatGPT Image 2 superiority for complex hardware relighting and established Nano Banana 2 Lite for rapid low-latency character pose generation; saved $10K+ in wasted API experiments.',
      tools: 'Google Nano Banana 2 Lite • OpenAI ChatGPT Image 2 • Multi-Input Reference Matching • Studio Relighting',
      pdfUrl: '/case_studies_docs/Blue Modern Tech Company Presentation.pdf',
      masterImg: '/case_studies/tech_benchmark/slide_01.jpg',
      slides: [
        { num: 1, title: 'Executive Title: Visual AI Benchmarking for E-Commerce', img: '/case_studies/tech_benchmark/slide_01.jpg' },
        { num: 2, title: 'Introduction to Google Nano Banana 2 Lite Architecture', img: '/case_studies/tech_benchmark/slide_02.jpg' },
        { num: 3, title: 'Multiple Input References for Image Generation', img: '/case_studies/tech_benchmark/slide_03.jpg' },
        { num: 4, title: 'Character Reference with Multi-Pose Mapping', img: '/case_studies/tech_benchmark/slide_04.jpg' },
        { num: 5, title: 'Amazon Gallery Layout Test with Machine Reference', img: '/case_studies/tech_benchmark/slide_05.jpg' },
        { num: 6, title: 'Image Editing with Reference Image Precision (Test A)', img: '/case_studies/tech_benchmark/slide_06.jpg' },
        { num: 7, title: 'Image Editing with Reference Image Precision (Test B)', img: '/case_studies/tech_benchmark/slide_07.jpg' },
        { num: 8, title: 'Head-to-Head: Nano Banana 2 Lite vs ChatGPT Image 2', img: '/case_studies/tech_benchmark/slide_08.jpg' },
        { num: 9, title: 'Background Relighting, Ambient Occlusion & Shadows', img: '/case_studies/tech_benchmark/slide_09.jpg' },
        { num: 10, title: 'Commercial Production Recommendation & Decision Matrix', img: '/case_studies/tech_benchmark/slide_10.jpg' },
        { num: 11, title: 'Key Findings Summary & Enterprise Deployment Roadmap', img: '/case_studies/tech_benchmark/slide_11.jpg' }
      ]
    }
  };

  let activeDeckKey = 'rufus';
  let activeSlideIndex = 0;

  const deckTitle = document.getElementById('deckTitle');
  const deckClientTag = document.getElementById('deckClientTag');
  const deckHireText = document.getElementById('deckHireText');
  const deckWhyHire = document.getElementById('deckWhyHire');
  const deckOutcomes = document.getElementById('deckOutcomes');
  const deckTools = document.getElementById('deckTools');
  const downloadPdfBtn = document.getElementById('downloadPdfBtn');
  const currentSlideNum = document.getElementById('currentSlideNum');
  const totalSlideNum = document.getElementById('totalSlideNum');
  const mainSlideImg = document.getElementById('mainSlideImg');
  const deckThumbs = document.getElementById('deckThumbs');
  const slidePrevBtn = document.getElementById('slidePrevBtn');
  const slideNextBtn = document.getElementById('slideNextBtn');

  function renderDeck() {
    const deck = presentationsData[activeDeckKey];
    if (!deck) return;

    const total = deck.slides.length;
    if (activeSlideIndex >= total) activeSlideIndex = 0;
    if (activeSlideIndex < 0) activeSlideIndex = total - 1;

    const currentSlide = deck.slides[activeSlideIndex];

    if (deckTitle) deckTitle.textContent = currentSlide.title;
    if (deckClientTag) deckClientTag.innerHTML = `Project: ${deck.name} &bull; ${deck.sub}`;
    if (deckHireText) deckHireText.textContent = deck.hireTag;
    if (deckWhyHire) deckWhyHire.textContent = deck.whyHire;
    if (deckOutcomes) deckOutcomes.textContent = deck.outcomes;
    if (deckTools) deckTools.textContent = deck.tools;
    if (downloadPdfBtn) downloadPdfBtn.href = deck.pdfUrl;

    if (currentSlideNum) currentSlideNum.textContent = String(activeSlideIndex + 1).padStart(2, '0');
    if (totalSlideNum) totalSlideNum.textContent = String(total).padStart(2, '0');

    if (mainSlideImg) {
      mainSlideImg.src = currentSlide.img;
      mainSlideImg.setAttribute('data-zoom-src', currentSlide.img);
      mainSlideImg.alt = `${deck.name} - ${currentSlide.title}`;
    }

    // Render thumbs
    if (deckThumbs) {
      deckThumbs.innerHTML = '';
      deck.slides.forEach((sl, idx) => {
        const thumb = document.createElement('div');
        thumb.className = `deck-thumb ${idx === activeSlideIndex ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${sl.img}" alt="Slide ${idx + 1}" loading="lazy">`;
        thumb.addEventListener('click', () => {
          initAudio();
          playClickSound(800, 0.03);
          activeSlideIndex = idx;
          renderDeck();
        });
        deckThumbs.appendChild(thumb);
      });
      // Scroll active thumb into view
      const activeEl = deckThumbs.children[activeSlideIndex];
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }

  // Check data-default-deck on container or URL query parameter
  const deckContainer = document.getElementById('deckPlayer');
  const defaultDeckAttr = deckContainer ? deckContainer.getAttribute('data-default-deck') : null;
  const urlDeckParam = new URLSearchParams(window.location.search).get('deck');

  if (defaultDeckAttr && presentationsData[defaultDeckAttr]) {
    activeDeckKey = defaultDeckAttr;
  } else if (urlDeckParam && presentationsData[urlDeckParam]) {
    activeDeckKey = urlDeckParam;
    const matchingPill = document.querySelector(`.deck-pill[data-deck="${urlDeckParam}"]`);
    if (matchingPill) {
      document.querySelectorAll('.deck-pill').forEach(p => p.classList.remove('active'));
      matchingPill.classList.add('active');
    }
  }

  renderDeck();

  if (slidePrevBtn) {
    slidePrevBtn.addEventListener('click', () => {
      initAudio();
      playClickSound(700, 0.03);
      activeSlideIndex--;
      renderDeck();
    });
  }

  if (slideNextBtn) {
    slideNextBtn.addEventListener('click', () => {
      initAudio();
      playClickSound(700, 0.03);
      activeSlideIndex++;
      renderDeck();
    });
  }

  // Keyboard navigation for slide deck
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft') {
      activeSlideIndex--;
      renderDeck();
    } else if (e.key === 'ArrowRight') {
      activeSlideIndex++;
      renderDeck();
    }
  });

  // Switch deck tabs
  const deckPills = document.querySelectorAll('.deck-pill');
  deckPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      initAudio();
      playClickSound(750, 0.04);
      deckPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      activeDeckKey = pill.getAttribute('data-deck');
      activeSlideIndex = 0;
      renderDeck();
    });
  });

  // ==========================================
  // 9B. AI CREATION CAROUSEL
  // ==========================================
  const aiCreationsData = [
    {
      id: 0,
      title: 'Kinetic Speed Blast — 3D Commercial Art',
      type: 'single',
      img: '/ai_creation/Image.01.png',
      desc: 'Engineered for high-CTR sports launch campaigns and hero ad units. An athlete bursts off a Sportstech high-tech treadmill in extreme wide-angle forced perspective, surrounded by neon luminescent guide-tracks, cinematic motion blur, and kinetic particle vectors.',
      chips: ['HIGGSFIELD + COMFYUI', 'FORCED PERSPECTIVE', '4K MASTER', 'COMMERCIAL HERO']
    },
    {
      id: 1,
      title: 'Desert Mirage Horizon — 5K Photoreal Commercial Synthesis',
      type: 'single',
      img: '/ai_creation/Image.02.png',
      desc: 'Commercial-grade visual synthesis placing a high-performance Sportstech treadmill atop sweeping golden desert dunes. Features natural sun flare, physically accurate sand displacement around the footplate, and an OLED display mirroring the surrounding horizon.',
      chips: ['5568 × 3072 ULTRA-HD', 'PHYSICALLY ACCURATE LIGHTING', 'CATALOG GRADE', 'OLED HUD REFLECTIONS']
    },
    {
      id: 2,
      title: 'Interactive Pipeline Comparison: Raw AI Synthesis vs Master Retouch',
      type: 'split',
      beforeImg: '/ai_creation/c7364c53-1222-4e04-b317-e65b9cfa3f20_opt.jpg',
      afterImg: '/ai_creation/Image.02.png',
      desc: 'Drag the slider below to inspect the transformation: from raw unbranded AI diffusion output to final master commercial asset with branded Sportstech chassis livery, ambient rim lighting, and screen reflections.',
      chips: ['INTERACTIVE SPLIT SLIDER', 'BEFORE & AFTER', 'HARDWARE COHERENCE', 'SUB-PIXEL CLEANUP']
    },
    {
      id: 3,
      title: 'Neural Facial & Identity Consistency — Macro Studio Portraits',
      type: 'single',
      img: '/ai_creation/freepik_portrait_closeup.png',
      desc: 'Studio-grade macro portrait diffusion with zero skin artifacting, natural micro-pore texture, and persistent brand-athlete facial identity across multi-scene campaigns.',
      chips: ['5.5K FACIAL CONSISTENCY', 'NEURAL AVATAR', 'IDENTITY LORA', 'STUDIO MACRO']
    }
  ];

  let activeAiIdx = 0;
  const aiCarouselViewport = document.getElementById('aiCarouselViewport');
  const aiCarouselDots = document.getElementById('aiCarouselDots');
  const aiPrevBtn = document.getElementById('aiPrevBtn');
  const aiNextBtn = document.getElementById('aiNextBtn');
  const aiPills = document.querySelectorAll('.ai-pill');

  function renderAiCarousel() {
    if (!aiCarouselViewport) return;
    aiCarouselViewport.innerHTML = '';

    aiCreationsData.forEach((item, idx) => {
      const slide = document.createElement('div');
      slide.className = `ai-creation-slide ${idx === activeAiIdx ? 'active' : ''}`;

      if (item.type === 'split') {
        slide.innerHTML = `
          <div class="ai-slide-media-stage">
            <div class="split-slider-container" id="splitSliderContainer">
              <div class="split-layer-before">
                <img src="${item.beforeImg}" alt="Raw AI Diffusion Output">
                <span class="split-label-badge before">BEFORE: Raw AI Diffusion Output</span>
              </div>
              <div class="split-layer-after" id="splitLayerAfter">
                <img src="${item.afterImg}" alt="Final Master Commercial Grade">
                <span class="split-label-badge after">AFTER: Master Commercial Grade</span>
              </div>
              <div class="split-divider-handle" id="splitDividerHandle">↔</div>
            </div>
          </div>
          <div class="ai-slide-meta">
            <div class="ai-slide-info">
              <h4 class="ai-slide-title">${item.title}</h4>
              <p class="ai-slide-desc">${item.desc}</p>
            </div>
            <div class="ai-tech-chips">
              ${item.chips.map((c, i) => `<span class="ai-chip ${i === 0 ? 'highlight' : ''}">${c}</span>`).join('')}
            </div>
          </div>
        `;
      } else {
        slide.innerHTML = `
          <div class="ai-slide-media-stage">
            <img src="${item.img}" alt="${item.title}" class="ai-slide-img zoomable-asset" data-zoom-src="${item.img}">
          </div>
          <div class="ai-slide-meta">
            <div class="ai-slide-info">
              <h4 class="ai-slide-title">${item.title}</h4>
              <p class="ai-slide-desc">${item.desc}</p>
            </div>
            <div class="ai-tech-chips">
              ${item.chips.map((c, i) => `<span class="ai-chip ${i === 0 ? 'highlight' : ''}">${c}</span>`).join('')}
            </div>
          </div>
        `;
      }

      aiCarouselViewport.appendChild(slide);
    });

    // Update dots
    if (aiCarouselDots) {
      aiCarouselDots.innerHTML = '';
      aiCreationsData.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = `ai-dot ${idx === activeAiIdx ? 'active' : ''}`;
        dot.addEventListener('click', () => {
          initAudio();
          playClickSound(750, 0.03);
          activeAiIdx = idx;
          renderAiCarousel();
        });
        aiCarouselDots.appendChild(dot);
      });
    }

    // Update nav pills
    aiPills.forEach(pill => {
      const pIdx = parseInt(pill.getAttribute('data-ai-idx'), 10);
      pill.classList.toggle('active', pIdx === activeAiIdx);
    });

    // Attach split slider drag events if active slide is split
    initSplitSlider();
  }

  function initSplitSlider() {
    const container = document.getElementById('splitSliderContainer');
    const afterLayer = document.getElementById('splitLayerAfter');
    const handle = document.getElementById('splitDividerHandle');
    if (!container || !afterLayer || !handle) return;

    let isDragging = false;

    function updateSplit(clientX) {
      const rect = container.getBoundingClientRect();
      let pos = (clientX - rect.left) / rect.width;
      if (pos < 0.05) pos = 0.05;
      if (pos > 0.95) pos = 0.95;
      const pct = pos * 100;
      afterLayer.style.width = `${pct}%`;
      handle.style.left = `${pct}%`;
    }

    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSplit(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (isDragging) updateSplit(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch events for mobile
    container.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches[0]) updateSplit(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches[0]) updateSplit(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  if (aiPrevBtn) {
    aiPrevBtn.addEventListener('click', () => {
      initAudio();
      playClickSound(700, 0.03);
      activeAiIdx = (activeAiIdx - 1 + aiCreationsData.length) % aiCreationsData.length;
      renderAiCarousel();
    });
  }

  if (aiNextBtn) {
    aiNextBtn.addEventListener('click', () => {
      initAudio();
      playClickSound(700, 0.03);
      activeAiIdx = (activeAiIdx + 1) % aiCreationsData.length;
      renderAiCarousel();
    });
  }

  aiPills.forEach(pill => {
    pill.addEventListener('click', () => {
      initAudio();
      playClickSound(750, 0.04);
      activeAiIdx = parseInt(pill.getAttribute('data-ai-idx'), 10);
      renderAiCarousel();
    });
  });

  renderAiCarousel();

  // ==========================================
  // 9B-2. RED BULL RACING CINEMA PLAYER & FILMSTRIP ENGINE
  // ==========================================
  const redbullVideo = document.getElementById('redbullVideo');
  const redbullPlayerStage = document.getElementById('redbullPlayerStage');
  const redbullPlayOverlay = document.getElementById('redbullPlayOverlay');
  const redbullBigPlayBtn = document.getElementById('redbullBigPlayBtn');
  const redbullPlayPauseBtn = document.getElementById('redbullPlayPauseBtn');
  const redbullMuteBtn = document.getElementById('redbullMuteBtn');
  const redbullAudioPill = document.getElementById('redbullAudioPill');
  const redbullAudioPillText = document.getElementById('redbullAudioPillText');
  const redbullScrubberTrack = document.getElementById('redbullScrubberTrack');
  const redbullScrubberFill = document.getElementById('redbullScrubberFill');
  const redbullTimeDisplay = document.getElementById('redbullTimeDisplay');
  const redbullFullscreenBtn = document.getElementById('redbullFullscreenBtn');
  const redbullFilmstripTrack = document.getElementById('redbullFilmstripTrack');
  const rbJumpToCaseStudyBtn = document.getElementById('rbJumpToCaseStudyBtn');

  if (redbullVideo) {
    function formatRbTime(sec) {
      if (isNaN(sec) || !isFinite(sec)) return '0:00';
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    function updateRbPlayPauseUI(isPlaying) {
      if (!redbullPlayPauseBtn) return;
      const playIcon = redbullPlayPauseBtn.querySelector('.rb-icon-play');
      const pauseIcon = redbullPlayPauseBtn.querySelector('.rb-icon-pause');
      if (isPlaying) {
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
        if (redbullPlayOverlay) redbullPlayOverlay.style.opacity = '0';
        if (redbullPlayOverlay) redbullPlayOverlay.style.pointerEvents = 'none';
      } else {
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
        if (redbullPlayOverlay) redbullPlayOverlay.style.opacity = '1';
        if (redbullPlayOverlay) redbullPlayOverlay.style.pointerEvents = 'auto';
      }
    }

    function toggleRbPlay() {
      initAudio();
      playClickSound(800, 0.03);
      if (redbullVideo.paused || redbullVideo.ended) {
        redbullVideo.play().then(() => {
          updateRbPlayPauseUI(true);
        }).catch(() => {});
      } else {
        redbullVideo.pause();
        updateRbPlayPauseUI(false);
      }
    }

    function updateRbMuteUI(isMuted) {
      if (!redbullMuteBtn) return;
      const muteIcon = redbullMuteBtn.querySelector('.rb-icon-muted');
      const unmutedIcon = redbullMuteBtn.querySelector('.rb-icon-unmuted');
      if (isMuted) {
        if (muteIcon) muteIcon.style.display = 'block';
        if (unmutedIcon) unmutedIcon.style.display = 'none';
        if (redbullAudioPillText) redbullAudioPillText.textContent = '🔊 Tap for Cinema Sound & F1 V10 Audio';
        if (redbullAudioPill) redbullAudioPill.classList.remove('audio-active');
      } else {
        if (muteIcon) muteIcon.style.display = 'none';
        if (unmutedIcon) unmutedIcon.style.display = 'block';
        if (redbullAudioPillText) redbullAudioPillText.textContent = '🔊 Full Cinema Sound Active';
        if (redbullAudioPill) redbullAudioPill.classList.add('audio-active');
      }
    }

    function toggleRbMute() {
      initAudio();
      playClickSound(750, 0.03);
      redbullVideo.muted = !redbullVideo.muted;
      updateRbMuteUI(redbullVideo.muted);
    }

    // Attach play listeners
    if (redbullBigPlayBtn) redbullBigPlayBtn.addEventListener('click', toggleRbPlay);
    if (redbullPlayPauseBtn) redbullPlayPauseBtn.addEventListener('click', toggleRbPlay);
    redbullVideo.addEventListener('click', toggleRbPlay);

    // Audio pill click
    if (redbullAudioPill) {
      redbullAudioPill.addEventListener('click', (e) => {
        e.stopPropagation();
        initAudio();
        playClickSound(900, 0.04);
        redbullVideo.muted = false;
        updateRbMuteUI(false);
        if (redbullVideo.paused) {
          redbullVideo.play().then(() => updateRbPlayPauseUI(true)).catch(() => {});
        }
        showToast('🔊 Cinema Sound Enabled — Experience F1 V10 Engine & Neural Foley');
      });
    }

    if (redbullMuteBtn) redbullMuteBtn.addEventListener('click', toggleRbMute);

    // Scrubber update & active frame highlight
    redbullVideo.addEventListener('timeupdate', () => {
      const cur = redbullVideo.currentTime;
      const dur = redbullVideo.duration || 32;
      const pct = dur > 0 ? (cur / dur) * 100 : 0;

      if (redbullScrubberFill) redbullScrubberFill.style.width = `${pct}%`;
      if (redbullTimeDisplay) {
        redbullTimeDisplay.textContent = `${formatRbTime(cur)} / ${formatRbTime(dur)}`;
      }

      // Highlight corresponding filmstrip card
      if (redbullFilmstripTrack) {
        const frameCards = redbullFilmstripTrack.querySelectorAll('.rb-frame-card');
        frameCards.forEach((card) => {
          const seekTime = parseFloat(card.getAttribute('data-seek-time') || '0');
          const nextCard = card.nextElementSibling;
          const nextSeekTime = nextCard ? parseFloat(nextCard.getAttribute('data-seek-time') || '999') : 999;

          if (cur >= seekTime && cur < nextSeekTime) {
            card.classList.add('active');
          } else {
            card.classList.remove('active');
          }
        });
      }
    });

    redbullVideo.addEventListener('play', () => updateRbPlayPauseUI(true));
    redbullVideo.addEventListener('pause', () => updateRbPlayPauseUI(false));
    redbullVideo.addEventListener('ended', () => updateRbPlayPauseUI(false));

    // Scrubber click seek
    if (redbullScrubberTrack) {
      redbullScrubberTrack.addEventListener('click', (e) => {
        const rect = redbullScrubberTrack.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const pct = Math.max(0, Math.min(1, clickX / rect.width));
        const dur = redbullVideo.duration || 32;
        redbullVideo.currentTime = pct * dur;
        initAudio();
        playClickSound(850, 0.02);
      });
    }

    // Fullscreen toggle
    if (redbullFullscreenBtn) {
      redbullFullscreenBtn.addEventListener('click', () => {
        initAudio();
        playClickSound(800, 0.03);
        const stage = redbullPlayerStage || redbullVideo;
        if (!document.fullscreenElement) {
          if (stage.requestFullscreen) {
            stage.requestFullscreen();
          } else if (stage.webkitRequestFullscreen) {
            stage.webkitRequestFullscreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      });
    }

    // Filmstrip Card Clicks
    if (redbullFilmstripTrack) {
      const frameCards = redbullFilmstripTrack.querySelectorAll('.rb-frame-card');
      frameCards.forEach((card) => {
        const seekTime = parseFloat(card.getAttribute('data-seek-time') || '0');
        const frameSrc = card.getAttribute('data-frame-src');
        const frameTitle = card.getAttribute('data-frame-title') || '';
        const frameDesc = card.getAttribute('data-frame-desc') || '';
        const thumbImg = card.querySelector('img');

        // Clicking card seeks video
        card.addEventListener('click', (e) => {
          if (e.target.tagName === 'IMG') {
            // Zoom in lightbox if user tapped thumbnail specifically
            openLightbox(frameSrc, `<strong>${frameTitle}</strong><br><span style="font-size:12px; color:#EFE8DD;">${frameDesc}</span>`);
            return;
          }
          initAudio();
          playClickSound(850, 0.03);
          redbullVideo.currentTime = seekTime;
          redbullVideo.play().then(() => updateRbPlayPauseUI(true)).catch(() => {});
          frameCards.forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });

        if (thumbImg) {
          thumbImg.addEventListener('click', (e) => {
            e.stopPropagation();
            initAudio();
            playClickSound(850, 0.03);
            openLightbox(frameSrc, `<strong>${frameTitle}</strong><br><span style="font-size:12px; color:#EFE8DD;">${frameDesc}</span>`);
          });
        }
      });
    }

    // Smooth jump to case study button & auto-activate redbull deck
    if (rbJumpToCaseStudyBtn) {
      rbJumpToCaseStudyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        initAudio();
        playClickSound(900, 0.04);

        // Switch slide deck to redbull
        const rbDeckPill = document.querySelector('.deck-pill[data-deck="redbull"]');
        if (rbDeckPill) {
          rbDeckPill.click();
        }

        const targetEl = document.getElementById('redbullCaseStudy');
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }

  // ==========================================
  // 9C. AMAZON A+ PAGES FILTER PILLS & CARD INTERACTIONS
  // ==========================================
  const aplusFilterPills = document.querySelectorAll('#aplusFilters [data-aplus-filter]');
  const aplusCards = document.querySelectorAll('#aplusCardsGrid .social-card-item');
  const aplusMetricButtons = document.querySelectorAll('#aplusMetricsTrack [data-aplus-target]');

  function filterAplusCards(category) {
    aplusFilterPills.forEach(p => {
      if (p.getAttribute('data-aplus-filter') === category) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    aplusCards.forEach((card) => {
      const cat = card.getAttribute('data-category');
      if (category === 'all' || cat === category) {
        card.style.display = 'flex';
        card.style.opacity = '1';
        card.style.animation = 'fadeInUp 0.35s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });

    if (aplusMetricButtons) {
      aplusMetricButtons.forEach(btn => {
        const target = btn.getAttribute('data-aplus-target');
        if (target === category) {
          btn.classList.add('active');
        } else if (category !== 'all') {
          btn.classList.remove('active');
        }
      });
    }
  }

  aplusFilterPills.forEach((btn) => {
    btn.addEventListener('click', () => {
      initAudio();
      playClickSound(750, 0.04);
      const filter = btn.getAttribute('data-aplus-filter');
      filterAplusCards(filter);
    });
  });

  if (aplusMetricButtons) {
    aplusMetricButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        initAudio();
        playClickSound(850, 0.04);
        const target = btn.getAttribute('data-aplus-target');
        filterAplusCards(target);
        const targetCard = document.querySelector(`#aplusCardsGrid .social-card-item[data-category="${target}"]`);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetCard.style.outline = '2px solid var(--accent-gold)';
          targetCard.style.boxShadow = '0 0 35px rgba(255, 194, 38, 0.4)';
          setTimeout(() => {
            targetCard.style.outline = '';
            targetCard.style.boxShadow = '';
          }, 1800);
        }
      });
    });
  }

  // ==========================================
  // 10. UGC VIDEO & PHOTO CREATIVE VAULT
  // ==========================================
  const ugcVideosData = [
    {
      id: 'ugc-2',
      src: '/ugc_videos/Minimalist_Ugc_02.mp4',
      category: 'lifestyle',
      tag: 'MINIMALIST LIFESTYLE',
      title: 'Minimalist Aesthetic — Scandinavian Lifestyle Short',
      hook: 'Aesthetic morning routine with ultra-silent under-desk walking pad.',
      hookRate: '74%',
      ctr: '+5.1%',
      platform: 'Instagram Reels'
    },
    {
      id: 'ugc-3',
      src: '/ugc_videos/Realistic_UGC_Beauty_Video_Generation.mp4',
      category: 'beauty',
      tag: 'AI AVATAR SYNTHESIS',
      title: 'AI Hyper-Realistic Beauty & Skincare UGC',
      hook: 'Hyper-realistic AI avatar product review and close-up skin application test.',
      hookRate: '62%',
      ctr: '+3.9%',
      platform: 'TikTok / Meta'
    },
    {
      id: 'ugc-5',
      src: '/ugc_videos/sTread_pro_video_out_2.mp4',
      category: 'fitness',
      tag: 'SPEED & ACOUSTICS',
      title: 'sTread Pro — Dynamic Speed & Noise Test',
      hook: 'Running at top speed: hear how quiet this whisper-drive motor is.',
      hookRate: '69%',
      ctr: '+4.4%',
      platform: 'YouTube Shorts'
    },
    {
      id: 'ugc-6',
      src: '/ugc_videos/UGC_sportstech_02.mp4',
      category: 'fitness',
      tag: 'SOCIAL PROOF',
      title: 'Sportstech German Fitness — Real Customer Testimonial',
      hook: 'Why I replaced my expensive gym membership with this compact setup.',
      hookRate: '76%',
      ctr: '+5.3%',
      platform: 'Meta Video Ads'
    },
    {
      id: 'ugc-7',
      src: '/ugc_videos/Treadmill_01.mp4',
      category: 'fitness',
      tag: 'DAILY HABIT HOOK',
      title: 'Smart Walking Pad — Living Room Morning Routine',
      hook: 'How I hit 10,000 steps every morning without leaving my apartment.',
      hookRate: '65%',
      ctr: '+4.1%',
      platform: 'TikTok Organic'
    },
    {
      id: 'ugc-8',
      src: '/ugc_videos/Treadmill_02.mp4',
      category: 'lifestyle',
      tag: 'WORK FROM HOME',
      title: 'Under-Desk Walking Pad — Remote Work Productivity',
      hook: 'Walking while typing: doubling daily calorie burn during Zoom calls.',
      hookRate: '72%',
      ctr: '+4.8%',
      platform: 'Meta Reels'
    },
    {
      id: 'ugc-9',
      src: '/ugc_videos/Minimalist_Ugc_01.mp4',
      category: 'lifestyle',
      tag: 'WELLNESS & ASMR',
      title: 'Minimalist Wellness & Ambient Home Fitness',
      hook: 'Clean lines, Scandinavian wood, effortless fitness integration.',
      hookRate: '67%',
      ctr: '+4.0%',
      platform: 'Pinterest / Reels'
    }
  ];

  // 19 AI CREATOR & UGC LIFESTYLE IMAGES (From pt content/UGC_Image)
  const ugcPhotosData = [
    {
      id: 'ugc-photo-01',
      title: 'Scandinavian Living Room — Under-Desk Walk Test',
      category: 'lifestyle',
      tag: 'HOME WORKSPACE',
      res: '4.8K MASTER',
      src: '/ugc_images/ugc_img_01.png',
      desc: 'Authentic remote-worker lifestyle test showing walking pad integration under modern wood standing desk.',
      strategy: 'Warm domestic lighting and real apartment context eliminate bulkiness doubts.'
    },
    {
      id: 'ugc-photo-02',
      title: 'AI Fitness Avatar — Post-Workout Glow',
      category: 'fitness',
      tag: 'CREATOR TESTIMONIAL',
      res: '4.8K MASTER',
      src: '/ugc_images/ugc_img_02.png',
      desc: 'Hyper-realistic female fitness creator posing with sports towel after high-intensity interval run.',
      strategy: 'Authentic perspiration and direct gaze drive +35% click-through rate in paid social.'
    },
    {
      id: 'ugc-photo-03',
      title: 'Athletic Runner Form — High-Pace Dynamic Stride',
      category: 'fitness',
      tag: 'DYNAMIC STRIDE',
      res: '4.6K MASTER',
      src: '/ugc_images/ugc_img_03.png',
      desc: 'Side-profile capture of athlete at full stride on the shock-absorbing treadmill deck.',
      strategy: 'Demonstrates orthopedic belt stability and spacious running area.'
    },
    {
      id: 'ugc-photo-04',
      title: 'Minimalist Sunrise Stretch — Living Room Ambient',
      category: 'lifestyle',
      tag: 'MORNING HABIT',
      res: '4.8K MASTER',
      src: '/ugc_images/ugc_img_04.png',
      desc: 'Golden hour morning lighting with compact fitness setup ready beside balcony windows.',
      strategy: 'Inspires daily morning habit formation and aesthetic living integration.'
    },
    {
      id: 'ugc-photo-05',
      title: 'Beauty & Skincare Creator — Pure Glow Testimonial',
      category: 'beauty',
      tag: 'AI BEAUTY AVATAR',
      res: '4.8K MASTER',
      src: '/ugc_images/ugc_img_05.png',
      desc: 'Close-up UGC skin texture demonstration with neutral studio lighting and macro pore fidelity.',
      strategy: 'Sub-pixel skin texture avoids uncanny-valley artifacts, delivering 100% authenticity.'
    },
    {
      id: 'ugc-photo-06',
      title: 'Studio Portrait — Confident Creator Endorsement',
      category: 'beauty',
      tag: 'EDITORIAL PORTRAIT',
      res: '4.8K MASTER',
      src: '/ugc_images/ugc_img_06.png',
      desc: 'Soft rim-lit studio portrait demonstrating product benefit and trusted creator endorsement.',
      strategy: 'Builds direct emotional rapport with prospective buyers.'
    },
    {
      id: 'ugc-photo-07',
      title: 'High-Energy Cardio — Sprint Focus',
      category: 'fitness',
      tag: 'SPRINT RETENTION',
      res: '4.8K MASTER',
      src: '/ugc_images/ugc_img_07.png',
      desc: 'Focused athletic exertion demonstrating treadmill high-speed stability and silent motor.',
      strategy: 'Captures intense cardio performance without camera motion blur.'
    },
    {
      id: 'ugc-photo-08',
      title: 'Clean Minimalist Interior — Compact Stowage Proof',
      category: 'lifestyle',
      tag: 'OBJECTION CRUSHER',
      res: '4.1K MASTER',
      src: '/ugc_images/ugc_img_08.png',
      desc: 'Treadmill folded upright and stowed neatly against living room credenza.',
      strategy: 'Conquers the #1 customer hesitation: "Will this take over my living room?"'
    },
    {
      id: 'ugc-photo-09',
      title: 'Beauty Macro — Luminous Skin & Natural Lighting',
      category: 'beauty',
      tag: 'SKINCARE AUTHENTICITY',
      res: '5.5K ULTRA-HD',
      src: '/ugc_images/ugc_img_09.jpg',
      desc: 'Sunlit studio macro photograph showcasing natural skin tones and organic product alignment.',
      strategy: 'Engineered for high-converting TikTok and Meta beauty ads.'
    },
    {
      id: 'ugc-photo-10',
      title: 'Nordic Interior Staging — Ergonomic Desk Session',
      category: 'lifestyle',
      tag: 'WFH ERGONOMICS',
      res: '5.5K ULTRA-HD',
      src: '/ugc_images/ugc_img_10.png',
      desc: 'Active typing session on walking pad with wireless keyboard and minimalist coffee cup.',
      strategy: 'Targets corporate remote workers looking to avoid chronic sedentary back pain.'
    },
    {
      id: 'ugc-photo-11',
      title: 'Lifestyle Routine — Post-Run Hydration Moment',
      category: 'lifestyle',
      tag: 'HABIT LOOP',
      res: '4.1K MASTER',
      src: '/ugc_images/ugc_img_11.png',
      desc: 'Casual, relatable creator moment with water bottle beside the compact workout station.',
      strategy: 'Reinforces achievable wellness goals rather than intimidating hardcore gym culture.'
    },
    {
      id: 'ugc-photo-12',
      title: 'Compact Desk Walk — Apartment Efficiency',
      category: 'fitness',
      tag: 'APARTMENT PROOF',
      res: '1.4K HD',
      src: '/ugc_images/ugc_img_12.png',
      desc: 'Seamless under-couch storage demonstration with whisper-quiet rubber rollers.',
      strategy: 'Rapid proof of 5-second setup and quick storage.'
    },
    {
      id: 'ugc-photo-13',
      title: 'High-Cadence Training — Athletic Form',
      category: 'fitness',
      tag: 'HIGH CADENCE',
      res: '1.4K HD',
      src: '/ugc_images/ugc_img_13.png',
      desc: 'Athletic runner maintaining steady cadence during virtual marathon route.',
      strategy: 'Connects with endurance runners training for half-marathons at home.'
    },
    {
      id: 'ugc-photo-14',
      title: 'Modern Aesthetic Apartment — Evening Walk',
      category: 'lifestyle',
      tag: 'EVENING CARDIO',
      res: '5.5K ULTRA-HD',
      src: '/ugc_images/ugc_img_14.png',
      desc: 'Warm evening mood lighting with subtle LED pulse reflections across timber floor.',
      strategy: 'Shows whisper-quiet motor allows late-night workouts without waking family members.'
    },
    {
      id: 'ugc-photo-15',
      title: 'Female Athlete Form — Core & Cardio Balance',
      category: 'fitness',
      tag: 'ATHLETIC CORE',
      res: '4.8K MASTER',
      src: '/ugc_images/ugc_img_15.png',
      desc: 'Dynamic body alignment and stability on commercial non-slip track.',
      strategy: 'Demonstrates comfortable track width for varied running styles.'
    },
    {
      id: 'ugc-photo-16',
      title: 'Warm Studio Atmosphere — Creator Unboxing',
      category: 'beauty',
      tag: 'UNBOXING RELATABILITY',
      res: '4.6K MASTER',
      src: '/ugc_images/ugc_img_16.png',
      desc: 'Close-up unboxing moment with natural smile and genuine creator delight.',
      strategy: 'Captures critical top-of-funnel unboxing curiosity.'
    },
    {
      id: 'ugc-photo-17',
      title: 'Dedicated Home Gym Corner — Minimalist Rack',
      category: 'fitness',
      tag: 'SPACE OPTIMIZATION',
      res: '4.8K MASTER',
      src: '/ugc_images/ugc_img_17.png',
      desc: 'Dedicated 1-square-meter fitness sanctuary in urban loft apartment.',
      strategy: 'Inspires buyers that small spaces can become functional premium gyms.'
    },
    {
      id: 'ugc-photo-18',
      title: 'Professional Lighting — Sharp Product Details',
      category: 'fitness',
      tag: 'HARDWARE MACRO',
      res: '4.1K MASTER',
      src: '/ugc_images/ugc_img_18.png',
      desc: 'Razor-sharp focus on machine console, emergency cord clip, and texture grip.',
      strategy: 'Close-up hardware proof reassures discerning e-commerce shoppers.'
    },
    {
      id: 'ugc-photo-19',
      title: 'Full Studio Transformation — Complete Lifestyle Suite',
      category: 'lifestyle',
      tag: 'COMPLETE LIFESTYLE',
      res: '4.1K MASTER',
      src: '/ugc_images/ugc_img_19.png',
      desc: 'Complete overview of workout gear seamlessly incorporated into Scandinavian home.',
      strategy: 'Closing bundle visual demonstrating full daily lifestyle integration.'
    }
  ];

  let currentUgcMode = 'videos'; // 'videos' or 'photos'
  let currentUgcFilter = 'all';

  const ugcVideoGrid = document.getElementById('ugcVideoGrid');
  const ugcPhotoGrid = document.getElementById('ugcPhotoGrid');
  const ugcModeVideosBtn = document.getElementById('ugcModeVideosBtn');
  const ugcModePhotosBtn = document.getElementById('ugcModePhotosBtn');

  function renderUgcVideos(filter = 'all') {
    if (!ugcVideoGrid) return;
    ugcVideoGrid.innerHTML = '';

    const filtered = filter === 'all'
      ? ugcVideosData
      : ugcVideosData.filter(v => v.category === filter);

    const maxLimit = ugcVideoGrid.dataset.limit ? parseInt(ugcVideoGrid.dataset.limit, 10) : 0;
    const toRender = maxLimit > 0 ? filtered.slice(0, maxLimit) : filtered;

    toRender.forEach(vid => {
      const card = document.createElement('div');
      card.className = 'ugc-card';
      card.innerHTML = `
        <div class="ugc-media-wrap">
          <video class="ugc-video-el" src="${vid.src}" preload="metadata" loop muted playsinline></video>
          <span class="ugc-hook-badge">${vid.tag}</span>
          <button class="ugc-sound-toggle-btn" title="Toggle audio" aria-label="Toggle sound">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          </button>
          <div class="ugc-play-overlay">
            <div class="ugc-play-btn">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div class="ugc-card-info">
          <div>
            <h4 class="ugc-card-title">${vid.title}</h4>
            <p class="ugc-card-hook">${vid.hook}</p>
          </div>
          <div class="ugc-metrics-row">
            <span class="ugc-metric-chip">🎯 Hook: ${vid.hookRate}</span>
            <span class="ugc-metric-chip">⚡ CTR: ${vid.ctr}</span>
            <button class="ugc-theater-btn" data-video-id="${vid.id}">Full Reel ↗</button>
          </div>
        </div>
      `;

      const videoEl = card.querySelector('.ugc-video-el');
      const soundBtn = card.querySelector('.ugc-sound-toggle-btn');
      const mediaWrap = card.querySelector('.ugc-media-wrap');
      const theaterBtn = card.querySelector('.ugc-theater-btn');

      // Hover to play (muted)
      mediaWrap.addEventListener('mouseenter', () => {
        card.classList.add('playing');
        videoEl.play().catch(() => {});
      });

      mediaWrap.addEventListener('mouseleave', () => {
        card.classList.remove('playing');
        videoEl.pause();
        videoEl.currentTime = 0;
      });

      // Sound toggle
      soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        initAudio();
        playClickSound(800, 0.03);
        videoEl.muted = !videoEl.muted;
        if (!videoEl.muted) {
          videoEl.play();
          soundBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          `;
        } else {
          soundBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          `;
        }
      });

      // Theater open
      mediaWrap.addEventListener('click', () => {
        openTheaterModal(vid);
      });
      theaterBtn.addEventListener('click', () => {
        openTheaterModal(vid);
      });

      ugcVideoGrid.appendChild(card);
    });
  }

  function renderUgcPhotos(filter = 'all') {
    if (!ugcPhotoGrid) return;
    ugcPhotoGrid.innerHTML = '';

    const filtered = filter === 'all'
      ? ugcPhotosData
      : ugcPhotosData.filter(p => p.category === filter);

    filtered.forEach(photo => {
      const card = document.createElement('div');
      card.className = 'ugc-photo-card';
      card.innerHTML = `
        <div class="ugc-photo-media zoomable-asset" data-zoom-src="${photo.src}">
          <img src="${photo.src}" alt="${photo.title}" class="ugc-photo-img" loading="lazy">
          <span class="ugc-photo-badge">${photo.tag}</span>
          <span class="ugc-res-badge">${photo.res}</span>
        </div>
        <div class="ugc-photo-body">
          <h4 class="ugc-photo-title">${photo.title}</h4>
          <p class="ugc-photo-desc">${photo.desc}</p>
          <div class="ugc-photo-meta-row">
            <span style="color:#9DA3B4;">${photo.strategy}</span>
            <span class="ugc-zoom-hint">Inspect 🔍</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openLightbox(photo.src, `<strong>${photo.title}</strong> (${photo.res})<br><span style="font-size:12px; color:#EFE8DD;">${photo.desc} &mdash; ${photo.strategy}</span>`);
      });

      ugcPhotoGrid.appendChild(card);
    });
  }

  // Initial renders of UGC
  renderUgcVideos('all');
  renderUgcPhotos('all');

  // Mode switcher event listeners (Video Reels vs Photo Vault)
  if (ugcModeVideosBtn && ugcModePhotosBtn) {
    ugcModeVideosBtn.addEventListener('click', () => {
      initAudio();
      playClickSound(750, 0.04);
      currentUgcMode = 'videos';
      ugcModeVideosBtn.classList.add('active');
      ugcModePhotosBtn.classList.remove('active');
      if (ugcVideoGrid) ugcVideoGrid.style.display = 'grid';
      if (ugcPhotoGrid) ugcPhotoGrid.style.display = 'none';
      renderUgcVideos(currentUgcFilter);
    });

    ugcModePhotosBtn.addEventListener('click', () => {
      initAudio();
      playClickSound(750, 0.04);
      currentUgcMode = 'photos';
      ugcModePhotosBtn.classList.add('active');
      ugcModeVideosBtn.classList.remove('active');
      if (ugcVideoGrid) ugcVideoGrid.style.display = 'none';
      if (ugcPhotoGrid) ugcPhotoGrid.style.display = 'grid';
      renderUgcPhotos(currentUgcFilter);
    });
  }

  // UGC Category Filters
  const ugcFilters = document.querySelectorAll('[data-ugc-filter]');
  ugcFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      initAudio();
      playClickSound(750, 0.04);
      ugcFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentUgcFilter = btn.getAttribute('data-ugc-filter');
      if (currentUgcMode === 'videos') {
        renderUgcVideos(currentUgcFilter);
      } else {
        renderUgcPhotos(currentUgcFilter);
      }
    });
  });



  // ==========================================
  // 10B. 24-STUDY RESEARCH ARCHIVE MODAL
  // ==========================================
  const archiveStudiesData = [
    { title: 'Amazon Rufus AI Shopping Assistant Audit', type: 'audit', fmt: 'PDF (22p)', doc: '/case_studies_docs/Rufus_AI_Test_and_Analysis.pdf', thumb: '/case_studies_thumbs/study_01.jpg', summary: 'How Amazon\'s AI shopping assistant surfaces, ranks, and recommends the sWalkLite product family across 18 live multi-turn tests.' },
    { title: 'Higgsfield Canvas: AI Creative Workspace & Node Pipeline', type: 'pipeline', fmt: 'PDF (9p)', doc: '/case_studies_docs/Higgsfiled_Node By Karankumar.pdf', thumb: '/case_studies_thumbs/study_02.jpg', summary: 'Automating multi-angle Amazon product gallery generation with autonomous node-based AI workflows for treadmills, sbikes, and dumbbells.' },
    { title: 'Visual AI Benchmarking: Nano Banana 2 Lite vs. ChatGPT Image 2', type: 'benchmark', fmt: 'PDF (11p)', doc: '/case_studies_docs/Blue Modern Tech Company Presentation.pdf', thumb: '/case_studies_thumbs/study_03.jpg', summary: 'Empirical commercial production evaluation: character consistency across poses, machine reference integration, and studio relighting.' },
    { title: 'Gemini 3 Nano Banana Pro 4K Photorealism Benchmark', type: 'benchmark', fmt: 'PDF (22p)', doc: '/case_studies_docs/nano banana pro.pdf', thumb: '/case_studies_thumbs/study_04.jpg', summary: 'Quantum leap in visual synthesis: physics, lighting, 4K rendering (5632x3072), multilingual text typography, and character persistence.' },
    { title: 'ChatGPT + Photoshop PSD Layer Workflow Integration', type: 'pipeline', fmt: 'PDF (12p)', doc: '/case_studies_docs/ChatGPT + Adobe Plugin.pdf', thumb: '/case_studies_thumbs/study_05.jpg', summary: 'Bridging GenAI outputs directly into editable Photoshop layer stacks for rapid commercial graphic production.' },
    { title: 'Creatify AI: Ad Generator Testing for UGC', type: 'ugc', fmt: 'PPTX (10s)', doc: '/case_studies_docs/Creatify AI – Ad Generator Testing for UGC.pptx', thumb: '/case_studies_thumbs/study_06.jpg', summary: 'Automating video ad creation with AI avatars, URL-to-video pipelines, and multi-tone scripts across 30 languages.' },
    { title: 'The Infinite AI Creative Freepik Spaces', type: 'pipeline', fmt: 'PDF (16p)', doc: '/case_studies_docs/FreePik_Node Space.pdf', thumb: '/case_studies_thumbs/study_07.jpg', summary: 'Beyond single-prompt generation: building multi-step, repeatable node processes on an infinite visual canvas.' },
    { title: 'Flux Image Editing: UGC Image Creation & Background Synthesis', type: 'ugc', fmt: 'PDF (8p)', doc: '/case_studies_docs/Flux.pdf.pdf', thumb: '/case_studies_thumbs/study_08.jpg', summary: 'Creating hyper-realistic home workout user-generated imagery with Scandinavian ambient interiors in Flux.' },
    { title: 'Grok Bot for Designers: AMZ Competitor Spy & Gallery Planning', type: 'audit', fmt: 'PDF (13p)', doc: '/case_studies_docs/Grok Bot for Designer.pdf', thumb: '/case_studies_thumbs/study_09.jpg', summary: 'AI agent tracking competitor listing changes, pricing windows, and enhanced brand content across e-commerce marketplaces.' },
    { title: 'Meta AI Image Model & Muse Agentic Self-Refinement', type: 'benchmark', fmt: 'PDF (11p)', doc: '/case_studies_docs/Meta AI Test&Result.pdf', thumb: '/case_studies_thumbs/study_10.jpg', summary: 'Testing Meta AI\'s image generation architecture, agentic tool invocation, and test-time compute scaling for photorealism.' },
    { title: 'Camera Angle Changing Features: Freepik & Higgsfield', type: 'pipeline', fmt: 'PDF (19p)', doc: '/case_studies_docs/FreePik & Higgsfield.pdf', thumb: '/case_studies_thumbs/study_11.jpg', summary: 'Synthesizing novel camera viewpoints from existing single images without reshooting or 3D scene reconstruction.' },
    { title: 'ChatGPT Image Editing Feature Evaluation: Precise Markup Edits', type: 'benchmark', fmt: 'PDF (11p)', doc: '/case_studies_docs/ChatGPT_Image Editing Feature Evaluation.pdf', thumb: '/case_studies_thumbs/study_12.jpg', summary: 'Testing markup-based inpainting precision to modify targeted areas without degrading surrounding pixels.' },
    { title: 'Qwen-Image-3.0 Model Test & Multi-Token Reference Inpainting', type: 'benchmark', fmt: 'PDF (15p)', doc: '/case_studies_docs/QWEN IMAGE MODEL TEST AND ANALYSIS.pdf', thumb: '/case_studies_thumbs/study_13.jpg', summary: 'Alibaba\'s third-generation image model evaluation with 4.5K token prompts and complex reference product integration.' },
    { title: 'Pomelli AI by Google Labs: Small Business Brand DNA Generator', type: 'pipeline', fmt: 'PDF (13p)', doc: '/case_studies_docs/Pomelli_Ai.pdf', thumb: '/case_studies_thumbs/study_14.jpg', summary: 'Autonomous marketing campaign generation from URL website analysis to full multi-channel creative suite.' },
    { title: 'Higgsfield UGC Studio: Speech-Driven Video Ad Creation', type: 'ugc', fmt: 'PPTX (9s)', doc: '/case_studies_docs/Higgsfield_UGC Builder Speech-Driven UGC.pptx', thumb: '/case_studies_thumbs/study_15.jpg', summary: 'Speech-driven avatar animation, cinematic camera presets (crash zoom, dolly, jib), and prompt-controlled motion.' },
    { title: 'Whisk AI Documentation: Google Labs Visual Synthesis', type: 'pipeline', fmt: 'PPTX (8s)', doc: '/case_studies_docs/Whisk AI documentation.pptx', thumb: '/case_studies_thumbs/study_16.jpg', summary: 'Workflow documentation for rapid visual concept ideation and multi-asset composition pipelines.' },
    { title: 'Leonardo AI with Flux 1 Kontext: Style Visibility', type: 'benchmark', fmt: 'PPTX (11s)', doc: '/case_studies_docs/Leonardo AI.pptx', thumb: '/case_studies_thumbs/study_17.jpg', summary: 'Rapid style exploration and high-fidelity texture prototyping for commercial advertising assets.' },
    { title: 'Claude Skills & Fable 5: Designer Workflow Automation', type: 'pipeline', fmt: 'PPTX (12s)', doc: '/case_studies_docs/Claude-Skills-and-Fable5-Deck.pptx', thumb: '/case_studies_thumbs/study_18.jpg', summary: 'Creating custom skill extensions for Claude to automate design agency repetitive tasks.' },
    { title: 'FrameThrower Cinematic Visual Reference & Moodboarding', type: 'pipeline', fmt: 'PDF (10p)', doc: '/case_studies_docs/FrameThrower Cinematic Visual Reference.pdf', thumb: '/case_studies_thumbs/study_19.jpg', summary: 'Algorithmic color-tone, composition, and mood matching for film and high-end video commercial concepting.' },
    { title: 'MAI Image-2: Microsoft Photorealism Architecture vs. Nano Banana', type: 'benchmark', fmt: 'PDF (10p)', doc: '/case_studies_docs/MAI_Image_2.pdf', thumb: '/case_studies_thumbs/study_20.jpg', summary: 'Evaluating Microsoft\'s #3 globally ranked model on Arena.ai for raw photorealism and lived-in textures.' },
    { title: 'Presentation: UGC & AI Direct Response Testing', type: 'ugc', fmt: 'PPTX (10s)', doc: '/case_studies_docs/Presentation - UGC & AI by KaranKumar (2).pptx', thumb: '/case_studies_thumbs/study_21.jpg', summary: 'InVideo AI workspace workflows for scaling high-retention direct-response paid social ads.' },
    { title: 'GPT Image 2.0 vs Nano Banana Pro: Comparative Benchmark', type: 'benchmark', fmt: 'PDF (18p)', doc: '/case_studies_docs/GPT Image 2.0 vs Nano banana pro.pdf', thumb: '/case_studies_thumbs/study_22.jpg', summary: 'In-depth head-to-head evaluation across 10 commercial e-commerce product categories.' },
    { title: 'Higgsfield UGC Video Creation Tool Constraints & Capabilities', type: 'ugc', fmt: 'PPTX (9s)', doc: '/case_studies_docs/Higgsfild.pptx', thumb: '/case_studies_thumbs/study_23.jpg', summary: 'Analyzing production constraints and realistic rendering times for client turnaround.' },
    { title: 'Rufus AI Shopping Assistant Preliminary Keyword Tests', type: 'audit', fmt: 'PPTX (12s)', doc: '/case_studies_docs/Rufus_AI_Test.pptx', thumb: '/case_studies_thumbs/study_24.jpg', summary: 'Initial keyword suggestion tests on Amazon fitness listings and algorithmic response patterns.' }
  ];

  const archiveModal = document.getElementById('archiveModal');
  const openArchiveModalBtn = document.getElementById('openArchiveModalBtn');
  const archiveCloseBtn = document.getElementById('archiveCloseBtn');
  const archiveBackdrop = document.getElementById('archiveBackdrop');
  const archiveStudiesGrid = document.getElementById('archiveStudiesGrid');
  const archiveSearchInput = document.getElementById('archiveSearchInput');
  const archiveFilterTags = document.querySelectorAll('.arch-tag, .archive-pill');

  function renderArchiveGrid(filter = 'all', searchQuery = '') {
    if (!archiveStudiesGrid) return;
    archiveStudiesGrid.innerHTML = '';

    const q = searchQuery.toLowerCase().trim();
    const filtered = archiveStudiesData.filter(s => {
      const matchType = filter === 'all' || s.type === filter;
      const matchSearch = !q || s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q);
      return matchType && matchSearch;
    });

    if (filtered.length === 0) {
      archiveStudiesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-mist);">
          <p>No research studies found matching "${searchQuery}".</p>
        </div>
      `;
      return;
    }

    filtered.forEach(s => {
      const card = document.createElement('div');
      card.className = 'archive-study-card';
      card.innerHTML = `
        <div class="study-card-content">
          <div class="study-header-tags">
            <span class="study-fmt-badge">${s.fmt}</span>
            <span class="study-scope-badge">${s.type.toUpperCase()}</span>
          </div>
          <h4 class="study-title">${s.title}</h4>
          <p class="study-summary">${s.summary}</p>
          <div class="study-btn-row">
            <a href="${s.doc}" target="_blank" rel="noopener" class="study-open-btn">
              <span>Read / Download</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
          </div>
        </div>
        <a href="${s.doc}" target="_blank" rel="noopener" class="study-card-thumb-wrap" aria-label="Preview ${s.title}">
          <img src="${s.thumb}" alt="${s.title}" class="study-card-thumb-img" loading="lazy">
          <span class="study-thumb-overlay-hint">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            <span>Preview Document</span>
          </span>
        </a>
      `;
      archiveStudiesGrid.appendChild(card);
    });
  }

  // Auto-render archive grid on load if embedded on page (e.g. case-studies.html)
  if (archiveStudiesGrid) {
    renderArchiveGrid('all', '');
  }

  function openArchiveModal() {
    if (!archiveModal) return;
    initAudio();
    playClickSound(800, 0.04);
    archiveModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderArchiveGrid('all', '');
  }

  function closeArchiveModal() {
    if (!archiveModal) return;
    archiveModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openArchiveModalBtn) openArchiveModalBtn.addEventListener('click', openArchiveModal);
  if (archiveCloseBtn) archiveCloseBtn.addEventListener('click', closeArchiveModal);
  if (archiveBackdrop) archiveBackdrop.addEventListener('click', closeArchiveModal);

  if (archiveSearchInput) {
    archiveSearchInput.addEventListener('input', (e) => {
      const activeTag = document.querySelector('.arch-tag.active, .archive-pill.active');
      const f = activeTag ? (activeTag.getAttribute('data-arch-filter') || activeTag.getAttribute('data-filter') || 'all') : 'all';
      renderArchiveGrid(f, e.target.value);
    });
  }

  archiveFilterTags.forEach(btn => {
    btn.addEventListener('click', () => {
      initAudio();
      playClickSound(750, 0.04);
      archiveFilterTags.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const q = archiveSearchInput ? archiveSearchInput.value : '';
      const f = btn.getAttribute('data-arch-filter') || btn.getAttribute('data-filter') || 'all';
      renderArchiveGrid(f, q);
    });
  });

  // ==========================================
  // 10C. VIDEO THEATER MODAL
  // ==========================================
  const theaterModal = document.getElementById('theaterModal');
  const theaterVideo = document.getElementById('theaterVideo');
  const theaterCloseBtn = document.getElementById('theaterCloseBtn');
  const theaterBackdrop = document.getElementById('theaterBackdrop');
  const theaterTag = document.getElementById('theaterTag');
  const theaterTitle = document.getElementById('theaterTitle');
  const theaterDesc = document.getElementById('theaterDesc');
  const theaterHook = document.getElementById('theaterHook');
  const theaterCtr = document.getElementById('theaterCtr');
  const theaterPlatform = document.getElementById('theaterPlatform');

  function openTheaterModal(vid) {
    if (!theaterModal || !theaterVideo) return;
    initAudio();
    playClickSound(800, 0.04);

    theaterVideo.src = vid.src;
    if (theaterTag) theaterTag.textContent = vid.tag;
    if (theaterTitle) theaterTitle.textContent = vid.title;
    if (theaterDesc) theaterDesc.textContent = vid.hook;
    if (theaterHook) theaterHook.textContent = vid.hookRate;
    if (theaterCtr) theaterCtr.textContent = vid.ctr;
    if (theaterPlatform) theaterPlatform.textContent = vid.platform;

    theaterModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    theaterVideo.currentTime = 0;
    theaterVideo.play().catch(() => {});
  }

  function closeTheaterModal() {
    if (!theaterModal) return;
    theaterModal.classList.remove('active');
    if (theaterVideo) {
      theaterVideo.pause();
      theaterVideo.src = '';
    }
    document.body.style.overflow = '';
  }

  if (theaterCloseBtn) theaterCloseBtn.addEventListener('click', closeTheaterModal);
  if (theaterBackdrop) theaterBackdrop.addEventListener('click', closeTheaterModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeArchiveModal();
      closeTheaterModal();
    }
  });

  // ==========================================
  // 12. ONE-CLICK EMAIL COPY & TOAST
  // ==========================================
  const copyEmailBox = document.getElementById('copyEmailBox');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const designerEmail = document.getElementById('designerEmail');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  let toastTimer = null;
  function showToast(msg) {
    if (!toastNotification) return;
    if (toastMessage) toastMessage.textContent = msg;
    toastNotification.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 2800);
  }

  function copyEmailAction(e) {
    if (e) e.stopPropagation();
    initAudio();
    playClickSound(950, 0.04);

    const email = designerEmail ? designerEmail.textContent.trim() : 'skarankumar452@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('✓ Email copied: ' + email);
    }).catch(() => {
      showToast('✓ Email: ' + email);
    });
  }

  if (copyEmailBox) copyEmailBox.addEventListener('click', copyEmailAction);
  if (copyEmailBtn) copyEmailBtn.addEventListener('click', copyEmailAction);

  // ==========================================
  // 13. INTERACTIVE BRIEF INQUIRY FORM
  // ==========================================
  const inquiryForm = document.getElementById('inquiryForm');
  const formSuccess = document.getElementById('formSuccess');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      initAudio();
      playTelephoneRing();

      const btn = document.getElementById('submitInquiryBtn');
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span>Sending Brief...</span>';
      }

      setTimeout(() => {
        if (formSuccess) formSuccess.style.display = 'block';
        if (btn) {
          btn.style.display = 'none';
        }
        showToast('🎉 Brief dispatched to Karan Kumar S!');
      }, 700);
    });
  }

  // ==========================================
  // 14. MOBILE MENU DRAWER
  // ==========================================
  const mobileMenuTrigger = document.getElementById('mobileMenuTrigger');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuTrigger && mobileDrawer) {
    mobileMenuTrigger.addEventListener('click', () => {
      initAudio();
      playClickSound(650, 0.04);
      mobileDrawer.classList.toggle('open');
    });

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', () => {
        initAudio();
        playClickSound(650, 0.04);
        mobileDrawer.classList.remove('open');
      });
    }

    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        mobileDrawer.classList.remove('open');
      }
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // ==========================================
  // 16. TOUCH SWIPE GESTURES FOR MOBILE & ANDROID
  // ==========================================
  // Touch swipe support for Presentation Slide Deck
  const slideViewport = document.querySelector('.slide-viewport');
  if (slideViewport) {
    let touchStartX = 0;
    let touchStartY = 0;

    slideViewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    slideViewport.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          // Swipe left -> next slide
          initAudio();
          playClickSound(700, 0.03);
          activeSlideIndex++;
          renderDeck();
        } else {
          // Swipe right -> prev slide
          initAudio();
          playClickSound(700, 0.03);
          activeSlideIndex--;
          renderDeck();
        }
      }
    }, { passive: true });
  }



  // ==========================================
  // 15. UNIVERSAL FULLSCREEN LIGHTBOX
  // ==========================================
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');

  function openLightbox(src, captionText = '') {
    if (!lightboxModal || !lightboxImg) return;
    initAudio();
    playClickSound(800, 0.04);

    lightboxImg.src = src;
    if (lightboxCaption) {
      if (typeof captionText === 'string' && captionText.includes('<')) {
        lightboxCaption.innerHTML = captionText;
      } else {
        lightboxCaption.textContent = captionText;
      }
    }
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // Attach zoom to all zoomable assets
  const zoomableAssets = document.querySelectorAll('.zoomable-asset');
  zoomableAssets.forEach((el) => {
    el.addEventListener('click', () => {
      const src = el.getAttribute('data-zoom-src') || el.src;
      const alt = el.getAttribute('alt') || '';
      openLightbox(src, alt);
    });
  });

  // ==========================================
  // BEFORE/AFTER SPLIT COMPARISON SLIDER
  // ==========================================
  const splitStage = document.getElementById('splitSliderStage');
  const splitClipped = document.getElementById('splitClippedWrapper');
  const splitHandle = document.getElementById('splitHandle');

  if (splitStage && splitClipped && splitHandle) {
    let isDraggingSplit = false;

    function updateSplitPosition(clientX) {
      const rect = splitStage.getBoundingClientRect();
      let percent = ((clientX - rect.left) / rect.width) * 100;
      percent = Math.max(0, Math.min(100, percent));
      splitClipped.style.width = `${percent}%`;
      splitHandle.style.left = `${percent}%`;
    }

    splitHandle.addEventListener('mousedown', () => { isDraggingSplit = true; });
    window.addEventListener('mouseup', () => { isDraggingSplit = false; });
    window.addEventListener('mousemove', (e) => {
      if (!isDraggingSplit) return;
      updateSplitPosition(e.clientX);
    });

    splitStage.addEventListener('click', (e) => {
      updateSplitPosition(e.clientX);
    });

    // Touch support
    splitHandle.addEventListener('touchstart', () => { isDraggingSplit = true; }, { passive: true });
    window.addEventListener('touchend', () => { isDraggingSplit = false; }, { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (!isDraggingSplit) return;
      updateSplitPosition(e.touches[0].clientX);
    }, { passive: true });
  }

  console.log('✨ Karan Kumar S Portfolio 2026 Engine Initialized.');
});
