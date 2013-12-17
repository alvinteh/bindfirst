bindfirst 1.01
=========

A jQuery plugin that allows binding event handlers such that they are executed first.

Usage
-------

    $.bindFirst(
        event,              String representing the event name
        eventListener       Function to be called upon event trigger
    )

Binds the specified event and event listener to the specified element in such a way that it will be the first
event listener executed by jQuery.

Dependencies
-------

* jQuery 1.8+

License
-------
Copyright 2013 Alvin Teh.
Licensed under the MIT license.