/* ── NightSCRY — bilingual (IT default / EN) ──
   Elements carry data-i18n / data-i18n-ph / data-i18n-title keys.
   The page markup ships in Italian (default, no-JS friendly); this dictionary
   also holds the Italian strings so switching back from English works. */
(function () {
  const I18N = {
    /* ── document titles ── */
    'title.index': {
      it: 'NightSCRY Team — Vedi tutto. Sfrutta ogni debolezza.',
      en: 'NightSCRY Team — See Everything. Exploit Weakness.',
    },
    'title.portfolio': {
      it: 'Progetti — NightSCRY Team',
      en: 'Projects — NightSCRY Team',
    },

    /* ── nav ── */
    'nav.services':  { it: 'Servizi',      en: 'Services' },
    'nav.arsenal':   { it: 'Arsenale',     en: 'Arsenal' },
    'nav.projects':  { it: 'Progetti',     en: 'Projects' },
    'nav.method':    { it: 'Metodologia',  en: 'Methodology' },
    'nav.about':     { it: 'Chi sono',     en: 'About' },
    'nav.engage':    { it: 'Ingaggia',     en: 'Engage' },

    /* ── hero ── */
    'hero.tag': {
      it: 'VEDI&nbsp;TUTTO. <span class="accent">SFRUTTA&nbsp;OGNI&nbsp;DEBOLEZZA.</span>',
      en: 'SEE&nbsp;EVERYTHING. <span class="accent">EXPLOIT&nbsp;WEAKNESS.</span>',
    },
    'hero.sub': {
      it: 'Offensive security su misura. Reverse engineering di binari desktop &amp; mobile e attacchi ad applicazioni web &amp; API — prima che lo faccia l’avversario.',
      en: 'Tailored offensive security. Reverse engineering of desktop &amp; mobile binaries and attacks on web applications &amp; APIs — before the adversary does.',
    },
    'hero.cta1': { it: 'Richiedi un ingaggio', en: 'Request an Engagement' },
    'hero.cta2': { it: 'Vedi le capacità',     en: 'View Capabilities' },
    'stat.surfaces': { it: 'Superfici d’attacco coperte',       en: 'Attack surfaces covered' },
    'stat.severity': { it: '/10 finding di severità massima',        en: '/10 highest-severity finding' },
    'stat.re':       { it: 'Software analizzati in reverse',         en: 'Software reverse-engineered' },
    'stat.scope':    { it: '% di scope autorizzato',                 en: '% authorized scope' },

    /* ── portfolio spotlight (home) ── */
    'spot.kicker': { it: '// Portfolio', en: '// Portfolio' },
    'spot.h2': {
      it: 'In prima linea: i progetti rilasciati.',
      en: 'Front and center: the released projects.',
    },
    'spot.p': {
      it: 'Strumenti offensivi, vulnerability research e indagini OSINT — sviluppati in proprio e rilasciati in chiaro.',
      en: 'Offensive tooling, vulnerability research and OSINT investigations — built independently and released in the open.',
    },
    'spot.btn': { it: 'Esplora il portfolio', en: 'Explore the Portfolio' },

    /* ── services ── */
    'serv.kicker': { it: '// Capacità', en: '// Capabilities' },
    'serv.h2': { it: 'Quattro fronti. Un occhio che non si chiude.', en: 'Four edges. One unblinking eye.' },
    'serv.p':  { it: 'Copertura offensiva a spettro completo sulle superfici che contano.', en: 'Full-spectrum offensive coverage across the surfaces that matter.' },
    'serv.c1.p': {
      it: 'Reverse engineering statico &amp; dinamico di binari Windows, macOS e Linux. Anti-tamper, bypass di licenze &amp; protezioni, analisi in stile malware.',
      en: 'Static &amp; dynamic reverse engineering of Windows, macOS and Linux binaries. Anti-tamper, licensing &amp; protection bypass, malware-grade analysis.',
    },
    'serv.c2.p': {
      it: 'Teardown profondo di Android &amp; iOS — bypass di root/jailbreak &amp; SSL pinning, abuso IPC, storage insicuro, instrumentation a runtime secondo OWASP MASTG.',
      en: 'Android &amp; iOS deep teardown — root/jailbreak &amp; SSL-pinning bypass, IPC abuse, insecure storage, runtime instrumentation per OWASP MASTG.',
    },
    'serv.c3.p': {
      it: 'OWASP Top 10 &amp; abusi di business logic. Bypass di autenticazione/autorizzazione, ogni classe di injection, exploitation concatenata per provare l’impatto reale.',
      en: 'OWASP Top 10 &amp; business-logic abuse. Auth/authz bypass, every injection class, chained exploitation to prove real-world impact.',
    },
    'serv.c4.p': {
      it: 'REST, GraphQL &amp; SOAP. Falle JWT/OAuth, broken object-level auth, mass assignment, test di rate-limit &amp; abuso sui tuoi contratti.',
      en: 'REST, GraphQL &amp; SOAP. JWT/OAuth flaws, broken object-level auth, mass assignment, rate-limit &amp; abuse testing against your contracts.',
    },

    /* ── arsenal ── */
    'ars.kicker': { it: '// Arsenale', en: '// Arsenal' },
    'ars.h2': { it: 'Strumenti forgiati per la caccia', en: 'Tooling forged for the hunt' },
    'ars.p':  { it: 'Strumenti collaudati sul campo, più automazione interna.', en: 'Battle-tested instruments plus in-house automation.' },
    'ars.cta': { it: 'Guarda cosa costruisco', en: 'See What I Build' },

    /* ── methodology ── */
    'met.kicker': { it: '// Metodologia', en: '// Methodology' },
    'met.h2': { it: 'Come scruto', en: 'How I scry' },
    'met.p':  { it: 'Disciplinata, con scope definito, guidata dalle evidenze — allineata a OWASP, MASVS &amp; NIST 800-115.', en: 'Disciplined, scoped, evidence-driven — aligned to OWASP, MASVS &amp; NIST 800-115.' },
    'met.s1.h': { it: 'Recon &amp; scoping', en: 'Recon &amp; Scoping' },
    'met.s1.p': { it: 'Definizione delle regole d’ingaggio, mappatura della superficie d’attacco, enumerazione di ogni componente raggiungibile.', en: 'Rules of engagement defined, attack surface mapped, every reachable component enumerated.' },
    'met.s2.h': { it: 'Analisi &amp; RE', en: 'Analysis &amp; RE' },
    'met.s2.p': { it: 'Decompilazione, instrumentation e fuzzing. Il target compreso dall’interno.', en: 'Decompilation, instrumentation and fuzzing. The target understood from the inside out.' },
    'met.s3.h': { it: 'Exploitation', en: 'Exploitation' },
    'met.s3.p': { it: 'Finding trasformati in proof-of-concept affidabili che dimostrano l’impatto reale.', en: 'Findings weaponized into reliable proof-of-concepts that demonstrate true impact.' },
    'met.s4.h': { it: 'Report &amp; remediation', en: 'Report &amp; Remediate' },
    'met.s4.p': { it: 'Finding con score CVSS, passi di riproduzione e guida alla remediation. Re-test alla fix.', en: 'CVSS-scored findings, reproduction steps and remediation guidance. Re-test on fix.' },

    /* ── about ── */
    'about.kicker': { it: '// Chi sono', en: '// About' },
    'about.h2': { it: 'Chi c’è dietro NightSCRY', en: 'Who’s behind NightSCRY' },
    'about.intro': { it: 'Il professionista dietro gli ingaggi.', en: 'The professional behind the engagements.' },
    'about.role': { it: 'Penetration Tester &amp; Reverse Engineer', en: 'Penetration Tester &amp; Reverse Engineer' },
    'about.bio': {
      it: 'Con esperienza di penetration testing su sistemi bancari (web application, API). Reverse engineering su desktop e mobile.',
      en: 'With experience in penetration testing on banking systems (web applications, APIs). Reverse engineering on desktop and mobile.',
    },

    /* ── contact ── */
    'con.kicker': { it: '// Ingaggia', en: '// Engage' },
    'con.h2': { it: 'Puntami su un target.', en: 'Point me at a target.' },
    'con.p':  { it: 'Solo ingaggi autorizzati. Dimmi lo scope — ti dirò dove si rompe.', en: 'Authorized engagements only. Tell me the scope — I’ll tell you where it breaks.' },
    'lbl.org':   { it: 'Organizzazione', en: 'Organization' },
    'lbl.email': { it: 'Email di contatto', en: 'Contact email' },
    'lbl.scope': { it: 'Tipo di ingaggio', en: 'Engagement type' },
    'lbl.brief': { it: 'Brief', en: 'Brief' },
    'opt.desktop': { it: 'Reverse Engineering Desktop', en: 'Desktop Reverse Engineering' },
    'opt.mobile':  { it: 'Reverse Engineering Mobile', en: 'Mobile Reverse Engineering' },
    'opt.web':     { it: 'Pentest Web Application', en: 'Web Application Pentest' },
    'opt.api':     { it: 'Pentest API', en: 'API Pentest' },
    'opt.full':    { it: 'Spettro completo / Red Team', en: 'Full-spectrum / Red Team' },
    'ph.org':   { it: 'ACME S.p.A.', en: 'ACME Corp' },
    'ph.brief': { it: 'Target, scope, tempistiche, dettagli di autorizzazione…', en: 'Targets, scope, timeline, authorization details…' },
    'btn.submit': { it: 'Trasmetti richiesta', en: 'Transmit Request' },
    'form.note':  { it: '◉ Apertura del client email — invia il messaggio precompilato per contattarci.', en: '◉ Opening your email client — send the pre-filled message to reach us.' },

    /* ── footer ── */
    'footer.tag': {
      it: 'VEDI&nbsp;TUTTO. SFRUTTA&nbsp;OGNI&nbsp;DEBOLEZZA.',
      en: 'SEE&nbsp;EVERYTHING. EXPLOIT&nbsp;WEAKNESS.',
    },
    'footer.fine': {
      it: 'Offensive security · Solo test autorizzati · © ',
      en: 'Offensive security · Authorized testing only · © ',
    },
    'footer.linkedin': { it: 'LinkedIn', en: 'LinkedIn' },

    /* ── portfolio page ── */
    'proj.kicker': { it: '// Progetti', en: '// Projects' },
    'proj.h2': { it: 'Forgiati in casa, rilasciati in chiaro.', en: 'Forged in-house, released in the open.' },
    'proj.p':  { it: 'Strumenti offensivi, vulnerability research e indagini OSINT.', en: 'Offensive tooling, vulnerability research and OSINT investigations.' },
    'filter.all':      { it: 'Tutti', en: 'All' },
    'filter.tool':     { it: 'Strumenti', en: 'Tools' },
    'filter.research': { it: 'Research', en: 'Research' },
    'filter.osint':    { it: 'OSINT', en: 'OSINT' },
    'status.beta': { it: 'Beta', en: 'Beta' },
    'status.done': { it: 'Fatto', en: 'Done' },
    'proj.link': { it: 'Sorgente', en: 'Source' },
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
