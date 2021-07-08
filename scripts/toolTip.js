export default function toolTip() {

    const toolTips = document.querySelectorAll('[data-tooltip]');

    toolTips.forEach(toolTip => {
        toolTip.addEventListener('mousehover', onMouseOver);
    });

    function onMouseOver() {

    }

    function createToolTipBox() {
        const toolTipBox = document.createElement('div');
        toolTipBox.classList.add('tooltip');
    }



}

