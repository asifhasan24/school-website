import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Description.css';


const Description = (props) => {
    const { name, price ,img } = props.course ;
    return (
        
      <div className="card" style={{width : '300px', marginLeft:'480px'}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-title" style={{fontWeight : '700',color : 'black'}}> Course Name :{name}</h3>
    <h4  style={{fontWeight : '500',color : 'blue'}}> Course Price : {price}</h4> 
    
  </div>
 
  <button type="button" className="btn btn-success" onClick={() => props.handleAddCourse(props.course)}>Enroll Now</button>
  
        </div>
  
     
    );
};

export default Description;                                                                                             

   // <div>
    //        <h4>{name}</h4> 
    //        <h4>{price}</h4> 
    //        <img src={img} alt=""/>
    //        <button type="button" className="btn btn-success" onClick={() => props.handleAddCourse(props.course)}>Enroll Now</button>
    //     </div>