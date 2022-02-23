"use strict";
/**
 * Initialize the global store
 */
function initStore() {
    Alpine.store('store', {
        user: "",
        init: function () {
            console.log("Init Alpine store");
        },
        hxget: function (url, destination) {
            htmx.ajax('GET', url, destination);
        },
    });
    return Alpine.store("store");
}
