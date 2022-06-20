import { IObserver, ISubject } from "../observer";

export interface IState {
  name: string;
  value: any | any[];
}

export class Singleton {
  // declara la instancia de la clase
  private static instance: Singleton;
  private states: IState[] = [];

  // hace el constructor privado para que no se pueda instanciar desde afuera
  private constructor() {}

  // metodo para obtener o crear la instancia de la clase
  static getInstance(): Singleton {
    // si la instancia no existe, la crea
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    // si ya existe, la devuelve
    return Singleton.instance;
  }

  // metodo para guardar un valor en la instancia
  set(name: string, value: any | any[]): void {
    this.states.push({ name, value });
  }

  // metodo para obtener un valor de la instancia
  get(name: string): any | any[] | null {
    const state = this.states.find((state: IState) => state.name === name);
    return state ? state.value : null;
  }

  // metodo para eliminar un valor de la instancia
  delete(name: string): void {
    const state = (this.states = this.states.filter(
      (state: IState) => state.name !== name
    ));
  }

  // metodo para obtener todos los valores de la instancia
  getAll(): IState[] {
    return this.states;
  }
}
