;var joose = window.joose || {};
joose.utils = (function(js) {
    
    "use strict";

    var classList;

    // check if an element has a class
    var hasClass = function(elem, classToCheck) {

        // check arguments have been supplied
        if (!elem || !classToCheck) return false;

        // ensure the class to check is a string, converting it if not
        var classToCheck = '' + classToCheck;

        // get the elem's classes
        classList = elem.getAttribute('class');

        // if the element has a class attribute
        if (classList != null) {

            // setup and run the check for the class
            var classRegex = new RegExp('(^| )(' + classToCheck + ')( |$)');
            var classMatch = classList.match(classRegex);
            return (classMatch !== null);

        // otherwise the element has no classes
        } else {
            return false;
        }
    };

    // add a class to an element if it doesn't have it already
    var addClass = function(elem, classToAdd) {

        // check the elem doesn't already have the class and cancel if it does
        if (hasClass(elem, classToAdd)) return false;

        // we only want to add a leading space if there are no classes
        var leadingSpace = (classList === null || classList === "") ? '' : ' ';

        // add the class to the end of the class list found in hasClass function
        elem.setAttribute('class', (classList + leadingSpace + classToAdd));
    };

    // remove a class from an element if it has the class
    var removeClass = function(elem, classToRemove) {

        // check the elem has the class and cancel if it doesn't
        if (!hasClass(elem, classToRemove)) return false;

        // properly split the classes so we remove the correct one, otherwise we might remove part of a longer class
        classList = classList.split(' ');

        // get the number of classes for performance in the loop
        var noOfClasses = classList.length;

        // search for and remove the class from the class list
        for (var i=0; i<noOfClasses; i++) {
            if (classList[i] === classToRemove) {
                classList.splice(i, 1);
                break;
            }
        }

        // join the class list back up into a string
        classList = classList.join(' ');

        // set the class attribute to the list without the defined class
        elem.setAttribute('class', classList);
    };

    // add the class if it doesn't have it, if it does, remove it
    var toggleClass = function(elem, classToToggle) {

        // check whether the element has the class
        if (hasClass(elem, classToToggle)) {

            // remove the class as it is already present
            removeClass(elem, classToToggle);

        } else {
            
            // add the class as not already applied
            addClass(elem, classToToggle);

        }
    }

    return {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass
    }

})(joose);