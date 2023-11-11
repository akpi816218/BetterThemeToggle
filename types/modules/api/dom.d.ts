export default DOM;
/**
 * `DOM` is a simple utility class for dom manipulation. An instance is available on {@link BdApi}.
 * @type DOM
 * @summary {@link DOM} is a simple utility class for dom manipulation.
 * @name DOM
 */
declare class DOM {
    constructor(callerName: any);
    /**
     * Current width of the user's screen.
     * @type {number}
     */
    get screenWidth(): number;
    /**
     * Current height of the user's screen.
     * @type {number}
     */
    get screenHeight(): number;
    /**
     * Adds a `<style>` to the document with the given ID.
     *
     * @param {string} id ID to use for style element
     * @param {string} css CSS to apply to the document
     */
    addStyle(id: string, css: string, ...args: any[]): void;
    /**
     * Removes a `<style>` from the document corresponding to the given ID.
     *
     * @param {string} id ID used for the style element
     */
    removeStyle(id: string, ...args: any[]): void;
    /**
     * Adds a listener for when the node is removed from the document body.
     *
     * @param {HTMLElement} node Node to be observed
     * @param {function} callback Function to run when removed
     */
    onRemoved(node: HTMLElement, callback: Function): any;
    /**
     * Utility to help smoothly animate using JavaScript.
     *
     * @param {function} update Render function indicating the style should be updated
     * @param {number} duration Duration in ms to animate for
     * @param {object} [options] Options to customize the animation
     * @param {function} [options.timing] Optional function calculating progress based on current time fraction. Linear by default.
     */
    animate(update: Function, duration: number, options?: {
        timing?: Function | undefined;
    } | undefined): any;
    /**
     * Utility function to make creating DOM elements easier. Acts similarly
     * to `React.createElement`
     *
     * @param {string} tag HTML tag name to create
     * @param {object} [options] Options object to customize the element
     * @param {string} [options.className] Class name to add to the element
     * @param {string} [options.id] ID to set for the element
     * @param {HTMLElement} [options.target] Target element to automatically append to
     * @param {HTMLElement} [child] Child node to add
     * @returns {HTMLElement} The created HTML element
     */
    createElement(tag: string, options?: {
        className?: string | undefined;
        id?: string | undefined;
        target?: HTMLElement | undefined;
    } | undefined, child?: HTMLElement | undefined): HTMLElement;
    /**
     * Parses a string of HTML and returns the results. If the second parameter is true,
     * the parsed HTML will be returned as a document fragment {@see https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment}.
     * This is extremely useful if you have a list of elements at the top level, they can then be appended all at once to another node.
     *
     * If the second parameter is false, then the return value will be the list of parsed
     * nodes and there were multiple top level nodes, otherwise the single node is returned.
     *
     * @param {string} html HTML to be parsed
     * @param {boolean} [fragment=false] Whether or not the return should be the raw `DocumentFragment`
     * @returns {(DocumentFragment|NodeList|HTMLElement)} The result of HTML parsing
     */
    parseHTML(html: string, fragment?: boolean | undefined): (DocumentFragment | NodeList | HTMLElement);
    #private;
}
