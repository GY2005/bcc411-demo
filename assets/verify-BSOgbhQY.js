import{m as o,i as r,L as l,A as c}from"./nav-Dk7rOftf.js";import{e as m}from"./markdown-Dp0d1t7X.js";const t=document.body.dataset.page;t&&(o(t),r());const n=document.querySelector("#verify-status");function e(a){n&&(n.innerHTML=a)}async function u(){const a=new URLSearchParams(window.location.search).get("token");if(!a){e(`
      <p class="lead">This verification link is missing its token.</p>
      <p class="lead small auth-links"><a href="login.html">Back to log in</a></p>
    `);return}e('<p class="lead loading-state">Verifying your email…</p>');try{await l(a),e('<p class="lead">Your email is verified — redirecting you to your account…</p>'),window.location.href="account.html"}catch(i){const s=i instanceof c?i.message:"Something went wrong verifying your email.";e(`
      <p class="lead">${m(s)}</p>
      <p class="lead small auth-links"><a href="login.html">Log in to resend a verification email</a></p>
    `)}}u();
