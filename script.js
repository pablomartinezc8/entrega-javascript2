const shopContent = document.getElementById("shopContent")
const verCarrito=document.getElementById("verCarrito")
const modalContainer=document.getElementById("modal-container")
let cantidad=0
const productos=[
   {
   cantidad:0,
   id:1,
   nombre:"libro1",
   precio: 1000,
   img: "https://res.cloudinary.com/dur9hgubk/image/upload/v1666292525/proyectoFinal/149303297f0928113fecfea5d8314ed0_hh86ar.webp"
   },
   {
      cantidad:0,
      id:2,
   nombre:"libro2",
   precio: 2000,
   img: "https://res.cloudinary.com/dur9hgubk/image/upload/v1666292060/proyectoFinal/eff19435e8d8fac15d6e38be0561e23c_mnhiat.jpg"
     
   },
   {
      cantidad:0,
      id:3,
      nombre:"libro3",
      precio: 3000,
      img: "https://res.cloudinary.com/dur9hgubk/image/upload/v1666292058/proyectoFinal/9788473565134-es_iqttuz.jpg"
   },
   {
      cantidad:0,
      id:4,
      nombre:"libro4",
      precio: 4000,
      img: "https://res.cloudinary.com/dur9hgubk/image/upload/v1666292055/proyectoFinal/978607174058_sufvoy.jpg"
   },
   {
      cantidad:0,
      id:5,
      nombre:"libro5",
      precio: 5000,
      img:"https://res.cloudinary.com/dur9hgubk/image/upload/v1666292054/proyectoFinal/1586923845_qi6fxj.webp"
   },
   {
      cantidad:0,
      id:6,
      nombre:"libro6",
      precio: 6000,
      img:"https://res.cloudinary.com/dur9hgubk/image/upload/v1666292052/proyectoFinal/768c6835ef88e2fb91c1a72ac2411e6f_msma8k.png"
   },
];
const carrito=[];
productos.forEach((product)=>{
   let content = document.createElement("div");
   content.className="card"
content.innerHTML = `

<img src="${product.img}">
<h3>${product.nombre }</h3>
<p class="parrafo">${"$"+product.precio}</p>
`;
shopContent.append(content);

let comprar=document.createElement("button");
comprar.innerText="comprar";
comprar.className="comprar";
content.append(comprar);

comprar.addEventListener("click", () =>{
   product.cantidad=product.cantidad+1;
   carrito.push({
      cantidad:product.cantidad,
      id: product.id,
      img:product.img,
      nombre:product.nombre,
      precio:product.precio,

   });
 
});
});

verCarrito.addEventListener("click",()=>{
   modalContainer.innerHTML="";
   
   modalContainer.style.display="flex"; 
   const modalHeader= document.createElement("div");
   modalHeader.className="modal-header";
   modalHeader.innerHTML=`
   <h1 class="modal-header-title">carrito.</h1>
   `;
modalContainer.append(modalHeader);

const modalbutton= document.createElement("h1");
modalbutton.className="modal-header-button";
modalbutton.innerText="x";

modalbutton.addEventListener("click",() =>{
   modalContainer.style.display="none"
});

modalHeader.append(modalbutton);

carrito.forEach((product)=>{
   console.log("se agrego: "+product.nombre);
   let carritoContent=document.createElement("div");
   carritoContent.className="modal-content";
   carritoContent.innerHTML=`
   <img src="${product.img}">
<h3>${product.nombre }</h3>
<p>${product.cantidad}</p>
<p>${"$"+product.precio}</p>
   `
   const carritoJSON = JSON.stringify(carrito);
   localStorage.setItem("productos", carritoJSON);
   const usuarioEnls = JSON.parse(localStorage.getItem("carrito"));
   console.log(carrito);
   modalContainer.append(carritoContent);
});
const total= carrito.reduce((acc,el)=>acc + el.precio,0);
const totalBuying=document.createElement("div");
totalBuying.className="total-content";
totalBuying.innerHTML=`total a pagar: ${total}$
`
modalContainer.append(totalBuying);

const pagarbutton= document.createElement("h1");
pagarbutton.className="modal-pagar-button";
pagarbutton.innerText="pagar";

pagarbutton.addEventListener("click",() =>{
   const pagando=document.createElement("div");
   pagando.className="pagandoClass"
   pagando.innerHTML=`
   <h1>ingresar los 12 digitos de la tarjeta</h1>
   <div class="input-group1 mb-3">
  <input type="text" class="form-control" aria-label="Text input with checkbox">
</div>
<h1>ingresar codigo de seguridad</h1>
<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with radio button">
</div>
`;

   modalContainer.append(pagando);
   const finalizando=document.createElement("h1");
finalizando.className="finalVenta"
finalizando.innerHTML="terminar"
finalizando.addEventListener("click",()=>{
   Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'su pago fue realizado',
      showConfirmButton: false,
      timer: 1500
    });
   
   

});
modalContainer.append(finalizando);
   
});

modalContainer.append(pagarbutton);
});
