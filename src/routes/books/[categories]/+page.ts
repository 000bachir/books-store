import type { PageLoad } from "./$types";

export const load : PageLoad = ({fetch , params}) =>{
    console.log(params)
}