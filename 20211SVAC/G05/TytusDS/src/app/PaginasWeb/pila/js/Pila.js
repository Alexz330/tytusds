
        
class Nodo{
    constructor(valor){
        this.dato=valor;
        this.post=null;
    }
}

class Pila {
     constructor() {
      this.tamaño = -1;
      this.tamaño2=0;
      this.uno=null;}
  
    

    guardar(valor) {
    let nodo = new Nodo(valor)
    nodo.dato=valor;
    if (this.uno==null){
        this.uno=nodo;}
    else{nodo.post=this.uno;
        this.uno=nodo;}
    this.tamaño++; 
        var element=document.createElement("button");
        var myDiv=document.getElementById("myDiv1");
          var content=document.createTextNode(valor);
          element.appendChild(content);
          element.style.backgroundColor='rgb(25, 25, 112)'; 
          element.style.color='rgb(255,255,255)';
          element.style.fontSize='15px'; 
          element.style.borderRadius="5px";
          element.style.boxShadow="0 9px black";
          element.style.width="400px";
          myDiv.insertBefore(element, myDiv.firstElementChild);
          var element1=document.createElement("button");
          var myDiv1=document.getElementById("myDiv1");
          var content1=document.createTextNode(this.tamaño2);
          this.tamaño2++; 
          element1.appendChild(content1);
          element1.style.backgroundColor='rgb(0,0,0)'; 
          element1.style.color='rgb(255,255,255)';
          element1.style.width="40px";
          myDiv1.insertBefore(element1, myDiv1.firstElementChild);
          
          
          var pos = -30;
          var id = setInterval(frame, 4);
    function frame() {
        if (pos == 30) { clearInterval(id);} 
        else {
            pos++;
            myDiv.style.top = pos + 'px';
            myDiv.style.left =55 + 'px';
        }
    }
    var element1=document.createElement("button");
    var myDiv1=document.getElementById("myDiv1");
    var content1=document.createTextNode("PUSH");
    element1.appendChild(content1);
    element1.style.backgroundColor='rgb(53,204,0)'; 
    element1.style.color='rgb(255,255,255)';
    element1.style.width="440px";
    element1.style.height="30px";
    myDiv1.insertBefore(element1, myDiv1.firstElementChild);
    
    var eli=function(){
        var puntero=document.getElementById("myDiv1");
        puntero.removeChild(puntero.childNodes[0]); 
        };
        setTimeout(eli,600);

 }
  
    guardar2(valor) {
        let nodo = new Nodo(valor)
        nodo.dato=valor;
        if (this.uno==null){
            this.uno=nodo;}
        else{nodo.post=this.uno;
            this.uno=nodo;}
        this.tamaño++; 
        this.tamaño2++; 
         }
     guardarg(valor) {
            let aux = this.uno;
            var bandera=true;
            if(aux!=null){
                do{if (valor==aux.dato){
                    bandera=false;
                    break;}
                    aux=aux.post;
                }while(aux!=null);}

                if (bandera==true){
                    let nodo = new Nodo(valor)
                    nodo.dato=valor;
                    if (this.uno==null){
                        this.uno=nodo;}
                    else{nodo.post=this.uno;
                        this.uno=nodo;}
                    this.tamaño++; 
                        var element=document.createElement("button");
                        var myDiv=document.getElementById("myDiv1");
                          var content=document.createTextNode(valor);
                          element.appendChild(content);
                          element.style.backgroundColor='rgb(25, 25, 112)'; 
                          element.style.color='rgb(255,255,255)';
                          element.style.fontSize='15px'; 
                          element.style.borderRadius="5px";
                          element.style.boxShadow="0 9px black";
                          element.style.width="125px";
                          element.style.height="40px";
                          myDiv.insertBefore(element, myDiv.firstElementChild);
                          var element1=document.createElement("button");
                          var myDiv1=document.getElementById("myDiv1");
                          var content1=document.createTextNode(this.tamaño2);
                          this.tamaño2++; 
                          element1.appendChild(content1);
                          element1.style.backgroundColor='rgb(0,0,0)'; 
                          element1.style.color='rgb(255,255,255)';
                          element1.style.width="30px";
                          element1.style.height="30px";
                          myDiv1.insertBefore(element1, myDiv1.firstElementChild);
                          window.scroll({
                            top: 2000,
                            left: 100,
                            behavior: 'smooth'
                          });
                          var pos = -30;
                          var id = setInterval(frame, 4);
                    function frame() {
                        if (pos == 30) { clearInterval(id);} 
                        else {
                            pos++;
                            myDiv.style.top = pos + 'px';
                            myDiv.style.left =55 + 'px';
                        }
                    }
                    var element1=document.createElement("button");
                    var myDiv1=document.getElementById("myDiv1");
                    var content1=document.createTextNode("PUSH");
                    element1.appendChild(content1);
                    element1.style.backgroundColor='rgb(53,204,0)'; 
                    element1.style.color='rgb(255,255,255)';
                    element1.style.width="70px";
                    element1.style.height="30px";
                    myDiv1.insertBefore(element1, myDiv1.firstElementChild);
                    window.scroll({
                        top: 2000,
                        left: 100,
                        behavior: 'smooth'
                      });
                    var eli=function(){
                        var puntero=document.getElementById("myDiv1");
                        puntero.removeChild(puntero.childNodes[0]); 
                        };
                        setTimeout(eli,600);
                }
                else{
                    alert("dato ya existe");
                }
             }


    desapila(){
        if (this.uno==null){
            alert("Sin datos");
            console.log("pila sin datos")}
        else{
            var puntero=document.getElementById("myDiv1");
            if (puntero.childNodes.length>0) {
                puntero.removeChild(puntero.childNodes[0]); 
                puntero.removeChild(puntero.childNodes[0]); }
            this.uno= this.uno.post;
            this.tamaño--;
            this.tamaño2--; 
            var element1=document.createElement("button");
            var myDiv1=document.getElementById("myDiv1");
            var content1=document.createTextNode("POP");
            element1.appendChild(content1);
            element1.style.backgroundColor='rgb(213,0,36)'; 
            element1.style.color='rgb(255,255,255)';
            element1.style.width="440px";
            element1.style.height="30px";
            myDiv1.insertBefore(element1, myDiv1.firstElementChild);
            var eli=function(){
                puntero.removeChild(puntero.childNodes[0]); 
             };
             setTimeout(eli,500);
             
        }
    }

   pintar(){
    var contador=this.tamaño;
    var ele= document.getElementById("myDiv1");
    while (ele.firstChild) {ele.removeChild(ele.firstChild);}   
    let aux = this.uno;
if (this.uno!=null){ do{
    var element1=document.createElement("button");
    var myDiv1=document.getElementById("myDiv1");
    var content1=document.createTextNode(contador);
    contador--; 
    element1.appendChild(content1);
    element1.style.backgroundColor='rgb(0,0,0)'; 
    element1.style.color='rgb(255,255,255)';
    element1.style.width="40px";
    myDiv1.appendChild(element1);
    window.scroll({
        top: 2000,
        left: 100,
        behavior: 'smooth'
      });
    //myDiv1.insertBefore(element1, myDiv1.firstElementChild);

    var element=document.createElement("button");
    var myDiv=document.getElementById("myDiv1");
    var content =document.createTextNode(aux.dato);
    element.appendChild(content);
    element.style.backgroundColor='rgb(25, 25, 112)'; 
    element.style.color='rgb(255,255,255)';
    element.style.fontSize='15px'; 
    element.style.borderRadius="5px";
    element.style.boxShadow="0 9px black";
    element.style.width="400px";
    //myDiv.insertBefore(element, myDiv.firstElementChild);
    myDiv.appendChild(element);
    window.scroll({
        top: 2000,
        left: 100,
        behavior: 'smooth'
      });

    
    aux=aux.post; }while(aux!=null);}
else{
    alert("Pila vacia"); 
}
   }

   pintar2(){
    var ele= document.getElementById("myDiv1");
    while (ele.firstChild) {
        ele.removeChild(ele.firstChild);}   
   var contar=this.tamaño;
    let aux = this.uno;
    var bandera=true;
    var bandera1=true;
    if (this.uno!=null){
        var fun=function(){
            bandera1=false;
                var element1=document.createElement("button");
                var myDiv1=document.getElementById("myDiv1");
                var content1=document.createTextNode(contar);
                contar--; 
                element1.appendChild(content1);
                element1.style.backgroundColor='rgb(0,0,0)'; 
                element1.style.color='rgb(255,255,255)';
                element1.style.width="40px";
                myDiv1.appendChild(element1);
                window.scroll({
                    top: 2000,
                    left: 100,
                    behavior: 'smooth'
                  });
                //myDiv1.insertBefore(element1, myDiv1.firstElementChild);

                var element=document.createElement("button");
                var myDiv=document.getElementById("myDiv1");
                var content =document.createTextNode(aux.dato);
                element.appendChild(content);
                element.style.backgroundColor='rgb(25, 25, 112)'; 
                element.style.color='rgb(255,255,255)';
                element.style.fontSize='15px'; 
                element.style.borderRadius="5px";
                element.style.boxShadow="0 9px black";
                element.style.width="400px";
                myDiv.appendChild(element);
                window.scroll({
                    top: 2000,
                    left: 100,
                    behavior: 'smooth'
                  });
                //myDiv.insertBefore(element, myDiv.firstElementChild);
               
            
            aux=aux.post;
                var pos = 0;
                var id = setInterval(frame, 10);
function frame() { if (pos == 50) { clearInterval(id);} 
    else { pos++; myDiv.style.top = pos + 'px'; myDiv.style.left = 55 + 'px';}}
          
          if (aux==null){  
              clearInterval(intervalo);}
        };
        var intervalo = setInterval(fun,1800);
    }
    if (this.uno==null){alert("Pila Vacia");}

    



   }




   leer(){
    let ldatos=[];
    let aux = this.uno;
    if (this.uno!=null){
        do{
            ldatos.push(aux.dato);
            aux=aux.post;
            }while(aux!=null);}
    else{console.log("sin datos"); }
    
    return ldatos;
  }

    buscar(valor){
    var ele= document.getElementById("myDiv1");
    while (ele.firstChild) {
        ele.removeChild(ele.firstChild);}   
   var contar=this.tamaño;
    let aux = this.uno;
    var bandera=true;
    var bandera1=true;
    if (this.uno!=null){
        //while(aux!=null){
        
        var fun=function(){
                bandera1=false;
                if (valor==aux.dato){
                    bandera=false;
                    var element1=document.createElement("button");
                    var myDiv1=document.getElementById("myDiv1");
                    var content1=document.createTextNode(contar);
                    contar--; 
                    element1.appendChild(content1);
                    element1.style.backgroundColor='rgb(38,193,0)'; 
                    element1.style.color='rgb(255,255,255)';
                    element1.style.width="40px";
                    myDiv1.appendChild(element1);
                    window.scroll({
                        top: 2000,
                        left: 100,
                        behavior: 'smooth'
                      });
                    //myDiv1.insertBefore(element1, myDiv1.firstElementChild);

                    var element=document.createElement("button");
                    var myDiv=document.getElementById("myDiv1");
                    var content =document.createTextNode(aux.dato);
                    element.appendChild(content);
                    element.style.backgroundColor='rgb(38,193,0)'; 
                    element.style.color='rgb(255,255,255)';
                    element.style.fontSize='15px'; 
                    element.style.borderRadius="5px";
                    element.style.boxShadow="0 9px black";
                    element.style.width="400px";
                    myDiv.appendChild(element);
                    window.scroll({
                        top: 2000,
                        left: 100,
                        behavior: 'smooth'
                      });
                    //myDiv.insertBefore(element, myDiv.firstElementChild);
                    
                }
                else{
                    var element1=document.createElement("button");
                    var myDiv1=document.getElementById("myDiv1");
                    var content1=document.createTextNode(contar);
                    contar--; 
                    element1.appendChild(content1);
                    element1.style.backgroundColor='rgb(0,0,0)'; 
                    element1.style.color='rgb(255,255,255)';
                    element1.style.width="40px";
                    myDiv1.appendChild(element1);
                    window.scroll({
                        top: 2000,
                        left: 100,
                        behavior: 'smooth'
                      });
                    //myDiv1.insertBefore(element1, myDiv1.firstElementChild);

                    var element=document.createElement("button");
                    var myDiv=document.getElementById("myDiv1");
                    var content =document.createTextNode(aux.dato);
                    element.appendChild(content);
                    element.style.backgroundColor='rgb(25, 25, 112)'; 
                    element.style.color='rgb(255,255,255)';
                    element.style.fontSize='15px'; 
                    element.style.borderRadius="5px";
                    element.style.boxShadow="0 9px black";
                    element.style.width="400px";
                    myDiv.appendChild(element);
                    window.scroll({
                        top: 2000,
                        left: 100,
                        behavior: 'smooth'
                      });
                    //myDiv.insertBefore(element, myDiv.firstElementChild);
                   
                }
                aux=aux.post;
                    var pos = 0;
                    var id = setInterval(frame, 10);
    function frame() { if (pos == 50) { clearInterval(id);} 
        else { pos++; myDiv.style.top = pos + 'px'; myDiv.style.left = 55 + 'px';}}
              
              if (aux==null){  
                if(bandera1==false){ if (bandera==true){alert("dato no encontrado");}}
                  clearInterval(intervalo);}
            };
        
        var intervalo = setInterval(fun,1000);
    }
        else{
            alert("Pila vacia"); 
        }
    }

    modificar(bus,valor){
    let aux = this.uno;
    var bandera=true;
    if (this.uno!=null){
        do{
        if (bus==aux.dato){
            console.log("mofificado: ");
            alert("modificado");
            aux.dato=valor;
            bandera=false;
            break;
        }
        aux=aux.post;
    }while(aux!=null);
    }

    if (bandera==true){alert("no encontrado"); console.log("no encontrado");}
    }

    modificar2(bus,valor){
        let aux = this.uno;
        var bandera=true;
        var bandera2=true;
        if (this.uno!=null){
            do{
                if (valor==aux.dato){
                    bandera2=false;
                    console.log(valor);
                    console.log(aux.dato);
                    alert("dato ya existe");
                    bandera=false;
                    break;}
                aux=aux.post;
            }while(aux!=null);

            if (bandera2==true){
                aux = this.uno;
                do{ 
                    if (bus==aux.dato){
                    console.log("mofificado: ");
                    alert("modificado");
                    aux.dato=valor;
                    bandera=false;}
            aux=aux.post;}while(aux!=null);
        }
        }
        
        if (bandera==true){alert("no encontrado"); console.log("no encontrado");}}


    imprimir(){
let aux = this.uno;
if (this.uno!=null){
    do{
        console.log(aux.dato);
        aux=aux.post;
        }while(aux!=null);

}
else{
    console.log("sin datos");
}


    }

  }

  module.exports = Pila;
  

  