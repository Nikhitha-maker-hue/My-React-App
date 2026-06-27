function FruitCardV2(props){
    console.log(props)
     return(
        <div className="col-4 mx-auto" style={{backgroundColor:"ButtonHighlight"}}>
                <h3 key={props.fruit.sno}>{props.fruit.fruitName}</h3>
                <img src={require(`../../assets/images/fruits/${props.fruit.fruitImage}`)} alt=""  width={100} height={100}/>
                <h3>{props.fruit.price}<span style={{fontsize : "100px",}}>&#8377;/{props.fruit.unit}</span></h3>
                </div>
                )
            }
export default FruitCardV2;