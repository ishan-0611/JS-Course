const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCls = document.querySelector('.close-modal');
const btnOpn = document.querySelectorAll('.show-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0; i<btnOpn.length; i++)
{
    console.log(btnOpn[i].addEventListener('click', openModal));
}

btnCls.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    console.log(e.key);
    if(e.key === 'Escape')
    {
        if(!modal.classList.contains('hidden')) closeModal();
    }
})