import React from 'react';
import './profile.css';

// import 'Photo'
import kanjika from './Photo_meri copy.jpeg'

const Profile = () => {
  function table_event(){
    window.location.href = 'event_list'
  }
const change_pass = () =>{
  window.location.href = 'password_change'
}

  return(<div class="p-16 bg-slate-900" >
  <div class="p-8 bg-black mt-24">
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
        <div>
          <p class="font-bold text-white text-xl">22</p>
          <p class="text-white">Events Participated</p>
        </div>
        <div>
             <p class="font-bold text-white text-xl">10</p>
          <p class="text-white">Events won</p>
        </div>
            <div>
             <p class="font-bold text-white text-xl">89</p>
          <p class="text-white">Activity Points</p>
        </div>
      </div>
      <div class="relative">
        <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
  {/* <svg xmlns="" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor"> */}
  
    {/* <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
  </svg> */}
<img src={kanjika} class="h-24 w-24" />
        </div>
      </div>
  
      <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
  
      <button
    class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" onClick={table_event}
  >
   Upcoming events
  </button>
      </div>
    </div>
  
    <div class="mt-20 text-center border-b pb-12">
      <h1 class="text-4xl font-medium text-white">Kanjika Singh<span class="font-light text-gray-500"></span></h1>
      <p class="font-light text-white mt-3">Fourth Sem</p>
      <p class="mt-8 text-white">1BM21CS086</p>
      <p class="mt-2 text-white">Department of Computer Science</p>
    </div>
  
    <div class="mt-12 flex flex-col justify-center">
      {/* <p class="text-gray-600 text-center font-light lg:px-16"></p> */}
      <button
    class="text-indigo-500 py-2 px-4  font-medium mt-4" onClick={change_pass}
  >
    change password
  </button>
    </div>
  
  </div>
  </div>)
}
export default Profile;

