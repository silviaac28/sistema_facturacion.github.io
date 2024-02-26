
const listaClientes=[];

'---Con esto se crean 10 clientes aleatorios usando la libreria faker y luego se anade cada cliente a la lista listaClientes-----'
const cargarClientes=()=>{   
    for(let i=0;i<=10;i++){
        const nuevoCliente={
            id:i,
            nombre:faker.name.findName(),
            edad: Math.floor(Math.random*30)+18,
            email: faker.internet.email()
        };
        listaClientes.push(nuevoCliente);
    }    
}

'---Con esto se crea el formulario que pide los datos para crear nuevos clientes-----'
'---Tambien se estan anadiendo 2 botones, uno para crear nuevo cliente y otro para ver listado-----'
const cargarFormularioClientes=()=>{
      const clientesForm = document.getElementById('clientes-form');
      clientesForm.innerHTML = `
        <form>
            <label for="nombreCliente">Nombre del Cliente:</label>
            <input type="text" id="nombreCliente" required>
            <label for="edadCliente">Edad del Cliente:</label>
            <input type="number" id="edadCliente" required>
            <label for="emailCliente">Correo Electrónico del Cliente:</label>
            <input type="email" id="emailCliente" required>
            <button type="button" onclick="crearCliente()">Crear Cliente</button>
            <button type="button" onclick="mostrarListado()">Ver Listado de Clientes</button>
            <!-- Aquí se puede añadir más funcionalidad, como modificar y eliminar clientes -->
        </form>
    `;
    const listadoClientes = document.getElementById('listado-clientes');
    listadoClientes.style.display='none';  '---Con esto oculta el listado de clientes en la pag----'
}

'---Con esta funcion se toma los valores introducidos en el formulario clientes, se crea el objeto nuevo cliente y se guarda en la listaclientes-----'
const crearCliente=()=>{
    const nombreInput=document.getElementById('nombreCliente');
    const edadInput=document.getElementById('edadCliente');
    const emailInput=document.getElementById('emailCliente');

    const nombre=nombreInput.value;
    const edad=edadInput.value;
    const email=emailInput.value;

    const nuevoCliente={
        id:listaClientes.length+1,
        nombre:nombre,
        edad: edad,
        email: email
    }

    listaClientes.push(nuevoCliente);

    '---Con esto se limpian los datos del formulario crear cliente-----'

    nombreInput.value='';
    edadInput.value='';
    emailInput.value='';

    alert('Cliente creado con éxito!');
    
    actulizarClientesEnFacturas();

    return nuevoCliente;

}

'---Con esto se visualizan los clientes existentes-----'
const mostrarListado=()=>{
    const clientesForm = document.getElementById('clientes-form');
    const listadoClientes = document.getElementById('listado-clientes');
    
    clientesForm.style.display='none';
    listadoClientes.style.display='block';

    '---Con esto se crea una lista desordenada para almacenar ahi los clientes-----'
    const ul=document.createElement('ul');

    '---Para cada cliente existente se crea un elemento li-----'
    for(const cliente of listaClientes){
        const li=document.createElement('li');
        li.textContent= `ID: ${cliente.id}, Nombre: ${cliente.nombre}, Edad: ${cliente.edad}, Email: ${cliente.email}`;
        ul.appendChild(li);
    }

    listadoClientes.innerHTML='';
    listadoClientes.appendChild(ul);

    '---Con esto se crea el boton para volver al formulario-----'
    const volverButton=document.createElement('button');
    volverButton.textContent='Volver al Formulario';
    volverButton.addEventListener('click',volverFormulario);
    listadoClientes.appendChild(volverButton);
    
}

'---Con esto se llama al formulario de crear cliente vacio, y se oculta el listado de clientes existentes-----'
const volverFormulario=()=>{
    const clientesForm=document.getElementById('clientes-form');
    const listadoClientes = document.getElementById('listado-clientes');

    listadoClientes.style.display='none';
    clientesForm.style.display='block';
    
}




console.log(listaClientes);