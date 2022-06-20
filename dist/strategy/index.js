"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyB = exports.StrategyA = exports.Context = void 0;
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    // metodo para elegir una estrategia
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    // metodo para ejecutar la estrategia
    executeStrategy() {
        this.strategy.execute();
    }
    // metodo para obtener el nombre de la estrategia
    getStrategyName() {
        return this.strategy.getName();
    }
}
exports.Context = Context;
class StrategyA {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    // metodo para ejecutar logica de negocio
    execute() {
        console.log(`${this.name} strategy executed`);
    }
}
exports.StrategyA = StrategyA;
class StrategyB {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    // metodo para ejecutar logica de negocio
    execute() {
        console.log(`${this.name} strategy executed`);
    }
}
exports.StrategyB = StrategyB;
