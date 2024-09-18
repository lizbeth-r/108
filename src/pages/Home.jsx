import "./Home.css";

function Home(){
    const scrollToCatalog = () => {
        const element = document.getElementById('catalog');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return(
        <div className="home">
            <div className="home-text">
                <h2>Welcome to Organika store!</h2>
                <h4>Fresh food, 1-click away.</h4>

                <button className="btn btn-lg" onClick={scrollToCatalog}>Our fresh catalog</button>
            </div>

        
        
        </div>


    );
}

export default Home;