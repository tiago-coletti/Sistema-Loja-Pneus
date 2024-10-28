let produtos = [];

function adicionarProduto() {
    const tipodeProduto = document.getElementById('tipo de produto').value;
    const medidatamanho = document.getElementById('medida/tamanho').value;
    const preço = document.getElementById('preço').value;
    const marca = document.getElementById('marca').value;
    const codigodoProduto = document.getElementById('codigo do produto').value;
    const modelo = document.getElementById('modelo').value;
    const quantidade = document.getElementById('modelo').value;

    const dataEmissao = document.getElementById('Data Emissão').value;
    const formadePagamento = document.getElementById('Forma de Pagamento').value;
    const valorTotal = document.getElementById('Valor Total').value;

    if (tipodeProduto && medidatamanho && formadePagamento && preço && marca && codigodoProduto && modelo && quantidade && numeroNotaFiscal && dataEmissao) {
        const produto = {
            tipodeProduto,
            medidatamanho,
            preço,
            marca,
            codigodoProduto,
            modelo,
            quantidade,

            dataEmissao,
            formadePagamento,
            valorTotal
        };

        produtos.push(produto);
        alert('Produto adicionado com sucesso!');
        limparCampos();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function buscarProduto() {
    const nomeBusca = document.getElementById('nomeBusca').value;
    const resultadoBusca = document.getElementById('resultadoBusca');
    resultadoBusca.innerHTML = '';

    const produto = produtos.find(p => p.nome.toLowerCase() === nomeBusca.toLowerCase());

    if (produto) {
        resultadoBusca.innerHTML = `
            <h3>Produto Encontrado:</h3>
            <p><strong>Tipo do produto</strong> ${produto.tipodoProduto}</p>
            <p><strong>Medida/Tamanho:</strong> ${produto.medidatamanho}</p>
            <p><strong>Quantidade em Estoque:</strong> ${produto.quantidade}</p>
            <p><strong>Marca:</strong> ${produto.marca}</p>
            <p><strong>Modelo:</strong> ${produto.modelo}</p>
            <p><strong>Preço unitário:</strong> ${produto.preço}</p>
            <p><strong>Data Emissao:</strong> ${produto.dataEmissao}</p>
            
            <p><strong>Forma de Pagamento:</strong> ${produto.formadePagamento}</p>
            <p><strong>Valor Total:</strong> ${produto.valorTotal}</p>


        `;
    } else {
        resultadoBusca.innerHTML = '<p>Produto não encontrado.</p>';
    }
}

function listarProdutos() {
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    if (produtos.length > 0) {
        produtos.forEach(produto => {
            listaProdutos.innerHTML += `
                <div class="produto-item">
                    <h3>${produto.nome}</h3>
                    <p><strong>Tipo do Produto:</strong> ${produto.tipodoProduto}</p>
                    <p><strong>Medida/Tamanho:</strong> ${produto.medidatamanho}</p>
                    <p><strong>Quantidade em estoque:</strong> ${produto.quantidade}</p>
                    <p><strong>Marca:</strong> ${produto.marca}</p>
                    <p><strong>Código do Produto:</strong> ${produto.codigodoProduto}</p>
                    <p><strong>Preço:</strong> ${produto.preço}</p>
                    <p><strong>Data Emissão:</strong> ${produto.dataEmissao}</p>
                    
                    <p><strong>Forma de Pagamento:</strong> ${produto.formadePagamento}</p>
                    <p><strong>Valor Total:</strong> ${produto.valorTotal}</p>
                </div>
                <hr>
            `;
        });
    } else {
        listaProdutos.innerHTML = '<p>Nenhum produto no estoque.</p>';
    }
}

function limparCampos() {
    document.getElementById('tipodeProduto').value = '';
    document.getElementById('medidaTamanho').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('marca').value = '';
    document.getElementById('codigodoProduto').value = '';
    document.getElementById('preço').value = '';
    document.getElementById('Data Emissao').value = '';

    document.getElementById('Forma de Pagamento').value = '';
    document.getElementById('Valor Total').value = '';
}
