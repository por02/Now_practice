import { posts } from '$lib/data.js'

export function load(){
    
    const post = {
        summaries : posts.map( (post) => ({
            slug: post.slug,
            title: post.title 
        }) )
    }


    return post
}