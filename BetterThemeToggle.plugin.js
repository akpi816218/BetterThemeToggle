/**
 * @name BetterThemeToggle
 * @author akpi
 * @description Add a hotkey to toggle between light and dark theme
 * @version 1.0.0
 * @authorId 817214551740776479
 * @authorLink https://akpi.is-a.dev
 * @website https://github.com/akpi816218/BetterThemeToggle
 * @source https://github.com/akpi816218/BetterThemeToggle/blob/gitmaster/BetterThemeToggle.plugin.ts
 */

module.exports = class {
	/** @type {string} */
	hotkey;
	/** @type {'light' | 'dark'} */
	theme;

	constructor() {
		this.theme =
			BdApi.Data.load('BetterThemeToggle', 'theme') ??
			document.documentElement.classList.contains('theme-dark')
				? 'dark'
				: 'light';
		this.update();
		this.hotkey =
			BdApi.Data.load('BetterThemeToggle', 'hotkey') || 'Alt+Shift+T';
		BdApi.Data.save('BetterThemeToggle', 'hotkey', this.hotkey);
	}

	start() {
		document.addEventListener('keydown', (e) => {
			if (
				e.key.toLowerCase() === this.hotkey.split('+').pop().toLowerCase() &&
				e.ctrlKey === this.hotkey.includes('Control') &&
				e.shiftKey === this.hotkey.includes('Shift') &&
				e.altKey === this.hotkey.includes('Alt')
			) {
				this.toggle();
			}
		});
	}

	stop() {}

	// getSettingsPanel() {
	// 	const settingsPanel = document.createElement('div');
	// 	settingsPanel.id = 'BetterThemeToggleSettingsPanel';
	// 	settingsPanel.innerHTML = `<input name="hotkey" type="text" placeholder="Hotkey" onkeydown="if('Shift'!==event.key && 'Control'!==event.key && 'Alt'!==event.key){this.value = event.code; this.parentNode.children[5].value = event.keyCode; toggleYourStuff.updateSettings();} event.preventDefault(); event.stopImmediatePropagation(); return false;" value="${
	// 		this.hotkey
	// 	}"></input>
	// <label><input name="ctrl" type="checkbox" onchange="toggleYourStuff.updateSettings()"${
	// 	ctrl ? ' checked' : ''
	// }>Ctrl</label>
	// <label><input name="shift" type="checkbox" onchange="toggleYourStuff.updateSettings()"${
	// 	shift ? ' checked' : ''
	// }>Shift</label>
	// <label><input name="alt" type="checkbox" onchange="toggleYourStuff.updateSettings()"${
	// 	alt ? ' checked' : ''
	// }>Alt</label>
	// <input name="keycode" type="hidden" value="${keycode}">`;
	// }

	toggle() {
		this.theme = this.theme === 'light' ? 'dark' : 'light';
		this.update();
	}

	update() {
		if (this.theme === 'light') {
			document.documentElement.classList.remove('theme-dark');
			document.documentElement.classList.add('theme-light');
		} else {
			document.documentElement.classList.remove('theme-light');
			document.documentElement.classList.add('theme-dark');
		}
		BdApi.Data.save('BetterThemeToggle', 'theme', this.theme);
	}
};
