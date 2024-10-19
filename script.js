const buttons = document.querySelectorAll('.menu-button')
const items = document.querySelectorAll('.menu-item')

let selectedButton = 'All'

buttons.forEach( (btn) => {
    btn.addEventListener('click', () => {
        clearButtons()
        selectedButton = btn.id
        btn.classList.add('active-button')
        showItems()
    })
})

function clearButtons() {
    buttons.forEach( (btn) => btn.classList.remove('active-button'))
}

function showItems() {
    items.forEach( (item) => {
        const cat = item.querySelector('p span').innerText
        if ((selectedButton === 'All') || (cat === selectedButton)) {
            item.style.display = 'grid';
        }
        else {
            item.style.display = 'none';
        }
    })
}