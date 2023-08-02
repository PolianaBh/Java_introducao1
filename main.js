const input = document.querySelector('input')

input.addEventListener('keypress', () => {
    let inputLength = input.value.length

    //+= deixa o 1,2 e 3 e adiciona o ponto.
    //MAX LENGHT 14 CPF
    if (inputLength == 3 || inputLength ==7) {
        input.value += '.'
    } else if (inputLength == 11) {
        input.value += '-'
    }
  
})

function formatarRG(rg) {
    // Remove todos os caracteres não numéricos do RG
    rg = rg.replace(/\D/g, '');
  
    // Aplica a máscara de RG (XX.XXX.XXX-X)
    return rg.replace(/^(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");
  }
  
  // Exemplo de uso:
  const numeroRG = "123456789";
  const rgFormatado = formatarRG(numeroRG);
  console.log(rgFormatado); // Output: "12.345.678-9"
  