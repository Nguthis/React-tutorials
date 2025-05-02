import profilePic from "./assets/passport.jpg"
function Card(){
    return(
        <div className="card">
            <img className= "card-image" src={profilePic} alt="profile-picture" />
            <h2 className="card-title">Anthony Nguthiru</h2>
            <p className="card-text">I go to the gym and code for fun!</p>
        </div>
    )
}

export default Card