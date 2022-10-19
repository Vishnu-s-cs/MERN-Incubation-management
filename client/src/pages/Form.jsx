
import NAV from "../components/nav";

import React, { useEffect, useState } from 'react'

import Axios from 'axios'
import { userUrl } from '../constants/constant'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Swal from 'sweetalert2'

import { UserContext } from '../context/UserContext'

function Form() {


  const { userDetails, setUserDetails } = useContext(UserContext)

  const navigate = useNavigate()

  const [image, setImage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [application, setApplication] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    address: "",
    company_name: "",
    team_and_bg: "",
    company_and_products: "",
    problem: "",
    solution: "",
    value_proposition: "",
    revenue_model: "",
    market_size: "",
    market_plan: "",
    incubation_type: "",
    proposal: "",
  })

  function handleSubmit(e) {
    e.preventDefault()
    try {
      if (!application.name) {
        setErrorMessage("Name is required");
      } else if (application.name.length < 3) {
        setErrorMessage("Name must be atleast 3 characters");
      } else if (!application.name.match(/^[A-Za-z][A-Za-z ]*$/)) {
        setErrorMessage("Enter a valid name");
      } else if (!application.phone) {
        setErrorMessage("Phone is required");
      } else if (application.phone.match(/[^0-9]/g)) {
        setErrorMessage("Enter a valid Phone number");
      } else if (application.phone.length !== 10) {
        setErrorMessage("Phone must be 10 characters");
      } else if (!application.email) {
        setErrorMessage("Email is required");
      } else if (!application.email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        setErrorMessage("Enter a valid email");
      } else if (!application.city) {
        setErrorMessage("City is required");
      } else if (!application.state) {
        setErrorMessage("State is required");
      } else if (!application.address) {
        setErrorMessage("Address is required");
      } else if (!application.company_name) {
        setErrorMessage("Company name is required");
      } else if (!image) {
        setErrorMessage("Company logo is required");
      } else if (!application.team_and_bg || !application.company_and_products || !application.problem || !application.solution || !application.value_proposition || !application.revenue_model || !application.market_size || !application.market_plan || !application.incubation_type || !application.proposal) {
        setErrorMessage("All fields are required");
      } else {



        Axios.post(`${userUrl}/api/users/upload/${userDetails._id}`, { ...application }).then((response) => {
          localStorage.setItem('user', JSON.stringify(response.data))
          setUserDetails(response.data)
          console.log(response.data + "this is response after update");
          navigate('/')
        }).catch((err) => {
          console.log('error')
          Swal.fire({
            title: 'Error!',
            text: 'please recheck credentials',
            icon: 'error',
            confirmButtonText: 'ok'
          })
        })
      }

    } catch (error) {
      console.log(error.message);
    }
  }

  function handleChange(e) {
    setApplication({ ...application, [e.target.name]: e.target.value })
  }


  return (
    <div className="bg-gray-200 h">
      <NAV />
      <div className="container flex justify-center mx-auto ">
        <div className=" lg:h-1/2 w-10/12 lg:w-2/3 mt-14 p-3">
          <div>
            <h1 className="text-center text-3xl" style={{"paddingBottom":"10px"}}>Register Form</h1>
          </div>
          <div>
            <form style={{"paddingTop":"10px"}}>
              {errorMessage && <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert"> {errorMessage}</div>}
              <div className="flex space-x-2">
                <div className="mb-6 w-1/2">
                  <label
                     htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    name='name' onChange={(e) => handleChange(e)}
                    id="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder=""
                    required=""
                  />
                </div>
                <div className="mb-6  w-1/2">
                  <label
                     htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Address*

                  </label>
                  <input

                    name='address' onChange={(e) => handleChange(e)}
                    type="text"
                    id="address"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                  />
                </div>
              </div>


              <div className="flex space-x-2">
                <div className="mb-6 w-1/2">
                  <label
                     htmlFor="city"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    City*
                  </label>
                  <input
                    name='city' onChange={(e) => handleChange(e)}
                    type="text"

                    id="city"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder=""
                    required=""
                  />
                </div>
                <div className="mb-6  w-1/2">
                  <label
                     htmlFor="state"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    State*
                  </label>
                  <input
                    name='state' onChange={(e) => handleChange(e)}
                    type="text"

                    id="state"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                  />
                </div>
              </div>

              <div className="flex space-x-2">
                <div className="mb-6 w-1/2">
                  <label
                     htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email*
                  </label>
                  <input

                    type="email"
                    name='email' onChange={(e) => handleChange(e)}
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder=""
                    required=""
                  />
                </div>
                <div className="mb-6  w-1/2">
                  <label
                     htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Phone*
                  </label>
                  <input
                    type="number"
                    name='phone' onChange={(e) => handleChange(e)}
                    id="phone"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                  />
                </div>
              </div>

              <div className="flex space-x-2">
                <div className="mb-6 w-1/2">
                  <label
                     htmlFor="company"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Company Name*
                  </label>
                  <input
                    type="text"
                    name='company_name' onChange={(e) => handleChange(e)}
                    id="company"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder=""
                    required=""
                  />
                </div>
                <div className="mb-6  w-1/2">
                  <label
                     htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Image*
                  </label>
                  <img width="100px" height="100px" style={{display: `${image?"block":"none"}`}} src={image ? URL.createObjectURL(image) : ''} alt="logo" className='mr-2' />
                  <input
                    type="file"
                    id="image"
                    onChange={(e) => { setImage(e.target.files[0]) }}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                  />
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="mb-6">
                  <label  htmlFor="background" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Describe the Team and Background*</label>
                  <textarea id="background" rows="4" name='team_and_bg' onChange={(e) => handleChange(e)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
                <div className="mb-6">
                  <label  htmlFor="product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Describe your company and Products*</label>
                  <textarea id="product" rows="4" name='company_and_products' onChange={(e) => handleChange(e)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
                <div className="mb-6">
                  <label  htmlFor="problem" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Describe the problem you are trying to solve*</label>
                  <textarea id="problem" name='problem' onChange={(e) => handleChange(e)} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
                <div className="mb-6">
                  <label  htmlFor="solution" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What is unique about your solution?*</label>
                  <textarea id="solution" rows="4" name='solution' onChange={(e) => handleChange(e)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
                <div className="mb-6">
                  <label  htmlFor="proposition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What is your value proposition  htmlFor the customer?*</label>
                  <textarea id="proposition" name='value_proposition' onChange={(e) => handleChange(e)} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
                <div className="mb-6">
                  <label  htmlFor="competitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Who are your competitors and what is your competative advantage ?*</label>
                  <textarea id="competitors" rows="4" name='competitive_advantage' onChange={(e) => handleChange(e)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
                <div className="mb-6">
                  <label  htmlFor="revenue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">what is your revenue model ?*</label>
                  <textarea id="revenue" rows="4" name='revenue_model' onChange={(e) => handleChange(e)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
                <div className="mb-6">
                  <label  htmlFor="marketsize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">what is the potential market size of the product ?*</label>
                  <textarea id="marketsize" rows="4" name='market_size' onChange={(e) => handleChange(e)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
                <div className="mb-6">
                  <label  htmlFor="marketing" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">How do you market or plan to market your products and services*</label>
                  <textarea id="marketing" rows="4" name='market_plan' onChange={(e) => handleChange(e)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Types of Incubation needed</label>
                  <div className="flex items-center pl-4 rounded  dark:border-gray-700">
                    <input id="bordered-radio-1" type="radio" value="physical" name="incubation_type" onChange={(e) => {
                      if (e.target.checked) { setApplication({ ...application, [e.target.name]: e.target.value }) }
                    }} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  dark:bg-gray-200 dark:border-gray-600" />
                    <label  htmlFor="bordered-radio-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Physical Incubation</label>
                  </div>
                  <div  className="flex items-center pl-4 rounded dark:border-gray-700">
                    <input checked="" id="bordered-radio-2" type="radio" value="virtual" onChange={(e) => {
                      if (e.target.checked) { setApplication({ ...application, [e.target.name]: e.target.value }) }
                    }} name="incubation_type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  dark:bg-gray-200 dark:border-gray-600" />
                    <label  htmlFor="bordered-radio-2" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Physical Incubation</label>
                  </div>
                </div>

                <div className="mb-6">
                  <label  htmlFor="proposal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upload a detailed buissness proposal*</label>
                  <textarea id="proposal" rows="4" name='proposal' onChange={(e) => handleChange(e)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
              </div>
              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-9  "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;


// import React, { useEffect, useState } from 'react'

// import axios from 'axios'
// import { userUrl } from '../constants/constant'
// import { useNavigate } from 'react-router-dom'
// import NAV from '../components/nav'
// import { decodeToken } from 'react-jwt'
// function Form() {
//   const { userDetails, setUserDetails } = useContext(UserContext)
//   const navigate = useNavigate()

//   const [image, setImage] = useState('')
//   const [errorMessage, setErrorMessage] = useState('')
//   const [application, setApplication] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     state: "",
//     city: "",
//     address: "",
//     company_name: "",
//     team_and_bg: "",
//     company_and_products: "",
//     problem: "",
//     solution: "",
//     value_proposition: "",
//     revenue_model: "",
//     market_size: "",
//     market_plan: "",
//     incubation_type: "",
//     proposal: "",
//   })

//   function handleSubmit(e) {
//     e.preventDefault()
//     try {
//       if (!application.name) {
//         setErrorMessage("Name is required");
//       } else if (application.name.length < 3) {
//         setErrorMessage("Name must be atleast 3 characters");
//       } else if (!application.name.match(/^[A-Za-z][A-Za-z ]*$/)) {
//         setErrorMessage("Enter a valid name");
//       } else if (!application.phone) {
//         setErrorMessage("Phone is required");
//       } else if (application.phone.match(/[^0-9]/g)) {
//         setErrorMessage("Enter a valid Phone number");
//       } else if (application.phone.length !== 10) {
//         setErrorMessage("Phone must be 10 characters");
//       } else if (!application.email) {
//         setErrorMessage("Email is required");
//       } else if (!application.email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
//         setErrorMessage("Enter a valid email");
//       } else if (!application.city) {
//         setErrorMessage("City is required");
//       } else if (!application.state) {
//         setErrorMessage("State is required");
//       } else if (!application.address) {
//         setErrorMessage("Address is required");
//       } else if (!application.company_name) {
//         setErrorMessage("Company name is required");
//       } else if (!image) {
//         setErrorMessage("Company logo is required");
//       } else if (!application.team_and_bg || !application.company_and_products || !application.problem || !application.solution || !application.value_proposition || !application.revenue_model || !application.market_size || !application.market_plan || !application.incubation_type || !application.proposal) {
//         setErrorMessage("All fields are required");
//       } else {



//         axios.post(`${userUrl}/users/upload/${userDetails._id}`, { ...application }).then((response) => {
//           localStorage.setItem('user', JSON.stringify(response.data))
//           setUserDetails(response.data)
//           console.log(response.data + "this is response after update");
//           navigate('/')
//         }).catch((err) => {
//           console.log('error')
//         })
//       }

//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   function handleChange(e) {
//     setApplication({ ...application, [e.target.name]: e.target.value })
//   }

//   return (
//     <div style={{ "backgroundImage": "url(https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg)" }}>
//       <NAV />
//       <div className="container flex justify-center mx-auto ">
//         <div className=" lg:h-1/2 w-10/12 lg:w-2/3 mt-14 p-3">
//           <div>
//             <h1 className="text-center text-3xl" style={{ "paddingBottom": "10px" }}>Register Form</h1>
//           </div>
//           <div>
//             <form style={{ "paddingTop": "10px" }}>
//               <div className="flex space-x-2">
//                 <div className="mb-6 w-1/2">
//                   <label
//                      htmlFor="name"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     Name*
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     onChange={(e) => handleChange(e)}
//                     id="name"
//                     className="shadow-sm bg-gray-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                     placeholder=""
//                     required=""
//                   />
//                 </div>
//                 <div className="mb-6  w-1/2">
//                   <label
//                      htmlFor="address"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     Address*

//                   </label>
//                   <input
//                     name="address"
//                     onChange={(e) => handleChange(e)}
//                     type="text"
//                     id="address"
//                     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                     required=""
//                   />
//                 </div>
//               </div>


//               <div className="flex space-x-2">
//                 <div className="mb-6 w-1/2">
//                   <label
//                      htmlFor="city"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     City*
//                   </label>
//                   <input
//                     name='city'
//                     type="text"
//                     onChange={(e) => handleChange(e)}
//                     id="city"
//                     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                     placeholder=""
//                     required=""
//                   />
//                 </div>
//                 <div className="mb-6  w-1/2">
//                   <label
//                      htmlFor="state"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     State*
//                   </label>
//                   <input
//                     name='state'
//                     type="text"
//                     onChange={(e) => handleChange(e)}
//                     id="state"
//                     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                     required=""
//                   />
//                 </div>
//               </div>

//               <div className="flex space-x-2">
//                 <div className="mb-6 w-1/2">
//                   <label
//                      htmlFor="email"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     Email*
//                   </label>
//                   <input
//                     name='email'
//                     type="email"
//                     onChange={(e) => handleChange(e)}
//                     id="email"
//                     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                     placeholder=""
//                     required=""
//                   />
//                 </div>
//                 <div className="mb-6  w-1/2">
//                   <label
//                      htmlFor="phone"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     Phone*
//                   </label>
//                   <input
//                     type="number"
//                     name='phoneno'
//                     onChange={(e) => handleChange(e)}
//                     id="phone"
//                     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                     required=""
//                   />
//                 </div>
//               </div>

//               <div className="flex space-x-2">
//                 <div className="mb-6 w-1/2">
//                   <label
//                      htmlFor="company"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     Company Name*
//                   </label>
//                   <input
//                     type="text"
//                     name='companyname'
//                     onChange={(e) => handleChange(e)}
//                     id="company"
//                     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                     placeholder=""
//                     required=""
//                   />
//                 </div>
//                 <div className="mb-6  w-1/2">
//                   <label
//                      htmlFor="image"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     logo*
//                   </label>
//                   <input
//                     type="file"
//                     id="image"
//                     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                     required=""
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col ">
//                 <div className="mb-6">
//                   <label  htmlFor="background" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Describe the Team and Background*</label>
//                   <textarea onChange={(e) => handleChange(e)} id="background" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
//                 </div>
//                 <div className="mb-6">
//                   <label  htmlFor="product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Describe your company and Products*</label>
//                   <textarea onChange={(e) => handleChange(e)} id="product" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
//                 </div>
//                 <div className="mb-6">
//                   <label  htmlFor="problem" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Describe the problem you are trying to solve*</label>
//                   <textarea onChange={(e) => handleChange(e)} id="problem" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
//                 </div>
//                 <div className="mb-6">
//                   <label  htmlFor="solution" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What is unique about your solution?*</label>
//                   <textarea onChange={(e) => handleChange(e)} id="solution" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
//                 </div>
//                 <div className="mb-6">
//                   <label  htmlFor="proposition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What is your value proposition  htmlFor the customer?*</label>
//                   <textarea onChange={(e) => handleChange(e)} id="proposition" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
//                 </div>
//                 <div className="mb-6">
//                   <label  htmlFor="competitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Who are your competitors and what is your competative advantage ?*</label>
//                   <textarea onChange={(e) => handleChange(e)} id="competitors" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
//                 </div>
//                 <div className="mb-6">
//                   <label  htmlFor="revenue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">what is your revenue model ?*</label>
//                   <textarea onChange={(e) => handleChange(e)} id="revenue" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
//                 </div>
//                 <div className="mb-6">
//                   <label  htmlFor="marketsize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">what is the potential market size of the product ?*</label>
//                   <textarea onChange={(e) => handleChange(e)} id="marketsize" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
//                 </div>
//                 <div className="mb-6">
//                   <label  htmlFor="marketing" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">How do you market or plan to market your products and services*</label>
//                   <textarea onChange={(e) => handleChange(e)} id="marketing" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
//                 </div>
//                 <div className="mb-6">
//                   <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Types of Incubation needed</label>
//                   <div className="flex items-center pl-4 rounded  dark:border-gray-700">
//                     <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  dark:bg-gray-200 dark:border-gray-600" />
//                     <label  htmlFor="bordered-radio-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Physical Incubation</label>
//                   </div>
//                   <div  className="flex items-center pl-4 rounded dark:border-gray-700">
//                     <input checked="" id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  dark:bg-gray-200 dark:border-gray-600" />
//                     <label  htmlFor="bordered-radio-2" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Physical Incubation</label>
//                   </div>
//                 </div>

//                 <div className="mb-6">
//                   <label  htmlFor="proposal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upload a detailed business proposal*</label>
//                   <textarea id="proposal" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-purple-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none   font-medium rounded-lg text-sm  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-9  "
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Form;
