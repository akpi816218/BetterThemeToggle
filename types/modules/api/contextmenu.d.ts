export default ContextMenu;
/**
 * `ContextMenu` is a module to help patch and create context menus. Instance is accessible through the {@link BdApi}.
 * @type ContextMenu
 * @summary {@link ContextMenu} is a utility class for interacting with React internals.
 * @name ContextMenu
 */
declare class ContextMenu {
    /**
     * Allows you to patch a given context menu. Acts as a wrapper around the `Patcher`.
     *
     * @param {string} navId Discord's internal `navId` used to identify context menus
     * @param {function} callback Callback function that accepts the React render tree
     * @returns {function} A function that automatically unpatches
     */
    patch(navId: string, callback: Function): Function;
    /**
     * Allows you to remove the patch added to a given context menu.
     *
     * @param {string} navId The original `navId` from patching
     * @param {function} callback The original callback from patching
     */
    unpatch(navId: string, callback: Function): void;
    /**
     * Builds a single menu item. The only prop shown here is the type, the rest should
     * match the actual component being built. View those to see what options exist
     * for each, they often have less in common than you might think.
     *
     * @param {object} props Props used to build the item
     * @param {string} [props.type="text"] Type of the item, options: text, submenu, toggle, radio, custom, separator
     * @returns {object} The created component
     *
     * @example
     * // Creates a single menu item that prints "MENU ITEM" on click
     * ContextMenu.buildItem({
     *      label: "Menu Item",
     *      action: () => {console.log("MENU ITEM");}
     * });
     *
     * @example
     * // Creates a single toggle item that starts unchecked
     * // and print the new value on every toggle
     * ContextMenu.buildItem({
     *      type: "toggle",
     *      label: "Item Toggle",
     *      checked: false,
     *      action: (newValue) => {console.log(newValue);}
     * });
     */
    buildItem(props: {
        type?: string | undefined;
    }): object;
    /**
     * Creates the all the items **and groups** of a context menu recursively.
     * There is no hard limit to the number of groups within groups or number
     * of items in a menu.
     *
     * @param {Array<object>} setup Array of item props used to build items. See {@link ContextMenu.buildItem}.
     * @returns {Array<object>} Array of the created component
     *
     * @example
     * // Creates a single item group item with a toggle item
     * ContextMenu.buildMenuChildren([{
     *      type: "group",
     *      items: [{
     *          type: "toggle",
     *          label: "Item Toggle",
     *          active: false,
     *          action: (newValue) => {console.log(newValue);}
     *      }]
     * }]);
     *
     * @example
     * // Creates two item groups with a single toggle item each
     * ContextMenu.buildMenuChildren([{
     *     type: "group",
     *     items: [{
     *         type: "toggle",
     *         label: "Item Toggle",
     *         active: false,
     *         action: (newValue) => {
     *             console.log(newValue);
     *         }
     *     }]
     * }, {
     *     type: "group",
     *     items: [{
     *         type: "toggle",
     *         label: "Item Toggle",
     *         active: false,
     *         action: (newValue) => {
     *             console.log(newValue);
     *         }
     *     }]
     * }]);
     */
    buildMenuChildren(setup: Array<object>): Array<object>;
    /**
     * Creates the menu *component* including the wrapping `ContextMenu`.
     * Calls {@link ContextMenu.buildMenuChildren} under the covers.
     * Used to call in combination with {@link ContextMenu.open}.
     *
     * @param {Array<object>} setup Array of item props used to build items. See {@link ContextMenu.buildMenuChildren}.
     * @returns {function} The unique context menu component
     */
    buildMenu(setup: Array<object>): Function;
    /**
     * Function that allows you to open an entire context menu. Recommended to build the menu with this module.
     *
     * @param {MouseEvent} event The context menu event. This can be emulated, requires target, and all X, Y locations.
     * @param {function} menuComponent Component to render. This can be any React component or output of {@link ContextMenu.buildMenu}.
     * @param {object} config Configuration/props for the context menu
     * @param {string} [config.position="right"] Default position for the menu, options: "left", "right"
     * @param {string} [config.align="top"] Default alignment for the menu, options: "bottom", "top"
     * @param {function} [config.onClose] Function to run when the menu is closed
     */
    open(event: MouseEvent, menuComponent: Function, config: {
        position?: string | undefined;
        align?: string | undefined;
        onClose?: Function | undefined;
    }): any;
    /**
     * Closes the current opened context menu immediately.
     */
    close(): void;
}
