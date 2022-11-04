           // OBJETOS
let libro = Number(prompt("elija un producto 1-libro1 2-libro2 3-libro3 4-libro4 5-libro5 6-libro6" ))
let cantidad = Number(prompt("elija la cantidad de productos"))
let total = 0
const libros =[]
class Libro{
    constructor(nombre,precio,stock,) {
        this.nombre=nombre;
        this.precio=parseFloat(precio);
        this.stock=stock;
        
        
    }
    mostrar(){
    total=total +(this.precio*cantidad)
    console.log("soy el produco: "+ this.nombre);
    console.log("valor por unidad; $"+ this.precio)
    console.log("cantidad de libros: "+ cantidad);
    console.log("total: $"+ total)
    }
}
     const libro1 = new Libro("libro1",1000,30,);
     const libro2 = new Libro("libro2",2000,20,);
     const libro3 = new Libro("libro3",3000,10,);
     const libro4 = new Libro("libro4",4000,70,);
     const libro5 = new Libro("libro5",5000,40,);
     const libro6 = new Libro("libro6",6000,33,);




if(libro==1 && cantidad<30){
    libro1.mostrar();
    libros.push(libro1);
   
}else if(libro==2 && cantidad<20){
libro2.mostrar();
libros.push(libro2);

}else if(libro==3 && cantidad<10){
libro3.mostrar();
libros.push(libro3);

}else if(libro==4 && cantidad<70){
libro4.mostrar();
libros.push(libro4);

}else if(libro==5 && cantidad<40){
libro5.mostrar();
libros.push(libro5);

}else if(libro==6 && cantidad<33){
libro6.mostrar();
libros.push(libro6);

}else{alert("opcion invalida supera el stock ")}

let contador=prompt("quiere agregar mas productos? 1-si 2-no")
if(contador==2){
cobrar()
}
while(contador==1) {
 productos = Number(prompt("elija un producto 1-libro1 2-libro2 3-libro3 4-libro4 5-libro5 6-libro6" ))
 cantidad = Number(prompt("elija la cantidad de productos que quiera agregar"))
switch(productos){
   case 1:                        //SWITCH
   total=total+libro1.precio*cantidad
   console.log("libro 1 :$"+ libro1.precio);
   console.log("cantidad de libros: "+ cantidad)
   console.log("total :$"+ libro1.precio*cantidad)
   libros.push(libro1);
   break;
   case 2:
      total=total+libro2.precio*cantidad
console.log("libro 2 :$"+ libro2.precio);
console.log("cantidad de libros: "+ cantidad)
console.log("total :$"+ libro2.precio*cantidad)
libros.push(libro2);
   break;
   case 3: 
   total=total+libro3.precio*cantidad       
console.log("libro 3 :$"+ libro3.precio);
console.log("cantidad de libros: "+ cantidad)
console.log("total :$"+ libro3.precio*cantidad)
libros.push(libro3);
   break;
   case 4:
      total=total+ libro4.precio*cantidad
console.log("libro 4 :$"+ libro4.precio);
console.log("cantidad de libros: "+ cantidad)
console.log("total :$"+  libro4.precio*cantidad)
libros.push(libro4);
   break;
   case 5:
      total=total+libro5.precio*cantidad
console.log("libro  5:$"+ libro5.precio);
console.log("cantidad de libros: "+ cantidad)
console.log("total :$"+ libro5.precio*cantidad)
libros.push(libro5);
   break;
   case 6:
      total=total+libro6.precio*cantidad
console.log("libro 6:$"+ libro6.precio);
console.log("cantidad de libros: "+ cantidad)
console.log("total :$"+ libro6.precio*cantidad)
libros.push(libro6);
   break;
   default:
       console.log("opcion invalida")  
}
contador=contador+0
contador=prompt("quiere agregar mas productos? 1-si 2-no")
if(contador==2){
   cobrar()
   }
}
function cobrar (){
let datosTarjeta=0
    let valorCuota=0
    // let totalTotal=total+total2
    let cuotas=0
console.log("total de la compra: $"+(total))
let pago= prompt("con que metodo desea pagar? tarjeta o transferencia")
if(pago=="tarjeta"){
let debOcred=prompt("debito o credito?")
if(debOcred== "credito"){
     cuotas = Number(prompt("cuantas cuotas? 3, 6 o 12"))
    if(cuotas==3) {
      valorCuota= total/cuotas
     console.log("3 cuotas de: $"+ valorCuota)
     datosTarjeta=Number(prompt("ingrese los 12 digitos de su tarjeta"))
     if(datosTarjeta.length=11){
        alert("tarjeta aprobada")
     }else{
        alert("tarjeta invalida")
     }
    }else if(cuotas==6){
             valorCuota= total/cuotas
     console.log("6 cuotas de: $"+ valorCuota)
     datosTarjeta=Number(prompt("ingrese los 12 digitos de su tarjeta"))
     if(datosTarjeta.length=11){
        alert("tarjeta aprobada")
     }else{
        alert("tarjeta invalida")
     }
    }else if(cuotas ==12){
             valorCuota= total/cuotas
     console.log("12 cuotas de: $"+ valorCuota)
     datosTarjeta=Number(prompt("ingrese los 12 digitos de su tarjeta"))
     if(datosTarjeta.length=11){
        alert("tarjeta aprobada")
       
     }else{
        alert("tarjeta invalida")
     }
    }else{
        alert("opcion invalida")
    }
}else if(debOcred=="debito"){
     datosTarjeta=Number(prompt("ingrese los 12 digitos de su tarjeta"))
     if(datosTarjeta.length=11){
        alert("tarjeta aprobada")
        
     }else{
        alert("tarjeta invalida")
     }
}else {
    alert("opcion invalida")
}
}else if(pago=="transferencia"){
alert("transferir al cbu 878775656455334")
console.log("trasnferir al cbu 878775656455334")
}else{
    alert("opcion incorrecta")
    
}
}
console.log(libros)