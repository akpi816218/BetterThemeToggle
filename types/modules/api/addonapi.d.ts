export default AddonAPI;
/**
 * `AddonAPI` is a utility class for working with plugins and themes. Instances are accessible through the {@link BdApi}.
 * @name AddonAPI
 */
declare class AddonAPI {
    constructor(manager: any);
    /**
     * The path to the addon folder.
     * @type string
     */
    get folder(): string;
    /**
     * Determines if a particular addon is enabled.
     * @param {string} idOrFile Addon ID or filename
     * @returns {boolean}
     */
    isEnabled(idOrFile: string): boolean;
    /**
     * Enables the given addon.
     * @param {string} idOrFile Addon ID or filename
     */
    enable(idOrAddon: any): any;
    /**
     * Disables the given addon.
     * @param {string} idOrFile Addon ID or filename
     */
    disable(idOrAddon: any): any;
    /**
     * Toggles if a particular addon is enabled.
     * @param {string} idOrFile Addon ID or filename
     */
    toggle(idOrAddon: any): any;
    /**
     * Reloads if a particular addon is enabled.
     * @param {string} idOrFile Addon ID or filename
     */
    reload(idOrFileOrAddon: any): any;
    /**
     * Gets a particular addon.
     * @param {string} idOrFile Addon ID or filename
     * @returns {object} Addon instance
     */
    get(idOrFile: string): object;
    /**
     * Gets all addons of this type.
     * @returns {Array<object>} Array of all addon instances
     */
    getAll(): Array<object>;
    #private;
}
