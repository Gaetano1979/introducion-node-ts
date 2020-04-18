"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hola() {
    console.log('Hola a todos desde nuevo module');
}
exports.hola = hola;
function holaDos(nome) {
    console.log('Hola a te che sei nuovo' + nome);
}
exports.holaDos = holaDos;
exports.holaTs = () => {
    console.log('Hola desde paquete npm ts');
};
