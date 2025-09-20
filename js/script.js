// Navigation toggle
function setupNav(toggleId, navId) {
  const btn = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}
setupNav('nav-toggle','main-nav');
setupNav('nav-toggle-2','main-nav-2');
setupNav('nav-toggle-3','main-nav-3');
setupNav('nav-toggle-4','main-nav-4');
setupNav('nav-toggle-5','main-nav-5');

// Footer year auto-update
['year','year-2','year-3','year-4','year-5'].forEach(id=>{
  const el=document.getElementById(id);
  if(el) el.textContent=new Date().getFullYear();
});

// Carousel
(function(){
  const track=document.getElementById('carouselTrack');
  if(!track) return;
  const items=track.children;
  const prev=document.getElementById('prevBtn');
  const next=document.getElementById('nextBtn');
  let index=0;
  function show(i){
    if(i<0) i=items.length-1;
    if(i>=items.length) i=0;
    index=i;
    track.style.transform=`translateX(-${index*100}%)`;
  }
  prev.addEventListener('click',()=>show(index-1));
  next.addEventListener('click',()=>show(index+1));
  setInterval(()=>show(index+1),5000);
})();

// Form validation
(function(){
  const form=document.getElementById('contactForm');
  if(!form) return;
  const feedback=document.getElementById('formFeedback');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=form.name.value.trim();
    const email=form.email.value.trim();
    const message=form.message.value.trim();
    if(!name || !email || !message){
      feedback.textContent='Please fill in all fields.';
      return;
    }
    const emailPattern=/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if(!emailPattern.test(email)){
      feedback.textContent='Invalid email address.';
      return;
    }
    feedback.textContent='Message sent successfully (demo).';
    form.reset();
  });
})();
