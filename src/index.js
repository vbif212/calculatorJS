'use strict';

import "bootstrap";
import constructCalculatorForm from "./constructCalculatorForm";

document.addEventListener('DOMContentLoaded', function(){
    document.body.appendChild(constructCalculatorForm());
});

