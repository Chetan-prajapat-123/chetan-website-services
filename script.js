const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');

if(menuBtn){
  menuBtn.addEventListener('click',()=>{
    const open=navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',open);
  });
}
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click',()=>navLinks.classList.remove('open'));
});

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
