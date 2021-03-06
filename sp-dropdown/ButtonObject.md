@typedef {Object} sp-dropdown.ButtonObject ButtonObject
@memberof sp-dropdown.types
@option {String} text The title to display on the button
@option {Function(ButtonObject)} onClick A click handler to call with the object.
@option {String} iconClass The class to use for the button icon
@option {String} tooltip The tooltip text to display
@option {Boolean} header Place a menu header before this button when used in a menu
@option {String} eventName The event to dispatch when the button is clicked. This allows developers to bind functions to custom events, like `(eventName)="functionName"`

@description
A general use button object used by several widgets. Button objects properties
are implemented differently based on where the button is used. For example,
the dropdown menu generated by sp-list-tables uses all of the properties, while
the sp-dropdown only uses a few.

The dropdown menu
