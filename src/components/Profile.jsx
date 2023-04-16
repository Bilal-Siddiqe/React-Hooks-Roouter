import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom';

function Profile() {

  // Hooks
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Function to Navigate (-1 is for previous stage and path is for the page)
  function mov() {
    navigate(-1)
  }
  function movtopage() {
    navigate('/services')
  }

  // Array to set profile name for the /profile/:name 
  const arr = ["Bilal", "Asad", "Farhan", "Talha"];
  console.log(params)

  return (
    <div>

      {/* to cheak the profile exact name  */}
      {arr.includes(params.name) ? (<h1> {params.name} </h1>) : (
        <h1> Not Found </h1>)}


      <button onClick={mov}>Go Back</button>
      <button onClick={movtopage}>Go to services</button>

      {/* To fin out the path name or hash key using location object (From useLocation hook ) */}
      { location.pathname }

    </div>
  )
}
export default Profile;