class NodoDoble {
    constructor(dato = null){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
   }
}

class ListaDoble {
    constructor(){
        this.primero = null;
    }

    agregar_final(dato, repetidos){
        if(this.buscar(dato)==true && repetidos==false){
            console.log("YA EXISTE EL ELEMENTO EN LA LISTA")
        }else{
        const auxiliar = new NodoDoble(dato);
        if (this.primero == null){
            this.primero = auxiliar;
            this.primero.siguiente = null;
            this.primero.anterior = null;
        } else {
            var actual = this.primero;
            while(actual.siguiente != null){
                actual = actual.siguiente;
            }
            actual.siguiente = auxiliar;
            auxiliar.anterior = actual;
            auxiliar.siguiente = null;
        }
    }
    }

    agregar_inicio(dato, repetidos){
        if(this.buscar(dato)==true && repetidos==false){
            console.log("YA EXISTE EL ELEMENTO EN LA LISTA")
            //SINO SE PERMITEN REPETIDOS, AQUI HAY QUE MOSTRAR ERROR
        }else{
        const auxiliar = new NodoDoble(dato);
        if (this.primero == null){
            this.primero = auxiliar;
        } else {
            auxiliar.siguiente = this.primero;
            this.primero.anterior = auxiliar;
            this.primero = auxiliar;
        }
      }
    }

    eliminar(dato){
        if(this.buscar(dato)){
            if(this.primero.dato == dato){
                //si solo queda 1 elemento y hay que eliminarlo
                this.primero = this.primero.siguiente;
            }else{
                var actual = this.primero;
                while(actual.siguiente != null){
                    if(actual.siguiente.dato == dato){
                        actual.siguiente = actual.siguiente.siguiente;
                        actual.siguiente.anterior = actual;
                        break;
                    }
                    actual = actual.siguiente;
                }
            }
        }
    }

    buscar(dato){
        if(this.primero != null){
            for(let verificador = this.primero; verificador != null; verificador = verificador.siguiente){
                if (verificador.dato == dato){
                    return true;
                }
            }
        }
        return false;
    }

    actualizar(antiguo, nuevo, repetidos){
        if(this.buscar(antiguo)){
            //falta poner la condicion de analizar si
            //el nuevo valor ya esta, para ver si
            //se permite el ingreso de repetidos
            if(this.buscar(nuevo)==true && repetidos == false){
                console.log("No se permiten datos repetidos");
                console.log("el nuevo valor ya existe en la lista");
            }else{
            var actual = this.primero;
            while(actual != null){
                if (actual.dato == antiguo){
                    actual.dato = nuevo;
                    console.log("AQUI DEBO SALIRME PORQUE YA LO CAMBIE");
                    break;
                    //actualizar solo el primero que coincida
                }
                actual = actual.siguiente;
                }
        }
    }else{
        console.log("No se encontro ese valor en la lista");
        //elemento no encontrado para actualizarse
    }
}

    imprimir(){
        if(this.primero != null){
            var info = "";
            for(let verificador = this.primero; verificador != null; verificador = verificador.siguiente){
                info = verificador.dato;
                console.log(info);
            }
        }else{
            console.log("LISTA VACIA");
        }
    }

}

