// tu będzie karuzela

import React from "react";


    const carouselContainer = document.querySelector(".carousel-container");

    //dane do karuzeli 

    //const carouselSlidesData = zaciągnij z API zdjęcia po tagach 
    
    
    
    
  

    class Carousel extends React.Component{
        constructor(props){
            super(props);
            
            this.state ={
                activeIndex:0 //nr slajdu
            };
        }

            goToSlide(index){
                this.setState ({activeIndex:index});
            }c

            goToPrevSlide(e) {
                e.preventDefault();

                let index = this.state.activeIndex;
                let{slides} =this.props;
                let slidesLength =slides.length;

                if (index < 1){
                    index =slidesLength;
                }
                --index;

                this.setState({
                    activeIndex: index
                });
            }



            goToNextSlide(e){
                e.preventDefault();
                

                let index = this.state.activeIndex;
                let {slides} =this.props;
                let slidesLength = slides.length -1;

                if (index === slidesLength) {
                    index = -1;
                }

                ++index;

                this.setState({
                    activeIndex: index
                });

        
            }

            //przykładowy render karuzeli zdefiniuj carousel left arrow/right/indicator - zciągnij z nmp 
                
            // render() {
            //     return (
            //       <div className="carousel">
            //         <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />
            
            //         <ul className="carousel__slides">
            //           {this.props.slides.map((slide, index) =>
            //             <CarouselSlide
            //               key={index}
            //               index={index}
            //               activeIndex={this.state.activeIndex}
            //               slide={slide}
            //             />
            //           )}
            //         </ul>
            
            //         <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
            
            //         <ul className="carousel__indicators">
            //           {this.props.slides.map((slide, index) =>
            //             <CarouselIndicator
            //               key={index}
            //               index={index}
            //               activeIndex={this.state.activeIndex}
            //               onClick={e => this.goToSlide(index)}
            //             />
            //           )}
            //         </ul>
            //       </div>
            //     );
            //   }
            }










export default Carousel;