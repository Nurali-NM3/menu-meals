import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, } from "react-router-dom";

const HomePage = () => {

    const [food,setFood] = useState({})
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://themealdb.com/api/json/v2/1/randomselection.php`)
            .then(({data}) =>{

                setFood(data)
            }).finally( () =>{
                setLoading(false)
        })
    }, [])
    console.log(food)
    let g = [0,1,2,3,4,5,6,7,8,9]
    return (g.map((el ) =>{
        return  loading? <h3>loading..</h3>: <div className={'home'}>

                <h1>
                    <Link to={`/page/${food?.meals[el]?.idMeal}`}>{food?.meals[el]?.idMeal}</Link>
                </h1>
            <img src={food?.meals[el]?.strMealThumb} alt=""/>


        </div>
    })
    )

}
export default HomePage