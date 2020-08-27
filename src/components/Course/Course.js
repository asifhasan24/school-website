import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fakeData from '../../fakeData/Data.js';
import { useState } from 'react';
import './Course.css'
import Description from '../Description/Description'
import Cart from '../Cart/Cart'

const Course = () => {
    const Course15 = fakeData.slice(0, 15);
    const [course, setCourse] = useState(Course15);
    const [cart, setCart] = useState([]);



    const handleAddCourse = (course) => {
        const newCart = [...cart, course]
        setCart(newCart)
    }

    return (
        <div style={{backgroundColor : 'lightblue'}}>
          <div >
                <Cart cart={cart}></Cart>
            </div>
            <div>
                {
                    course.map(course => <Description handleAddCourse={handleAddCourse}
                        course={course} key={course.id} ></Description>)
                }
            </div>
          


        </div>
    );
};

export default Course;