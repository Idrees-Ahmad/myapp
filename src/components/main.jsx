import Card from "./Card";



export default function Main({products}) {
    return <>
      <div className="container"> 
        <div className="row">
            
          {
          products.map(product=> <Card product = {product}/>)
          }

        </div>
        </div>
    </>


}