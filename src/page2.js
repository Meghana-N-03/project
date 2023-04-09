
import './App.css';

import { useLocation } from 'react-router-dom';

import data1  from './sample_db_0km.json'
import data2  from './sample_db_5km.json'
import data3  from './sample_db_10km.json'
import data4  from './sample_db_15km.json'
import data5  from './sample_db_20km.json'
import data6  from './sample_db_25km.json'
function MyComponent() {
 
  const location=useLocation();
  const travelMeans=location.state.travelMeans
  const distance=location.state.distance

  

let data=null
if(distance==='< 5km')
    data=data1

else if(distance==='5 - 10 km')
    data=data2
else if(distance==='10 - 15 km')
    data=data3

else if(distance==='15 - 20 km')
    data=data4

else if(distance==='20 - 25 km')
    data=data5

    else if(distance==='> 25 km')
        data=data6



console.log(data);
    
  return (

    <div className="container ">
        <div className="row">
          <div className="col-lg8 offset-lg-1 my-5 p-5"></div>
<div class="table-wrapper">
   
    <table  border="3" width="1000px" height="500px"  class="fl-table">
      
        <tr>
            <td>BUS ROUTE 1<br/>
                <input type="radio"  value="BUS ROUTE 1" / ></td>
            <td>BUS ROUTE 2<br/>
                 <input type="radio"  value="BUS ROUTE 1" / ></td>
        

             <td>METRO/TRAIN<br/>
                  <input type="radio"  value="BUS ROUTE 1" / >
             </td>
              <td>OWN CAR<br/>
 <input type="radio"  value="BUS ROUTE 1" / >
              </td>
               <td>OLA/UBER<br/>
 <input type="radio"  value="BUS ROUTE 1" / >
               </td>
        </tr>
         <tr height="50">
            <td colspan="5"><center>Total travel time spent while inside the vehicle(s)</center></td>
            
        </tr>
         <tr>
            <td>{data.Data[0]['mode_1.ivtt']}</td>
            <td>{data.Data[0]['mode_2.ivtt']}</td>
             <td>{data.Data[0]['mode_4.ivtt']}</td>
              <td>{data.Data[0]['mode_8.ivtt']}</td>
               <td>{data.Data[0]['mode_5.ivtt']}</td>
        </tr>
         <tr height="50">
            <td colspan="5"><center>Total travel time spent while outside the vehicle(s)</center></td>
            
        </tr>
         <tr>
            <td>{Number(data.Data[0]['mode_1.walktime']) + Number(data.Data[0]['mode_1.waittime'])}</td>
            <td>{Number(data.Data[0]['mode_2.walktime']) + Number(data.Data[0]['mode_2.waittime'])}</td>
             <td>{Number(data.Data[0]['mode_4.walktime']) + Number(data.Data[0]['mode_4.waittime'])}</td>
              <td>{Number(data.Data[0]['mode_8.walktime']) + Number(data.Data[0]['mode_8.waittime'])}</td>
               <td>{Number(data.Data[0]['mode_5.walktime']) + Number(data.Data[0]['mode_5.waittime'])}</td>
        </tr>
        <tr height="50">
          <td colspan="5"><center>Possible delay due to traffic or other uncertainties</center></td>
            
        </tr>
         <tr>
            <td>{data.Data[0]['mode_1.tvariab']}</td>
            <td>{data.Data[0]['mode_2.tvariab']}</td>
             <td>{data.Data[0]['mode_4.tvariab']}</td>
              <td>{data.Data[0]['mode_8.tvariab']}</td>
               <td>{data.Data[0]['mode_5.tvariab']}</td>
        </tr>
          <tr height="50">
             <td colspan="5"><center>Total one-way cost of travel</center></td>
            
        </tr>
       <tr>
            <td>{data.Data[0]['mode_1.tcost']}</td>
            <td>{data.Data[0]['mode_2.tcost']}</td>
             <td>{data.Data[0]['mode_4.tcost']}</td>
              <td>{data.Data[0]['mode_8.tcost']}</td>
               <td>{data.Data[0]['mode_5.tcost']}</td>
        </tr>
        <tr height="50">
            <td colspan="5"><center>Extent of crowding in the vehicle</center></td>
            
        </tr>
         <tr>
            <td>{data.Data[0]['mode_1.crowd']}</td>
            <td>{data.Data[0]['mode_2.crowd']}</td>
             <td>{data.Data[0]['mode_4.crowd']}</td>
              <td>{data.Data[0]['mode_8.crowd']}</td>
               <td>{data.Data[0]['mode_5.crowd']}</td>
        </tr>
         <tr height="50">
            <td colspan="5"><center>TService Type</center></td>
            
        </tr>
         <tr>
            <td>{data.Data[0]['mode_1.serv']}</td>
            <td>{data.Data[0]['mode_2.serv']}</td>
             <td>{data.Data[0]['mode_4.serv']}</td>
              <td>{data.Data[0]['mode_8.serv']}</td>
               <td>{data.Data[0]['mode_5.serv']}</td>
        </tr>

    </table>
 </div>

 </div>
</div>

    
  );
}

export default MyComponent;