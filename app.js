let amigos = [];//crea array "amigos" vacio

function agregarAmigo() {//crea funcion para agregar amigo a array
    const nombre = document.getElementById('amigo').value.trim();//crea constante "nombre" que contendra el input registrado por usuario en campo "escribir nombre". esde allí con metodo "document" se accede al html y con metodo .getElementById se busca el elemento con identificador (ID) 'amigo' (el cual corresponde al input), y con metodo .value obtiene el input como tal y con metodo .trim se eliminan espacios en blanco al inicio y al final
    if (!nombre) return alert("Por favor, ingresa un nombre válido.");//la condicion IF (si) comprueba si valor de const nombre esta o no vacio. Si esta vacio retorna a usuario alerta. Si no esta vacio pasa a la siguiente linea de codigo
    amigos.push(nombre);//condicion IF no cumplida (contenido de nombre valido), entonces con metodo .push se agrega el contenido de constante nombre a aaray amigos
    document.getElementById('amigo').value = "";//Despues, con metodo "document" se accede al html. Con .getElementById se obtiene el elemento con identificador (ID) 'amigo' y con .value se asigna al ID cadena vacia ("") para que el usuario vea el campo de input vacio
    mostrarListaAmigos();//se convoca a funcion mostrarListaAmigos que muestra el array completo existente hasta ese momento
    
    function mostrarListaAmigos() {//crea funcion mostrarListaAmigos y define como opera
        document.getElementById('listaAmigos').innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');//Con document se accede al html, con .getElementById se busca en html elemento con id "listaAmigos". Luego con .innerHTML se modifica contenido html del elemento "listaAmigos" que corresponde al array amigos, y con el metodo de array llamado .map() se recorre cada elemento "amigo" (de html) y con "funcion flecha" (=>) que hace las veces de concatenado se devuelve nueva lista de elementos (<li>) que contiene en la cadena de plantilla ${} el elemento amigo. Finalmente el metodo .join('') convierte el array resultante en una sola cadena de texto sin comas.
    }
}

function sortearAmigo() {//crea funcion sortear amigo al azar desde el array
    if (!amigos.length) return alert("No hay amigos en la lista para sortear.");//la condicion IF (si) comprueba si hay amigos en la lista, a traves de la revision del largo del array amigos, donde metodo .length indica en largo/cantidad de "amigos" dentro del array, y si es 0 con operador !amigos lo inerpreta como vacio, entonces retorna a usuario alerta. Si no esta vacio (si hay amigos en la lista) pasa a la siguiente linea de codigo
    mostrarResultado(amigos[Math.floor(Math.random() * amigos.length)]);//declara funcion anidada mostrarResultado, en el que se multiplica la cantidad de nombres del array amigos (amigo.length) con numero decimal aleatorio entre 0 y 1 generado con metodo Math.random, obteniendo un numero indice. Luego el indice obtenido (que es decimal) con metodo Math.floor es redondeado hacia el numero entero inmediatamente inferior al decimal (ej: 2.34 -> 2) y asi el índice queda como numero entero, el cual corresponde al numero de elemento del array que es elegido como sorteado
    function mostrarResultado(amigo) {//convoca funcion mostrarListaAmigos con parámetro "amigo" que correspondería al elemento seleccionado del array amigos
        document.getElementById('resultado').innerHTML = `¡El amigo secreto es: <strong>${amigo}</strong>!`;//Con document se accede al html buscando con .getElementById elemento con id "resultado". Luego con .innerHTML se modifica contenido html del elemento con texto plano, y usando cadena de plantilla ${} se muestra el elemento el arreglo amigos elegido
    }
}
