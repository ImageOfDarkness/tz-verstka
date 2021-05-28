let select = function() {
    let selectHeader = document.querySelectorAll('.select__header')
    let selectItem = document.querySelectorAll('.select__item')

    selectHeader.forEach(item=>{
        item.addEventListener('click', selectTogle)
    })

    selectItem.forEach(item=>{
        item.addEventListener('click', selectChoose)
    })

    function selectTogle() {
        this.parentElement.classList.toggle('is-active')
    }

    function selectChoose() {
        let text = this.innerText, select = this.closest('.select'), currentText = select.querySelector('.select__curent');
        currentText.innerHTML = text;
        select.classList.remove('is-active');
    }


}

select()