
document.querySelectorAll(".group-title").forEach(title=>{
  title.addEventListener("click",()=>title.parentElement.classList.toggle("open"));
});

function checkJuryPassword(){
  const input = document.getElementById("jury-password");
  const error = document.getElementById("login-error");
  const correctPassword = "bts-sio-2026"; // change le mot de passe ici

  if(input.value === correctPassword){
    sessionStorage.setItem("jury-ok","true");
    window.location.href = "competences.html";
  }else{
    error.textContent = "Mot de passe incorrect.";
  }
}

function logoutJury(){
  sessionStorage.removeItem("jury-ok");
  window.location.href = "jury.html";
}

function protectPage(){
  if(document.body.dataset.protected === "true" && sessionStorage.getItem("jury-ok") !== "true"){
    window.location.href = "jury.html";
  }
}

function filterSkills(){
  const q = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".skill-card").forEach(card=>{
    card.style.display = card.innerText.toLowerCase().includes(q) ? "block" : "none";
  });
}

protectPage();
