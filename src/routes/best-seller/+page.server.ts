import type { PageServerLoad } from "./$types";
import { NEW_YORK_TIMES_API_KEY } from "$env/static/private"
    
export const load: PageServerLoad = async ({ params }) => {
    try {
        const apikey = NEW_YORK_TIMES_API_KEY;
        if (!apikey) {
            console.error("error loading the api key from the .env file please check both files for more info");
            return;
        };

        const request = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=' + apikey);
        if (!request.ok) {
            console.error(`error couldn't make the api call properly the status of the error is : ${request.status} and the full error message should be : ${request.statusText}`)
            return;
        };
        const BestSellers = await request.json();
        //console.log(BestSellers.results.books)
        if (!BestSellers.results.books || !Array.isArray(BestSellers.results.books)) {
            console.error("error not a single items has been returned from the api call")
            return {
                books: []
            };
        };
        return {
            BestSellers: BestSellers.results.books 
        };

    } catch (error) {
        console.error("ERROR something happened during the make of the api call : ", error)
    };
};