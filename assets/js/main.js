
document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('[data-nav-toggle]');
  const menu=document.getElementById('menu-principal');
  if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false')});}
  document.querySelectorAll('.js-slider').forEach((slider)=>{
    const slides=[...slider.querySelectorAll('.slide')];
    const dots=[...slider.querySelectorAll('.dots button')];
    if(!slides.length) return;
    let i=0;
    function show(n){i=(n+slides.length)%slides.length;slides.forEach((s,k)=>s.classList.toggle('active',k===i));dots.forEach((d,k)=>d.classList.toggle('active',k===i));}
    dots.forEach((d,k)=>d.addEventListener('click',()=>show(k)));
    show(0);
    setInterval(()=>show(i+1), 3600);
  });
});
