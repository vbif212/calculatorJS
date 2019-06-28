'use strict';

export default function () {
    const inputCalcString = getElementById("calcString");
    const allRemainingInputButtons = getElementsBySelector("input[type=button]:not(#clear):not(#equals)");
    setListener(
        "click",
        getElementById("equals"),
        () => {
            setElementValue(inputCalcString, eval(inputCalcString.value))
        }
    );
    setListener(
        "click",
        getElementById("clear"),
        () => {
            setElementValue(inputCalcString, "")
        }
    );
    allRemainingInputButtons.forEach(element => {
        setListener(
            "click",
            element,
            () => {
                setElementValue(inputCalcString, inputCalcString.value + element.value)
            }
        );
    });
};

const getElementById = id => {
    return document.getElementById(id);
};

const getElementsBySelector = selector => {
    return document.querySelectorAll(selector);
};

const setListener = (action, element, func) => {
    element.addEventListener(action, func);
};

const setElementValue = (element, value) => {
    element.value = value;
};
