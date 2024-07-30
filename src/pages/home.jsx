import Header from "../components/header"
import Footer from "../components/footer"
import Main from "../components/main"

// eslint-disable-next-line react/prop-types
function Home({products}) {
  return (
    <div>
      <Header ></Header>
      <Main products={products} ></Main>
      <Footer></Footer>
     
     
    </div>
  )
}

export default Home
