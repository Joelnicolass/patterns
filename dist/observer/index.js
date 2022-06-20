"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = exports.Subject = void 0;
class Subject {
    // constructor
    constructor() {
        this.observers = [];
    }
    // agrega un observador al array de observadores
    addObserver(observer) {
        this.observers.push(observer);
    }
    // elimina un observador del array de observadores
    removeObserver(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }
    // notifica a todos los observadores
    notifyObservers(data) {
        this.observers.forEach((obs) => obs.update(data));
    }
    // notifica a un observador especifico
    notifyObserver(name, data) {
        this.observers.forEach((obs) => {
            if (obs.getName() === name) {
                obs.update(data);
            }
        });
    }
}
exports.Subject = Subject;
class Observer {
    // constructor para el observador
    constructor(name) {
        this.name = name;
    }
    // metodo para obtener el nombre del observador
    getName() {
        return this.name;
    }
    // metodo para actualizar el observador
    update(data) {
        console.log(`${this.name} has been updated with ${data}`);
    }
}
exports.Observer = Observer;
// Patron de Comportamiento
// comunicacion entre objetos
