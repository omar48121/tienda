let nombres =[
    {name: "Juan", lastname: "Perez"},
    {name: "Maria", lastname: "Gonzalez"},
    {name: "Jose", lastname: "Sanchez"},
    {name: "Ana", lastname: "Rodriguez"},
    {name: "Carlos", lastname: "Martinez"},
    {name: "Luisa", lastname: "Alvarez"},
    {name: "Marcos", lastname: "Cruz"},
    {name: "Antonio", lastname: "Torres"},
    {name: "Natalia", lastname: "Hernandez"}
];

var info = document.getElementById("informacion");

for (let index = 0; index < nombres.length; index++) {
    info.innerHTML+= 'nombres: '+ nombres[index].name+' apellidos: '+nombres[index].lastname+'<br><br>'
}
function eliminar(){
    const eliminados = nombres.splice(1);
    for (let index = 0; index < nombres.length; index++) {
        this.info.innerHTML+= 'nombres: '+ nombres[index].name+' apellidos: '+nombres[index].lastname+'<br><br>'
    }   
}