function FruitsApp (){
    const fruitsList = ['Dragon fruit','kiwi','cherry','strawberry']
    return(
        <div>
            <h3>Fruits List App</h3>
            {
                fruitsList.map((fruit,ind)=><h3 key={ind}>{fruit}</h3>)
            }
        </div>
    )

}
export default FruitsApp;