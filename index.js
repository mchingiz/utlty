/**
 * Scapegoat
 * https://github.com/mchingiz/utlty
 *
 * Copyright (c) 2017 Chingiz Mammadli
 * Licensed under the MIT license.
 */

var $ = require("jquery");

'use strict';

module.exports = {
    Array: {
        printArray: function(array, delimeter = ", "){
            var str = "";

            for(var i=0; i<array.length; i++){
                str += array[i] + delimeter;
            }

            str = str.substr(0, str.length-delimeter.length);

            console.log(str);
        },
        arrayToString: function(array, delimeter = ", "){
            var str = "";

            for(var i=0; i<array.length; i++){
                str += array[i] + delimeter;
            }

            str = str.substr(0, str.length-delimeter.length);

            return str;
        },
        last: function(array,reverseIndex=0){
            return array[array.length-reverseIndex-1];
        }
    }
}
