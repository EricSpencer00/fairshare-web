document.addEventListener('DOMContentLoaded',function(){
  const el = document.getElementById('year');
  if(el) el.textContent = new Date().getFullYear();
});
