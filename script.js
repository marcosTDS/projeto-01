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

    if (entradaSelecionada !== "") {
        pedido = entradaSelecionada;
        total += precoEntrada[entradaSelecionada] || 0;
    } else if (temakiSelecionado !== "") {
        pedido = temakiSelecionado;
        total += precoTemaki[temakiSelecionado] || 0;
    } else if (bebidaSelecionada !== "") {
        pedido = bebidaSelecionada;
        total += precoBebida[bebidaSelecionada] || 0;
    }

    if (document.getElementById('BIG-HOT-SALMÃO').checked) entrada.push('BIG-HOT-SALMÃO');
    if (document.getElementById('BIG-HOT-SALMÃO-E-CAMARÃO').checked) entrada.push('BIG-HOT-SALMÃO-E-CAMARÃO');
    if (document.getElementById('BIG-HOT-CAMARÃO-NATURAL').checked) entrada.push('BIG-HOT-CAMARÃO-NATURAL');
    if (document.getElementById('BIG-HOT-KANE-FILADÉLFIA').checked) entrada.push('BIG-HOT-KANE-FILADÉLFIA');
    if (document.getElementById('NIGUIRI-SALMÃO-10-PEÇAS').checked) entrada.push('NIGUIRI-SALMÃO-10-PEÇAS');
    if (document.getElementById('SASHIMS-SALMÃO-10-PEÇAS').checked) entrada.push('SASHIMS-SALMÃO-10-PEÇAS');
    if (document.getElementById('EBY-JOW-3-PEÇAS').checked) entrada.push('EBY-JOW-3-PEÇAS');
    if (document.getElementById('EBY-FLAY-3-PEÇAS').checked) entrada.push('EBY-FLAY-3-PEÇAS');
    if (document.getElementById('LOGIA-BOLL-SIMPLES-6-PEÇAS').checked) entrada.push('LOGIA-BOLL-SIMPLES-6-PEÇAS');
    if (document.getElementById('LOGIA-BOLL-TURBINADO-8-PEÇAS').checked) entrada.push('LOGIA-BOLL-TURBINADO-8-PEÇAS');
    if (document.getElementById('SUSHI-BURGUER').checked) entrada.push('SUSHI-BURGUER');

    entrada.forEach(entrada => { total += precoEntrada[entrada] || 0; });

    if (document.getElementById('SALMÃO-SIMPLES').checked) temaki.push('SALMÃO-SIMPLES');
    if (document.getElementById('SALMÃO-FILADÉLFIA').checked) temaki.push('SALMÃO-FILADÉLFIA');
    if (document.getElementById('CAMARÃO-CROCANTE').checked) temaki.push('CAMARÃO-CROCANTE');
    if (document.getElementById('KANI-FILADÉLFIA').checked) temaki.push('KANI-FILADÉLFIA');
    if (document.getElementById('CAMARÃO-NATURAL').checked) temaki.push('CAMARÃO-NATURAL');
    if (document.getElementById('KANI-CROCANTE').checked) temaki.push('KANI-CROCANTE');
    if (document.getElementById('SALMÃO-SUPREMO').checked) temaki.push('SALMÃO-SUPREMO');

    temaki.forEach(temaki => { total += precoTemaki[temaki] || 0; });
    
    if (document.getElementById('REFRIGERANTE').checked) bebida.push('REFRIGERANTE');
    if (document.getElementById('H2O').checked) bebida.push('H2O');
    if (document.getElementById('SHUEPS').checked) bebida.push('SHUEPS');
    if (document.getElementById('TONICA').checked) bebida.push('TONICA');
    if (document.getElementById('REFRIGERANTE-1LT').checked) bebida.push('REFRIGERANTE-1LT');

    bebida.forEach(bebida => { total += precoBebida[bebida] || 0; });

    const taxaEntrega = 10.00;
    const totalFinal = total + taxaEntrega;

    let mensagem = `Pedido sushi: \n\nTipo: ${pedido}\n`;
    mensagem += `entrada: ${entrada.join(', ')}\n`;
    mensagem += `temaki: ${temaki.join(', ')}\n`;
    mensagem += `bebida: ${bebida.join(', ')}\n`;
    mensagem += `Endereço de entrega:\nRua: ${rua}, Bairro: ${bairro}, Número: ${numero}, Complemento: ${complemento}\n`;
    mensagem += `Forma de pagamento: ${pagamento}\n`;
    mensagem += `Taxa de entrega: R$${taxaEntrega.toFixed(2)}\n`;
    mensagem += `Total com taxa de entrega: R$${totalFinal.toFixed(2)}\n`;

    const numeroWhatsApp = "81989916110";
    const link = `http://wa.me/55${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, '_blank');

    
}



