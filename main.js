


/*********Menus*** ou inputs********/
var menuPrincipal = [M1, M2, M3, M4, M5, M6, M7, M8, M9, M10];     
var abbaPrincipal = [A1, A2, A3, A4, A5, A6, A7, A8, A9, A10];



linkMp = function(){
    menuPrincipal.forEach((e) =>{
      let a = e.id.slice(1, e.id.length);
      e.classList.remove("activer");
      abbaPrincipal[a-1].classList.remove("activer");
    })
    
    var id =  this.id.slice(1, this.id.length);
    this.classList.add("activer")
    abbaPrincipal[id-1].classList.add("activer")
}


menuPrincipal.forEach((e) =>{
   e.addEventListener("click", linkMp);
})
/*********Menus*** ou inputs********/


/*********Abas***********/



/*********Abas***********/






































class App {
   
  init(){
    
  }
}




var app = new App()
window.onload = () =>{
   app.init()
}


