// this file handles theme and brightness changes

import { brightness } from '$lib/stores/theme.store';

export class ThemeHelper {
	// toggle between light and dark mode
	public static toggleBrightness() {
		brightness.update((t) => (t === 'light' ? 'dark' : 'light'));
	}
}
