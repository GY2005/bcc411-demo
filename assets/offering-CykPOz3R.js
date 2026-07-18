import{m as t,i as c,r,t as l,n as d}from"./nav-Dk7rOftf.js";import{e as i}from"./markdown-Dp0d1t7X.js";t("offering");c();const m=["ny","houston","nc"],f="TODO: confirm mailing/check instructions with the church office.",p="TODO: online giving is not available yet. This section will link to a secure giving provider once that capability is built (see CLAUDE.md Phase 4).";function h(n,s){const a=s.find(e=>e.id===n);return a?`<div class="card offering-card">
    <h3>${i(a.name)} <span class="zh">${i(a.nameZh)}</span></h3>
    <div class="offering-method">
      <span class="meta">By Mail · <span class="zh">邮寄</span></span>
      <p class="lead small">${f}</p>
    </div>
    <div class="offering-method">
      <span class="meta">Online Giving · <span class="zh">网上奉献</span></span>
      <p class="lead small">${p}</p>
    </div>
  </div>`:""}async function o(){const n=document.getElementById("offering-root");if(n){r(n);try{const s=await l();n.innerHTML=m.map(a=>h(a,s)).join("")}catch{d(n,o)}}}o();
