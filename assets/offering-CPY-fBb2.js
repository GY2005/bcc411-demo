import{m as h,i as v,r as $,z as m,K as r,q as b,M as s,L as d,P as l}from"./nav-Bhth8lqx.js";import{e as i,s as u}from"./markdown-DyElYZdi.js";const c=document.body.dataset.page,o=document.body.dataset.location;c&&(h(c),v());function g(e){return`<p class="give-contact">${d(`请<a href="contact-${e}.html">联系教会</a>了解详情`)}<br class="l-en">${l(`<a href="contact-${e}.html">Please contact the church</a> for details`)}</p>`}function y(e){const a=e.offeringPayee?`<p class="give-line"><span>${r("收款人","Title")}:</span> ${i(e.offeringPayee)}</p>`:"",n=e.offeringAddress?`<p class="give-line"><span>${r("邮寄地址","Address")}:</span><br>${i(e.offeringAddress)}</p>`:g(e.id);return`<div class="give-card">
    <h2>${s("支票","By Check")}</h2>
    ${a}
    ${n}
  </div>`}function P(e){const a=e.offeringZelle?`<p class="give-line"><span>Zelle:</span><br>${i(e.offeringZelle)}</p>`:"",n=e.offeringPaypalUrl?`<a class="give-btn" href="${i(u(e.offeringPaypalUrl))}" rel="noopener">${d("PayPal 奉献")}<br class="l-en">${l("Donate with PayPal")}</a>`:"";return`<div class="give-card">
    <h2>${s("网上奉献","Online Giving")}</h2>
    ${a}
    ${n}
    ${a||n?"":g(e.id)}
  </div>`}function w(e){return`<div class="give-hero">
      <div class="give-hero-main">
        <h1 class="give-title">${s(`${i(e.nameZh)}奉献`,`${i(e.name)} Offering`)}</h1>
        <img class="give-train" src="/bcc411-demo/brand/offering-train.webp" width="1100" height="217" alt="" />
      </div>
      <img class="give-coin" src="/bcc411-demo/brand/offering-coin.webp" width="640" height="687" alt="常常喜乐，乐意捐得，顺着圣灵撒种，到了时候就要收成" />
    </div>
    <div class="give-panel">
      <div class="give-card give-card--image">
        <img src="/bcc411-demo/brand/offering-cube.webp" width="560" height="600" alt="" />
      </div>
      ${y(e)}
      ${P(e)}
    </div>`}async function f(){const e=document.getElementById("offering-root");if(!e||!o)return;const a=e,n=o;$(a);try{const t=(await m()).find(p=>p.id===n);a.innerHTML=t?w(t):`<p class="sermon-empty">${r("暂无信息。","Nothing here yet.")}</p>`}catch{b(a,f)}}f();
