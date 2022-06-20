export interface IStrategy {
  execute(): void;
  getName(): string;
}

export class Context {
  private strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  // metodo para elegir una estrategia
  setStrategy(strategy: IStrategy): void {
    this.strategy = strategy;
  }

  // metodo para ejecutar la estrategia
  executeStrategy(): void {
    this.strategy.execute();
  }

  // metodo para obtener el nombre de la estrategia
  getStrategyName(): string {
    return this.strategy.getName();
  }
}

export class StrategyA implements IStrategy {
  // nombre de la estratregia
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  // metodo para ejecutar logica de negocio

  execute() {
    console.log(`${this.name} strategy executed`);
  }
}

export class StrategyB implements IStrategy {
  // nombre de la estratregia
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  // metodo para ejecutar logica de negocio

  execute() {
    console.log(`${this.name} strategy executed`);
  }
}
