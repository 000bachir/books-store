import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import type { GoogleBookItem } from "$lib/types";



export const load: PageServerLoad = async ({ url }) => {
    const searchTerm = url.searchParams.get("q")?.trim();    
    if (!searchTerm) {
        console.log("") 
        console.log("------------no search term has been provided by the user------------")
        console.log("")

        return {
            books: []
        }
    }

    try {
        // Fix 2: Add more debugging
        console.log('Search term:', searchTerm);
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&maxResults=20`;
        console.log('API URL:', apiUrl);
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw error(response.status, `HTTP request failed: ${response.statusText}`);
        }
        const data = await response.json();
        if (!data.items || !Array.isArray(data.items)) {
            console.log('No items returned from the api call');
            return {
                books: []
            }
        }
        const books = data.items.map((item: GoogleBookItem) => ({
            id: item.id,
            title: item.volumeInfo?.title || "N/A",
            author: item.volumeInfo?.authors || [], 
            thumbnails: item.volumeInfo?.imageLinks?.thumbnail,
            categories: item.volumeInfo?.categories || [],
            publisher: item.volumeInfo?.publisher,
            description: item.volumeInfo?.description
        }));
        
        console.log('Processed books:', books.length);
        
        return {
            books: books
        }
    } catch (err) {
        console.error("Error fetching books from API:", err);
        return {
            books: []
        }
    }
}