*AppServer*
===========

Summary
-------

A MEAN / Bootstrap / AngularJS / Node.js single-page, tabbed UI, application
server skeleton with core functionality

Overview
--------

AppServer is a skeleton application server that follows the MongoDB, Express,
AngularJS, and Node.js (MEAN) application model, a popular fullstack
JavaScript-based framework suite for web applications.  In comparison to other
web frameworks, Express provides straightforward support for browser and
programmatic RESTful HTTP request/response URL handling, not unlike the
Ruby-based Sinatra framework.  MongoDB and Mongoose provide a database backend
for web services-related persistence that can be more straightforward,
depending on app server requirements, than setting up SQL- and
Ruby/Sequel-based backends.  AngularJs provides frontend web services, while
Node.js provides backend services.

Angular/Bootstrap Design
------------------------

AppServer creates a custom tabbed main page positioned below a custom toolbar.
The tabbed design borrows some functionality from 
[Hafiz Faraz's Tab Tutorial](http://blog.hfarazm.com/tabs-in-angularjs/).  The
tabs have a minor resemblance to jQuery pills, but aligned visually more like
tabs.  The custom toolbar is div-based table altenative to a navigation bar.
The toolbar could be replaced by a navigation bar, if an app only requires a
series of dropdown menus, that is, homeogeneous content.  The custom toolbar
supports heterogeneous content, such as the right-justified real-time UTC time
display.  Lastly, AppServer employs
[Greg Franko's SelectBoxIt](https://github.com/gfranko/jquery.selectBoxIt.js)
for the demo content within the tabs, but, of course, each tab's contents should
be replaced for each respective web application.

