

function ProfilePic(){
    const imageUrl = './src/assets/match.jpeg'

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img onDoubleClick={(e) => handleClick(e)} src={imageUrl}></img>
    );
}

export default ProfilePic