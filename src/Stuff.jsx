function Stuff({name="Employee Man",
title = "Worker"}){
    return(
        <div className="myCard">
            <img className="cardPic" src="https://placehold.co/150x150" className="cardPic"></img>
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    );
}
export default Stuff