import{m as c,i as l,r as u,p,n as m}from"./nav-Dk7rOftf.js";import{e as n,r as h}from"./markdown-Dp0d1t7X.js";const r=document.body.dataset.kind,i=document.body.dataset.page;i&&(c(i),l());function g(t){return new Date(`${t}T00:00:00`).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function y(t){return`<article class="card post-card">
    <span class="meta">${g(t.date)}${t.author?` · ${n(t.author)}`:""}</span>
    <h3>${n(t.title)}${t.titleZh?` <span class="zh">${n(t.titleZh)}</span>`:""}</h3>
    <p class="lead small">${n(t.excerpt)}</p>
    <button class="post-toggle" type="button" aria-expanded="false">Read more <span class="zh">阅读全文</span></button>
    <div class="post-body prose" hidden>${h(t.body)}</div>
  </article>`}function f(t){const e=document.getElementById("post-list");if(e){if(t.length===0){e.innerHTML='<p class="lead empty-state">No posts yet — check back soon.</p>';return}e.innerHTML=t.map(y).join(""),e.querySelectorAll(".post-toggle").forEach(a=>{a.addEventListener("click",()=>{const s=a.nextElementSibling;if(!s)return;const o=s.hidden;s.hidden=!o,a.setAttribute("aria-expanded",String(o))})})}}async function d(){const t=document.getElementById("post-list");if(!(!t||!r)){u(t);try{f(await p(r))}catch{m(t,d)}}}d();
