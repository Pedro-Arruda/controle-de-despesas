let modal = document.querySelector('.modal')
let tabela = document.querySelector('.tabela')

let nome = document.getElementById('nome-transacao')
let valor = document.getElementById('valor-transacao')
let categoria = document.getElementById('categoria-transacao')
let data = document.getElementById('data-transacao')

let totalEntrada = document.getElementById('total-entrada')
let totalSaída = document.getElementById('total-saida')
let totalGeral = document.getElementById('total-geral')

let btnEntrada = document.getElementById('btn-entrada')
let btnSaida = document.getElementById('btn-saida')

let valorEntrada = 0
let valorSaida = 0
let valorGeral = 0

let transacao = ''



function mostraModal() {
    modal.classList.toggle('inativo')
}

function criaTd() {
    let novaTr = document.createElement('tr')

    let tdNome = document.createElement('td')
    let tdValor = document.createElement('td')
    let tdCategoria= document.createElement('td')
    let tdData = document.createElement('td')

    tdNome.innerHTML = nome.value
    tdValor.innerHTML = 'R$ ' + valor.value
    tdCategoria.innerHTML = categoria.value
    tdData.innerHTML = data.value
     
    novaTr.appendChild(tdNome)
    novaTr.appendChild(tdValor)
    novaTr.appendChild(tdCategoria)
    novaTr.appendChild(tdData)

    if (transacao == 'entrada') {
        tdValor.style.color = '#33cc95'
        
        let valorFormatado = parseInt(valor.value)
        valorEntrada += valorFormatado

        totalEntrada.innerHTML = "R$ " + valorEntrada
    }

    if (transacao == 'saida') {
        tdValor.style.color = '#f44336'

        let valorFormatado = parseInt(valor.value)
        valorSaida += valorFormatado

        totalSaída.innerHTML = "R$ " + valorSaida
    }

    if (transacao != '') {
        modal.classList.toggle('inativo')
        tabela.appendChild(novaTr)
    }

    nome.value = ''
    valor.value = ''
    categoria.value = ''
    data.value = ''

    if (transacao == '') {
        alert('Selecione o tipo de transação')
    }

    valorGeral = valorEntrada - valorSaida
    totalGeral.innerHTML = "R$ " + valorGeral 
}

function determinaTransacao(financa) {
    if (financa == 'entrada') {
        transacao = 'entrada'

        btnEntrada.style.backgroundColor = 'rgba(51, 204, 149, 0.3)'
        btnSaida.style.backgroundColor = '#eff0f4'
    }

    else if (financa == 'saida') {
        transacao = 'saida'

        btnSaida.style.backgroundColor = 'rgba(244, 67, 54, 0.3)'
        btnEntrada.style.backgroundColor = '#eff0f4'
    }
}