/* Un objeto que representa a los obstaculos. Recibe un sprite que tendra la
imagen que lo representa y una potencia indicando cuando danio hace al chocar
al jugador, ademas de los parametros comunes x, y, ancho y alto*/
var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;
  this.chocar = function(){
    Jugador.perderVidas(this.potencia);
    this.potencia = 0;
  }
  
  // Implementar el metodo chocar(jugador) para que al chocar con un obstaculo
  // el jugador pierda vidas
}

var vidaExtra = function (sprite, x, y, ancho, alto, potencia){
  Obstaculo.call(this, sprite, x, y, ancho, alto, potencia);

}

vidaExtra.prototype = Object.create(Obstaculo.prototype);
vidaExtra.prototype.constructor = vidaExtra;

vidaExtra.prototype.desaparecer = function(){
  vidaExtra.sprite = '';
  vidaExtra.ancho = 0.1;
  vidaExtra.alto = 0.1;
}