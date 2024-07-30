
import Home from "./pages/home"

export default function App() {
let products = [{
  title:"prododuct1",
  des:"lorem jjjk jfjioejifj",
  image:'/pic.png',
  price:2000

},
{
  title:"prod2",
  des:"lorem jjjk jfjioejifj",
  image:'/pic.png',
  price:2000

},
{
  title:"prod3",
  des:"lorem jjjk jfjioejifj",
  image:'/pic.png',
  price:2000

},
{
  title:"prod1",
  des:"lorem jjjk jfjioejifj",
  image:'/pic.png',
  price:2000

},
{
  title:"prod1",
  des:"lorem jjjk jfjioejifj",
  image:'/pic.png',
  price:2000

},
{
  title:"prod1",
  des:"lorem jjjk jfjioejifj",
  image:'/pic.png',
  price:2000

},
{
  title:"prod1",
  des:"lorem jjjk jfjioejifj",
  image:'/pic.png',
  price:2000

},
{
  title:"prod1",
  des:"lorem jjjk jfjioejifj",
  image:'/pic.png',
  price:2000

}]

  return <div>
    <Home products={products}></Home>
  </div>
  
}




