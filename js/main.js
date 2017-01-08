
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

var envio = [{
  estado:'chiapas',
  destino:{
    san_cristobal:{
      truck:22200,
      torthon:26400,
      trailer:28100
    },
    tuxtla_gutierrez:{
      truck:22200,
      torthon:26400,
      trailer:28100
    },
    comitan:{
      truck:22800,
      torthon:27300,
      trailer:28600
    },
    tapachula:{
      truck:25600,
      torthon:2800,
      trailer:30200
    },
    ocostingo:{
      truck:26800,
      torthon:28000,
      trailer:30200
    }
  }
},{
  estado:'michoacan',
  destino:{
    morelia:{
      truck:11200,
      torthon:12900,
      trailer:15900
    },
    uruapan:{
      truck:12600,
      torthon:13500,
      trailer:1700
    }
  }
},{
  estado:'oaxaca',
  destino:{
    oaxaca:{
      truck:14700,
      torthon:15900,
      trailer:22200
    },
    salina_cruz:{
      truck:18200,
      torthon:18600,
      trailer:23400
    }
  }
},{
  estado:'sinaloa',
  destino:{
    mazatlan:{
      truck:22300,
      torthon:25300,
      trailer:31100
    }
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
  console.log("--- " + envio[0].estado + envio[0].destino.san_cristobal.truck);
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

// function fillSelect2(){
//   var estado_selected = $("#estado").val();
//   for (var i = 0; i < envio.length; i++) {
//     if (envio[i].estado == estado_selected) {
//       console.log(envio[i].destino.);
//     }
//   }
//   var destino_actual = envio.estado_selected;
//   console.log(estado_selected + " - " + destino_actual + "*");
// }

function show(){
  $("#resultado").html("Camioneta 3.5 ton: " + units.truck + " Torthon: "+ units.torthon + " Trailer: " + units.trailer);
}
