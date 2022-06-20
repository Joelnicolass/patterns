"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const observer_1 = require("./observer");
const index_1 = require("./singleton/index");
const strategy_1 = require("./strategy");
// crea un nuevo observador
const observer1 = new observer_1.Observer("observer1");
// crea un nuevo observador
const observer2 = new observer_1.Observer("observer2");
// crea un nuevo subject
const subject = new observer_1.Subject();
// agrega el observador al subject
subject.addObserver(observer1);
// agrega el observador al subject
subject.addObserver(observer2);
// notifica a todos los observadores
subject.notifyObservers("hola observadores");
// notifica a un observador especifico
subject.notifyObserver("observer1", "soy el observador 1");
// crea un nuevo singleton
const singleton = index_1.Singleton.getInstance();
// crea un nuevo singleton
const singleton2 = index_1.Singleton.getInstance();
// compara si los singleton son iguales
console.log(singleton === singleton2);
// guarda un valor en el singleton
singleton.set("name", "singleton");
// obtiene el valor del singleton
console.log(singleton.get("name"));
// elimina el valor del singleton
singleton.delete("name");
// compara si el singleton tiene un valor
console.log(singleton.get("name"));
// obtiene todos los valores del singleton
console.log(singleton.getAll());
singleton.set("name", "Nico");
singleton.set("phone", "123123");
console.log(singleton.getAll());
console.log(singleton.get("phone"));
// strategy pattern
const context = new strategy_1.Context(new strategy_1.StrategyA("estrategia 1"));
context.executeStrategy();
const context2 = new strategy_1.Context(new strategy_1.StrategyB("estrategia 2"));
context2.executeStrategy();
console.log(context.getStrategyName());
console.log(context2.getStrategyName());
context.setStrategy(new strategy_1.StrategyA("estrategia 3"));
context.executeStrategy();
console.log(context.getStrategyName());
