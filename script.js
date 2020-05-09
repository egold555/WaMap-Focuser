// ==UserScript==
// @name         Wamap Focuser
// @namespace    https://eric.golde.org/
// @version      1.0.0
// @description  Fix for WaMap, tired of manually selecting the first forum element.
// @author       Eric Golde
// @match        https://www.wamap.org/assessment/showtest.php?action=skip&to=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('form').find('*').filter(':input:visible:first')[0].focus();
})();
