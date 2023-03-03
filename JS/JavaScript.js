let helado = 200;
let topping;
let precio;
let precioFinal;

topping = "Oreo"

if(topping == "Oreo") {
    precio = 10;
} else if (topping == "KitKat") {
    precio = 15;
} else if (topping == "Kinder") {
    precio = 25;
} else {
    console.log("No tenemos este topping");
}

precioFinal = helado + precio;

console.log("El helado cuesta $" + precioFinal)







let Pedido = "verdura";

switch (Pedido) {
    case 'carne':
    console.log("Bebida-Vino Tinto");
    break;

    case 'pescado':
    console.log("Bebida-Vino Blanco");
    break;

    case 'verdura':
    console.log("Bebida-Agua")
    break;

    default:
    console.log("Eliga carne, pescado o verdura ")

}







let pedido = ["Carne", "Pescado", "Verdura"];

for (let i = 0; i < pedido.length; i++) {
    console.log(pedido[i]);
}

let Verdura = {
    nombre: "lechuga",
    color: "verde claro",
}

pedido.push(Verdura);

for (let i = 0; i < pedido.length; i++) {
    console.log(pedido[i]);
}






let numero = 10 ;

while (numero < 11) {
    console.log(numero + "es más chico que 11");
    numero++;
}
