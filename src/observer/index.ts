export interface ISubject {
  addObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notifyObservers(data: any): void;
  notifyObserver(name: string, data: any): void;
}

export interface IObserver {
  update(subject: ISubject): void;
}

export class Subject implements ISubject {
  // array de observadores
  private observers: Observer[];
  // constructor
  constructor() {
    this.observers = [];
  }
  // agrega un observador al array de observadores
  addObserver(observer: Observer) {
    this.observers.push(observer);
  }
  // elimina un observador del array de observadores
  removeObserver(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  // notifica a todos los observadores
  notifyObservers(data: any) {
    this.observers.forEach((obs) => obs.update(data));
  }
  // notifica a un observador especifico
  notifyObserver(name: string, data: any) {
    this.observers.forEach((obs: Observer) => {
      if (obs.getName() === name) {
        obs.update(data);
      }
    });
  }
}

export class Observer implements IObserver {
  // propiedad para el nombre del observador
  private name: string;
  // constructor para el observador
  constructor(name: string) {
    this.name = name;
  }
  // metodo para obtener el nombre del observador
  getName(): string {
    return this.name;
  }
  // metodo para actualizar el observador
  update(data: any) {
    console.log(`${this.name} has been updated with ${data}`);
  }
}
