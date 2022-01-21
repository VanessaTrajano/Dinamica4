//1 - crie uma função que exiba uma mensagem no console

function exibirMensagem(){
    console.log("Opa! Tudo bom?")
}

exibirMensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function exibirNome(nome){
    console.log(`Teu nome é ${nome}`)
}

exibirNome("Fernando")

//3 - crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console

function exibirDados(nome, numero, estiloMusical){
    console.log(`Nome: ${nome}. Número: ${numero}. Estilo Musical: ${estiloMusical}`)
}

exibirDados("Vanessa", 4, "Jazz")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function filmeMusica(filme, musica){
    console.log(`Filme: ${filme}. Música: ${musica}`)
}

filmeMusica("Encanto", "Colombia, mi encanto")

//Bônus
//5 - crie uma função que retorne o triplo do número recebido no (parâmetro)

function triplo(num){
    console.log(num*3)
}

triplo(4)