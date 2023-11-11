export default Data;
/**
 * `Data` is a simple utility class for the management of plugin data. An instance is available on {@link BdApi}.
 * @type Data
 * @summary {@link Data} is a simple utility class for the management of plugin data.
 * @name Data
 */
declare class Data {
    constructor(callerName: any);
    /**
     * Saves JSON-serializable data.
     *
     * @param {string} pluginName Name of the plugin saving data
     * @param {string} key Which piece of data to store
     * @param {any} data The data to be saved
     */
    save(pluginName: string, key: string, data: any): any;
    /**
     * Loads previously stored data.
     *
     * @param {string} pluginName Name of the plugin loading data
     * @param {string} key Which piece of data to load
     * @returns {any} The stored data
     */
    load(pluginName: string, key: string): any;
    /**
     * Deletes a piece of stored data. This is different than saving `null` or `undefined`.
     *
     * @param {string} pluginName Name of the plugin deleting data
     * @param {string} key Which piece of data to delete.
     */
    delete(pluginName: string, key: string): any;
    #private;
}
