import React from "react";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: null,
            largeImageUrl: '',
            indexInGallery: null
        };
    }

    componentDidMount() {
        this.handleRequest()//Wywołaj metodę pobierającą zdjęcia przy starcie aplikacji (bez przekazywania parametrów)
    }
    componentDidUpdate(prevProps) {
        const {term} = this.props;
        if(prevProps.term !== term) { //Sprawdzenie czy tekst(tag) się zmienił
            this.handleRequest(term) //Wywołaj metodę pobierającą zdjęcia z przekazanym tekstem(tagiem) jako pierwszy parametr metody handleRequest. Nie przekazuje drugiego parametru.
        }
    }
    handleRequest = (query,prevOrNext) => { //Metoda pobierająca zdjęcia - jako parametry może (nie musi) przyjmować tekst oraz url do poprzedniej/następnej strony
        const {gallery} = this.state; //Destrukturyzacja
        let requestUrl = ''; //Deklaracja zmiennej przechowującej adres Url API (lub jego końcówkę)
        if(prevOrNext) { //Jeżeli został przekazany argument prevOrNext
            requestUrl = prevOrNext; //Przypisz zmiennej ten argument (będący adresem Url API)
        } else if(query) { //Jeżeli zostało przekazane jakieś query(tag)
            requestUrl = `https://api.pexels.com/v1/search?query=${query}`; //Przypisz zmiennej adres z tym query
        } else if(!gallery || !query) { //Jeżeli state gallery jest puste(componentDidMount), albo nie ma query(zostało skasowane)
            requestUrl = 'https://api.pexels.com/v1/curated'; //Przypisz zmiennej adres domyślny
        }
        fetch(requestUrl, { //Ściągaj z API po adresie requestUrl
            headers: {
                "Authorization": "563492ad6f9170000100000119b2c277c7c340bbab928823d2551d3b",
                "accept": "application/json"
            }
        })
        .then(resp => {
            if(resp.ok) {
                return resp.json()
            } else {
                console.log(resp)
            }
        })
        .then(data => {
            console.log(data);
            this.setState({
                gallery: data //Cały objekt galerii
            })
        })
    };
    showImage = (largeImageUrl, indexInGallery) => {
        this.setState({
            largeImageUrl,
            indexInGallery
        })
    };
    closeImage = () => {
        this.setState({
          largeImageUrl: ''
        })
    };
    switchImage = (e) => {
        const {gallery,indexInGallery} = this.state;
        if(e.target.innerText === '<') {
            if(indexInGallery > 0) {
                this.setState({
                    largeImageUrl: gallery.photos[indexInGallery - 1].src.large,
                    indexInGallery: indexInGallery - 1
                })
            }
        } else {
            if(indexInGallery < gallery.photos.length - 1) {
                this.setState({
                    largeImageUrl: gallery.photos[indexInGallery + 1].src.large,
                    indexInGallery: indexInGallery + 1
                })
            }
        }
    };

    render() {
        const {gallery,largeImageUrl} = this.state;
        let largeImage;
        if (gallery === null) {
            return null //Nie renderuj niczego, jeżeli dane nie zostały jeszcze ściągnięte
        }
        if(largeImageUrl) {
            largeImage = (
                
            <div className='largeImageContainer'> 
                    
                
                <img className='activeImage' src={largeImageUrl} alt=''/>
                <div className="largeImageButtons">
                <button className="close"onClick={this.closeImage}>X</button>
                <button className="nextArrow"onClick={this.switchImage}>&lt;</button>
                <button className="prevArrow"onClick={this.switchImage}>&gt;</button>
            </div>
            </div>
            
        )}
        return (
            <div className="cover">
                <ul>
                    {gallery.photos.map((photo,index) => { //Mapuj po photos z obiektu galerii
                        return (
                            <li className="galleryBody" key={photo.id}>
                                <div className="container">
                                    {/* <div>{photo.photographer} </div> */}
                                    <img className='pictures' src={photo.src.medium} alt="" onClick={() => this.showImage(photo.src.large, index)}/>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                {largeImage}
                <div >
                {/*Button Previous i Next - pobranie poprzednich/kolejnych stron dla albumu o danym tagu, lub stron dla albumu strony domyślnej*/}
                {gallery.prev_page && <button className="prevButton" onClick={() => this.handleRequest(null, gallery.prev_page)}>Previous</button>} {/*Jeżeli obiekt gallery(ze state) posiada klucz prev_page(czyli nie jest pierwszą stroną) to wyrenderuj przycisk Previous. Przycisk na kliknięcie wywołuje metodę handleRequest przekazując jej parametr null jako query oraz atrybut gallery.prev_page(będący adresem Url do następnej strony) jako prevOrNext. Obecność atrybutu prev_page wynika z budowy obiektu(dokumentacja API)).*/}
                {gallery.next_page && <button className="nextButton" onClick={() => this.handleRequest(null, gallery.next_page)}>Next</button>} {/*Jak wyżej, z tym że atrybut next_page oczywiście nie pojawia się tylko dla ostatniej strony(a nie pierwszej jak dla prev_page)*/}
                </div>
            </div>
        )
    }
}
export default Gallery;