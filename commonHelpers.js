import{S as p,i as d}from"./assets/vendor-1d172d44.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}})();const h=document.querySelector(".search-form"),a=document.querySelector(".gallery"),i=document.querySelector(".loader"),f="https://pixabay.com/api/",y={}.VITE_API_KEY,g=new p(".gallery a");d.settings({timeout:1e4,resetOnHover:!0,icon:null,position:"topRight",close:!1,closeOnClick:!0,closeOnEscape:!0});h.addEventListener("submit",o=>{o.preventDefault();const r=o.target.search.value;a.innerHTML=null,i.style.display="inline-block";const l=new URLSearchParams({key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`${f}?${l}`).then(t=>t.json()).then(t=>{if(t.hits.length==0){d.error({message:"Sorry, there are no images matching your search query. Please, try again!"});return}a.append(...t.hits.map(e=>E(e))),g.refresh()}).catch(t=>{console.error(t)}).finally(()=>i.style.display="none")});function E(o){const r=document.createElement("li");r.className="gallery-item";const l=document.createElement("a");l.className="gallery-link",l.href=o.largeImageURL,r.appendChild(l);const t=document.createElement("img");t.className="gallery-image",t.src=o.webformatURL,t.title=o.tags,t.dataset.source=o.largeImageURL;const e=document.createElement("div");e.className="tags";const n=b({Likes:o.likes,Views:o.views,Comments:o.comments,Downloads:o.downloads});return l.appendChild(t),e.appendChild(n),l.appendChild(e),r}function b(o){const r=document.createElement("table"),l=document.createElement("tbody"),t=document.createElement("tr"),e=document.createElement("tr");return Object.keys(o).forEach(n=>{const c=document.createElement("td"),u=document.createTextNode(`${n}`);c.appendChild(u),t.appendChild(c);const s=document.createElement("td"),m=document.createTextNode(`${o[n]}`);s.appendChild(m),e.appendChild(s)}),l.append(t,e),r.appendChild(l),document.body.appendChild(r),r.setAttribute("border","0"),r}
//# sourceMappingURL=commonHelpers.js.map
