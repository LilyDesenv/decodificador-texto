// Função para criptografar o texto
function criptografarTexto(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto
function descriptografarTexto(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

// Função para copiar o texto
function copiarTexto() {
    const resultadoTexto = document.getElementById('resultado-texto');
    const texto = resultadoTexto.textContent;

    const textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        alert("Texto copiado!");
    } catch (err) {
        console.error('Erro ao copiar texto: ', err);
    }
    document.body.removeChild(textarea);
}


// Event listeners para os botões
document.querySelector('.btn-cript').addEventListener('click', () => {
    //ocultar o painel com a imagem
    document.getElementById('inicial').style.display = 'none';
    //mostrar o painel com o resultado 
    document.getElementById('resultado').style.display = 'flex';
    const texto = document.getElementById('texto').value;
    const textoCriptografado = criptografarTexto(texto);
    document.getElementById('resultado-texto').textContent = textoCriptografado;
});

document.querySelector('.btn-descript').addEventListener('click', () => {
    //ocultar o painel com a imagem
    document.getElementById('inicial').style.display = 'none';
    //mostrar o painel com o resultado 
    document.getElementById('resultado').style.display = 'flex';
    const texto = document.getElementById('texto').value;
    const textoDescriptografado = descriptografarTexto(texto);
    document.getElementById('resultado-texto').textContent = textoDescriptografado;
});

document.querySelector('.btn-copiar').addEventListener('click', copiarTexto );
