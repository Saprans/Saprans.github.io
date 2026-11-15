'use strict';
// Мәзір сілтемесін таңдағанда белсенді бөлімді белгілеу.
const sectionLinks=[...document.querySelectorAll('nav a[href^="#"]')];
const sections=sectionLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){for(const a of sectionLinks){if(a.hash==='#'+entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}}}},{rootMargin:'-20% 0px -55% 0px'});sections.forEach(section=>observer.observe(section));}
