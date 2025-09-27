import type { PageServerLoad } from "./$types";
import { NEW_YORK_TIMES_API_KEY } from "$env/static/private"
import { error, json } from "@sveltejs/kit";
export const load: PageServerLoad = async ({ params }) => {
    try{
        const apikey = NEW_YORK_TIMES_API_KEY;
        if (!apikey){
            console.error("error loading the api key from the .env file please check both files for more info");
            return;
        }

        const request = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key='+apikey);
        if(!request.ok){
            console.error(`error couldn't make the api call properly the status of the error is : ${request.status} and the full error message should be : ${request.statusText}`)
            return
        }
        const response = await request.json()
        //console.log(JSON.stringify(response , null , 2))
        console.log(response.results.books[0]);
    }catch(error) {
        console.error("ERROR something happened during the make of the api call : ", error)
    }
}