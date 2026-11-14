'use strict';
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
const category=button.dataset.filter;
document.querySelectorAll('[data-filter]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
document.querySelectorAll('.service').forEach(card=>{card.hidden=category!=='all'&&card.dataset.category!==category;});
}));
