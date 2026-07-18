import{m as d,i as l,r as m,t as p,n as h}from"./nav-Dk7rOftf.js";import{e as s,s as u}from"./markdown-Dp0d1t7X.js";const o=document.body.dataset.page,f=document.body.dataset.location;o&&(d(o),l());const n="TODO: confirm with the church office";function y(a,e){return e.map(t=>`<a class="tab" href="contact-${s(t.id)}.html"${t.id===a?' aria-current="page"':""}>${s(t.name)} <span class="zh">${s(t.nameZh)}</span></a>`).join("")}function v(a){return a.length===0?'<p class="lead small">Schedule coming soon.</p>':`<table class="schedule-table">
    <thead><tr><th>Day</th><th>Time</th><th>Activity</th></tr></thead>
    <tbody>${a.map(t=>`<tr><td>${s(t.day)}</td><td>${s(t.time)}</td><td>${s(t.activity)}${t.activityZh?` <span class="zh">${s(t.activityZh)}</span>`:""}</td></tr>`).join("")}</tbody>
  </table>`}function $(a){if(!a.mapEmbedUrl){const t=document.createElement("div");return t.className="map-slot map-slot--empty",t.innerHTML='Map coming soon <span class="zh">地图即将上线</span>',t}const e=document.createElement("iframe");return e.className="map-slot",e.src=u(a.mapEmbedUrl),e.title=`Map of ${a.name}`,e.loading="lazy",e}function b(a){var c;const e=document.getElementById("contact-root"),t=a.find(i=>i.id===f);!e||!t||(e.innerHTML=`
    <div class="wrap">
      <nav class="tabs location-switcher" aria-label="Switch location">${y(t.id,a)}</nav>

      <div class="split contact-grid">
        <div>
          <h3 class="section-sub">Contact</h3>
          <p class="lead small">${s(t.address??n)}</p>
          <p class="lead small">${s(t.phone??n)}</p>
          <p class="lead small">${s(t.email??n)}</p>

          <h3 class="section-sub">Schedule <span class="zh">聚会时间</span></h3>
          ${v(t.schedule)}
        </div>
        <div class="frame"></div>
      </div>
    </div>
  `,(c=e.querySelector(".frame"))==null||c.append($(t)))}async function r(){const a=document.getElementById("contact-root");if(a){m(a);try{b(await p())}catch{h(a,r)}}}r();
