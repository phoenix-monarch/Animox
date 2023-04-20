import type { PageLoad } from "./$types";


export const load: PageLoad = async ({ url }) => {
    const anime = String(url.searchParams.get("anime"))

    return {
        id: anime
    }
}