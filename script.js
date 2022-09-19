const rangeInput = document.querySelectorAll('.input__range input'),
    progress = document.querySelector('.slider_price-progress'),
    minPrice = document.querySelector('.min'),
    maxPrice = document.querySelector('.max')
    ;
let priveGap = 1000;

rangeInput.forEach(item => {
    item.addEventListener("input", e => {
        let minVale = parseInt(rangeInput[0].value),
            maxVale = parseInt(rangeInput[1].value);
        if (maxVale - minVale < priveGap) {
            if (e.target.className === "input__range-min") {
                rangeInput[0].value = maxVale - priveGap;
            } else {
                rangeInput[1].value = minVale + priveGap;
            }

        } else {

            minPrice.innerHTML = minVale.toLocaleString("de-DE");
            maxPrice.innerHTML = maxVale.toLocaleString("de-DE") + 'т';

            progress.style.left = (minVale / rangeInput[0].max) * 100 + '%';
            progress.style.right = 100 - (maxVale / rangeInput[1].max) * 100 + '%';
        }


    })
})
const modal = document.querySelector('.modal'),
    closebtn = document.querySelector('.close'),
    getOffer = document.querySelectorAll('#get-offer');
function showModal() {
    getOffer.forEach(item => {
        item.addEventListener('click', e => {
            if (e.target == item) {
                modal.classList.add('show');
                modal.classList.remove('hide');

            }
        })
    })
}
showModal();
modal.addEventListener('click', e => {
    if (e.target.classList.contains("modal")) {
        closeModal();
    }
})
function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');


}
closebtn.addEventListener('click', e => {
    closeModal();
})
document.body.addEventListener('keydown', e => {
    if (e.key == 'Escape') {
        closeModal();
    }
})

//const getFirstAndOther = (first, ...other) => ({ first, other });
//console.log(getFirstAndOther('a', 'b', 'c', 'd'));



