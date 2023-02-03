const btnAdd = document.getElementById('addProduct');
var lista = document.getElementById('listaProdutos');
var nomeProduto = document.getElementById('question7');

btnAdd.addEventListener('click', addProduct);

nomeProduto.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        e.preventDefault();
        btnAdd.click();
        nomeProduto.value = '';
    }
})

function addProduct() {
    lista.innerHTML += '<li id="product'+lista.childElementCount+'"><input type="text" name="produto'+(lista.childElementCount + 1)+'" readonly value="'+nomeProduto.value+'">';
    nomeProduto.value = '';
    nomeProduto.focus();
}

function deleteProduct() {
    if (confirm('Deseja remover o último produto?')) {
        document.getElementById('product'+(lista.childElementCount-1)).outerHTML = "";
    }
}