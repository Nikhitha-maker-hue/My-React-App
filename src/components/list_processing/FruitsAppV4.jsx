import FruitCard from "./FruitCard";
function FruitAppV4(){
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
            <h3>Fruit App using props demo</h3>
            {
                fruitsList.map(fruit=>
                    <FruitCard fruit={fruit} key={fruit.sno}></FruitCard>
                )
            }
            </div>              
    )
}
export default FruitAppV4;