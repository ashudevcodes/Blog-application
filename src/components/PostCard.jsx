import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='w-full justify-center mb-2'>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
            className='rounded-xl overflow-hidden' />

        </div>
        <h2
          className='text-xl font-bold text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
        >{title}</h2>
      </div>
    </Link>
  )
}


export default PostCard