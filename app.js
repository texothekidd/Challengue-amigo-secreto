// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo= [];




function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo'); //variable para capturar lo que es digitado en el campo de texto
    let nombreAmigo = inputAmigo.value;  //para que muestre y guarde el valor que digito

    if(!nombreAmigo) {   //sino (!) tengo registro de un amigo
        alert("Debes ingresar un nombre");  //alerta que debe ingresar un nombre
        return; // el sistema para la ejecución del siguiente codigo
    
    }

    amigo.push(nombreAmigo); //agregar a la lista al amigo
    inputAmigo.value = "";  //limpiar el campo de texto
    inputAmigo.focus();              //sirve para que luego de limpiar, quede listo para volver a escribir sin pinchar con el mouse
    renderizarAmigos();
};

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";   //limpiar la lista de amigos

    for (let i = 0; i < amigo.length; i++) {     //mientras el indice que es 
                                                 //cero sea mejor que el tamaño de mi array amigo incrementa el indice en 1 y realiza lo que te indicare en el siguiente bloque
         let item = document.createElement("li");  //crear una lista dinamica y no fija en html
         item.textContent = amigo[i];       //el indice es el numero que le da el pc a cada amigo en un array
          listaAmigos.appendChild(item);   
   
        }

}

function sortearAmigo() {

   if(amigo.length === 0) {  //comparacion extricta, tipo y valor igual. Si array es extrictamente igual a cero, debe decir que no hay amigos
      alert("No hay amigos para sortear");
      return;

   }

   let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)]; 
   let resultado = document.getElementById ("resultado");
   resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`; 

   let limpiarLista = document.getElementById("listaAmigos");
   limpiarLista.innerHTML = "";

}