import { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import authService from "../appwrite/auth";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            authService.getCurrentUser().then((userDate) => {
                const filteredDocuments = posts.documents.filter(documents => documents.userId == userDate.$id);
                console.log(posts);
                if (filteredDocuments) {
                    setPosts(filteredDocuments)
                }
            });

        });
    }, [])

    return (
        <div className='w-full py-10'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/5'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts