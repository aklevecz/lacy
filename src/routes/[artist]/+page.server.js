import data from '$lib/data';

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	const artistNames = data.map((artist) => ({
		artist: artist.name || artist.links[0].title
	}));
	return artistNames;
}

export let prerender = true
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const artist = data.find((artist) => artist.name === params.artist);
    return {artist};
};