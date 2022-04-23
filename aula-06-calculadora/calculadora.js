function calculadora() {
    const operacao = prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)');
    
    
    if(!operacao || operacao >= 7) {
        alert('Opção invalida')
        calculadora();
    } 
    else {
        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        if (!n1 || !n2) {
            alert('Paramentros invalidos')
            calculadora();
        }else{
            function soma(v1, v2) {
                resultado = v1 + v2;
                alert(`A soma de ${v1} e ${v2} é igual a ${resultado}`);
                novaOperacao();
            }
            function subtracao(v1, v2) {
                resultado = v1 - v2;
                alert(`A subtracao de ${v1} e ${v2} é igual a ${resultado}`);
                novaOperacao();
            }
            function multiplicacao(v1, v2) {
                resultado = v1 * v2;
                alert(`A multiplicacao de ${v1} e ${v2} é igual a ${resultado}`);
                novaOperacao();
            }
            function divisaReal(v1, v2) {
                resultado = v1 / v2;
                alert(`A divisa Real de ${v1} e ${v2} é igual a ${resultado}`);
                novaOperacao();
            }
            function divisaoInteira(v1, v2) {
                resultado = v1 % v2;
                alert(`A divisao Inteira de ${v1} e ${v2} é igual a ${resultado}`);
                novaOperacao();
            }
            function potenciacao(v1, v2) {
                resultado = v1 ** v2;
                alert(`A potenciacao de ${v1} e ${v2} é igual a ${resultado}`);
                novaOperacao();
            }
        
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação?\n 1 - sim\n 2 - não');
                if(opcao == 1){
                    calculadora();
                }else if(opcao == 2){
                    alert('Até mais')
                }else {
                    alert('Escola uma opção valida')
                    novaOperacao();
                }
            }
            
        }
        switch(operacao) {
            case 1:
                soma(n1, n2);
                break;
            case 2:
                subtracao(n1, n2);
                break;
            case 3:
                multiplicacao(n1, n2);
                break;
            case 4:
                divisaReal(n1, n2);
                break;
            case 5:
                divisaoInteira(n1, n2);
                break;
            case 6:
                potenciacao(n1, n2);
                break;
        }
    }

}



calculadora();