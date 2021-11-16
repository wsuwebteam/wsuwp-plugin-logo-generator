import html2canvas from 'html2canvas';

function LogoCollection(el) {
    const logoElements = el.querySelectorAll('.wsu-logo-generator__logo-canvas svg');
    const downloadButtons = el.querySelectorAll('.wsu-logo-generator__download-btn');
    const outputWidthInput = el.querySelector('.wsu-logo-generator__control-output-width');
    const outputHeightLabel = el.querySelector('.wsu-logo-generator__output-height');
    const filename = el.getAttribute('data-logo-filename');
    const hwRatio = parseFloat(el.getAttribute('data-logo-height')) / parseFloat(el.getAttribute('data-logo-width'));

    function isValidNumberInput(evt){
        var e = evt || window.event;
        var key = e.keyCode || e.which;

        if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
        // numbers
        key >= 48 && key <= 57 ||
        // Numeric keypad
        key >= 96 && key <= 105 ||
        // Backspace and Tab and Enter
        key == 8 || key == 9 || key == 13 ||
        // Home and End
        key == 35 || key == 36 ||
        // left and right arrows
        key == 37 || key == 39 ||
        // Del and Ins
        key == 46 || key == 45) {
            return true;
        }
        else {
            e.returnValue = false;
            if (e.preventDefault) e.preventDefault();
        }
    }

    function updateDimensionLabels(e){
        e.stopPropagation();

        if(isValidNumberInput(e)){
            setTimeout(() => {
                const width = parseFloat(e.target.value);
                outputHeightLabel.innerText = Math.round(width * hwRatio) || 0;
            }, 0);
        }
    }

    function downloadAll(){

    }

    function downloadPNG(canvas, filename) {
        const png = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.download = `${filename}.png`;
        link.href = png;
        link.click();
    }

    function resizeSVGs(referenceSVG, doc){
        const id = referenceSVG.id;
        const svg = doc.getElementById(id);
        const width = parseFloat(outputWidthInput.value);
        const height = width * hwRatio;

        // resize svg and container
        svg.style.width = width + 'px';
        svg.style.height = height + 'px';
        svg.parentNode.style.width = width + 'px';
        svg.parentNode.style.height = height + 'px';
    }

    function bindEvents(){
        // update output dimension indicators
        outputWidthInput.addEventListener('keydown', updateDimensionLabels);

        downloadButtons.forEach( (button) => {
            button.addEventListener('click', function(){
                // get svg
                const svg = document.getElementById(button.getAttribute('data-svg'));
                const name = filename + '-' + button.getAttribute('data-variation');

                html2canvas(svg.parentNode, {
                    allowTaint: true,
                    backgroundColor: "rgba(0,0,0,0)",
                    removeContainer: true,
                    logging: false,
                    onclone: function(doc) {
                        resizeSVGs(svg, doc);
                    },
                }).then(function(canvas) {
                    downloadPNG(canvas, name);
                });
            });
        });
    }

    function init(){
        el.classList.add('is-ready');
        bindEvents();
    }

    init();
}


(function() {
    const typeKitUrl = 'https://use.typekit.net/uav0tuz.css';
    const logoCollections = document.querySelectorAll('.wsu-logo-generator__logo-collection');
    const logoElements = document.querySelectorAll('.wsu-logo-generator__logo-canvas svg');

    function getFontCSS(typeKitUrl){
        return new Promise( (resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open("get", typeKitUrl);
            request.responseType = "text";
            request.send();

            request.onloadend = function() {
                // find all font urls
                let css = request.response;
                const fontUrls = css.match(/https?:\/\/use[^ \)]+/g);
                let loaded = 0;

                fontUrls.forEach( (url) => {
                    // get each font binary
                    const request = new XMLHttpRequest();
                    request.open("get", url);
                    request.responseType = "blob";

                    request.onloadend = () => {
                        // convert font blob to binary string.
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            loaded++;

                            // replace font url by binary string
                            css = css.replace("url(\"", 'url('); // remove quote from url
                            css = css.replace(url, reader.result);

                            // check all fonts are replaced.
                            if(loaded === fontUrls.length){
                                logoElements.forEach( (el) => {
                                    el.innerHTML = `<style>${css}</style>` + el.innerHTML;
                                });

                                resolve('done');
                            }
                        }
                        reader.readAsDataURL(request.response);
                    }
                    request.send();
                });
            }
        });
    }

    getFontCSS(typeKitUrl).then(function(done){
        // setup instances of logo collections
        logoCollections.forEach( (el) => {
            new LogoCollection(el);
        });
    });
})();
