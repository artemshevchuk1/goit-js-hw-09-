const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){timerId=setInterval((()=>{t.setAttribute("disabled",!0),document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.disabled=!0,e.disabled=!1}),1e3)})),e.addEventListener("click",(function(){clearTimeout(timerId),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.5542ef88.js.map
