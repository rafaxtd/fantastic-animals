export default function toolTip() {

    const toolTips = document.querySelectorAll("[data-tooltip]");

    toolTips.forEach(toolTip => {
        toolTip.addEventListener('mouseover', onMouseOver);
    });

    function onMouseOver(event) {

       const toolTipBox =  createToolTipBox(this);

    }

    function createToolTipBox(element) {

        const toolTipBox = document.createElement('div');
        const text =  element.getAttribute('aria-label')
        
        toolTipBox.classList.add('tooltip');
        toolTipBox.innerText = text;
        document.body.appendChild(toolTipBox);

        return toolTipBox;
    }



}

