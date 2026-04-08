import React from 'react'

const VideoSection = () => {
  return (
    <div className='flex justify-center gap-48 min-h-screen items-center max-w-7xl mx-auto'>
        <div>
 <video controls className="w-full h-auto"></video>
        </div>
     <div className='space-x-5'>
        <h2 className="text-2xl font-bold mb-4">عنوان الفيديو</h2>
        <p className="text-gray-600 mb-6">وصف مختصر للفيديو يظهر هنا</p>
        <hr />
         <p className="text-gray-600 mb-6">وصف مختصر للفيديو يظهر هنا</p>
         <button className='bg-orange-400 text-white py-2 px-4  hover:bg-orange-500 transition-colors'>button1</button>
         <button className='bg-cyan-500 text-white py-2 px-4  hover:bg-cyan-600 transition-colors'>butto21</button>
     </div>
      
    </div>
  )
}

export default VideoSection
