var modelos = [{
    code:'BT250',
    unit:{
      trailer:680,
      torthon:250,
      truck:60
    },
    precios:{
      60:2648,
      99:2229,
      249:2104,
      499:1872,
      999:1783,
      1000:1747
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
  destino:[
    {
      name:'san cristobal',
      truck:22200,
      torthon:26400,
      trailer:28100
    },
    {
      name:'tuxtla gutierrez',
      truck:22200,
      torthon:26400,
      trailer:28100
    },
    {
      name:'comitan',
      truck:22800,
      torthon:27300,
      trailer:28600
    },
    {
      name:'tapachula',
      truck:25600,
      torthon:28000,
      trailer:30200
    },
    {
      name:'ocostingo',
      truck:26800,
      torthon:28000,
      trailer:30200
    }
  ]
},{
    estado: 'michoacan',
    destino: [
      {
        name:'morelia',
        truck: 11200,
        torthon: 12900,
        trailer: 15900
      },
      {
        name:'uruapan',
        truck: 12600,
        torthon: 13500,
        trailer: 17000
      }
    ]
  },
  {
    estado: 'oaxaca',
    destino:[
        {
            name: 'oaxaca',
            truck: 14700,
            torthon: 15900,
            trailer: 22200
        },
        {
            name: 'salina cruz',
            truck: 18200,
            torthon: 18600,
            trailer: 23400
        }
    ]
}, {
    estado: 'sinaloa',
    destino:[
      {
        name:'mazatlan',
        truck: 22300,
        torthon: 25300,
        trailer: 31100
      },{
        name: 'culiacan',
        truck: 25300,
        torthon: 26800,
        trailer: 32900
      },{
        name: 'guamuchil',
        truck: 29400,
        torthon: 31100,
        trailer: 36400
      },{
        name: 'guasave',
        truck: 29400,
        torthon: 31100,
        trailer: 36400
      },{
        name: 'los mochis',
        truck: 29400,
        torthon: 31100,
        trailer: 36400
      }
    ]
  },{
    estado: 'sonora',
    destino: [
      {
        name: 'novojoa',
        truck: 32900,
        torthon: 35000,
        trailer: 42300
      },{
        name: 'cd. obregon',
        truck: 32900,
        torthon: 35000,
        trailer: 42300
      },{
        name: 'guayamas',
        truck: 37600,
        torthon: 40000,
        trailer: 45800
      },{
        name: 'hermosillo',
        truck: 35800,
        torthon: 40000,
        trailer: 45800
      },{
        name: 'agua prieta',
        truck: 41100,
        torthon: 46400,
        trailer: 64600
      },{
        name: 'santa ana',
        truck: 48200,
        torthon: 49900,
        trailer: 68200
      },{
        name: 's.l. rio colorado',
        truck: 48200,
        torthon: 49900,
        trailer: 68200
      }
    ]
  },{
    estado: 'tabasco',
    destino:[
      {
        name: 'villa hermosa',
        truck: 17900,
        torthon: 20600,
        trailer: 24100
      }
    ]
  },{
    estado: 'veracruz',
    destino:[
      {
        name: 'cordoba',
        truck: 10300,
        torthon: 11400,
        trailer: 15200
      },{
        name: 'florentin de las flores',
        truck: 10500,
        torthon: 11400,
        trailer: 15200
      },{
        name: 'naranjos',
        truck: 10500,
        torthon: 11400,
        trailer: 15200
      },{
        name: 'poza rica',
        truck: 10500,
        torthon: 11400,
        trailer: 15200
      },{
        name: 'tuxpan',
        truck: 10500,
        torthon: 11400,
        trailer: 15200
      },{
        name: 'xalapa',
        truck: 10000,
        torthon: 11400,
        trailer: 15500
      },{
        name: 'veracruz',
        truck: 11000,
        torthon: 14000,
        trailer: 15500
      },{
        name: 'boca del rio',
        truck: 11600,
        torthon: 14000,
        trailer: 15500
      },{
        name: 'coatzacoalcos',
        truck: 13500,
        torthon: 15000,
        trailer: 17600
      },{
        name: 'minatitlan',
        truck: 13500,
        torthon: 15000,
        trailer: 17600
      }
    ]
  },{
    estado: 'zacatecas',
    destino: [
      {
        name: 'zacatecas',
        truck: 12900,
        trothon: 14000,
        trailer: 17000
      },{
        name: 'fresnillo',
        truck: 14000,
        torthon: 15200,
        trailer: 18400
      }
    ]
  }
];

var maniobras = [{
  nivel: 0,
    truck: 900,
    torthon: 2100,
    trailer: 2700
},{
  nivel: 1,
    truck: 1400,
    torthon: 2700,
    trailer: 3300
},{
  nivel: 2,
    truck: 1900,
    torthon: 3100,
    trailer: 4000
}
];

for (var j = 0; j < envio.length; j++) {
  $('#estado').append($('<option>',{
    value:j,
    text:envio[j].estado
  }));
}

function fillOther(){
  var valorestado = $('#estado').val();
  $('#destino').empty();
  for (var k = 0; k < envio[valorestado].destino.length; k++) {
    $('#destino').append($('<option>',{
      value:k,
      text:envio[valorestado].destino[k].name
    }));
  }
}

fillOther();

var settings = {
  modelo:'',
  cantidad:0,
  estado:'',
  destino:'',
  maniobras:0
};

var units = {
  truck:0,
  torthon:0,
  trailer:0
};

var costo_envio;
var costo_maniobras;
var costo_total;

function x(){
  units = {
    truck:0,
    torthon:0,
    trailer:0
  };

  settings.modelo = $('#modelo').val();
  settings.cantidad = $('#cantidad').val();
  settings.estado = $('#estado').val();
  settings.destino = $('#destino').val();
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
  // console.log(" ggg "+envio[$('#estado').val()].destino[$('#destino').val()].truck+" ");
  costo1();
  costo2();
  total();
  formato();
  show();
  costo_butacas();
}

function costo_butacas(){
  console.log('* ' + modelos.precios[1]);
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

function costo1(estado, destino, obj){
  costo_envio = 0;
  // console.log("x - " + settings.units + estado + destino + obj + destino + envio[0].destino[0].truck);
  // console.log("||- "+envio[$('#estado').val()].destino[$('#destino').val()].torthon+" ");
  if (units.truck > 0) {
    costo_envio = costo_envio + envio[$('#estado').val()].destino[$('#destino').val()].truck * units.truck;
  }
  if (units.torthon > 0) {
    costo_envio = costo_envio + envio[$('#estado').val()].destino[$('#destino').val()].torthon * units.torthon;
  }
  if (units.trailer > 0) {
    costo_envio = costo_envio + envio[$('#estado').val()].destino[$('#destino').val()].trailer * units.trailer;
  }
  console.log('truck' + envio[$('#estado').val()].destino[$('#destino').val()].truck);
  console.log('torthon' + envio[$('#estado').val()].destino[$('#destino').val()].torthon);
  console.log('trailer' + envio[$('#estado').val()].destino[$('#destino').val()].trailer);
  console.log(" envio = " + costo_envio);
}

function costo2(){
  costo_maniobras = 0;
  if (units.truck > 0) {
    costo_maniobras = costo_maniobras + maniobras[$('#maniobras').val()].truck * units.truck;
  }
  if (units.torthon > 0) {
    costo_maniobras = costo_maniobras + maniobras[$('#maniobras').val()].torthon * units.torthon;
  }
  if (units.trailer > 0) {
    costo_maniobras = costo_maniobras + maniobras[$('#maniobras').val()].trailer * units.trailer;
  }
  console.log( ' maniobras = ' + costo_maniobras);
  // console.log(maniobras[$('#maniobras').val()].trailer);
}

function total(){
  costo_total = costo_envio + costo_maniobras;
}

var enviochido;
var maniobraschido;
var totalchido;

function formato(){
  enviochido = numeral(costo_envio).format('$0,0.00');
  maniobraschido = numeral(costo_maniobras).format('$0,0.00');
  totalchido = numeral(costo_total).format('$0,0.00');
}

function show(){
  $("#unidades").html("Truck: " + units.truck + " Torthon: "+ units.torthon + " Trailer: " + units.trailer );
  $("#costoenvio").html(" Envio = " + enviochido);
  $("#costomaniobras").html(" Maniobras = " + maniobraschido);
  $('#costototal').html('Total = ' + totalchido);
}
