import React from 'react'

const App = () => {
  return (
    <div className='cards flex w-full h-full bg-gray-200 justify-center items-center gap-10 '>
      <div className="card w-70 bg-white h-120 rounded-xl p-2 ">
          <div className="top w-full h-3/5 bg-[url('https://www.dailysia.com/wp-content/uploads/2021/11/Eminem-1.jpg?x62393')]  bg-center bg-cover rounded-xl"></div>
          <div className="bottom flex flex-col gap-2 px-4">
            <h1 className='text-2xl'>Eminem</h1>
            <h2 className>Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter, and record producer.</h2>
            <div className="social flex justify-between items-center">
              <p><i class="ri-user-line"></i> 534</p>
              <p><i class="ri-share-forward-line"></i> 80</p>
              <button className='bg-gray-300 px-2 py-1 rounded-2xl'><i class="ri-add-line"></i> follow</button>
            </div>
          </div>
      </div>
      <div className="card w-70 bg-white h-120 rounded-xl p-2 relative ">
          <div className="top w-full h-full bg-[url('https://www.dailysia.com/wp-content/uploads/2021/11/Eminem-1.jpg?x62393')] bg-center bg-cover rounded-xl "></div>
          <div className="bottom2 flex flex-col gap-2 absolute bottom-2  px-4 rounded-xl left-2 right-2 pb-2" >
            <h1 className='text-2xl'>Eminem</h1>
            <h2 className>Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter, and record producer.</h2>
            <div className="social flex justify-between items-center">
              <p><i class="ri-user-line"></i> 534</p>
              <p><i class="ri-share-forward-line"></i> 80</p>
              <button className='bg-gray-300 px-2 py-1 rounded-2xl'><i class="ri-add-line"></i> follow</button>
            </div>
          </div>
      </div><div className="card w-70 bg-white h-120 rounded-xl p-2 relative ">
          <div className="top w-full h-full bg-[url('https://www.dailysia.com/wp-content/uploads/2021/11/Eminem-1.jpg?x62393')] bg-center bg-cover rounded-xl "></div>
          <div className="bottom3 flex flex-col gap-2 absolute bottom-2  px-4 rounded-xl left-2 right-2 pb-2" >
            <h1 className='text-2xl'>Eminem</h1>
            <h2 className>Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter, and record producer.</h2>
            <div className="social flex justify-between items-center">
              <p><i class="ri-user-line"></i> 534</p>
              <p><i class="ri-share-forward-line"></i> 80</p>
              <button className='bg-gray-300 px-2 py-1 rounded-2xl'><i class="ri-add-line"></i> follow</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
