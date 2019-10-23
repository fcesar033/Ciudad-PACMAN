/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/pacman-der.png',
  x: 130,
  y: 160,
  ancho: 20,
  alto: 20,
  velocidad: 10,
  vidas: 5,
  perderVidas: function(cantVidas){
    this.vidas -= cantVidas;
  },
  mover: function(movX,movY){
    this.x+=movX;
    this.y+=movY;

  }

  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

}
