import React from "react";
import NAV from "../components/nav";
import { useNavigate } from "react-router-dom";
function Home() {
   const navigate=useNavigate()

	return (
		<><NAV/>
		<div className="container">
		<button className="w-60 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
		onClick={()=>{navigate('/apply')}}>
Apply for incubation
</button>
          {/* <Link to={'/apply'}>Apply for Incubation</Link> */}
		</div>
		</>
	);
}

export default Home
