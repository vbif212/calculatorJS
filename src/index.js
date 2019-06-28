'use strict';

import constructCalculatorForm from "./constructCalculatorForm";
import setClickListener from "./setClickListener";

document.addEventListener('DOMContentLoaded', function(){
    document.body.appendChild(constructCalculatorForm());
    setClickListener();
});
