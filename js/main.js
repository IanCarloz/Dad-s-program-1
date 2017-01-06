
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
  // var models = [];
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
  $("#resultado").html("Camión: " + units.truck + " Torthon: "+ units.torthon + " Trailer: " + units.trailer);
}
