function FruitsAppV2 () {
    const fruitsList = [
        {
            sno : 1,
            fruitName : 'apples',
            fruitImage : 'Apple.jpeg',
            unit : 'kg',
            price : '$23.0'
        },
          {
            sno : 2,
            fruitName : 'kiwi',
            fruitImage : 'kiwi.jpeg',
            unit : 'kg',
            price : '$33.0'
        },
          {
            sno : 3,
            fruitName : 'mango',
            fruitImage : 'mango.jpeg',
            unit : 'kg',
            price : '$43.0'
        },
        {
            sno : 4,
            fruitName : 'strawberry',
            fruitImage : 'strawberry.jpeg',
            unit : 'kg',
            price : '$43.0'
        }
    ]
     return(
        <div>
            <h3>Fruits list app</h3>
            {
                fruitsList.map(fruit=><div className="col-6 mx-auto bg-primary">
                <h3 key={fruit.sno}>{fruit.fruitName}</h3>
                <img src={require (`../../assets/images/fruits/${fruit.fruitImage}`)} alt=""  width={100} height={100}/>
                <h3>{fruit.price}<span style={{fontsize : "100px;"}}>&#8377;/{fruit.unit}</span></h3>
                
                </div>
                )
            }
        </div>
    )
}

export default FruitsAppV2;