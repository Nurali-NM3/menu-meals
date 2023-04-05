import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";


const Page = () =>{
    const params = useParams()

    const [dishes,setDishes] = useState({})
    const [loading,setLoading] = useState(true)
    useEffect(() =>{
        axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${params.name}`)
            .then(({data}) =>{
                console.log(data)
                 setDishes(data)
            }).finally(() =>{
                setLoading(false)
        })
    },[params.name])
    return(
        <div>
            {loading ? <h2>loading..</h2>:
                <div>
                    <h3>{dishes.meals[0].strMeal}</h3>
                    <img src={dishes?.meals[0]?.strMealThumb} alt=""/>
                    <button><Link to='/'>GO BACK</Link></button>
                </div>

            }
        </div>
)
}
export default Page