
function gradosARadianes(grados) {
    return grados * (Math.PI / 180);
  }
  
  function radianesAGrados(radianes) {
    return radianes * (180 / Math.PI);
  }
  
  
  let conversion = prompt("¿Qué querés convertir? Escribí 'grados' o 'radianes'").toLowerCase();
  
  
  if (conversion === "grados") {
    const grados = parseFloat(prompt("Ingresá el valor en grados:"));
    const radianes = gradosARadianes(grados);
    alert(`${grados} grados = ${radianes.toFixed(4)} radianes`);
  } else if (conversion === "radianes") {
    const radianes = parseFloat(prompt("Ingresá el valor en radianes:"));
    const grados = radianesAGrados(radianes);
    alert(`${radianes} radianes = ${grados.toFixed(4)} grados`);
  } else {
    alert("Opción incorrecta. Escribí 'grados' o 'radianes'.");
  }
  