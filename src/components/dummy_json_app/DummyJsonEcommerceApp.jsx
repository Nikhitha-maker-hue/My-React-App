import { useEffect, useState } from "react";
import './store_container.css';

function DummyJsonEcommerceApp(){
    const[products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(result=>result.json())
        .then(data=>{
            console.log("fetching data is successful..!")
            console.log(data)
            setProducts(data.products);
        })    
    },[])
    return(
        <div>
            <h3>Dummy JSON Products</h3>
            <div className="flex-container">
            {
                products.map(products=>{
                    return <div key={products.id} className="card"style={{maxWidth:300}}>
                        <img src={products.images[0]} 
                        alt="product img"
                        className="card-img-top" 
                        />
                        <h6 className="card-title">{products.title}</h6>
                        <h6 className="card-title">&#x24;{products.price}</h6>
                    </div>
                })
            }
            </div>
        </div>
    )
}
export default DummyJsonEcommerceApp;