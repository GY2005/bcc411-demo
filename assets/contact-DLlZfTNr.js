import{m as k,i as O,r as I,z as U,K as w,q as Z,L as y,M as S,t as c,N as F,A as V,O as N,P as _}from"./nav-Bhth8lqx.js";import{h as j,c as D,a as R,s as z,b as W}from"./authForms-Cby3tvdZ.js";import{e as s,s as K}from"./markdown-DyElYZdi.js";const C=document.body.dataset.page,q=document.body.dataset.location;C&&(k(C),O());const x=w("待定","TBA"),m={church:'<path d="M12 1.5h1.2V4H16v1.700h-2.800v2.500l4.300 3.300V22h-11V11.500l4.300-3.300V5.700H8V4h2.800V1.500H12zM12 13a2 2 0 0 0-2 2v7h4v-7a2 2 0 0 0-2-2zM1.500 14.500 5 12.300V22H1.500v-7.500zM22.500 14.500V22H19v-9.700l3.500 2.200z"/>',mail:'<path d="M2 5.500A1.500 1.500 0 0 1 3.500 4h17A1.500 1.500 0 0 1 22 5.500v.6l-10 6.200L2 6.100v-.6zm0 2.900V18.500A1.500 1.500 0 0 0 3.500 20h17a1.500 1.500 0 0 0 1.500-1.500V8.400l-10 6.200L2 8.400z"/>',phone:'<path d="M20.900 15.700l-4.300-1.800a1.100 1.100 0 0 0-1.300.3l-1.900 2.300a13.900 13.900 0 0 1-6.600-6.600l2.300-1.900a1.100 1.100 0 0 0 .3-1.300L7.600 2.400a1.100 1.100 0 0 0-1.300-.6l-4 .9A1.100 1.100 0 0 0 1.500 3.800C1.500 14 9.800 22.500 20.200 22.500a1.100 1.100 0 0 0 1.100-.8l.9-4a1.100 1.100 0 0 0-.7-1.300z"/>',at:'<path d="M12 2a10 10 0 1 0 5.600 18.300l-1.100-1.700A8 8 0 1 1 20 12v1.200a1.800 1.800 0 0 1-3.600 0V7.500h-2v.9A5 5 0 1 0 15 16.100a3.800 3.800 0 0 0 7-2.900V12A10 10 0 0 0 12 2zm0 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>'};function Y(e){return`<svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">${e}</svg>`}function P(e){return e.split(`
`).map(t=>t.trim()).filter(Boolean)}function G(e){return e?P(e).map(t=>{const a=t.replace(/[^\d+]/g,"");return a.length>=7?`<a href="tel:${s(a)}">${s(t)}</a>`:s(t)}).join("<br>"):x}function J(e){return e?/^[^\s@"'<>]+@[^\s@"'<>]+$/.test(e)?`<a href="mailto:${s(e)}">${s(e)}</a>`:s(e):x}function L(e){return e?s(e):x}function u(e,t,a,n){return`<li class="contact-fact">
    ${Y(e)}
    <h2>${S(t,a)}</h2>
    <p>${n}</p>
  </li>`}function Q(e){const t=(a,n)=>a?S(s(a),s(n)):s(n);return`<tr>
    <td>${t(e.dayZh,e.day)}</td>
    <td>${s(e.time)}</td>
    <td>${t(e.activityZh,e.activity)}</td>
  </tr>`}function X(e){const t=P(e),a=n=>/[\u4e00-\u9fff]/.test(n);return!t.some(a)||t.every(a)?s(e):t.map(n=>a(n)?y(s(n)):_(s(n))).join(`
`)}function ee(e){if(e.schedule.length===0)return"";const t=e.scheduleNote?`<p class="schedule-note">${X(e.scheduleNote)}</p>`:"";return`<div class="schedule-column">
    <table class="schedule-list">
      <thead class="sr-only"><tr><th>日期 Day</th><th>时间 Time</th><th>聚会 Activity</th></tr></thead>
      <tbody>${e.schedule.map(Q).join("")}</tbody>
    </table>
    ${t}
  </div>`}function v(e,t,a,n){return`<div class="form-field">
    <label for="${e}">${w(t,a)}</label>
    ${n}
    <p class="field-error" id="${e}-error" hidden></p>
  </div>`}function te(){return`<form class="contact-form" id="contact-form" novalidate aria-labelledby="contact-form-title">
    <h3 id="contact-form-title">${N("联系我们","Contact Us")}</h3>
    ${v("contact-name","姓名","Name",'<input type="text" id="contact-name" name="name" autocomplete="name" maxlength="100" required />')}
    ${v("contact-email","邮箱","Email",'<input type="email" id="contact-email" name="email" autocomplete="email" maxlength="254" required />')}
    ${v("contact-message","留言","Message",'<textarea id="contact-message" name="message" rows="4" maxlength="5000" required></textarea>')}
    <div class="contact-trap" aria-hidden="true">
      <label for="contact-website">Website</label>
      <input type="text" id="contact-website" name="website" tabindex="-1" autocomplete="off" />
    </div>
    <div class="form-status" id="contact-status" role="status" hidden></div>
    <button type="submit" class="btn primary" id="contact-submit">${N("发送","Send")}</button>
  </form>`}function ae(e,t){const a=e.querySelector("#contact-form"),n=o=>e.querySelector(`#${o}`),i=o=>e.querySelector(`#${o}-error`),h=n("contact-name"),f=n("contact-email"),p=n("contact-message"),E=n("contact-website"),A=e.querySelector("#contact-status"),g=e.querySelector("#contact-submit");!a||!h||!f||!p||!E||!g||a.addEventListener("submit",async o=>{o.preventDefault(),j(A);const l={name:h.value.trim(),email:f.value.trim(),message:p.value.trim()},T=[[h,"contact-name",!l.name,c("请填写姓名。","Please enter your name.")],[f,"contact-email",!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l.email),c("请填写有效的邮箱。","Please enter a valid email.")],[p,"contact-message",!l.message,c("请填写留言。","Please enter a message.")]];let b=null;for(const[r,d,$,B]of T)D(r,i(d)),$&&(R(r,i(d),B),b??(b=r));if(b){b.focus();return}const M=c("发送","Send");z(g,!0,c("发送中…","Sending…"),M);try{await F({locationId:t.id,...l,website:E.value});const r=document.createElement("p");r.className="contact-thanks",r.tabIndex=-1,r.textContent=c("感谢您的留言，我们会尽快回复。","Thank you. We will reply as soon as we can."),a.replaceChildren(r),r.focus()}catch(r){const d=t.email?` ${t.email}`:"",$=r instanceof V&&r.code==="demo_preview"?c("这是预览版本，留言不会发送。请直接发邮件给教会：","This is a preview, so messages are not sent. Please email the church:"):r instanceof V&&r.code==="rate_limited"?c("留言次数过多，请稍后再试，或直接发邮件给教会：","Too many messages. Please try later, or email the church:"):c("留言未能发送，请直接发邮件给教会：","Your message could not be sent. Please email the church:");W(A,"error",$+d),z(g,!1,c("发送中…","Sending…"),M)}})}function ne(e){return`<section class="schedule-band">
    ${e.schedule.length?`<h2 class="schedule-title">${S("教会日程安排","Church Schedule")}</h2>`:""}
    <div class="schedule-columns">
      ${te()}
      ${ee(e)}
    </div>
  </section>`}function se(e){if(!e.mapEmbedUrl)return null;const t=document.createElement("div");t.className="map-frame";const a=document.createElement("div");a.className="map-frame-inner";const n=document.createElement("iframe");return n.src=K(e.mapEmbedUrl),n.title=`${e.nameZh}教会地图 Map of ${e.name}`,n.loading="lazy",n.referrerPolicy="no-referrer-when-downgrade",a.append(n),t.append(a),t}function re(e,t){e.innerHTML=`
    <h1>
      <span class="contact-title">
        ${y(`${s(t.nameZh)}教会`)}
        <img src="/bcc411-demo/brand/logo-large.webp" srcset="/bcc411-demo/brand/logo-large-240.webp 240w, /bcc411-demo/brand/logo-large.webp 400w" sizes="(max-width: 1440px) 11vw, 158px" width="400" height="386" alt="" />
        ${y("联系方式")}
      </span>
      <span class="contact-title-en l-en" lang="en">${s(t.name)} Church Contact</span>
    </h1>
    <ul class="contact-facts">
      ${u(m.church,"教会地址","Church Address",L(t.address))}
      ${u(m.mail,"邮递地址","Mailing Address",L(t.mailingAddress))}
      ${u(m.phone,"电话号码","Phone",G(t.phone))}
      ${u(m.at,"电子邮件","Email",J(t.email))}
    </ul>
    ${ne(t)}
  `,ae(e,t);const a=se(t);a&&e.append(a)}async function H(){const e=document.getElementById("contact-root");if(!e||!q)return;const t=e,a=q;I(t);try{const n=(await U()).find(i=>i.id===a);n?re(t,n):t.innerHTML=`<p class="sermon-empty">${w("暂无信息。","Nothing here yet.")}</p>`}catch{Z(t,H)}}H();
