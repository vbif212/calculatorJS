'use strict';

export default function () {
    return createFirstDiv();
};

const createFirstDiv = () => {
    let firstDiv = document.createElement("div");
    firstDiv.style.minHeight = '100vh';
    firstDiv.style.display = 'flex';
    firstDiv.style.alignItems = 'center';
    const containerDiv = createContainerDiv();
    firstDiv.appendChild(containerDiv);
    return firstDiv;
};

const createContainerDiv = () => {
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    const centerDiv = createCenterDiv();
    containerDiv.appendChild(centerDiv);
    return containerDiv;
};

const createCenterDiv = () => {
    let centerDiv = document.createElement("div");
    centerDiv.classList.add("row");
    centerDiv.classList.add("justify-content-center");
    const sevenColDiv = createSevenColDiv();
    centerDiv.appendChild(sevenColDiv);
    return centerDiv;
};

const createSevenColDiv = () => {
    const sevenColDiv = createColDiv(7);
    const firstRow = createFirstRow();
    const secondRow = createRowWithFourColButton("7", "8", "9", "/");
    const thirdRow = createRowWithFourColButton("4", "5", "6", "*");
    const fourthRow = createRowWithFourColButton("1", "2", "3", "-");
    const fifthRow = createRowWithFourColButton(".", "0", "C", "+");
    sevenColDiv.appendChild(firstRow);
    sevenColDiv.appendChild(secondRow);
    sevenColDiv.appendChild(thirdRow);
    sevenColDiv.appendChild(fourthRow);
    sevenColDiv.appendChild(fifthRow);
    return sevenColDiv;
};

const createColDiv = (colNumber) => {
    const colClass = `col-${colNumber}`;
    let colDiv = document.createElement("div");
    colDiv.classList.add(colClass);
    return colDiv;
};

const createButtonInput = value => {
    let input = document.createElement("input");
    input.type = "button";
    input.value = value;
    input.classList.add("form-control");
    if(value === "C") {
        input.classList.add("btn-danger");
        input.id = "clear";
    } else if (value === "=") {
        input.classList.add("btn-info");
        input.id = "equals";
    } else {
        input.classList.add("btn-outline-secondary");
    }
    input.classList.add("form-control");
    input.classList.add("w-100");
    return input;
};

const createTextInput = () => {
    let input = document.createElement("input");
    input.type = "text";
    input.value = "";
    input.id = "calcString";
    input.readOnly = true;
    input.classList.add("form-control");
    input.classList.add("w-100");
    return input;
};

const createButtonCol = (buttonValue) => {
    let col = createColDiv(3);
    let input = createButtonInput(buttonValue);
    col.appendChild(input);
    return col;
};

const createFirstRow = () => {
    let firstRow = document.createElement("div");
    firstRow.classList.add("row");
    firstRow.classList.add("mb-2");
    const colNine = createColDiv(9);
    const textInput = createTextInput();
    colNine.appendChild(textInput);
    const buttonColEquals = createButtonCol("=");
    firstRow.appendChild(colNine);
    firstRow.appendChild(buttonColEquals);
    return firstRow;
};

const createRowWithFourColButton = (firstValue, secondValue, thirdValue, fourthValue) => {
    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("mb-2");
    const buttonColFirst = createButtonCol(firstValue);
    const buttonColSecond = createButtonCol(secondValue);
    const buttonColThird = createButtonCol(thirdValue);
    const buttonColFourth = createButtonCol(fourthValue);
    row.appendChild(buttonColFirst);
    row.appendChild(buttonColSecond);
    row.appendChild(buttonColThird);
    row.appendChild(buttonColFourth);
    return row;
};
