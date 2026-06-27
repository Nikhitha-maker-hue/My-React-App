function FruitsAppV3(){
    const fruitlist=[
        {
            sno : 1,
            fruitName :'Kiwi',
            fruitImage :'kiwi.jpeg',
            unit : 'kg',
            Price :'100'
        },
        {
            sno : 2,
            fruitName :'Mango',
            fruitImage :'mango.jpeg',
            unit : 'kg',
            Price :'50'
        },
        {
            sno : 3,
            fruitName :'Apple',
            fruitImage :'Apple.jpeg',
            unit : 'kg',
            Price :'200'
        },
        {
            sno : 4,
            fruitName :'Strawberry',
            fruitImage :'strawberry.jpeg',
            unit : 'kg',
            Price :'100'
        }
    ]
    return(
        <div>
            <h3>Fruits list app</h3>
            {
                fruitlist.map(fruit=><div className="col-6 mx-auto bg-primary">
                <h3 key={fruit.sno}>{fruit.fruitName}</h3>
                <img src={require (`../../assets/images/fruits/${fruit.fruitImage}`)} alt=""  width={100} height={100}/>
                <h3>{fruit.Price}<span style={{fontsize : "100px;"}}>&#8377;/{fruit.unit}</span></h3>
                
                </div>
                )
            }
        </div>
    )
}

export default FruitsAppV3;