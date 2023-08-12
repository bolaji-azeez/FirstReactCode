import Header from "./Component/Header"
import Lettering from "./Component/Lettering"
import Body from "./Component/body"
import Input from "./Component/Input"
import Price from "./Component/Pricing"
import Image from "./Component/Image"
import WriteUp from "./Component/Write"
import Button from "./Component/Button"
import Travis from "./Component/Travis"
import Image2 from "./Component/Analytical"
import Star from "./Component/star"
import Data from "./Component/data"
import Lorem from "./Component/Lorem"
import What from "./Component/what"
import Footer from "./Component/footer"





const App = ()=> {
  return(
        <div className="Container">
         
          <div className="Session1">
            
            <Body/>
            <Header />
            <Lettering />
            <WriteUp />
            <Button/>
            <Travis />
            <Image2 />
            <What />
             
          </div>
          <div className="Session2">
             <Body/>
             <Header />
             <Input />
             <Price />
             <Image />
             <Star />
             <Data />
             <Lorem />
             <Footer />
             
             

          </div>
         
          
        </div>

    


  )
}


export default App