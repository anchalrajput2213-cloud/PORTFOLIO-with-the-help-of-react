// import React from 'react'

// function Projects() {
//   return (
//     <div>
//                {/* // <div id="Projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-100"> */}
//       <h1 className="text-3xl font-bold text-black mb-8">Projects</h1>
//       <div className="grid grid-cols-2 gap-6">
//       <div className="w-40 h-20 bg-white shadow-lg rounded-lg flex items-center justify-center text-lg font-semibold">Portfolio Website</div>
//       <div className="w-40 h-20 bg-white shadow-lg rounded-lg flex items-center justify-center text-lg font-semibold">Calculator App</div>
//       <div className="w-40 h-20 bg-white shadow-lg rounded-lg flex items-center justify-center text-lg font-semibold">React Quiz App</div>
//       <div className="w-40 h-20 bg-white shadow-lg rounded-lg flex items-center justify-center text-lg font-semibold">GitHub Dashboard</div>
//       </div>
//     </div>
//   );
// }
// export default Projects;

import React from 'react'

function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-10">
       <h1 className="text-4xl font-bold mb-10">Projects</h1>
       <div className="grid grid-cols-2 gap-8">
        <div className="w-48 h-28 bg-white rounded-lg shadow-md flex items-center justify-center text-center font-semibold ">Portfolio Website</div>
        <div className="w-48 h-28 bg-white rounded-lg shadow-md flex items-center justify-center text-center font-semibold"> Calculator App</div>
        <div className="w-48 h-28 bg-white rounded-lg shadow-md flex items-center justify-center text-center font-semibold ">React Quiz App</div>
        <div className="w-48 h-28 bg-white rounded-lg shadow-md flex items-center justify-center text-center font-semibold ">GitHub Dashboard</div>
        </div>
      </div>
  );
}

export default Projects;