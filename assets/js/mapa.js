// var $map = $('#map');
var  path, paths;
var map;
var plantilla = '<div class="col s12 m7">'+
        '<h3 class="header">__categoria__</h3>'+
        '<h5>__nombre__</h5>'+
        '<h6>__nombreEvento__</h6>'+
        '<div class="card horizontal">'+
            '<div class="card-image">'+
                '<img src="__foto__">'+
            '</div>'+
            '<div class="card-stacked">'+
                '<div class="card-content address" data-latitud="__latitudes__" data-longitud="__longitudes__">'+
                    '<strong>Direccion:</strong>__direccion__<br>'+
                    '<a href="#map">Ubicate</a>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';
var listaEventos =[
    {
        "categoria":"Teatro",
        "nombre": "Centro Cultural Teatro 2",
        "nombreEvento":"Oscura Sangre MACBETH",
        "foto": "https://goo.gl/1ouijb (542kB)

",
        "direccion": "Av Cuauhtémoc 19, Roma, Roma Nte., 06700 Hervidero y Plancha, CDMX",
        "latitudes": "19.4244592",
        "longitudes": "-99.1570654"

    },
];
    $(document).ready(function(){
    // var seccion = $('#seccion-eventos').click('mostrar');
    mostrarListas(listaEventos);
      map = new GMaps({
        el: '#map',
        lat: 19.4211655,
        lng: -99.165415
      });
      map.addMarker({
        lat: 19.4211655,
        lng: -99.165415,
        title: 'Tu ubicacion',
        infoWindow: {
          content: '<p>Cowdf</p>'
        }
      });
      map.addMarker({
        lat: 19.4211881,
        lng: -99.1719811,
        title: 'Museos',
        details: {
          lugar: 'precio',
          author: 'evento'
        },
        infoWindow: {
          content: '<p>Museo Histórico Judío y del Holocausto</p>'
        }
      });
        map.addMarker({
        lat: 19.4202347,
        lng: -99.1612649,
        title: 'Museos',
        details: {
          lugar: 'precio',
          author: 'evento'
        },
        infoWindow: {
          content: '<p>Museo del Objeto Del Objeto</p>'
        }
      });
        map.addMarker({
        lat: 19.4068957,
        lng: -99.171207,
        title: 'Auditorios',
        infoWindow: {
          content: '<p>Auditorio BlackBerry</p>'
        }
      });
        map.addMarker({
        lat: 19.4274567,
        lng: -99.171554,
        title: 'Cine',
        infoWindow: {
          content: '<p>Cinemex Reforma Casa del Arte</p>'
        }
      });
        map.addMarker({
        lat: 19.4274567,
        lng: -99.171554,
        title: 'Teatros',
        infoWindow: {
          content: '<p>El Plaza Condesa</p>'
        }
      });
        map.addMarker({
        lat: 19.4244642,
        lng: -99.1570654,
        title: 'Teatros',
        details: {
          lugar: 'precio',
          author: 'evento'
        },
        infoWindow: {
          content: '<p>Centro Cultural Teatro 2</p>'
        }
      });
});

var mostrarListas = function(listaEventos){
     // console.log(listaRestaurantes);
     var plantillaMostrar = "";
    //como parametro la unidad en este caso es restaurante es mi this
    listaEventos.forEach(function(eventos){
        plantillaMostrar += plantilla.replace('__categoria__',eventos.categoria)
                                     .replace('__nombre__',eventos.nombre)
                                     .replace('__nombreEvento__',eventos.nombreEvento)
                                     .replace('__foto__',eventos.foto)
                                     .replace('__direccion__',eventos.direccion)
                                     .replace('__latitudes__',eventos.latitudes)
                                     .replace('__longitudes__',eventos.longitudes);

    });                             
    $('#seccion-eventos').html(plantillaMostrar);
 }