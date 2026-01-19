/* assets/theme.js — seguro e enxuto */
(function(){
  // Tema (claro/escuro) com persistência
  window.applyThemeToggle = function(btnId, icoId){
    const key='mc_theme';
    const btn=document.getElementById(btnId);
    const ico=document.getElementById(icoId);
    const saved=localStorage.getItem(key)||'light';
    if(saved==='dark') document.documentElement.classList.add('dark');
    function sync(){
      const dark=document.documentElement.classList.contains('dark');
      if(ico) ico.textContent=dark?'🌙':'☀️';
      localStorage.setItem(key, dark?'dark':'light');
    }
    if(btn) btn.onclick=()=>{ document.documentElement.classList.toggle('dark'); sync(); };
    sync();
  };

  // Logo: tenta arquivo, depois LocalStorage, depois fallback SVG
  window.loadLogo = function(imgElOrId, defaultPath){
    const img = typeof imgElOrId==='string' ? document.getElementById(imgElOrId) : imgElOrId;
    if(!img) return;
    const KEY='mc_logo_dataurl';
    const stored=localStorage.getItem(KEY);
    if(stored){ img.src=stored; return; }
    fetch(defaultPath,{cache:'no-store'}).then(r=>{
      if(!r.ok) throw 0;
      return r.blob();
    }).then(b=>{
      img.src=URL.createObjectURL(b);
    }).catch(()=>{
      const svg = encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'>
           <rect rx='20' ry='20' width='120' height='120' fill='#0ea5e9'/>
           <text x='60' y='68' font-size='56' text-anchor='middle' fill='white'>⚓</text>
         </svg>`
      );
      img.src='data:image/svg+xml;charset=UTF-8,'+svg;
    });
  };

  // Trocar logo (salva no LocalStorage)
  window.bindLogoPicker = function(btnId, inputId, imgId){
    const btn=document.getElementById(btnId);
    const input=document.getElementById(inputId);
    const img=document.getElementById(imgId);
    const KEY='mc_logo_dataurl';
    if(!btn||!input||!img) return;
    btn.onclick=()=> input.click();
    input.onchange=(e)=>{
      const f=e.target.files?.[0]; if(!f) return;
      const rd=new FileReader();
      rd.onload=()=>{ localStorage.setItem(KEY, rd.result); img.src=rd.result; alert('Logo atualizado.'); };
      rd.readAsDataURL(f);
    };
  };
})();
