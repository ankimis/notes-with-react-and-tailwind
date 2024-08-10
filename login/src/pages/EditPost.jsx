import React,{useEffect,useState}from 'react'
import { Container,PostForm } from '../componenets'
import  appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom';


function EditPost() {
    const [posts,setposts] =useState();
    const {slug} =useParams();
    const navigate=useNavigate();


    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){setposts(post)}               
            }).catch((error)=>{console.log(error)})
        }
        else{
            navigate("/")
        }
    },[slug,navigate])
   
  return posts ? (
    <div className='py-8'>
        <Container>
            <PostForm post={posts}/>
        </Container>
    </div>
  ):null
}

export default EditPost