import './cat.scss';
import axios from 'axios';

export default function Cat() {   
    return (
        <div className="cat-wrapper">
            <img className="cat-wrapper__image" id="image"></img>
            <div className="cat-wrapper__button-container">
                <button onClick={() => getCat()} className="cat-wrapper__button">Click for cat</button>
            </div>            
        </div>
    )

    function getCat() {
        console.log("hi");
        
        axios.get('https://api.thecatapi.com/v1/images/search', {
                headers: {'x-api-key': 'live_HpWp7hv7mqbfUOxORGvNtolgyXaiS8FoRRkx5w7l1vLdhQW3uhIJZs2XadWYsaXO' }
            })
            .then((res) => {
                setCatImage(res.data[0].url);
            })
            .catch((err) => console.log(err));
            
    }

    function setCatImage(url) {
        document.getElementById('image').style.backgroundImage = `url('${url}')`;
        
    }
}

//  live_HpWp7hv7mqbfUOxORGvNtolgyXaiS8FoRRkx5w7l1vLdhQW3uhIJZs2XadWYsaXO 