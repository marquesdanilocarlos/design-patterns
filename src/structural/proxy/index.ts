import {Usuario} from "@/structural/proxy/usuario";

const usuario = new Usuario('João da Silva', '12345678901', 25);

console.log(usuario.getNome());
console.log(usuario.getCpf());
console.log(usuario.getIdade());
Promise.all([usuario.validarNome(), usuario.verificaCPFAtivo(), usuario.verificarMaioridade()]).then(([nomeValido, cpfAtivo, maiorIdade]) => {
    console.log('Nome válido:', nomeValido);
    console.log('CPF ativo:', cpfAtivo);
    console.log('Maioridade:', maiorIdade);
});