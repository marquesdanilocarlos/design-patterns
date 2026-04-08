export default class Gateway {
  // Simulação de uma cobrança - retorna true ou false de forma randômica.
  charge(value: number): string {
    return `Valor a ser cobrado: ${value}`
  }
}
