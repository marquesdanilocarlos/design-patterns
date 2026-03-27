import ReceitaFederalInterface from "@/structural/proxy/receita-federal.interface";
import PessoaFisicaReceitaFederalProxy
  from "@/structural/proxy/pessoa-fisica-receita-federal.proxy";

export class Usuario {
  private nome: string;
  private cpf: string;
  private idade: number;
  private pessoaFisica: ReceitaFederalInterface;

  constructor(nome: string, cpf: string, idade: number) {
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
    this.pessoaFisica = new PessoaFisicaReceitaFederalProxy(cpf);
  }

  async validarNome(): Promise<boolean> {
    const rfNome = await this.pessoaFisica.getNome()
    return this.nome === rfNome;
  }

  async verificaCPFAtivo(): Promise<boolean> {
    return await this.pessoaFisica.isCpfAtivo();
  }

  async verificarMaioridade(): Promise<boolean> {
    return this.idade >= 18 && this.idade === await this.pessoaFisica.getIdade();
  }

  public getNome(): string {
    return this.nome;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getIdade(): number {
    return this.idade;
  }
}
