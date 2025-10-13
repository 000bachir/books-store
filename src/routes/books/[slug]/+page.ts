import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, fetch }) => {
    try {
        //@ts-ignore
        const { slug } = params;

        const request = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${slug}`)
        if (!request.ok) {
            console.error(`error couldn't make the api call properly the status of the error is : ${request.status} and the full error message should be : ${request.statusText}`)
            return
        }

        const data = await request.json()

        return {
            slug,
            books: data.items || []
        };
    } catch (error) {
        console.error("error : ", error)
    }


}
