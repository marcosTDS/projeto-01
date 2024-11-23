
function enviarWhatsApp() {
    let entrada = [];
    let temaki = [];
    let bebida = [];

    const entradaSelecionada = document.getElementById('opcoes').value;
    const temakiSelecionado = document.getElementById('opcoes-2').value;
    const bebidaSelecionada = document.getElementById('opcoes-3').value;
    const pagamento = document.getElementById('forma-pagamento').value;

    const rua = document.getElementById('rua').value;
    const bairro = document.getElementById('bairro').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;

    const precoEntrada = {"BIG HOT SALMÃO": 26.00, "BIG HOT SALMÃO E CAMARÃO": 29.00, "BIG HOT CAMARÃO NATURAL": 29.00,
        "BIG HOT KANE FILADÉLFIA": 24.00, "NIGUIRI SALMÃO 10 PEÇAS": 23.00, "SASHIMS SALMÃO 10 PEÇAS": 24.00,
        "EBY JOW 3 PEÇAS": 13.00, "EBY FLAY 3 PEÇAS": 11.00, "LOGIA BOLL SIMPLES 6 PEÇAS": 20.00, 
        "LOGIA BOLL TURBINADO 8 PEÇAS": 25.00, "SUSHI BURGUER": 23.00
    };

    const precoTemaki = {"SALMÃO SIMPLES": 22.00, "SALMÃO FILADÉLFIA": 24.00, "CAMARÃO CROCANTE": 20.00,
        "KANI FILADÉLFIA": 19.00, "CAMARÃO NATURAL": 24.00, "KANI CROCANTE": 20.00,
        "SALMÃO SUPREMO": 65.00
    };

    const precoBebida = {"REFRIGERANTE": 6.5, "H2O": 7.00, "SHUEPS": 6.99, "TONICA": 6.99,
        "REFRIGERANTE(1LT)": 9.99
    };

    let total = 0;
    let pedido = "";

    if (document.getElementById('BIG HOT SALMÃO').checked) {
        const quantidade = parseInt(document.getElementById('BIG HOT SALMÃO-quantidade').value);
        entrada.push({item: 'BIG HOT SALMÃO', quantidade: quantidade});
        total += precoEntrada['BIG HOT SALMÃO'] * quantidade
    }

    if (document.getElementById('BIG HOT SALMÃO E CAMARÃO').checked) {
        const quantidade = parseInt(document.getElementById('BIG HOT SALMÃO E CAMARÃO-quantidade').value);
        entrada.push({item:'BIG HOT SALMÃO E CAMARÃO', quantidade: quantidade});
        total += precoEntrada['BIG HOT SALMÃO E CAMARÃO'] * quantidade
    }

    if (document.getElementById('BIG HOT CAMARÃO NATURAL').checked) {
        const quantidade = parseInt(document.getElementById('BIG HOT CAMARÃO NATURAL-quantidade').value);
        entrada.push({item:'BIG HOT CAMARÃO NATURAL', quantidade: quantidade});
        total += precoEntrada['BIG HOT CAMARÃO NATURAL'] * quantidade
    }

    if (document.getElementById('BIG HOT KANI FILADÉLFIA').checked) {
        const quantidade = parseInt(document.getElementById('BIG HOT KANI FILADÉLFIA-quantidade').value);
        entrada.push({item:'BIG HOT KANI FILADÉLFIA', quantidade: quantidade});
        total += precoEntrada['BIG HOT FILADÉLFIA'] * quantidade
    }

    if (document.getElementById('NIGUIRI SALMÃO 10 PEÇAS').checked) {
        const quantidade = parseInt(document.getElementById('NIGUIRI SALMÃO 10 PEÇAS-quantidade').value);
        entrada.push({item:'NIGUIRI SALMÃO 10 PEÇAS', quantidade: quantidade});
        total += precoEntrada['NIGUIRI SALMÃO 10 PEÇAS'] * quantidade
    }

    if (document.getElementById('SASHIMS SALMÃO 10 PEÇAS').checked) {
        const quantidade = parseInt(document.getElementById('SASHIMS SALMÃO 10 PEÇAS-quantidade').value);
        entrada.push({item:'SASHIMS SALMÃO 10 PEÇAS', quantidade: quantidade});
        total += precoEntrada['SASHIMS SALMÃO 10 PEÇAS'] * quantidade
    }

    if (document.getElementById('EBY JOW 3 PEÇAS').checked) {
        const quantidade = parseInt(document.getElementById('EBY JOW 3 PEÇAS-quantidade').value);
        entrada.push({item:'EBY JOW 3 PEÇAS', quantidade: quantidade});
        total += precoEntrada['EBY JOW 3 PEÇAS'] * quantidade
    }

    if (document.getElementById('EBY FLAY 3 PEÇAS').checked) {
        const quantidade = parseInt(document.getElementById('EBY FLAY 3 PEÇAS-quantidade').value);
        entrada.push({item:'EBY FLAY 3 PEÇAS', quantidade: quantidade});
        total += precoEntrada['EBY FLAY 3 PEÇAS'] * quantidade
    }

    if (document.getElementById('LOGIA BOLL SIMPLES 6 PEÇAS').checked) {
        const quantidade = parseInt(document.getElementById('LOGIA BOLL SIMPLES 6 PEÇAS-quantidade').value);
        entrada.push({item:'LOGIA BOLL SIMPLES 6 PEÇAS', quantidade: quantidade});
        total += precoEntrada['LOGIA BOLL SIMPLES 6 PEÇAS'] * quantidade
    }

    if (document.getElementById('LOGIA BOLL TURBINADO 8 PEÇAS').checked) {
        const quantidade = parseInt(document.getElementById('LOGIA BOLL TURBINADO 8 PEÇAS-quantidade').value);
        entrada.push({item:'LOGIA BOLL TURBINADO 8 PEÇAS', quantidade: quantidade});
        total += precoEntrada['LOGIA BOLL TURBINADO 8 PEÇAS'] * quantidade
    }

    if (document.getElementById('SUSHI BURGUER').checked) {
        const quantidade = parseInt(document.getElementById('SUSHI BURGUER-quantidade').value);
        entrada.push({item:'SUSHI BURGUER', quantidade: quantidade});
        total += precoEntrada['SUSHI BURGUER'] * quantidade
    }

    if (document.getElementById('SALMÃO SIMPLES').checked) {
        const quantidade = parseInt(document.getElementById('SALMÃO SIMPLES-quantidade').value);
        entrada.push({item:'SALMÃO SIMPLES', quantidade: quantidade});
        total += precoEntrada['SALMÃO SIMPLES'] * quantidade
    }

    if (document.getElementById('SALMÃO FILADÉLFIA').checked) {
        const quantidade = parseInt(document.getElementById('SALMÃO FILADÉLFIA-quantidade').value);
        entrada.push({item:'SALMÃO FILADÉLFIA', quantidade: quantidade});
        total += precoEntrada['SALMÃO FILADÉLFIA'] * quantidade
    }

    if (document.getElementById('CAMARÃO CROCANTE').checked) {
        const quantidade = parseInt(document.getElementById('CAMARÃO CROCANTE-quantidade').value);
        entrada.push({item:'CAMARÃO CROCANTE', quantidade: quantidade});
        total += precoEntrada['CAMARÃO CROCANTE'] * quantidade
    }

    if (document.getElementById('KANI FILADÉLFIA').checked) {
        const quantidade = parseInt(document.getElementById('KANI FILADÉLFIA-quantidade').value);
        entrada.push({item:'KANI FILADÉLFIA', quantidade: quantidade});
        total += precoEntrada['KANI FILADÉLFIA'] * quantidade
    }

    if (document.getElementById('CAMARÃO NATURAL').checked) {
        const quantidade = parseInt(document.getElementById('CAMARÃO NATURAL-quantidade').value);
        entrada.push({item:'CAMARÃO NATURAL', quantidade: quantidade});
        total += precoEntrada['CAMARÃO NATURAL'] * quantidade
    }

    if (document.getElementById('KANI CROCANTE').checked) {
        const quantidade = parseInt(document.getElementById('CAMARÃO NATURAL-quantidade').value);
        entrada.push({item:'KANI CROCANTE', quantidade: quantidade});
        total += precoEntrada['KANI CROCANTE'] * quantidade
    }

    if (document.getElementById('SALMÃO SUPREMO').checked) {
        const quantidade = parseInt(document.getElementById('SALMÃO SUPREMO-quantidade').value);
        entrada.push({item:'SALMÃO SUPREMO', quantidade: quantidade});
        total += precoEntrada['SALMÃO SUPREMO'] * quantidade
    }

    if (document.getElementById('REFRIGERANTE').checked) {
        const quantidade = parseInt(document.getElementById('REFRIGERANTE-quantidade').value);
        entrada.push({item:'REFRIGERANTE', quantidade: quantidade});
        total += precoEntrada['REFRIGERANTE'] * quantidade
    }

    if (document.getElementById('H2O').checked) {
        const quantidade = parseInt(document.getElementById('H2O-quantidade').value);
        entrada.push({item:'H2O', quantidade: quantidade});
        total += precoEntrada['H2O'] * quantidade
    }

    if (document.getElementById('SHUEPS').checked) {
        const quantidade = parseInt(document.getElementById('SHUEPS-quantidade').value);
        entrada.push({item:'SHUEPS', quantidade: quantidade});
        total += precoEntrada['SHUEPS'] * quantidade
    }

    if (document.getElementById('TONICA').checked) {
        const quantidade = parseInt(document.getElementById('TONICA-quantidade').value);
        entrada.push({item:'TONICA', quantidade: quantidade});
        total += precoEntrada['TONICA'] * quantidade
    }

    if (document.getElementById('REFRIGERANTE 1LT').checked) {
        const quantidade = parseInt(document.getElementById('REFRIGERANTE 1LT-quantidade').value);
        entrada.push({item:'REFRIGERANTE 1LT', quantidade: quantidade});
        total += precoEntrada['REFRIGERANTE 1LT'] * quantidade
    }






    const taxaEntrega = 10.00;
    const totalFinal = total + taxaEntrega;

    let mensagem = `Pedido sushi: \n\nTipo: ${pedido}\n`;
    mensagem += `entrada: ${entrada.join(', ')}\n`;
    mensagem += `temaki: ${temaki.join(', ')}\n`;
    mensagem += `bebida: ${bebida.join(', ')}\n`;
    mensagem += `Endereço de entrega:\nRua: ${rua}\n`;
    mensagem += `Bairro: ${bairro}\n`;
    mensagem += `Número: ${numero}\n`;
    mensagem += `Complemento: ${complemento}\n`;
    mensagem += `Forma de pagamento: ${pagamento}\n`;
    mensagem += `Total do pedido: R$${total.toFixed(2)}\n`;
    mensagem += `Taxa de entrega: R$${taxaEntrega.toFixed(2)}\n`;
    mensagem += `Total com taxa de entrega: R$${totalFinal.toFixed(2)}\n`;

    const numeroWhatsApp = "81989916110";
    const link = `https://wa.me/55${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

   
    window.open(link, '_blank');

    
}


