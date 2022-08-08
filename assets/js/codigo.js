cantidad = document.querySelector("#cantidad");
color = document.querySelector("#color");
precio = document.querySelector("#precio");

preciototal = document.querySelector("#preciototal")    
cantidadtotal = document.querySelector("#cantidadtotal")    
circulocolor = document.querySelector(".circulocolor")    

preciototal.innerHTML = Number(cantidad.value) * Number(precio.value);
cantidadtotal.innerHTML = cantidad.value;
circulocolor.style.backgroundColor=color.value;






















