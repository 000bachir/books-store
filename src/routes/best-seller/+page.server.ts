import type { PageServerLoad } from "./$types";
import { NEW_YORK_TIMES_API_KEY } from "$env/static/private"
import { error, json } from "@sveltejs/kit";
import type { NytBook } from "$lib/types";
export const load: PageServerLoad = async ({ params }) => {
    try {
        const apikey = NEW_YORK_TIMES_API_KEY;
        if (!apikey) {
            console.error("error loading the api key from the .env file please check both files for more info");
            return;
        }

        const request = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=' + apikey);
        if (!request.ok) {
            console.error(`error couldn't make the api call properly the status of the error is : ${request.status} and the full error message should be : ${request.statusText}`)
            return
        }
        const response = await request.json();
        console.log(response)
        if (!response.results.books || !Array.isArray(response.results.books)) {
            console.log("error not a single items has been returned from the api call")
            return {
                books: []
            }
        }

        let BestSellers = response.items.map((item: NytBook) => ({
            author: item.author,
            title: item.title,
            descreption: item.description,
            price: item.price,
            thumbnail: item.book_image,
            buyLinks: item.buy_links
        }))

        console.log(BestSellers)

        return {
            BestSellers: BestSellers
        }

    } catch (error) {
        console.error("ERROR something happened during the make of the api call : ", error)
    }
}