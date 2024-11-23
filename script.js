
function enviarWhatsApp() {
    let entrada = [];
    let temaki = [];
    let bebida = [];

    
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
    let pedido = "sushi";

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

    if (document.getElementById('BIG HOT KANE FILADÉLFIA').checked) {
        const quantidade = parseInt(document.getElementById('BIG HOT KANE FILADÉLFIA-quantidade').value) || 0;
        entrada.push({item:'BIG HOT KANE FILADÉLFIA', quantidade: quantidade});
        total += precoEntrada['BIG HOT KANE FILADÉLFIA'] * quantidade
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
        temaki.push({item:'SALMÃO SIMPLES', quantidade: quantidade});
        total += precoTemaki['SALMÃO SIMPLES'] * quantidade
    }

    if (document.getElementById('SALMÃO FILADÉLFIA').checked) {
        const quantidade = parseInt(document.getElementById('SALMÃO FILADÉLFIA-quantidade').value);
        temaki.push({item:'SALMÃO FILADÉLFIA', quantidade: quantidade});
        total += precoTemaki['SALMÃO FILADÉLFIA'] * quantidade
    }

    if (document.getElementById('CAMARÃO CROCANTE').checked) {
        const quantidade = parseInt(document.getElementById('CAMARÃO CROCANTE-quantidade').value);
        temaki.push({item:'CAMARÃO CROCANTE', quantidade: quantidade});
        total += precoTemaki['CAMARÃO CROCANTE'] * quantidade
    }

    if (document.getElementById('KANI FILADÉLFIA').checked) {
        const quantidade = parseInt(document.getElementById('KANI FILADÉLFIA-quantidade').value);
        temaki.push({item:'KANI FILADÉLFIA', quantidade: quantidade});
        total += precoTemaki['KANI FILADÉLFIA'] * quantidade
    }

    if (document.getElementById('CAMARÃO NATURAL').checked) {
        const quantidade = parseInt(document.getElementById('CAMARÃO NATURAL-quantidade').value);
        temaki.push({item:'CAMARÃO NATURAL', quantidade: quantidade});
        total += precoTemaki['CAMARÃO NATURAL'] * quantidade
    }

    if (document.getElementById('KANI CROCANTE').checked) {
        const quantidade = parseInt(document.getElementById('KANI CROCANTE-quantidade').value);
        temaki.push({item:'KANI CROCANTE', quantidade: quantidade});
        total += precoTemaki['KANI CROCANTE'] * quantidade
    }

    if (document.getElementById('SALMÃO SUPREMO').checked) {
        const quantidade = parseInt(document.getElementById('SALMÃO SUPREMO-quantidade').value);
        temaki.push({item:'SALMÃO SUPREMO', quantidade: quantidade});
        total += precoTemaki['SALMÃO SUPREMO'] * quantidade
    }

    if (document.getElementById('REFRIGERANTE').checked) {
        const quantidade = parseInt(document.getElementById('REFRIGERANTE-quantidade').value);
        bebida.push({item:'REFRIGERANTE', quantidade: quantidade});
        total += precoBebida['REFRIGERANTE'] * quantidade
    }

    if (document.getElementById('H2O').checked) {
        const quantidade = parseInt(document.getElementById('H2O-quantidade').value);
        bebida.push({item:'H2O', quantidade: quantidade});
        total += precoBebida['H2O'] * quantidade
    }

    if (document.getElementById('SHUEPS').checked) {
        const quantidade = parseInt(document.getElementById('SHUEPS-quantidade').value);
        bebida.push({item:'SHUEPS', quantidade: quantidade});
        total += precoBebida['SHUEPS'] * quantidade
    }

    if (document.getElementById('TONICA').checked) {
        const quantidade = parseInt(document.getElementById('TONICA-quantidade').value);
        bebida.push({item:'TONICA', quantidade: quantidade});
        total += precoBebida['TONICA'] * quantidade
    }

    if (document.getElementById('REFRIGERANTE 1LT').checked) {
        const quantidade = parseInt(document.getElementById('REFRIGERANTE 1LT-quantidade').value);
        bebida.push({item:'REFRIGERANTE 1LT', quantidade: quantidade});
        total += precoBebida['REFRIGERANTE 1LT'] * quantidade
    }

    const taxaEntrega = 10.00;
    const totalFinal = total + taxaEntrega;

    const formatarItens = (itens) => {
        return itens.map(item => `${item.quantidade}x ${item.item}`).join(', ');
    };

    let mensagem = `Tipo: ${pedido}\n\n`;
    mensagem += `${formatarItens(entrada)}\n\n`;
    mensagem += `${formatarItens(temaki)}\n\n`;
    mensagem += `${formatarItens(bebida)}\n\n`;
    mensagem += `Endereço de entrega: Rua: ${rua}\n\n`;
    mensagem += `Bairro: ${bairro}\n\n`;
    mensagem += `Número: ${numero}\n\n`;
    mensagem += `Complemento: ${complemento}\n\n`;
    mensagem += `Forma de pagamento: ${pagamento}\n\n`;
    mensagem += `Total do pedido: R$${total.toFixed(2)}\n\n`;
    mensagem += `Taxa de entrega: R$${taxaEntrega.toFixed(2)}\n\n`;
    mensagem += `Total com taxa de entrega: R$${totalFinal.toFixed(2)}`;

    const numeroWhatsApp = "81989916110";
    const link = `https://wa.me/55${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

   
    window.open(link, '_blank');

    
}


