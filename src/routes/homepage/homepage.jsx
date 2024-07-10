import './homepage.scss'
import SearchBar from '../../components/searchBar/searchBar'; // Adjust the path based on your folder structure

function HomePage(){
    return (
        <div className="homepage">
            <div className="textContainer">
                <div className="wrapper">
                <h1 className='title'>"Unlocking India's Real Estate Potential."
                </h1>
                <p>"Discover prime properties, get expert advice, and find your dream home in India.Our platform offers detailed information and expert advice to help you to find  perfect property with ease and confidence."

                </p>
                <SearchBar />
                <div className="boxes">
                    <div className="box">
                    <h1>20+</h1>
                    <h2>Years of Experience</h2>
                    </div>
               
                
                    <div className="box">
                    <h1>100's</h1>
                    <h2> of Properties</h2>
                    </div>
               
                
                    <div className="box">
                    <h1>183</h1>
                    <h2>Awards  for Excellence</h2>
                    </div>
                </div>

                </div>
                
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage;