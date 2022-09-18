document.getElementById("ul-experiences").onclick = function (e) {
    var selectedLi = e.originalTarget.attributes[0].nodeValue;
    removeSelectedClass();
    selectOption(selectedLi);
};

document.getElementById("select-experiences").onchange = function (e) {
    removeSelectedClass();
    selectOption(this.value);
}

function removeSelectedClass() {
    document.getElementById("one").classList.remove("selected");
    document.getElementById("two").classList.remove("selected");
    document.getElementById("three").classList.remove("selected");
    document.getElementById("four").classList.remove("selected");
    document.getElementById("five").classList.remove("selected");
}

function selectOption(selectedLi) {
    document.getElementById(selectedLi).classList.add("selected");
    const $select = document.querySelector('#select-experiences');
    const $options = Array.from($select.options);
    const optionToSelect = $options.find(item => item.value === selectedLi);
    optionToSelect.selected = true;
    changeInfoExperience(selectedLi);
}

function changeInfoExperience(selectedLi) {
    hideAllExperiences();
    switch (selectedLi.toString()) {
        case 'one':
            document.querySelector(".first-experience").style.display = 'block';
            break;
        case 'two':
            document.querySelector(".second-experience").style.display = 'block';
            break;
        case 'three':
            document.querySelector(".third-experience").style.display = 'block';
            break;
        case 'four':
            document.querySelector(".fourth-experience").style.display = 'block';
            break;
        case 'five':
            document.querySelector(".fifth-experience").style.display = 'block';
            break;
        default:
            break;
    }
}

function hideAllExperiences(){
    document.querySelector(".first-experience").style.display = 'none';
    document.querySelector(".second-experience").style.display = 'none';
    document.querySelector(".third-experience").style.display = 'none';
    document.querySelector(".fourth-experience").style.display = 'none';
    document.querySelector(".fifth-experience").style.display = 'none';
}