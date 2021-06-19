const form = document.getElementById('f-form')
const email = document.getElementById('email')



form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        email: email.value
    }

    let EmailValid = isEmailValid();

    let checkInputs = EmailValid;


    //submit to server
    if(checkInputs){

    }
});

function isEmailValid(){
    if(email.value === '' || email.value === null){
        //error message goes here
        email.style.border = 'red 2px solid'
        return false
    }else{
        //error message should be removed
        email.style.border = ''
        return true
    }
}

email.addEventListener('input', ()=>{
    isEmailValid();
});


//menubar animation
const menuBar = document.querySelector('.menu-bar')
const navList = document.querySelector('.nav-list')
const cover = document.querySelector('.cover')

menuBar.addEventListener('click', ()=>{
    navList.classList.toggle('add');
    cover.classList.toggle('show-cover');
    menuBar.classList.toggle('close-icon');
})

//pagination slides
const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
});



