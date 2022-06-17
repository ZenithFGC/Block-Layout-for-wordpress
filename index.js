
let body = document.querySelector("body"),
    backgrd = document.querySelector(".modal__background"),
    modalForm = document.querySelector(".modal__order")
    diameterBtn = document.querySelector(".offering__diameter_buttons"),
    packageBtn = document.querySelector(".offering__package_buttons"),
    requestBtn = document.querySelector(".btn_request"),
    closeBtn = document.querySelector(".btn_close");


pressedBtn = (e)=>{
    e.preventDefault();
    e.target.classList.toggle("pressedOfferingBtn");
}

showModal = (e)=>{
    e.preventDefault();
    body.classList.add('locker');
    backgrd.classList.add('backgroundShow');
    modalForm.style.display = 'block';
};

hideModal = (e)=> {
    e.preventDefault();
    body.classList.remove('locker');
    backgrd.classList.remove('backgroundShow');
    modalForm.style.display = 'none';
}


diameterBtn.addEventListener("click", pressedBtn );
packageBtn.addEventListener("click", pressedBtn );
requestBtn.addEventListener("click", showModal );
backgrd.addEventListener("click", hideModal);
closeBtn.addEventListener("click", hideModal);