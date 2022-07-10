
class A {
  _a;
  _b;
  constructor(a,b) {
    this._a = a;
    this._b = b;    
  };

  greatA() {
    return this._a;
  }
}

function B(a,b) {
    this.a = a;
    this.b = b;
}
B.prototype.greatB = function () {
  return this.a + this.b;
};
B.greatB1 = function () {
  return 'greatB1';
}

function D(a,b) {
  this.a = a;
  this.b = b;
  function greatD() { //takie funkcje nie są dostępne z zewnątrz
    return this.a + this.b;
  }
}

function E(a,b) {
  this.a = a;
  this.b = b;
  greatE = function() { //takie funkcje nie są dostępne z zewnątrz
    return this.a + this.b;
  }
}


C = { //to jest obiekt - nie definicja klasy
  constructor(a,b) {
    this.a = a;
    this.b = b;
  },
  greatC: () => {
    return this.a + this.b;
  }
}
// let obj = new D(3,5);
// console.log(obj.greatD());
let obj = new E(3,5);
console.log(obj.greatE());

// const obj = C.constructor(4,3)
// console.log(A);
// console.log(A.prototype);
// console.log(B);
// console.log(B.prototype);
// console.log(C);
// console.log(C.prototype);
// console.log(obj.greatC());

