import { writable } from 'svelte/store';

const intialBrightness: string = localStorage.getItem('brightness') ?? 'dark';

export const brightness = writable(intialBrightness);

brightness.subscribe((value) => {
	localStorage.setItem('brightness', value);
});
