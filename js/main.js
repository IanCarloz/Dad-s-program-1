/*

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
}*/

var modelos = [{
    code:'BT250',
    unit:{
      trailer:680,
      torthon:250,
      truck:60
    }
  },{
    code:'BW250',
    unit:{
      trailer:620,
      torthon:240,
      truck:60
    }
  },{
    code:'SP250',
    unit:{
      trailer:550,
      torthon:210,
      truck:52
    }
  },{
    code:'BQ700',
    unit:{
      trailer:850,
      torthon:450,
      truck:115
    }
  },{
    code:'BY360',
    unit:{
      trailer:450,
      torthon:200,
      truck:50
    }
  },{
    code:'S150(HS)',
    unit:{
      trailer:1650,
      torthon:600,
      truck:150
    }
  }
];

var settings = {
  modelo:'',
  cantidad:0,
  estado:'',
  maniobras:0
};

var units = {
  truck:0,
  torthon:0,
  trailer:0
};

function x(){
  units = {
    truck:0,
    torthon:0,
    trailer:0
  };
  settings.modelo = $('#modelo').val();
  settings.estado = $('#estado').val();
  settings.cantidad = $('#cantidad').val();
  settings.maniobras = $('#maniobras').val();
  console.log(settings);
}

function ggg(){
  x();
  var models = [];
  for (var i = 0; i < modelos.length; i++) {
    if (modelos[i].code == settings.modelo){
      getUnits(settings.cantidad,modelos[i]);
      break;
    }
  }
  console.log(units);
  show();
}

function getUnits(cantidad, obj){
  console.log(obj.unit.trailer);
  if (cantidad/obj.unit.trailer <= 1) {
    compare(cantidad,obj);
  }else{
    units.trailer = Math.floor(cantidad/obj.unit.trailer);
    if (cantidad % obj.unit.trailer > 0) {
      var residuo = cantidad % obj.unit.trailer;
      compare(residuo,obj);
    }
  }
}

function compare(cantidad, obj){
  console.log('compare1',obj);
  console.log('compare2',cantidad);

  if (cantidad <= obj.unit.truck && cantidad > 0) {
    units.truck = units.truck + 1;
  }else if (cantidad <= obj.unit.torthon && cantidad > obj.unit.truck) {
    units.torthon = units.torthon + 1;
  }else if (cantidad <= obj.unit.trailer && cantidad > obj.unit.torthon) {
    units.trailer = units.trailer + 1;
  }
}



function show(){
  $("#resultado").html("Camión: " + units.truck + "Torthon: "+ units.torthon + "Trailer: " + units.trailer);
}
