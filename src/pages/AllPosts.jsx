import { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import authService from "../appwrite/auth";
import { Query } from 'appwrite';

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        authService.getCurrentUser().then((user) => {
            // console.log(user)
            appwriteService.getPosts([Query.equal("userId", String(user.$id)), Query.orderDesc("$updatedAt")]).then((posts) => {
                authService.getCurrentUser().then((userDate) => {
                    const filteredDocuments = posts.documents.filter(documents => documents.userId == userDate.$id);
                    // console.log(posts);
                    if (filteredDocuments) {
                        setPosts(filteredDocuments)
                    }
                });

            });
        });
    }, [])

    return (
        <div className='w-full py-10'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/2'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts