import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

import './App.css';
function RespondentTravelProfile() {
  // State variables to store the selected options
  const [travelMeans, setTravelMeans] = useState('');
  const [distance, setDistance] = useState('');
const history=useNavigate()
  // Function to handle the submit button click
  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to Page 2 with the selected options as query parameters
    // window.location.href = `/page2?travelMeans=${travelMeans}&distance=${distance}`;
    history('/page2',{state:{travelMeans:travelMeans,distance:distance}})

  };
  
  return (
    <div className="container ">
        <div className="row">
          <div className="col-lg8 offset-lg-1 my-5 p-5">
    
      <form onSubmit={handleSubmit} required>
        <h2>Respondent Travel Profile</h2>
        <div >
          
          <label htmlFor="travelMeans">What is your most frequently used means of travel from your home to work location?</label>
          <br />
          <input type="radio" id="bus" name="travelMeans" value="Bus" onChange={(event) => setTravelMeans(event.target.value)}   />
          <label htmlFor="bus">Bus</label>
          <br />
          <input type="radio" id="metro" name="travelMeans" value="Metro" onChange={(event) => setTravelMeans(event.target.value)} />
          <label htmlFor="metro">Metro</label>
          <br />
          <input type="radio" id="twoWheeler" name="travelMeans" value="Own Two-wheeler" onChange={(event) => setTravelMeans(event.target.value)} />
          <label htmlFor="twoWheeler">Own Two-wheeler</label>
          <br />
          <input type="radio" id="car" name="travelMeans" value="Own Car" onChange={(event) => setTravelMeans(event.target.value)} />
          <label htmlFor="car">Own Car</label>
          <br />
          <input type="radio" id="walkBicycle" name="travelMeans" value="Walk / Bicycle" onChange={(event) => setTravelMeans(event.target.value)} />
          <label htmlFor="walkBicycle">Walk / Bicycle</label>
          <br />
          <input type="radio" id="auto" name="travelMeans" value="Auto" onChange={(event) => setTravelMeans(event.target.value)} />
          <label htmlFor="auto">Auto</label>
          <br />
          <input type="radio" id="rideHailing" name="travelMeans" value="App based ride hailing cab services including Ola / Uber" onChange={(event) => setTravelMeans(event.target.value)} />
          <label htmlFor="rideHailing">App based ride hailing cab services including Ola / Uber</label>
          <br />
        </div>
        <br />
        <div>
          <label htmlFor="distance">What is the total distance between your home and workplace?</label>
          <br />
          <input type="radio" id="lessThan5" name="distance" value="< 5 km" onChange={(event) => setDistance(event.target.value)} />
          <label htmlFor="lessThan5">&lt; 5 km</label>
          <br />
          <input type="radio" id="5to10" name="distance" value="5 - 10 km" onChange={(event) => setDistance(event.target.value)} />
          <label htmlFor="5to10">5 - 10 km</label>
          <br />
          <input type="radio" id="10to15" name="distance" value="10 - 15 km" onChange={(event) => setDistance(event.target.value)}
          
      />
      <label htmlFor="10to15">10 - 15 km</label>
      <br />
      <input type="radio" id="15to20" name="distance" value="15 - 20 km" onChange={(event) => setDistance(event.target.value)} />
      <label htmlFor="15to20">15 - 20 km</label>
      <br />
      <input type="radio" id="20to25" name="distance" value="20 - 25 km" onChange={(event) => setDistance(event.target.value)} />
      <label htmlFor="20to25">20 - 25 km</label>
      <br />
      <input type="radio" id="moreThan25" name="distance" value="> 25 km" onChange={(event) => setDistance(event.target.value)} />
      <label htmlFor="moreThan25">&gt; 25 km</label>
      <br />
    </div>
    <br />
  <button type="submit" disabled={!(travelMeans&&distance)}>Next</button>
  </form>

</div>
</div>
    </div>
    
    
  )};
  
  export default RespondentTravelProfile;
