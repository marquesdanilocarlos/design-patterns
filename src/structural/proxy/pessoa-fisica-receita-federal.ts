import ReceitaFederalInterface from "@/structural/proxy/receita-federal.interface";

export class PessoaFisicaReceitaFederal implements ReceitaFederalInterface{
    private nome!: string;
    private cpf!: string;
    private idade!: number;
    private cpfAtivo!: boolean;

    constructor() {}

    static async create(cpf: string): Promise<PessoaFisicaReceitaFederal> {
        const instance = new PessoaFisicaReceitaFederal();

        await new Promise((resolve) => setTimeout(resolve, 5000));

        instance.cpf = cpf;
        instance.nome = 'João da Silva';
        instance.idade = 25;
        instance.cpfAtivo = true;
        console.log('PessoaFisicaReceitaFederal criada com sucesso');

        return instance;
    }


    public getNome(): Promise<string> {
        return new Promise(resolve => setTimeout(() => {
                resolve(this.nome)
            }, 2000)
        )
    }

    public getIdade(): Promise<number> {
        return new Promise(resolve => setTimeout(() => {
                resolve(this.idade)
            }, 2000)
        )
    }

    public isCpfAtivo(): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => {
                resolve(this.cpfAtivo)
            }, 2000)
        )
    }
}
