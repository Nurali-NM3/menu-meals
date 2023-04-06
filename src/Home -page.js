import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, } from "react-router-dom";

const HomePage = () => {

    const [food, setFood] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://themealdb.com/api/json/v2/1/randomselection.php`)
            .then(({data}) => {

                setFood(data.meals)
            }).finally(() => {
            setLoading(false)
        })
    }, [])
    console.log(food)

    return (
        <div>{
            loading ? <h3>loading..</h3> :
                <div className={'row'}>
                {
                    food.map((meals, idx) =>
                        <div key={idx} className="col-4">
                            <div className="box">
                                <img src={meals.strMealThumb} alt=""/>
                                <div className="title-h">
                                    <h4>{meals.strArea}</h4>
                                    <h2>{meals.strMeal}</h2>
                                </div>
                                <button className={'home-btn'}><Link to={`/page/${meals.idMeal}`}>see more</Link></button>
                            </div>
                        </div>)
                }
            </div>
        }
        </div>

    )
}
 export default HomePage;