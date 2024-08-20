import data from '$lib/data';

export let prerender = true
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const artist = data.find((artist) => artist.name === params.artist);
    return {artist};
};