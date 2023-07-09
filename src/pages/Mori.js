import React from 'react';
// import SearchBar from '../components/SearchBar';
import EventBox from '../components/EventBox';
// import posterImage from './event6.jpeg';
import MoreInfo from '../components/MoreInfo';
// import event_pic from 'src\event_picture.jpg';
import event_pic from './event1.jpeg';



const Mori = () => {
  const handleSearch = (searchText) => {
    console.log('Searching for:', searchText);
    // Add your search logic here
  };
  return (
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={event_pic}></img>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
        <p class="leading-relaxed">Get ready for an extraordinary academic extravaganza! Presenting the Science and Innovation Expo 2023, where brilliance meets creativity!Experience the exhilarating Academic Showdown 2023, where lightning-fast quizzes, brain-teasing puzzles, intense debates, groundbreaking innovations, and the ultimate showdown collide in a battle of intellectual prowess. Claim victory in each round for a chance to win cash prizes, trophies, and exclusive opportunities, while forging connections and leaving a lasting mark on the world of academia. Don't miss this extraordinary event that will test your limits and crown the true champions of knowledge!</p>
        {/* <p class ="leading-relaxed"></p> */}
        <br/>
        <p class ='leading-relaxed'>Date : 15 July 2023 </p>
        {/* <p class ="leading-relaxed"></p> */}
        <p class ="leading-relaxed">Time : 2:30 pm to 3:30 pm</p>
        {/* <p class ="leading-relaxed"></p> */}
        <p class ="leading-relaxed"> Venue : Audi-2</p>
        {/* <p class ="leading-relaxed"></p> */}
        <br/>
        <p class ="leading-relaxed">For Further Queries, Contact:</p>
        {/* <p class ="leading-relaxed"></p> */}
        <p class ="leading-relaxed">Kanjika : +91 93056 82414</p>




        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          {/* <div class="flex">
            <span class="mr-3">Color</span>
            <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div> */}
          {/* <div class="flex ml-6 items-center">
            <span class="mr-3">Size</span>
            <div class="relative">
              <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div> */}
        </div>
        <div class="flex">
          {/* <span class="title-font font-medium text-2xl text-gray-900">$58.00</span> */}
          {/* <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
          {/* <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"> */}
            {/* <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg> */}
          {/* </button> */}
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Mori;


