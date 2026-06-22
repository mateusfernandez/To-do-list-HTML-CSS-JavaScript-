console.log('Show')

function adicionarTarefa(){
    let newTask = document.querySelector('input').value

    let li = document.createElement('li')
    li.innerHTML = `
    <span class="texto">${newTask}</span>
    <span class="favorito" onclick="favoritarTarefa(this)">☆</span>
    <span class="excluir" onclick="excluirTarefa(this)">❌</span>
`;

    document.querySelector("ul").appendChild(li)

    newTask = ''
    document.querySelector('input').value = ''
}

function excluirTarefa(li){
    li.parentElement.remove()
    console.log(li)

}

const input = document.querySelector('input');

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("btnAdicionar").click();
    }
});


function favoritarTarefa(star){

    if(star.innerHTML === '☆'){
        star.innerHTML = '⭐';
        star.parentElement.classList.add('favorita');
    } else {
        star.innerHTML = '☆';
        star.parentElement.classList.remove('favorita');
    }

}