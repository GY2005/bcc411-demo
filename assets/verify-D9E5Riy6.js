import{m as r,i as l,Z as c,K as a}from"./nav-Bhth8lqx.js";import{e as m}from"./markdown-DyElYZdi.js";import{d as p}from"./authForms-Cby3tvdZ.js";const t=document.body.dataset.page;t&&(r(t),l());const o=document.querySelector("#verify-status");function e(i){o&&(o.innerHTML=i)}async function u(){const i=new URLSearchParams(window.location.search).get("token");if(!i){e(`
      <p class="lead">${a("此验证链接不完整。","This verification link is missing its token.")}</p>
      <p class="lead small auth-links"><a href="login.html">${a("返回登录","Back to log in")}</a></p>
    `);return}e(`<p class="lead loading-state">${a("正在验证邮箱…","Verifying your email…")}</p>`);try{await c(i),e(`<p class="lead">${a("邮箱已验证，正在进入您的账户…","Your email is verified. Taking you to your account…")}</p>`),window.location.href="account.html"}catch(s){const n=p(s);e(`
      <p class="lead">${m(n)}</p>
      <p class="lead small auth-links"><a href="login.html">${a("登录以重新发送验证邮件","Log in to resend a verification email")}</a></p>
    `)}}u();
