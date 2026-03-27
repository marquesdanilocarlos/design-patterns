import ReceitaFederalInterface from "@/structural/proxy/receita-federal.interface";
import {PessoaFisicaReceitaFederal} from "@/structural/proxy/pessoa-fisica-receita-federal";

export default class PessoaFisicaReceitaFederalProxy implements ReceitaFederalInterface{
    private pessoaFisica!: PessoaFisicaReceitaFederal;

    constructor(private cpf: string) {
    }

    private async createPessoaFisica(): Promise<void> {
        if (this.pessoaFisica !== undefined) {
            return
        }

        this.pessoaFisica = await PessoaFisicaReceitaFederal.create(this.cpf);
    }

    async getIdade(): Promise<number> {
        await this.createPessoaFisica();
        return await this.pessoaFisica.getIdade();
    }

    async getNome(): Promise<string> {
        await this.createPessoaFisica();
        return this.pessoaFisica.getNome();
    }

    async isCpfAtivo(): Promise<boolean> {
        await this.createPessoaFisica();
        return await this.pessoaFisica.isCpfAtivo()
    }

}