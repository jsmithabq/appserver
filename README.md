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

AppServer is a skeleton app that provides an example of a MEAN implementation,
but requires modifications, as well as domain-related extensions, for specific
application functionality.  That is, AppServer is not a zero-modification
application, but it is extensible for many domain application tasks that fit
the single-page model.

Angular/Bootstrap Design
------------------------

AppServer implements a custom tabbed main page positioned below a custom
toolbar.  The tabbed design borrows functionality from 
[Hafiz Faraz's Tab Tutorial](http://blog.hfarazm.com/tabs-in-angularjs/).  The
tabs have a minor resemblance to jQuery pills, but align visually more like
tabs.  The custom toolbar is a div-based table alternative to a navigation bar.
If an app only requires a series of dropdown menus, that is, homogeneous
content, the toolbar could be replaced by a navigation bar.  As currently
configured, the custom toolbar supports heterogeneous content, such as the
right-justified real-time UTC time display.  Lastly, AppServer employs
[Greg Franko's SelectBoxIt](https://github.com/gfranko/jquery.selectBoxIt.js)
for the demo content within the tabs, but, of course, each tab's contents should
be replaced based on the requirements of each web application.

Each div-based tabbed panel is defined within a form.  If no traditional form
processing is anticipated, the forms could be replaced by, say, divs, provided
that corresponding changes are made to CSS classes/instances.  In its current
arrangement, the forms can be configured for standard HTML processing by setting
the button type to "submit", or can remain as is with a button type of "button".
In the latter case, the "form processing"  must be handled through an on-click
JavaScript event, or similar event processing.

Cascading Style Sheets
----------------------

The rightmost tab, an "Options" tab, includes a select box for page style.
AppServer includes several Cascading Style Sheets (CSSes) for various color
styles.  The "Preview" button loads the selected style sheet.

CSS styles are handled by setting one primary style sheet from multiple style
sheets, the remaining style sheets are set as alternates.

AppServer does not use LESS, due to aesthetic and performance hits associated
with reloading style sheets.  Instead, it defines multiple identical style
sheets, except for color variations.  Because CSS variables are just now
receiving preliminary support, AppServer employs pseudo CSS variables, defined
near the top of each style sheet:

    ====================
    ...
    "$lgo_fg" : "#732525"
    ...
    =====================


Colors are implemented using a comment-and-RGB-value scheme, for example:

    #logo-a {
      color: /* $lgo_fg */ #732525;
      ...
    }

Instance and class changes should be propagated to other style sheets, for
example, copying and replacing everything below the pseudo CSS variable
sections.  Following such a copy operation, each style sheet's color settings
can be restored by propagating the pseudo CSS variable settings throughout the
respective style sheet.

AppServer includes two "sub-colors.*" scripts in 'binsh' that search for and
substitute each occurrence of a "pseudo color variable comment plus RGB value"
with the RGB value specified in the pseudo variable definitions.  This scheme
can be replaced by CSS variables once they are widely supported.

