/**
 * The React module being used inside Discord.
 * @type React
 * @memberof BdApi
 */
export const React: any;
/**
 * The ReactDOM module being used inside Discord.
 * @type ReactDOM
 * @memberof BdApi
 */
export const ReactDOM: any;
/**
 * A reference object to get BD's settings.
 * @type object
 * @deprecated
 * @memberof BdApi
 */
export const settings: object;
/**
 * A reference object for BD's emotes.
 * @type object
 * @deprecated
 * @memberof BdApi
 */
export const emotes: object;
/**
 * A reference string for BD's version.
 * @type string
 * @memberof BdApi
 */
export const version: string;
/**
 * Adds a `<style>` to the document with the given ID.
 *
 * @deprecated
 * @param {string} id ID to use for style element
 * @param {string} css CSS to apply to the document
 * @memberof BdApi
 */
export function injectCSS(id: string, css: string): void;
/**
 * Removes a `<style>` from the document corresponding to the given ID.
 *
 * @deprecated
 * @param {string} id ID uses for the style element
 * @memberof BdApi
 */
export function clearCSS(id: string): void;
/**
 * Automatically creates and links a remote JS script.
 *
 * @deprecated
 * @param {string} id ID of the script element
 * @param {string} url URL of the remote script
 * @returns {Promise} Resolves upon onload event
 * @memberof BdApi
 */
export function linkJS(id: string, url: string): Promise<any>;
/**
 * Removes a remotely linked JS script.
 *
 * @deprecated
 * @param {string} id ID of the script element
 * @memberof BdApi
 */
export function unlinkJS(id: string): void;
/**
 * Shows a generic but very customizable modal.
 *
 * @deprecated
 * @param {string} title Title of the modal
 * @param {(string|ReactElement|Array<string|ReactElement>)} content A string of text to display in the modal
 * @memberof BdApi
 */
export function alert(title: string, content: (string | ReactElement | Array<string | ReactElement>)): void;
/**
 * Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.
 *
 * @deprecated
 * @param {string} title Title of the modal
 * @param {(string|ReactElement|Array<string|ReactElement>)} children Single or mixed array of React elements and strings. Everything is wrapped in Discord's `TextElement` component so strings will show and render properly.
 * @param {object} [options] Options to modify the modal
 * @param {boolean} [options.danger=false] Whether the main button should be red or not
 * @param {string} [options.confirmText=Okay] Text for the confirmation/submit button
 * @param {string} [options.cancelText=Cancel] Text for the cancel button
 * @param {callable} [options.onConfirm=NOOP] Callback to occur when clicking the submit button
 * @param {callable} [options.onCancel=NOOP] Callback to occur when clicking the cancel button
 * @returns {string} The key used for this modal
 * @memberof BdApi
 */
export function showConfirmationModal(title: string, content: any, options?: {
    danger?: boolean | undefined;
    confirmText?: string | undefined;
    cancelText?: string | undefined;
    onConfirm?: any;
    onCancel?: any;
} | undefined): string;
/**
 * Shows a toast similar to android towards the bottom of the screen.
 *
 * @deprecated
 * @param {string} content The string to show in the toast
 * @param {object} options Options object. Optional parameter
 * @param {string} [options.type=""] Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn". Default: "".
 * @param {boolean} [options.icon=true] Determines whether the icon should show corresponding to the type. A toast without type will always have no icon. Default: `true`.
 * @param {number} [options.timeout=3000] Adjusts the time (in ms) the toast should be shown for before disappearing automatically. Default: `3000`.
 * @param {boolean} [options.forceShow=false] Whether to force showing the toast and ignore the BD setting
 * @memberof BdApi
 */
export function showToast(content: string, options?: {
    type?: string | undefined;
    icon?: boolean | undefined;
    timeout?: number | undefined;
    forceShow?: boolean | undefined;
}): void;
/**
 * Shows a notice above Discord's chat layer.
 *
 * @deprecated
 * @param {string|Node} content Content of the notice
 * @param {object} options Options for the notice
 * @param {string} [options.type="info" | "error" | "warning" | "success"] Type for the notice. Will affect the color.
 * @param {Array<{label: string, onClick: function}>} [options.buttons] Buttons that should be added next to the notice text
 * @param {number} [options.timeout=10000] Timeout until the notice is closed. Will not fire when set to `0`.
 * @returns {function} A callback for closing the notice. Passing `true` as first parameter closes immediately without transitioning out.
 * @memberof BdApi
 */
export function showNotice(content: string | Node, options?: {
    type?: string | undefined;
    buttons?: {
        label: string;
        onClick: Function;
    }[] | undefined;
    timeout?: number | undefined;
}): Function;
/**
 * Finds a webpack module using a filter.
 *
 * @deprecated
 * @param {function} filter A filter given the exports, module, and moduleId. Returns `true` if the module matches.
 * @returns {any} Either the matching module or `undefined`
 * @memberof BdApi
 */
export function findModule(filter: Function): any;
/**
 * Finds multiple webpack modules using a filter.
 *
 * @deprecated
 * @param {function} filter A filter given the exports, module, and moduleId. Returns `true` if the module matches.
 * @returns {Array} Either an array of matching modules or an empty array
 * @memberof BdApi
 */
export function findAllModules(filter: Function): any[];
/**
 * Finds a webpack module by own properties.
 *
 * @deprecated
 * @param {...string} props Any desired properties
 * @returns {any} Either the matching module or `undefined`
 * @memberof BdApi
 */
export function findModuleByProps(...props: string[]): any;
/**
 * Finds a webpack module by own prototypes.
 *
 * @deprecated
 * @param {...string} protos Any desired prototype properties
 * @returns {any} Either the matching module or `undefined`
 * @memberof BdApi
 */
export function findModuleByPrototypes(...protos: string[]): any;
/**
 * Finds a webpack module by `displayName` property.
 *
 * @deprecated
 * @param {string} name Desired `displayName` property
 * @returns {any} Either the matching module or `undefined`
 * @memberof BdApi
 */
export function findModuleByDisplayName(name: string): any;
/**
 * Gets the internal React data of a specified node.
 *
 * @deprecated
 * @param {HTMLElement} node Node to get the internal React data from.
 * @returns {object|undefined} Either the found data or `undefined`
 * @memberof BdApi
 */
export function getInternalInstance(node: HTMLElement): object | undefined;
/**
 * Loads previously stored data.
 *
 * @deprecated
 * @param {string} pluginName Name of the plugin loading data
 * @param {string} key Which piece of data to load
 * @returns {any} The stored data
 * @memberof BdApi
 */
export function loadData(pluginName: string, key: string): any;
/**
 * Saves JSON-serializable data.
 *
 * @deprecated
 * @param {string} pluginName Name of the plugin saving data
 * @param {string} key Which piece of data to store
 * @param {any} data The data to be saved
 * @memberof BdApi
 */
export function saveData(pluginName: string, key: string, data: any): any;
/**
 * Deletes a piece of stored data. This is different than saving `null` or `undefined`.
 *
 * @deprecated
 * @param {string} pluginName Name of the plugin deleting data
 * @param {string} key Which piece of data to delete
 * @memberof BdApi
 */
export function deleteData(pluginName: string, key: string): void;
/**
 * Monkey-patches a method on an object. The patching callback may be run before, after or instead of target method.
 *
 *  - Be careful when monkey-patching. Think not only about original functionality of target method and your changes, but also about developers of other plugins, who may also patch this method before or after you. Try to change target method behaviour as little as possible, and avoid changing method signatures.
 *  - Display name of patched method is changed, so you can see if a function has been patched (and how many times) while debugging or in the stack trace. Also, patched methods have property `__monkeyPatched` set to `true`, in case you want to check something programmatically.
 *
 * @deprecated
 * @param {object} what Object to be patched. You can can also pass class prototypes to patch all class instances.
 * @param {string} methodName Name of the function to be patched
 * @param {object} options Options object to configure the patch
 * @param {function} [options.after] Callback that will be called after original target method call. You can modify return value here, so it will be passed to external code which calls target method. Can be combined with `before`.
 * @param {function} [options.before] Callback that will be called before original target method call. You can modify arguments here, so it will be passed to original method. Can be combined with `after`.
 * @param {function} [options.instead] Callback that will be called instead of original target method call. You can get access to original method using `originalMethod` parameter if you want to call it, but you do not have to. Can't be combined with `before` or `after`.
 * @param {boolean} [options.once=false] Set to `true` if you want to automatically unpatch method after first call
 * @param {boolean} [options.silent=false] Set to `true` if you want to suppress log messages about patching and unpatching
 * @returns {function} A function that cancels the monkey patch
 * @memberof BdApi
 */
export function monkeyPatch(what: object, methodName: string, options: {
    after?: Function | undefined;
    before?: Function | undefined;
    instead?: Function | undefined;
    once?: boolean | undefined;
    silent?: boolean | undefined;
}): Function;
/**
 * Adds a listener for when the node is removed from the document body.
 *
 * @deprecated
 * @param {HTMLElement} node Node to be observed
 * @param {function} callback Function to run when removed
 * @memberof BdApi
 */
export function onRemoved(node: HTMLElement, callback: Function): any;
/**
 * Wraps a given function in a `try..catch` block.
 *
 * @deprecated
 * @param {function} method Function to wrap
 * @param {string} message Additional message to print when an error occurs
 * @returns {function} The new wrapped function
 * @memberof BdApi
 */
export function suppressErrors(method: Function, message: string): Function;
/**
 * Tests a given object to determine if it is valid JSON.
 *
 * @deprecated
 * @param {object} data Data to be tested
 * @returns {boolean} Result of the test
 * @memberof BdApi
 */
export function testJSON(data: object): boolean;
/**
 * Gets a specific setting's status from BD.
 *
 * @deprecated
 * @param {string} [collection="settings"] Collection ID
 * @param {string} category Category ID in the collection
 * @param {string} id Setting ID in the category
 * @returns {boolean} If the setting is enabled
 * @memberof BdApi
 */
export function isSettingEnabled(collection?: string | undefined, category: string, id: string): boolean;
/**
 * Enables a BetterDiscord setting by IDs.
 *
 * @deprecated
 * @param {string} [collection="settings"] Collection ID
 * @param {string} category Category ID in the collection
 * @param {string} id Setting ID in the category
 * @memberof BdApi
 */
export function enableSetting(collection?: string | undefined, category: string, id: string): any;
/**
 * Disables a BetterDiscord setting by IDs.
 *
 * @deprecated
 * @param {string} [collection="settings"] Collection ID
 * @param {string} category Category ID in the collection
 * @param {string} id Setting ID in the category
 * @memberof BdApi
 */
export function disableSetting(collection?: string | undefined, category: string, id: string): any;
/**
 * Toggles a BetterDiscord setting by IDs.
 *
 * @deprecated
 * @param {string} [collection="settings"] Collection ID
 * @param {string} category Category ID in the collection
 * @param {string} id Setting ID in the category
 * @memberof BdApi
 */
export function toggleSetting(collection?: string | undefined, category: string, id: string): any;
/**
 * Gets some data in BetterDiscord's misc data.
 *
 * @deprecated
 * @param {string} key Key of the data to load
 * @returns {any} The stored data
 * @memberof BdApi
 */
export function getBDData(key: string): any;
/**
 * Sets some data in BetterDiscord's misc data.
 *
 * @deprecated
 * @param {string} key Key of the data to store
 * @returns {any} The stored data
 * @memberof BdApi
 */
export function setBDData(key: string, data: any): any;
/**
 * Gives access to the [Electron Dialog](https://www.electronjs.org/docs/latest/api/dialog/) api.
 * Returns a `Promise` that resolves to an `object` that has a `boolean` cancelled and a `filePath` string for saving and a `filePaths` string array for opening.
 *
 * @deprecated
 * @param {object} options Options object to configure the dialog
 * @param {"open"|"save"} [options.mode="open"] Determines whether the dialog should open or save files
 * @param {string} [options.defaultPath=~] Path the dialog should show on launch
 * @param {Array<object<string, string[]>>} [options.filters=[]] An array of [file filters](https://www.electronjs.org/docs/latest/api/structures/file-filter)
 * @param {string} [options.title] Title for the titlebar
 * @param {string} [options.message] Message for the dialog
 * @param {boolean} [options.showOverwriteConfirmation=false] Whether the user should be prompted when overwriting a file
 * @param {boolean} [options.showHiddenFiles=false] Whether hidden files should be shown in the dialog
 * @param {boolean} [options.promptToCreate=false] Whether the user should be prompted to create non-existant folders
 * @param {boolean} [options.openDirectory=false] Whether the user should be able to select a directory as a target
 * @param {boolean} [options.openFile=true] Whether the user should be able to select a file as a target
 * @param {boolean} [options.multiSelections=false] Whether the user should be able to select multiple targets
 * @param {boolean} [options.modal=false] Whether the dialog should act as a modal to the main window
 * @returns {Promise<object>} Result of the dialog
 * @memberof BdApi
 */
export function openDialog(options: {
    mode?: "open" | "save" | undefined;
    defaultPath?: string | undefined;
}): Promise<object>;
export { loadData as getData, saveData as setData };
