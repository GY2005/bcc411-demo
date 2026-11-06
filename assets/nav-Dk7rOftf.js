(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const y="/bcc411-demo",v=8e3;class h extends Error{constructor(t,a,s){super(s),this.status=t,this.code=a,this.name="ApiRequestError"}}async function p(e,t,a){const s=new AbortController,n=setTimeout(()=>s.abort(),v);try{return await t(e,{method:a.method??"GET",headers:a.body!==void 0?{"content-type":"application/json"}:void 0,body:a.body!==void 0?JSON.stringify(a.body):void 0,credentials:"include",signal:s.signal})}finally{clearTimeout(n)}}async function i(e,t={},a=fetch){var o,c;const s=`${y}${e}`;let n;try{n=await p(s,a,t)}catch{try{n=await p(s,a,t)}catch{throw new h(0,"network_error",`Could not reach the server at ${e}.`)}}const r=await n.json().catch(()=>null);if(!n.ok){const l=r;throw new h(n.status,((o=l==null?void 0:l.error)==null?void 0:o.code)??"unknown_error",((c=l==null?void 0:l.error)==null?void 0:c.message)??`Request to ${e} failed (${n.status}).`)}return r}async function R(e){const{items:a}=await i("/api/sermons");return a}async function _(){const{items:e}=await i("/api/events");return e}async function z(e){const t=e?`?kind=${e}`:"",{items:a}=await i(`/api/posts${t}`);return a}async function N(e){const{items:a}=await i("/api/photos");return a}async function D(){const{items:e}=await i("/api/locations");return e}async function H(e){return i("/api/sermons",{method:"POST",body:e})}async function x(e,t){return i(`/api/sermons/${encodeURIComponent(e)}`,{method:"PUT",body:t})}async function j(e){await i(`/api/sermons/${encodeURIComponent(e)}`,{method:"DELETE"})}async function G(e){return i("/api/events",{method:"POST",body:e})}async function V(e,t){return i(`/api/events/${encodeURIComponent(e)}`,{method:"PUT",body:t})}async function B(e){await i(`/api/events/${encodeURIComponent(e)}`,{method:"DELETE"})}async function F(e){return i("/api/posts",{method:"POST",body:e})}async function Y(e,t){return i(`/api/posts/${encodeURIComponent(e)}`,{method:"PUT",body:t})}async function J(e){await i(`/api/posts/${encodeURIComponent(e)}`,{method:"DELETE"})}async function K(e){return i("/api/photos",{method:"POST",body:e})}async function W(e,t){return i(`/api/photos/${encodeURIComponent(e)}`,{method:"PUT",body:t})}async function Q(e){await i(`/api/photos/${encodeURIComponent(e)}`,{method:"DELETE"})}const E=3e4;async function X(e,t=fetch){var c,l;const a=new FormData;a.append("file",e);const s=`${y}/api/uploads`,n=()=>{const u=new AbortController,d=setTimeout(()=>u.abort(),E);return t(s,{method:"POST",body:a,credentials:"include",signal:u.signal}).finally(()=>clearTimeout(d))};let r;try{r=await n()}catch{try{r=await n()}catch{throw new h(0,"network_error","Could not reach the server at /api/uploads.")}}const o=await r.json().catch(()=>null);if(!r.ok){const u=o;throw new h(r.status,((c=u==null?void 0:u.error)==null?void 0:c.code)??"unknown_error",((l=u==null?void 0:u.error)==null?void 0:l.message)??`Request to /api/uploads failed (${r.status}).`)}return o}async function Z(e,t){return i(`/api/locations/${encodeURIComponent(e)}`,{method:"PUT",body:t})}async function ee(e,t){return i(`/api/locations/${encodeURIComponent(e)}/schedules`,{method:"POST",body:t})}async function te(e,t){return i(`/api/schedules/${e}`,{method:"PUT",body:t})}async function ne(e){await i(`/api/schedules/${e}`,{method:"DELETE"})}async function ae(e){const{items:a}=await i("/api/admin/audit-log");return a}async function oe(e,t){return i("/api/auth/register",{method:"POST",body:{email:e,password:t}})}async function se(e,t){return i("/api/auth/login",{method:"POST",body:{email:e,password:t}})}async function w(){return i("/api/auth/logout",{method:"POST"})}async function $(){return i("/api/auth/me")}async function re(e){return i("/api/auth/verify",{method:"POST",body:{token:e}})}async function ie(e){return i("/api/auth/resend-verification",{method:"POST",body:{email:e}})}async function ce(e){return i("/api/auth/forgot",{method:"POST",body:{email:e}})}async function le(e,t){return i("/api/auth/reset",{method:"POST",body:{token:e,newPassword:t}})}function ue(e){e.innerHTML='<p class="lead loading-state">Loading…</p>'}function de(e,t){var a;e.innerHTML=`
    <div class="error-state">
      <p class="lead">Something went wrong loading this content.</p>
      <button type="button" class="btn ghost retry-btn">Try again</button>
    </div>`,(a=e.querySelector(".retry-btn"))==null||a.addEventListener("click",t,{once:!0})}function T(e=$){let t,a=null;const s=new Set;async function n(){return t!==void 0||(a||(a=e().then(({user:c})=>c).catch(()=>null).finally(()=>{a=null})),t=await a),t}function r(c){t=c;for(const l of s)l(c)}function o(c){return s.add(c),()=>s.delete(c)}return{getCurrentUser:n,setCurrentUser:r,onAuthChange:o}}const f=T(),S=f.getCurrentUser,L=f.setCurrentUser,A=f.onAuthChange;async function he(){await w(),L(null)}const g=[{kind:"link",item:{href:"about.html",label:"About Us",zh:"教会介绍",page:"about"}},{kind:"group",label:"Sermons",zh:"信息",items:[{href:"sermons.html",label:"Sunday Sermons",tag:"主日信息"},{href:"sermons.html",label:"Retreat Sermons",tag:"特会信息"},{href:"sermons.html",label:"Teaching Sermons",tag:"主题信息"},{href:"sermons.html",label:"All Sermons",tag:"信息",page:"sermons"}]},{kind:"group",label:"Media",zh:"影像集锦",items:[{href:"gallery.html",label:"Pictures / Gallery",tag:"相册",page:"gallery"},{href:"https://www.youtube.com/@bcc4118",label:"Videos (YouTube)",tag:"视频"},{href:"articles.html",label:"Articles",tag:"文章",page:"articles"},{href:"testimonies.html",label:"Testimonies",tag:"见证如云",page:"testimonies"}]},{kind:"group",label:"Church Life",items:[{href:"events.html",label:"Events",tag:"近期活动",page:"events"},{href:"offering.html",label:"Offering",tag:"奉献",page:"offering"},{href:"contact-nc.html",label:"Contact / Schedule",tag:"联系方式及日程",page:"contact"}]},{kind:"link",item:{href:"events.html",label:"Events",page:"events"}}];function C(e,t){return e?e==="contact"?t.startsWith("contact-"):e===t:!1}function m(e,t){return C(e,t)?' aria-current="page"':""}function P(e,t){if(e.kind==="link"){const{href:n,label:r,zh:o,page:c}=e.item;return`<a href="${n}"${m(c,t)}>${r}${o?` <span class="zh">${o}</span>`:""}</a>`}const a=`${e.label}${e.zh?` <span class="zh">${e.zh}</span>`:""}`,s=e.items.map(n=>`<a href="${n.href}"${m(n.page,t)}><span><span class="tag">${n.tag}</span>${n.label}</span></a>`).join(`
            `);return`<div class="drop" data-drop>
          <button aria-expanded="false" aria-haspopup="true">${a} <span class="caret"></span></button>
          <div class="menu" role="menu">
            ${s}
          </div>
        </div>`}function U(e,t){if(e.kind==="link"){const{href:n,label:r,zh:o,page:c}=e.item;return`<a href="${n}"${m(c,t)}>${r}${o?` ${o}`:""}</a>`}const a=`${e.label}${e.zh?` ${e.zh}`:""}`,s=e.items.map(n=>`<a href="${n.href}"${m(n.page,t)}>${n.label}${n.tag?` ${n.tag}`:""}</a>`).join(`
        `);return`<details>
        <summary>${a}</summary>
        ${s}
      </details>`}function I(e){const t=g.map(s=>P(s,e)).join(`

        `),a=g.map(s=>U(s,e)).join(`
      `);return`<header>
    <div class="wrap nav">
      <a class="logo" href="index.html"><span class="flag"></span>BCC411 <span class="zh" style="font-weight:700">基督旌旗411教会</span></a>

      <nav class="nav-links" aria-label="Primary">
        ${t}
      </nav>

      <div class="nav-cta">
        <a class="quiet" id="nav-auth" href="login.html">Log In <span class="zh">登录</span></a>
        <a class="visit-btn" href="contact-nc.html">Visit</a>
        <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </div>

    <!-- Mobile accordion menu -->
    <div class="mobile-menu" id="mobileMenu">
      ${a}
      <a href="events.html">Events</a>
      <a href="contact-nc.html">Visit</a>
      <a id="nav-auth-mobile" href="login.html">Log In 登录</a>
    </div>
  </header>`}const k={href:"login.html",desktop:'Log In <span class="zh">登录</span>',mobile:"Log In 登录"},O={href:"account.html",desktop:'Account <span class="zh">账户</span>',mobile:"Account 账户"};function b(e){const t=e?O:k,a=document.getElementById("nav-auth"),s=document.getElementById("nav-auth-mobile");a&&(a.setAttribute("href",t.href),a.innerHTML=t.desktop),s&&(s.setAttribute("href",t.href),s.textContent=t.mobile)}function q(){S().then(b),A(b)}function M(){return`<footer>
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-brand">
          <a class="logo" href="index.html"><span class="flag gold-flag"></span>BCC411</a>
          <p>Banner of Christ Church 411 Ministry Intl.<br>143-26 41st Ave, Flushing, NY 11355<br>Tel: 718-888-1777 · 411@bcc411.com</p>
        </div>
        <div>
          <h4>Church 教会</h4>
          <a href="index.html">Home 首页</a>
          <a href="about.html">About Us 教会介绍</a>
          <a href="events.html">Events 近期活动</a>
        </div>
        <div>
          <h4>Sermons 信息</h4>
          <a href="sermons.html">Sunday 主日信息</a>
          <a href="sermons.html">Retreat 特会信息</a>
          <a href="sermons.html">Teaching 主题信息</a>
        </div>
        <div>
          <h4>Media 影像</h4>
          <a href="gallery.html">Gallery 相册</a>
          <a href="https://www.youtube.com/@bcc4118">Videos 视频</a>
          <a href="articles.html">Articles 文章</a>
          <a href="testimonies.html">Testimonies 见证如云</a>
        </div>
        <div>
          <h4>Connect 联系</h4>
          <a href="contact-ny.html">New York 纽约</a>
          <a href="contact-houston.html">Houston 休斯頓</a>
          <a href="contact-nc.html">North Carolina 北卡</a>
          <a href="contact-europe.html">Europe 欧洲</a>
        </div>
      </div>
      <div class="foot-bottom">
        <span>Content &amp; links: bcc411.com</span>
        <div class="socials">
          <a href="https://www.youtube.com/@bcc4118">YouTube</a>
          <a href="https://bcc411.com/">bcc411.com</a>
        </div>
      </div>
    </div>
  </footer>`}function me(e){const t=document.getElementById("site-header"),a=document.getElementById("site-footer");t&&(t.outerHTML=I(e)),a&&(a.outerHTML=M()),q()}function fe(){const e=document.querySelectorAll("[data-drop]");function t(){e.forEach(o=>{var c;o.classList.remove("open"),(c=o.querySelector("button"))==null||c.setAttribute("aria-expanded","false")})}function a(o){var c;t(),o.classList.add("open"),(c=o.querySelector("button"))==null||c.setAttribute("aria-expanded","true")}const s=window.matchMedia("(hover: hover)").matches;e.forEach(o=>{const c=o.querySelector("button");if(!c)return;let l=!1;c.addEventListener("click",u=>{u.stopPropagation();const d=o.classList.contains("open");if(d&&l){l=!1;return}t(),d||a(o)}),o.addEventListener("mouseenter",()=>{s&&(a(o),l=!0)}),o.addEventListener("mouseleave",()=>{s&&(t(),l=!1)})}),document.addEventListener("click",t),document.addEventListener("keydown",o=>{o.key==="Escape"&&t()});const n=document.getElementById("burger"),r=document.getElementById("mobileMenu");n&&r&&n.addEventListener("click",()=>{const o=r.classList.toggle("open");n.setAttribute("aria-expanded",String(o))})}function pe(){const e=document.querySelectorAll(".tab"),t=document.querySelectorAll(".panel");function a(s){var r;e.forEach(o=>o.setAttribute("aria-selected","false")),t.forEach(o=>o.classList.remove("active")),s.setAttribute("aria-selected","true");const n=s.dataset.panel;n&&((r=document.getElementById(n))==null||r.classList.add("active"))}e.forEach(s=>{s.addEventListener("click",()=>a(s))})}export{h as A,Z as B,ne as C,ee as D,te as E,ce as F,se as G,L as H,ie as I,oe as J,le as K,re as L,pe as a,G as b,H as c,V as d,F as e,Y as f,S as g,K as h,fe as i,W as j,R as k,he as l,me as m,de as n,_ as o,z as p,X as q,ue as r,N as s,D as t,x as u,ae as v,J as w,j as x,B as y,Q as z};
