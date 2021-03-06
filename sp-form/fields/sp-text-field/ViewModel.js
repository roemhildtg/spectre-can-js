import Field from 'spectre-canjs/util/field/Field';

/**
 * A `<sp-text-field />` component's ViewModel
 * @class ViewModel
 * @extends Field
 * @memberof sp-text-field
 */
export default Field.extend('TextField', {
    /** @lends sp-text-field.ViewModel.prototype */
    /**
     * The type of input to create.
     * The default is 'text'
     * @example
     * textType="number"
     * @memberof sp-text-field.ViewModel.prototype
     * @type {String}
     */
    textType: {default: 'text', type: 'string'},
    /**
     * Show or hide the clear input addon button 
     * @example
     * showClear="true"
     * @memberof sp-text-field.ViewModel.prototype
     * @type {Boolean}
     */
    showClear: {default: false, type: 'boolean'},
    /**
     * Checks for the enter keypress and triggers a change event on the input
     * The enter key press triggers a submit event on the form, but before the
     * submit event, we need to trigger a change on the field value
     * @param  {domElement} element The form input element
     * @param  {KeyDownEvent} event The form submit event
     * @return {Boolean}
     */
    beforeSubmit (element, event) {
        if (event.keyCode === 13) {
            element.dispatchEvent(new Event('change'));
        }
        return true;
    },
    clearValue () {
        this.value = '';
    },
    connectedCallback (element) {
        if (this.onInsert) {
            const el = element.querySelector('input,textarea');
            if (el) {
                return this.onInsert(el);
            }
        }
        return null;
    }
});