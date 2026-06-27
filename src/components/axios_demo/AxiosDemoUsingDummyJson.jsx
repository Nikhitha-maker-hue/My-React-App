import { useEffect,useState } from "react"
import axios from 'axios'
import './store_container.css'

function AxiosDemoUsingDummyJson(){
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(result=>{
            console.log('success block');
            console.log('result');
            setProducts(result.data.products);
        })
    .catch(err=>{
        console.log('failure block');
        console.log('fatching data is failed');
        console.log(err);
    }
    );
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
export default AxiosDemoUsingDummyJson;