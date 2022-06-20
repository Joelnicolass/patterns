"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    // hace el constructor privado para que no se pueda instanciar desde afuera
    constructor() {
        this.states = [];
    }
    // metodo para obtener o crear la instancia de la clase
    static getInstance() {
        // si la instancia no existe, la crea
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        // si ya existe, la devuelve
        return Singleton.instance;
    }
    // metodo para guardar un valor en la instancia
    set(name, value) {
        this.states.push({ name, value });
    }
    // metodo para obtener un valor de la instancia
    get(name) {
        const state = this.states.find((state) => state.name === name);
        return state ? state.value : null;
    }
    // metodo para eliminar un valor de la instancia
    delete(name) {
        const state = (this.states = this.states.filter((state) => state.name !== name));
    }
    // metodo para obtener todos los valores de la instancia
    getAll() {
        return this.states;
    }
}
exports.Singleton = Singleton;
