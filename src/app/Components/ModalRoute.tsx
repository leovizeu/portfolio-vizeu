import React from 'react'

const Modal = () => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center 
    bg-black bg-opacity-50 py-10 
    dark:bg-[#060e14] dark:text-white" 
    id='modal'>
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white dark:bg-[#060e14] dark:text-white">
          <div className="w-full">
            <div className="m-8 my-20 max-w-[400px] mx-auto">
              <div className="mb-8">
                <h1 className="mb-4 text-3xl font-extrabold">Turn on notifications</h1>
                <p className="text-gray-600">Get the most out of Twitter by staying up to date with what's happening.</p>
              </div>
              <div className="space-y-4">
                <button className="p-3 bg-black rounded-full text-white w-full font-semibold dark:bg-[#060e14]">Allow notifications</button>
                <button className="p-3 bg-white border rounded-full w-full font-semibold">Skip for now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Modal