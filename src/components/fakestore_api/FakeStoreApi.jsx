import { useEffect, useState } from "react";
import axios from 'axios';
import { data } from "react-router-dom";

function FakeStoreApi(){
    const [products,setProducts]=useState([]);
    const [categoriesList, setCategoriesList]= useState([]);
    const [searchProductType, setSearchProductType] = useState('');
    useEffect(()=>{
        axios.get('https://fakestoreapi.in/api/products')
        .then(result=>{
            console.log('success block');
            console.log(result);
            setProducts(result.data.products);
        })
        .catch(err=>{
            console.log('failure block');
            console.log('fetching data is failed');
            console.log(err);
        });
    },[])
//fetching the categories list

     useEffect(()=>{
        axios.get('https://fakestoreapi.in/api/products/category')
        .then(result=>{
            console.log('success block');
            console.log(result);
            if(data.status == 'SUCCESS'){
                setCategoriesList(data.categories);
            }
            //setProducts(result.data.products);
        })
        .catch(err=>{
            console.log('failure block');
            console.log('fetching data is failed');
            console.log(err);
        });
    },[])
    const search = ()=>{
       // alert('searchProductType')
       setSearchProductType('');
        axios.get('https://fakestoreapi.in/api/products/category?type='+searchProductType)
        .then(result=>{
            console.log('success block');
            console.log(result);
            setProducts(result.data.products);
        })

    }
    return(
        <div>
            <h3>Fake Store Api Ecommerce App</h3>
            <div className="row my-4">
                <div className="col-3 text-end">
                    <label>Enter Product Type:</label>
                </div>
            <div className="col-6">
                {/* {/* <input type="text" className="form-control"
                value={searchProductType}
                onChange={e=>setSearchProductType(e.target.value)}></input> */}
                <select name="" id="" className="form-control">
                    {
                        categoriesList.map(category=> {
                            return <option value={category} key={category}>{category} </option>
                        })
                    }
                  <option value="tv">Tv</option>
                    <option value="gaming">Gaming</option>
                      <option value="appliances">Appliances</option>
                      <option value="audio">Audio</option>
                        <option value="mobile">Mobile</option>
                          <option value="laptop">Laptop</option>
                </select>
                </div> 
                
            <div className="col-3 text-start">
                <button className="btn btn-primary"
                onClick={search}>Search Product</button>
            </div>
            </div>
            <div className="flex-container" style={{ display: 'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            {
                products.map(products=>{
                    return <div key={products.id} className="card"style={{maxWidth:"300px"}}>
                        <img src={products.image} alt="" />
                        <h3 className="card-title">{products.title}</h3>
                        <h4 className="card-title"> &#x24; {products.price} 
                            
                        </h4>
                    </div>
                })
            }
            </div>
        </div>
    )
}

export default  FakeStoreApi;