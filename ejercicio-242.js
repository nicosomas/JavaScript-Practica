const calculo = prompt("¿Cual queres resolver? Ingresá Y, W o Z").toUpperCase();

let a = prompt("Ingresar valor de A")
let b = prompt("Ingresar valor de B")


function calcularY(a, b) {
    const Y = (3 * (a ** 2)) / ((b ** 2) * Math.sqrt(2 * a));
    return Y;
  }
  
  function calcularW(a, b) {
    const a2 = a ** 2;
    const b2 = b ** 2;
    const raiz2a = Math.sqrt(2 * a);
    const raizA = Math.sqrt(a);
    const W = (4 * raiz2a * a * ((3 * a2 * b2) - raiz2a)) / (12 * raizA);
    return W;
  }
  
  function calcularZ(a, b) {
    const raizA = Math.sqrt(a);
    const bPotencia = Math.pow(b, 3 / 4);
    const Z = (12 * raizA) / bPotencia;
    return Z;
  }
  
  if (a > 0 && b !== 0) {
    if (calculo === "Y") {
      console.log("Y =", calcularY(a, b));
    } else if (calculo === "W") {
      console.log("W =", calcularW(a, b));
    } else if (calculo === "Z") {
      console.log("Z =", calcularZ(a, b));
    } else {
      console.log("Opción inválida. Elegí Y, W o Z.");
    }
  } else {
    console.log("Error: A debe ser mayor que 0 y B distinto de 0.");
  }
  


  

