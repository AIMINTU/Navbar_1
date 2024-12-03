
import { useState } from 'react';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Rechartss from './components/Rechartss';

function App() {
  const router = [
    {
      id: 1,
      path: "home",
      element: "home"
    },
    {
      id: 2,
      path: "about",
      element: "profile"
    },
    {
      id: 3,
      path: "contact",
      element: "preferences"
    },
    {
      id: 4,
      path: "career",
      element: "notifications"
    },
    {
      id: 5,
      path: "service",
      element: "overview"
    }
  ]
  const [isOkay, setIsOkay] = useState(true)

  const handleClick = () => {

    setIsOkay(!isOkay)

  }


  return (
    <div>
      <div className='md:flex gap-10 items-center'>
        <div className='md:hidden' onClick={handleClick}>
          {
            isOkay ? <GiHamburgerMenu className='text-2xl'></GiHamburgerMenu> : <RxCross1 className='text-2xl'></RxCross1>
          }

        </div>

        <h1 className='text-4xl font-bold'>Logo</h1>
        {/* <h1 className='text-5xl text-red-900'>This is app component</h1> <br></br>
      <Header></Header> */}
        <div className={`md:flex gap-10 items-center duration-1000 ${isOkay ? '-ml-48 md:ml-36' : ''}`}>
          {
            router.map(route => <Navbar key={route.id} route={route}></Navbar>)
          }
        </div>

      </div>
      <Rechartss></Rechartss>
    </div>
  );
};

export default App
