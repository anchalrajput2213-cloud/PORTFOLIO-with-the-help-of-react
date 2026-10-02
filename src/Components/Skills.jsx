import React from 'react'
function Skills() {
  return (
    // {/* <div id="Skills"className="min-h-screen flex flex-col items-center justify-center bg-gray-100" > */}
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-10"> <h1 className="text-4xl font-bold mb-10">Skills</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      <div className="w-40 h-24 bg-white rounded-lg shadow-md flex items-center justify-center text-lg font-semibold "> HTML </div>
      <div className="w-40 h-24 bg-white rounded-lg shadow-md flex items-center justify-center text-lg font-semibold ">CSS </div>
      <div className="w-40 h-24 bg-white rounded-lg shadow-md flex items-center justify-center text-lg font-semibold ">JavaScript</div>
      <div className="w-40 h-24 bg-white rounded-lg shadow-md flex items-center justify-center text-lg font-semibold ">React</div>
      <div className="w-40 h-24 bg-white rounded-lg shadow-md flex items-center justify-center text-lg font-semibold "> Git & GitHub</div> </div>

    </div>
  );
}

export default Skills;