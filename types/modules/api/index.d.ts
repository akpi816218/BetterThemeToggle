/**
 * `BdApi` is a globally (`window.BdApi`) accessible object for use by plugins and developers to make their lives easier.
 * @name BdApi
 */
export declare class BdApi {
	constructor(pluginName: any);
	Patcher: Patcher | undefined;
	Data: Data | undefined;
	DOM: DOM | undefined;
	get Plugins(): AddonAPI;
	get Themes(): AddonAPI;
	get Webpack(): any;
	get Utils(): any;
	get UI(): any;
	get ReactUtils(): any;
	get ContextMenu(): ContextMenu;
	Components: {
		readonly Tooltip: any;
	};
	Net: {
		fetch: typeof fetch;
	};
}
declare namespace BdApi {
	export { PluginAPI as Plugins };
	export { ThemeAPI as Themes };
	export { PatcherAPI as Patcher };
	export { Webpack };
	export { DataAPI as Data };
	export { UI };
	export { ReactUtils };
	export { Utils };
	export { DOMAPI as DOM };
	export { ContextMenuAPI as ContextMenu };
	export namespace Components {
		let Tooltip: any;
	}
	export namespace Net {
		export { fetch };
	}
}
export default BdApi;
import Patcher from './patcher';
import Data from './data';
import DOM from './dom';
import AddonAPI from './addonapi';
import ContextMenu from './contextmenu';
import fetch from './fetch';
declare const PluginAPI: AddonAPI;
declare const ThemeAPI: AddonAPI;
declare const PatcherAPI: Patcher;
import Webpack from './webpack';
declare const DataAPI: Data;
import UI from './ui';
import ReactUtils from './reactutils';
import Utils from './utils';
declare const DOMAPI: DOM;
declare const ContextMenuAPI: ContextMenu;
