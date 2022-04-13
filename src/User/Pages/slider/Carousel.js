import React, { Component } from "react";
import {resources} from "./CarouselData.js";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import  Swipe from 'react-easy-swipe';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }


  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === resources.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === resources.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? resources.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };


  render() {
    return(
  <div>
  <div class="mt-8 flex justify-center">
  <div class="h-2/4 w-2/4 overflow-y-hidden relative">
    <AiOutlineLeft
      onClick={this.prevSlide}
      className="absolute left-0 text-3xl inset-y-1/2 text-gray-900 cursor-pointer"
    />

    <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
          {resources.map((resource, index) => {
            return (
              <div>
                <div>
                  <img
                    src={resource.image || ''}
                    alt={resource.title}
                    key={index}
                    class={
                      index === this.state.currentSlide
                        ? "block w-full object-cover"
                        : "hidden"
                    }
                    onMouseEnter={() => {
                      this.setState({ paused: true });
                    }}
                    onMouseLeave={() => {
                      this.setState({ paused: false });
                    }}
                  />
                  </div>
           
                
                <div 
                  className="h-full w-full overflow-y-hidden absolute transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-0"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.title}
                  </h3>
                  <h5 class="text-white py-6 px-3 mx-auto text-sm">
                    {resource.caption}
                  </h5>
                </div>
              </div>
              );
            })}
            </Swipe>
         
          <div class="absolute w-full flex justify-center bottom-0">
            {resources.map((element, index) => {
              return (
                <div
                  class={
                    index === this.state.currentSlide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-gray-900 cursor-pointer"
          />
        </div>
        </div>
        <div class="flex">
          <div class=" ml-96 mt-10 pl-3">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="https://image.shutterstock.com/image-vector/white-events-sign-over-confetti-260nw-300283754.jpg" alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Upcoming Events</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            </div>
            </div>
          
            <div class="mt-10 mr-96 pl-6">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="https://image.shutterstock.com/image-vector/white-events-sign-over-confetti-260nw-300283754.jpg" alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Previous Events</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            </div>
          </div>
        </div>
        </div>
      
    );
          }
        }     


export default Carousel;
