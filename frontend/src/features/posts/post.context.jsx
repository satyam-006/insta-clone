import { useState } from "react";
import { createContext } from "react";

export const PostContext = createContext()

export const PostProvider = ({children})=>{

    const [loading, setLoading] = useState(false)
    const [postCountValue, setPostCountValue] = useState(0)
    const [post, setPost] = useState(null)
    const [feed, setFeed] = useState(null)

    return (
        <PostContext.Provider value={{loading,setLoading,post,setPost,feed,setFeed,postCountValue,setPostCountValue}}>
            {children}
        </PostContext.Provider>
    )

}