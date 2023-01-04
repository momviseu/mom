
// import {Link} from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "./Profile.css";
// import Post from "./Components/Profile/Post";


const Profile = () =>{

    const navigate= useNavigate();
    const handleClick = () =>{
        navigate('/post')
    }
    
    return(
        <div class="container mt-5 ">
        


<div class="row py-5 px-4 ">
    <div class="col-xl-4 col-md-6 col-sm-10 mx-auto home">

        
        <div class="bg-white shadow rounded overflow-hidden ">
            <div class="px-4 pt-0 pb-4 bg-dark">
                <div class="media align-items-end profile-header d-flex ">
                    <div class="profile mr-3"><img src="https://th.bing.com/th?q=Engineering+Mechanics&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=KH&setlang=en&adlt=moderate&t=1&mw=247" alt="..." width="130" class="rounded mb-2 img-thumbnail"/>
                    {/* <a href="#" class="btn btn-dark btn-sm btn-block">Edit profile</a> */}
                    </div>
                    <div class="media-body mb-5 text-white px-4">
                        <h4 class="mt-0 mb-0">Manuella Tarly</h4>
                        <p class="small mb-4"> <i class="fa fa-map-marker mr-2"></i>Cambodia</p>
                    </div>
                </div>
                
                
            
            </div>

            <div class="bg-light p-4  d-flex justify-content-end text-center">
                
            </div>
            <div class="p-4 d-flex justify-content-end">
            <button  class="btn btn-primary"onClick={()=>handleClick()}>
                {/* <Link to="/post">Post</Link> */}
                Post
            </button>
            </div>

            

            <div class="py-4 px-4">
                
                <div class=" mb-3">
                    <p>Phone: 015791792</p>              
                    <p>Email: momviseu@gmail.com</p>
                    <p>Name Company: ABC</p>              
                    <p>Service:</p>
                    <p>Type Company: Engineering</p>              
                    <p>Address Company: Phnom Penh</p>
                    
                </div>
                
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5>RUPP</h5>
                    {/* <h5 class="mb-0">Recent photos</h5><a href="#" class="btn btn-link text-muted">Show all</a> */}
                </div>
                <div class="row">
                    <div class="col-lg-6 mb-2 pr-lg-1"><img src="https://bootstrapious.com/i/snippets/sn-profile/img-3.jpg" alt="" class="img-fluid rounded shadow-sm"/></div>
                    <div class="col-lg-6 mb-2 pl-lg-1"><img src="https://bootstrapious.com/i/snippets/sn-profile/img-4.jpg" alt="" class="img-fluid rounded shadow-sm"/></div>
                    <div class="col-lg-6 pr-lg-1 mb-2"><img src="https://bootstrapious.com/i/snippets/sn-profile/img-5.jpg" alt="" class="img-fluid rounded shadow-sm"/></div>
                    <div class="col-lg-6 pl-lg-1"><img src="https://bootstrapious.com/i/snippets/sn-profile/img-6.jpg" alt="" class="img-fluid rounded shadow-sm"/></div>
                </div>
               
            </div>
        </div>

    </div>
</div>
        </div>
    )
}
export default Profile;