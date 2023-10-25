let registros =[];
let contador =0;
console.log(contador)
document.getElementById("contador").value=registros.length+1;

const enviar = document.getElementById("enviar");
enviar.addEventListener("click", ()=>{
    
validar();
});

function validar(){
    contador= registros.length+1;
    console.log(contador);
    let id = document.getElementById("contador").value=registros.length+1;
    let producto = document.getElementById("producto").value;
    let cantidad =document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;
    if(producto==""||cantidad==""|| precio==""){
        swal('Todos los datos requieren ser llenados','','error');
    }else{
        let datos ={
            No:id,
            Producto:producto,
            Cantidad:cantidad,
            Precio:precio
        }       
        registros.push(datos);
        console.log(registros);
        producto=="";
        cantidad=="";
        precio=="";
        registrar();
        
    }
}

function registrar(){
    let result = document.getElementById("registros");
    let parametro = registros.length-1;
    result.innerHTML=
    `<div class="container">
    <h3 class="text-center">Registro Numero ${registros[registros.length-1].No}</h3>
    <div class="row">
    <div class= "col-6 producto">
    Producto: ${registros[registros.length-1].Producto}<br>
    Cantidad: ${registros[registros.length-1].Cantidad}<br>
    Precio: ${registros[registros.length-1].Precio}<br>
    <button id="anterior" onclick="anterior()">Anterior</button>
    <button id="siguiente" onclick="siguiente()">Siguiente</button>
    </div>
    <div class="col-6">
    <button class="botones" id="eliminar" onclick="eliminar(${parametro})">Eliminar</button>
    <button class="botones" id="editar" onclick="editar()">Editar</button>
    </div>`
}

function anterior(){
    contador--;
    if(contador===-1){
        swal('no hay mas registros')
        contador=1
    }else{
        let result = document.getElementById("registros");
        result.innerHTML=
        `<div class="container">
        <h3 class="text-center">Registro Numero ${registros[contador].No}</h3>
        <div class="row">
        <div class= "col-6 producto">
        Producto: ${registros[contador].Producto}<br>
        Cantidad: ${registros[contador].Cantidad}<br>
        Precio: ${registros[contador].Precio}<br>
        <button id="anterior" onclick="anterior()">Anterior</button>
        <button id="siguiente" onclick="siguiente()">Siguiente</button>
        </div>
        <div class="col-6">
        <button class="botones" id="eliminar" onclick="eliminar()">Eliminar</button>
        <button class="botones" id="editar" onclick="editar()">Editar</button>
        </div>`;
        console.log(contador);
    }
}
    function siguiente(){
        contador++;
        if(contador >= registros.length){
            swal('ya no hay mas registros');
            console.log(contador)
            contador=registros.length-1;
        }else{
       let result = document.getElementById("registros");
        result.innerHTML=
        `<div class="container">
        <h3 class="text-center">Registro Numero ${registros[contador].No}</h3>
        <div class="row">
        <div class= "col-6 producto">
        Producto: ${registros[contador].Producto}<br>
        Cantidad: ${registros[contador].Cantidad}<br>
        Precio: ${registros[contador].Precio}<br>
        <button id="anterior" onclick="anterior()">Anterior</button>
        <button id="siguiente" onclick="siguiente()">Siguiente</button>
        </div>
        <div class="col-6">
        <button class="botones" id="eliminar" onclick="eliminar()">Eliminar</button>
        <button class="botones" id="editar" onclick="editar()">Editar</button>
        </div>`;
        console.log(contador)
        }   
    }
function eliminar(id){
   let eliminados =registros.splice(id,1);
   registros=eliminados;
   console.log(eliminados)
}
