import './Features.style.scss'
import { SlDirections,SlBasket,SlRocket,SlPresent } from 'react-icons/sl'

const Features = () => {
  return (
    <div className="container-feature">
        <div className="p1">
            <div className="p-icon">
            <SlDirections/>
            </div>
            <div className="p-title">
                <h3>Filter & Discover</h3>
                <p>Filter according to your choise & explore the heaven of Book</p>
                <div className='p-numeric'><h1>01</h1></div>
            </div>
        </div>
        <div className="p2">
            <div className="p-icon">
            <SlBasket/>
            </div>
            <div className="p-title">
                <h3>Add To Cart</h3>
                <p>Cart can carry all your desired books.</p>
                <div className='p-numeric'><h1>02</h1></div>
            </div>
        </div>
        <div className="p1">
            <div className="p-icon">
            <SlRocket/>
            </div>
            <div className="p-title">
                <h3>Fast Shipping</h3>
                <p>We care your eagerness and ensure Fast Shipping</p>
                <div className='p-numeric'><h1>03</h1></div>
            </div>
        </div>
        <div className="p2">
            <div className="p-icon">
            <SlPresent/>
            </div>
            <div className="p-title">
                <h3>Enjoy The Product</h3>
                <p>Don't forget to leave a comment about your experience</p>
                <div className='p-numeric'><h1>04</h1></div>
            </div>
        </div>
    </div>
  )
}

export default Features