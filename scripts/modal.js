export default function initModal() {

    const openButton = document.querySelector('[data-modal="open"');
    const closeButton = document.querySelector('[data-modal="close"');
    const containerModal = document.querySelector('[data-modal="container"');


    if(openButton && closeButton && containerModal) {

        openButton.addEventListener('click', openModal);
        closeButton.addEventListener('click', closeModal);
        containerModal.addEventListener('click', outsideModal);

        function openModal(e) {

            e.preventDefault();

            containerModal.classList.add('active');


        };

        function closeModal(e) {

            e.preventDefault();


            containerModal.classList.remove('active');

        };

        function outsideModal(e) {
        
        if(e.target === this){
            closeModal(e);
        } 


        }

}

}

