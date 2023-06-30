import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
 const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }
  const likeit=()=>{
   var element=document.getElementById('Like'),
   text=element.textContent||element.innerHTML;
   if(text==="Like") element.innerHTML="liked";
   else element.innerHTML="Like";
  }
  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2 style={{
            color:'Blue',
            fontSize:"30px"
            
          } 
          }>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={likeit} id="Like">Like</button>
          <button onClick={handleClick}>delete</button> 
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;