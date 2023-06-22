let popup = document.querySelector('.popup');

let openModal = () => {
    popup.classList.remove('popup_close');
    popup.classList.add('popup_open');
}

let closeModal = () =>{
    popup.classList.remove('popup_open');
    popup.classList.add('popup_close');

}
