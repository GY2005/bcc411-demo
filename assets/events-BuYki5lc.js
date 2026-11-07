import{m as v,i as u,r as g,s as y,q as b,K as o,Q as E,P as w,L,O as M}from"./nav-Bhth8lqx.js";import{e as s,s as d}from"./markdown-DyElYZdi.js";v("events");u();const m="基督旌旗411教会",$=4;function k(e){return`events.html?id=${encodeURIComponent(e.id)}`}function h(e){return e.nameZh??e.name}function p(e){return E(e.nameZh?s(e.nameZh):null,s(e.name))}function D(e,n){const t=s(h(e)),r=s(k(e)),l=e.coverUrl?`<img src="${s(d(e.coverUrl))}" width="560" height="747" alt=""${n<$?"":' loading="lazy"'} />`:"";return`<article class="event-card">
    <a class="event-cover" href="${r}" aria-label="${t}">${l}</a>
    <h3>${p(e)}</h3>
    <p class="event-text">${s(e.description)}</p>
    <a class="event-more" href="${r}" aria-label="更多 More: ${t}">${M("更多","More")}</a>
  </article>`}function H(e,n){document.title=`近期活动 Events - ${m}`;const t=`<p class="event-kicker l-en" lang="en">Retreat and Conferences</p>
    <h1 class="page-title"><span>${w("Events")} ${L("活动")}</span></h1>`;if(n.length===0){e.innerHTML=`${t}<p class="sermon-empty">${o("暂无活动。","No events yet.")}</p>`;return}const r=[...n].sort((i,a)=>a.startDate.localeCompare(i.startDate)),l=[...new Set(r.map(i=>i.startDate.slice(0,4)))];e.innerHTML=t+l.map(i=>`<section class="event-year" aria-label="${i}">
      <h2>${i}</h2>
      <div class="event-grid">${r.filter(a=>a.startDate.startsWith(i)).map((a,c)=>D(a,i===l[0]?c:$)).join("")}</div>
    </section>`).join("")}function N(e,n){const t=n?h(n):"近期活动 Events";document.title=`${t} - ${m}`;const r=`<a class="back-link" href="events.html">&larr; ${o("返回活动","All events")}</a>`;if(!n){e.innerHTML=`<h1 class="title-bar">${o("近期活动","Events")}</h1>${r}<p class="sermon-empty">${o("暂无信息。","Nothing here yet.")}</p>`;return}const l=[...n.downloads??[],...n.link?[{label:null,url:n.link}]:[]].map(a=>`<a class="event-more" href="${s(d(a.url))}">${a.label===null?o("更多信息","More information"):s(a.label)}</a>`).join(""),i=(n.flyers??[]).map((a,c)=>`<img src="${s(d(a))}" alt="${s(t)} 单张 ${c+1}" loading="lazy" />`).join("");e.innerHTML=`<h1 class="title-bar">${p(n)}</h1>
    ${r}
    <p class="event-detail-text">${s(n.description)}</p>
    ${l?`<div class="event-downloads">${l}</div>`:""}
    <div class="event-flyers">${i}</div>`}async function f(){const e=document.getElementById("event-root");if(e){g(e);try{const n=await y(),t=new URLSearchParams(window.location.search).get("id");t?N(e,n.find(r=>r.id===t)):H(e,n)}catch{b(e,f)}}}f();
