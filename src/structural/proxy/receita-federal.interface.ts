export default interface ReceitaFederalInterface {
    getNome(): Promise<string>;
    getIdade(): Promise<number>;
    isCpfAtivo(): Promise<boolean>;
}