const botao = document.querySelector('.botao-enviar')

botao.addEventListener('click', function(){
    const divs = document.querySelectorAll('.opcoes')
    divs.forEach(function(item){

        let fchild = item.firstElementChild
        let lchild = item.lastElementChild

        if(fchild.value == ""){
            fchild.style.border = '1px solid #F52E2E'
            lchild.style.visibility = 'visible'
        }else{
            fchild.style.border = '1px solid #00C22B'
            lchild.style.visibility = 'hidden'
        }
    })
})