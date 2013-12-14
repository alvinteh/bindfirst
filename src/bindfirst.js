(function(factory) {
    if (typeof define === "function" && define.amd) {
        //jQuery was loaded via AMD
        define(["jquery"], factory);
    }
    else {
        //jQuery was loaded globally
        factory(jQuery);
    }
}(function($) {
    "use strict";

    /*
        $.bindFirst(
            event,              String representing the event name
            eventListener       Function to be called upon event trigger
        )

        Binds the specified event and event listener to the specified element in such a way that it will be the first
        event listener executed by jQuery.
    */

    $.fn.bindFirst = function(event, eventListener) {
        
        $(this).each(function() {
            var eventListenerData = $._data($(this)[0], "events");
            var eventListeners = eventListenerData !== undefined && eventListenerData[event] !== undefined ?
                eventListenerData[event] : [];
            
            ///Add the event listener in the regular way
            $(this).bind(event, eventListener);

            if (eventListeners.length > 1) {
                ///Shift the event listener to the beginning of the array if necessary
                eventListeners.unshift(eventListeners.pop());
            }
        });
    };
    
}));