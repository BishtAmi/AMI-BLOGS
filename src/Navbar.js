import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 style={{ 
          color: 'Blue',
          fontSize: '50px'
        }}>NITA Blogs</h1>
      <div className="links">
        <Link to="/"  style={{ 
          color: 'white', 
          backgroundColor:"black",
          borderRadius: '8px' 
        }}
        >Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor:"black",
          borderRadius: '8px' 
        }}>Add Blog</Link>
        <Link to="/uploadphoto" style={{ 
          color: 'white', 
          backgroundColor:"black",
          borderRadius: '8px' 
        }}>Add photo</Link>
        <Link to="/Contact" style={{ 
          color: 'white', 
          backgroundColor:"black",
          borderRadius: '8px' 
        }}>Contact Us</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;