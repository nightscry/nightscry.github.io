/* ── NightSCRY — bilingual (IT default / EN) ──
   Elements carry data-i18n / data-i18n-ph / data-i18n-title keys.
   The page markup ships in Italian (default, no-JS friendly); this dictionary
   also holds the Italian strings so switching back from English works. */
(function () {
  const I18N = {
    /* ── document titles ── */
    'title.index': {
      it: 'NightSCRY — Vedi tutto. Sfrutta ogni debolezza.',
      en: 'NightSCRY — See Everything. Exploit Weakness.',
    },
    'title.portfolio': {
      it: 'Progetti — NightSCRY',
      en: 'Projects — NightSCRY',
    },

    /* ── meta descriptions ── */
    'meta.index': {
      it: 'NightSCRY — ricerca indipendente in sicurezza informatica. Reverse engineering, vulnerability research e OSINT, pubblicati in chiaro.',
      en: 'NightSCRY — independent security research. Reverse engineering, vulnerability research and OSINT, published in the open.',
    },
    'meta.portfolio': {
      it: 'Progetti NightSCRY — tool, vulnerability research e indagini OSINT, pubblicati in chiaro.',
      en: 'NightSCRY projects — tooling, vulnerability research and OSINT investigations, published in the open.',
    },

    /* ── nav ── */
    'nav.research': { it: 'Ricerca',  en: 'Research' },
    'nav.areas':    { it: 'Aree',     en: 'Areas' },
    'nav.method':   { it: 'Metodo',   en: 'Method' },
    'nav.projects': { it: 'Progetti', en: 'Projects' },
    'nav.about':    { it: 'Chi sono', en: 'About' },
    'nav.contact':  { it: 'Contatti', en: 'Contact' },

    /* ── hero ── */
    'hero.kicker': {
      it: 'Independent Security Research',
      en: 'Independent Security Research',
    },
    'hero.h1': {
      it: 'VEDI TUTTO.<br /><span class="accent">SFRUTTA OGNI DEBOLEZZA.</span>',
      en: 'SEE EVERYTHING.<br /><span class="accent">EXPLOIT WEAKNESS.</span>',
    },
    'hero.sub': {
      it: 'Laboratorio indipendente di ricerca in sicurezza informatica. Reverse engineering, vulnerability research e OSINT — studio come si rompono i sistemi e pubblico tutto in chiaro.',
      en: 'An independent security research lab. Reverse engineering, vulnerability research and OSINT — I study how systems break and publish everything in the open.',
    },
    'hero.cta1': { it: 'Leggi la ricerca',   en: 'Read the Research' },
    'hero.cta2': { it: 'Esplora i progetti', en: 'Explore Projects' },
    'stat.pub': {
      it: 'Pubblicazioni rilasciate',
      en: 'Publications released',
    },
    'stat.data': {
      it: 'Dati di terzi toccati',
      en: 'Third-party data touched',
    },

    /* ── latest research ── */
    'res.kicker': { it: 'Ultime ricerche', en: 'Latest research' },
    'res.h2': {
      it: 'Ricerca che rafforza <span class="accent">le difese di tutti.</span>',
      en: 'Research that strengthens <span class="accent">everyone’s defenses.</span>',
    },
    'res.p': {
      it: 'Studio il comportamento degli attaccanti e le debolezze dei sistemi reali — poi rilascio strumenti e report in chiaro.',
      en: 'I study attacker behaviour and the weaknesses of real-world systems — then release tools and reports in the open.',
    },
    'feat.ita': {
      it: 'Un apostrofo inviato a una web application ha restituito un SQL ERROR. Censys ha poi mostrato lo stesso software su 36 installazioni esposte. Nessun exploit, nessun dato toccato: mi sono fermato all’errore e ho documentato tutto.',
      en: 'A single apostrophe sent to a web application returned a SQL ERROR. Censys then showed the same software across 36 exposed installations. No exploit, no data touched: I stopped at the error and documented everything.',
    },
    'feat.f1': {
      it: 'installazioni esposte',
      en: 'exposed installations',
    },
    'feat.f2': {
      it: 'apostrofo',
      en: 'apostrophe',
    },
    'feat.f3': {
      it: 'dati toccati',
      en: 'data touched',
    },
    'feat.eye': {
      it: 'Tracer multi-chain di wallet: riconosce la chain dal solo indirizzo tramite checksum crittografico e mappa le controparti come grafo interattivo.',
      en: 'Multi-chain wallet tracer: it recognises the chain from the address alone via cryptographic checksum and maps counterparties as an interactive graph.',
    },
    'res.pdf':  { it: 'Leggi il report', en: 'Read the report' },
    'res.all':  { it: 'Tutti i progetti', en: 'All projects' },
    'soon.p': {
      it: 'Ricognizione passiva su un dominio: subdomain enumeration, servizi esposti, fingerprinting e leak da fonti pubbliche, aggregati in un report.',
      en: 'Passive recon on a domain: subdomain enumeration, exposed services, fingerprinting and leaks from public sources, aggregated into a report.',
    },
    'soon.cta': {
      it: 'Guarda l’anteprima',
      en: 'See the preview',
    },

    /* ── research areas ── */
    'areas.kicker': { it: 'Aree di ricerca', en: 'Research areas' },
    'areas.h2': { it: 'Quattro fronti. <span class="accent">Un occhio che non si chiude.</span>', en: 'Four edges. <span class="accent">One unblinking eye.</span>' },
    'areas.p': {
      it: 'Le superfici su cui concentro la ricerca.',
      en: 'The surfaces my research focuses on.',
    },
    'area.c1.p': {
      it: 'Analisi statica &amp; dinamica di binari Windows, macOS e Linux: meccanismi anti-tamper, protezioni, licensing e comportamento in stile malware.',
      en: 'Static &amp; dynamic analysis of Windows, macOS and Linux binaries: anti-tamper mechanisms, protections, licensing and malware-style behaviour.',
    },
    'area.c2.p': {
      it: 'Teardown di app Android &amp; iOS: root/jailbreak detection, SSL pinning, IPC, storage insicuro e instrumentation a runtime secondo OWASP MASTG.',
      en: 'Android &amp; iOS app teardowns: root/jailbreak detection, SSL pinning, IPC, insecure storage and runtime instrumentation per OWASP MASTG.',
    },
    'area.c3.p': {
      it: 'Classi di vulnerabilità web, injection e falle di business logic — studiate su software reale ed esposto, documentate senza sfruttarle.',
      en: 'Web vulnerability classes, injections and business-logic flaws — studied on real, exposed software and documented without exploiting them.',
    },
    'area.c4.p': {
      it: 'Ricognizione da fonti aperte, mappatura di superfici esposte e tracciamento di transazioni on-chain — la base di EyeTrace e del report Italian Cybersecurity.',
      en: 'Open-source reconnaissance, exposed-surface mapping and on-chain transaction tracing — the foundation of EyeTrace and the Italian Cybersecurity report.',
    },

    /* ── method ── */
    'met.kicker': {
      it: 'Il mio metodo',
      en: 'My method',
    },
    'met.h2': { it: 'Metodo rigoroso. <span class="accent">Guidato dalla curiosità.</span>', en: 'Built on methodology. <span class="accent">Driven by curiosity.</span>' },
    'met.p': {
      it: 'Ogni ricerca segue lo stesso percorso: osservare, capire, dimostrare, pubblicare in modo responsabile.',
      en: 'Every piece of research follows the same path: observe, understand, prove, publish responsibly.',
    },
    'met.s1.h': {
      it: 'Osservazione &amp; OSINT',
      en: 'Observation &amp; OSINT',
    },
    'met.s1.p': {
      it: 'Fonti aperte, motori come Censys e Shodan, mappatura di ciò che è esposto pubblicamente.',
      en: 'Open sources, engines like Censys and Shodan, mapping what is publicly exposed.',
    },
    'met.s2.h': {
      it: 'Analisi &amp; RE',
      en: 'Analysis &amp; RE',
    },
    'met.s2.p': {
      it: 'Decompilazione, instrumentation e fuzzing. Il target compreso dall’interno.',
      en: 'Decompilation, instrumentation and fuzzing. The target understood from the inside out.',
    },
    'met.s3.h': {
      it: 'Proof of concept',
      en: 'Proof of concept',
    },
    'met.s3.p': {
      it: 'Dimostrare la debolezza nel modo minimo possibile — senza mai toccare dati di terzi.',
      en: 'Prove the weakness in the least invasive way — never touching third-party data.',
    },
    'met.s4.h': {
      it: 'Disclosure &amp; pubblicazione',
      en: 'Disclosure &amp; publication',
    },
    'met.s4.p': {
      it: 'Disclosure responsabile, poi report e tool rilasciati in chiaro per la community.',
      en: 'Responsible disclosure, then reports and tools released in the open for the community.',
    },

    /* ── principles ── */
    'why.h2': {
      it: 'I miei principi',
      en: 'My principles',
    },
    'why.1.h': { it: 'Ricerca indipendente', en: 'Independent research' },
    'why.1.p': {
      it: 'Nessun cliente da accontentare: seguo le domande interessanti, ovunque portino.',
      en: 'No client to please: I follow the interesting questions wherever they lead.',
    },
    'why.2.h': { it: 'Etica prima di tutto', en: 'Ethics first' },
    'why.2.p': {
      it: 'Mi fermo all’evidenza. Nessun dato di terzi toccato, disclosure responsabile.',
      en: 'I stop at the evidence. No third-party data touched, responsible disclosure.',
    },
    'why.3.h': {
      it: 'Open by default',
      en: 'Open by default',
    },
    'why.3.p': {
      it: 'Tool e report pubblicati in chiaro, perché la conoscenza serve a chi difende.',
      en: 'Tools and reports published in the open, because knowledge belongs to defenders.',
    },
    'why.4.h': { it: 'Curiosità continua', en: 'Relentless curiosity' },
    'why.4.p': {
      it: 'Smontare, capire, documentare. Restare davanti alle minacce emergenti.',
      en: 'Take apart, understand, document. Stay ahead of emerging threats.',
    },

    /* ── toolbox ── */
    'ars.p': {
      it: 'Il mio laboratorio: strumenti collaudati più automazione sviluppata in casa.',
      en: 'My lab: battle-tested instruments plus in-house automation.',
    },

    /* ── about ── */
    'about.kicker': { it: 'Chi sono', en: 'About' },
    'about.h2': { it: 'Chi c’è dietro <span class="accent">NightSCRY</span>', en: 'Who’s behind <span class="accent">NightSCRY</span>' },
    'about.role': {
      it: 'Security Researcher &amp; Reverse Engineer',
      en: 'Security Researcher &amp; Reverse Engineer',
    },
    'about.bio': {
      it: 'Esperienza di penetration testing su sistemi bancari (web application, API). Reverse engineering su desktop e mobile, OSINT. NightSCRY è il mio laboratorio di ricerca.',
      en: 'Penetration testing experience on banking systems (web applications, APIs). Reverse engineering on desktop and mobile, OSINT. NightSCRY is my research lab.',
    },

    /* ── contact ── */
    'con.kicker': { it: 'Contatti', en: 'Contact' },
    'con.h2': { it: 'Hai una segnalazione o un’idea di ricerca?', en: 'Got a report or a research idea?' },
    'con.p': {
      it: 'Scrivimi per collaborazioni, segnalazioni di vulnerabilità o domande sui miei report.',
      en: 'Write to me for collaborations, vulnerability reports or questions about my research.',
    },

    /* ── footer ── */
    'footer.tag': {
      it: 'VEDI&nbsp;TUTTO. SFRUTTA&nbsp;OGNI&nbsp;DEBOLEZZA.',
      en: 'SEE&nbsp;EVERYTHING. EXPLOIT&nbsp;WEAKNESS.',
    },
    'footer.fine': {
      it: 'Ricerca indipendente · Disclosure responsabile · © ',
      en: 'Independent research · Responsible disclosure · © ',
    },
    'foot.nav':    { it: 'Navigazione', en: 'Navigation' },
    'foot.follow': {
      it: 'Seguimi',
      en: 'Follow me',
    },

    'tag.ita': {
      it: 'REPORT · OSINT · SQLi',
      en: 'REPORT · OSINT · SQLi',
    },
    'tag.eye': {
      it: 'TOOL · BLOCKCHAIN OSINT · BETA',
      en: 'TOOL · BLOCKCHAIN OSINT · BETA',
    },
    'tag.soon': {
      it: 'WORK IN PROGRESS · OSINT',
      en: 'WORK IN PROGRESS · OSINT',
    },
    'res.gh': {
      it: 'Sorgente su GitHub',
      en: 'Source on GitHub',
    },
    'area.c1.h': {
      it: 'Desktop Reverse Engineering',
      en: 'Desktop Reverse Engineering',
    },
    'area.c2.h': {
      it: 'Mobile Security',
      en: 'Mobile Security',
    },
    'area.c3.h': {
      it: 'Web Vulnerability Research',
      en: 'Web Vulnerability Research',
    },
    'area.c4.h': {
      it: 'OSINT &amp; Blockchain Intelligence',
      en: 'OSINT &amp; Blockchain Intelligence',
    },
    'proj.code': {
      it: 'Sorgente',
      en: 'Source',
    },
    'proj.pdf': {
      it: 'Report PDF',
      en: 'PDF report',
    },
    'stat.exposed': {
      it: 'Installazioni esposte identificate',
      en: 'Exposed installations identified',
    },
    'stat.conn': {
      it: 'Connettori keyless in EyeTrace',
      en: 'Keyless connectors in EyeTrace',
    },
    'lab.kicker': {
      it: 'In laboratorio',
      en: 'In the lab',
    },
    'lab.h2': {
      it: 'OSINT Recon Dashboard. <span class="accent">In sviluppo.</span>',
      en: 'OSINT Recon Dashboard. <span class="accent">In development.</span>',
    },
    'lab.p': {
      it: 'Dato un dominio target: subdomain enumeration da Certificate Transparency e DNS, servizi esposti via Censys/Shodan, fingerprinting tecnologico, software EOL e leak — tutto passivo, tutto aggregato in un report.',
      en: 'Given a target domain: subdomain enumeration from Certificate Transparency and DNS, exposed services via Censys/Shodan, tech fingerprinting, EOL software and leaks — fully passive, all aggregated into a report.',
    },
    'console.sub': {
      it: 'Dati illustrativi · example-corp.it',
      en: 'Illustrative data · example-corp.it',
    },
    'console.cap': {
      it: 'Anteprima illustrativa: dominio e dati sono di esempio. Solo fonti pubbliche, nessuna scansione attiva.',
      en: 'Illustrative preview: domain and data are samples. Public sources only, no active scanning.',
    },
    /* ── portfolio page ── */
    'proj.kicker': { it: 'Progetti', en: 'Projects' },
    'proj.h2': {
      it: 'Forgiati in casa, rilasciati in chiaro.',
      en: 'Forged in-house, released in the open.',
    },
    'proj.p': {
      it: 'Tool, vulnerability research e indagini OSINT.',
      en: 'Tooling, vulnerability research and OSINT investigations.',
    },
    'filter.all':      { it: 'Tutti', en: 'All' },
    'filter.tool':     { it: 'Strumenti', en: 'Tools' },
    'filter.research': {
      it: 'Research',
      en: 'Research',
    },
    'filter.osint': {
      it: 'OSINT',
      en: 'OSINT',
    },
    'status.beta': { it: 'Beta', en: 'Beta' },
    'status.done': {
      it: 'Fatto',
      en: 'Done',
    },
    'eye.line': { it: 'Vedi ogni transazione. Traccia ogni wallet.', en: 'See every transaction. Trace every wallet.' },
    'eye.desc': {
      it: 'Intelligence blockchain multi-chain e tracer delle transazioni dei wallet. Identifica la chain dal solo indirizzo tramite validazione del checksum crittografico — Base58Check, Bech32/Bech32m, EIP-55 — poi mappa le controparti come grafo interattivo force-directed. Tre connettori keyless, nessuna API key da configurare.',
      en: 'Multi-chain blockchain intelligence and wallet transaction tracer. It identifies the chain from the address alone through cryptographic checksum validation — Base58Check, Bech32/Bech32m, EIP-55 — then maps the counterparties as an interactive force-directed graph. Three keyless connectors, no API keys to configure.',
    },
    'ita.line': { it: 'La cybersecurity italiana è un’altra cosa.', en: 'Italian Cybersecurity is something else.' },
    'ita.desc': {
      it: '🇮🇹 «Ma sì, tanto chi vuoi che se ne accorga.» A quanto pare è questo l’approccio italiano alla web security. Stavo facendo OSINT. Ho trovato una web application. Inviato un carattere: ’ — SQL ERROR. Poi Censys ha mostrato lo stesso software su 36 installazioni esposte. Non ho sfruttato nulla. Non ho toccato dati dei clienti. Mi sono fermato all’errore. Un apostrofo. 36 installazioni. Peak Italian cybersecurity. 💀 Ricerca completa nel PDF.',
      en: '🇮🇹 “Ma sì, tanto chi vuoi che se ne accorga.” Apparently, that’s the Italian approach to web security. I was doing OSINT. Found a web application. Sent one character: ’ — SQL ERROR. Then Censys showed the same software across 36 exposed installations. I didn’t exploit anything. I didn’t touch customer data. I stopped at the error. One apostrophe. 36 installations. Peak Italian cybersecurity. 💀 Full research in the PDF.',
    },
    'empty.note': { it: '◉ Niente pubblicato in questa categoria — torna presto.', en: '◉ Nothing published in this category yet — check back soon.' },
  };

  function applyLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = I18N[el.getAttribute('data-i18n')];
      if (v && v[lang] != null) el.innerHTML = v[lang];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
      const v = I18N[el.getAttribute('data-i18n-ph')];
      if (v && v[lang] != null) el.placeholder = v[lang];
    });
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const v = I18N[el.getAttribute('data-i18n-title')];
      if (v && v[lang] != null) { el.textContent = v[lang]; document.title = v[lang]; }
    });
    document.querySelectorAll('[data-i18n-content]').forEach((el) => {
      const v = I18N[el.getAttribute('data-i18n-content')];
      if (v && v[lang] != null) el.setAttribute('content', v[lang]);
    });

    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = lang === 'it' ? 'EN' : 'IT';
      btn.setAttribute('aria-label', lang === 'it' ? 'Switch to English' : 'Passa all’italiano');
    }
    try { localStorage.setItem('ns-lang', lang); } catch (e) {}
  }

  function init() {
    let lang = 'it';
    try { const s = localStorage.getItem('ns-lang'); if (s === 'it' || s === 'en') lang = s; } catch (e) {}
    applyLang(lang);
    document.getElementById('langToggle')?.addEventListener('click', () => {
      applyLang(document.documentElement.lang === 'en' ? 'it' : 'en');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
