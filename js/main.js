var cantidad;
var modelo;
var unidades;

function evaluar(tresymedio, torthon, trailer){
cantidad = $(".cantidad").val();
modelo = $(".modelo").val();
unidades = { tresymedio:0, torthon:0, trailer:0 };

  if ( modelo == "bt250" ) {
    if (cantidad > 0 && cantidad <= 60) {
      unidades.tresymedio += 1;
      console.log( "Camión: " + unidades.tresymedio);
      return(unidades.tresymedio);
    } else if (cantidad > 60 && cantidad <= 250) {
      unidades.torthon += 1;
      console.log("Torthon: " + unidades.torthon);
      return(unidades.torthon);
    } else if (cantidad > 250 && cantidad <= 680) {
      unidades.trailer += 1;
      console.log("Trailer: " + unidades.trailer);
      return(unidades.trailer);
    } else if (cantidad == 680) {
      unidades.trailer += 1;
      console.log("trailer: " + unidades.trailer);
      return(unidades.trailer);
    } else if (cantidad > 680 ) {
      var trailers = Math.floor(cantidad/680);
      unidades.trailers += trailers;
      var residuo = cantidad%680;

      if (residuo === 0) {
        console.log("Trailers: " + unidades.trailer);
        return(unidades.trailer);
      } else if (residuo > 0 && residuo <= 60) {
        console.log("Numero de trailers: " + unidades.trailer);
        unidades.tresymedio += 1;
        console.log("Camión: " + unidades.tresymedio);
        return(unidades.trailer + unidades.tresymedio);
      } else if (residuo > 60 && residuo <= 250) {
        console.log("Numero de trailers: " + unidades.trailer);
        unidades.torthon += 1;
        console.log("Torthon: " + unidades.torthon);
        return(unidades.torthon);
      } else if (residuo > 250) {
        trailers++;
        console.log("Numero de trailers: " + trailers);
        return(unidades.trailer);
      }
    } else {
      console.log("Introduce una cantidad valida");
    }
  } else if ( modelo == "bw250") {

  }

}

function show(){
  $("#resultado").html("3.5=" + evaluar(unidades.tresymedio) + "torthon="+ evaluar(unidades.torthon)+ "trailers="+ evaluar(unidades.trailer));
}
