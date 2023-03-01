import React,{useEffect,useState} from 'react'
import axios from 'axios'

export const HomePage = () => {
  const [Data, setData] = useState([])


  useEffect(() => {
    axios.get('https://dummyjson.com/users').then((res) => {
      setData(res.data.users);
      
    })
},[]);

console.log(Data);



  return (
    <>  
    <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="mt-3">
              {Data?.map(item=>{
                return <ul className="list list-inline">
                 <li className="d-flex justify-content-between">
                   <div className="d-flex flex-row align-items-center"><i className="fa fa-check-circle checkicon" />
                     <div className="ml-2">
                       <h6 className="mb-0">{item.firstName} {item.maidenName} {item.lastName}  </h6>
                       <div className="d-flex flex-row mt-1 text-black-50 date-time">
                         <div><i className="fa fa-calendar-o" /><span className="ml-2">Eye Color : {item.eyeColor}</span></div>
                         <div><i className="fa fa-calendar-o" /><span className="ml-2"> Blood Group : {item.bloodGroup}</span></div>
                         <div><i className="fa fa-calendar-o" /><span className="ml-2"> Height : {item.height}</span></div>
                         <div><i className="fa fa-calendar-o" /><span className="ml-2">  Contact No : {item.phone}</span></div>
                         <div><i className="fa fa-calendar-o" /><span className="ml-2">  Weight : {item.weight}</span></div>
                         <div className="ml-3"><i className="fa fa-clock-o" /><span className="ml-2">{item.gender}</span></div>
                       </div>
                     </div>
                   </div>
                   <div className="d-flex flex-row align-items-center">
                     <div className="d-flex flex-column mr-2">
                       <div className="profile-image"><img className="rounded-circle" src={item.image} width={30} /></div><span className="date-time">{item.university}</span></div><i className="fa fa-ellipsis-h" /></div>
                 </li>
               </ul>

              })}
             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
