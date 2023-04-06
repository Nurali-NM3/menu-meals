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
                 setDishes(data.meals[0])
            }).finally(() =>{
                setLoading(false)
        })
    },[params.name])

    return(
        <div>
            {loading ? <h2>loading..</h2>:
                <div className={'uniq'}>
                   <div className="col-6">
                      <div className="box box1">
                          <button className={'btn'}><Link to='/'>GO BACK</Link></button>
                          <div className="wr-h3 title-h">
                              <div className={'name'}>
                                  <h2>{dishes.strMeal}</h2>
                                  <h3>{dishes.strArea}</h3>
                              </div>
                          </div>
                          <div className="wr-img">
                              <img src={dishes?.strMealThumb} alt=""/>
                          </div>
                      </div>
                   </div>
                    <div className="col-6">
                        <div className="box box2">
                            <h2>{dishes.strCategory}</h2>
                            <h3>{dishes.strInstructions}</h3>
                        </div>
                    </div>
                    <div className="Ingredient">
                        <h2>ingredient</h2>

                          <div className={'wr-ingredient'}>
                                 <div>
                                     {
                                         dishes.strIngredient1 &&
                                         <img className={'img-ingredient'}
                                              src={`https://themealdb.com/images/ingredients/${dishes.strIngredient1}.png`}
                                              alt="jj"/>
                                     }
                                     <p>{dishes.strIngredient1}</p>
                                 </div>
                         <div>
                             {
                                 dishes.strIngredient2 &&
                                 <img className={'img-ingredient'}
                                      src={`https://themealdb.com/images/ingredients/${dishes.strIngredient2}.png`}
                                      alt="jj"/>
                             }
                             <p>{dishes.strIngredient2}</p>
                         </div>
                                  <div>
                                      {
                                          dishes.strIngredient2 &&
                                      <img className={'img-ingredient'}
                                           src={`https://themealdb.com/images/ingredients/${dishes.strIngredient3}.png`}
                                           alt="jj"/>
                                      }
                                      <p>{dishes.strIngredient3}</p>
                                  </div>
                                  <div>
                                      {
                                          dishes.strIngredient4 &&
                                      <img className={'img-ingredient'}
                                           src={`https://themealdb.com/images/ingredients/${dishes.strIngredient4}.png`}
                                           alt="jj"/>
                                      }
                                      <p>{dishes.strIngredient4}</p>
                                  </div>
                              <div>
                                  {
                                      dishes.strIngredient5 &&
                                  <img className={'img-ingredient'}
                                       src={`https://themealdb.com/images/ingredients/${dishes.strIngredient5}.png`}
                                       alt="jj"/>
                                  }
                                  <p>{dishes.strIngredient5}</p>
                              </div>
                          </div>
                            <div className={'wr-ingredient'}>
                                    <div>
                                        {
                                            dishes.strIngredient6 &&
                                        <img className={'img-ingredient'}
                                             src={`https://themealdb.com/images/ingredients/${dishes.strIngredient6}.png`}
                                             alt="jj"/>
                                        }
                                        <p>{dishes.strIngredient6}</p>
                                    </div>
                                    <div>{
                                        dishes.strIngredient7 &&
                                        <img className={'img-ingredient'}
                                             src={`https://themealdb.com/images/ingredients/${dishes.strIngredient7}.png`}
                                             alt="jj"/>
                                    }
                                        <p>{dishes.strIngredient7}</p>
                                    </div>
                                    <div>
                                        {
                                            dishes.strIngredient8 &&
                                        <img className={'img-ingredient'}
                                             src={`https://themealdb.com/images/ingredients/${dishes.strIngredient8}.png`}
                                             alt="jj"/>
                                        }
                                        <p>{dishes.strIngredient8}</p>
                                    </div>
                                    <div>
                                        {
                                            dishes.strIngredient9 &&
                                        <img className={'img-ingredient'}
                                             src={`https://themealdb.com/images/ingredients/${dishes.strIngredient9}.png`}
                                             alt="jj"/>
                                        }
                                        <p>{dishes.strIngredient9}</p>
                                    </div>
                                    <div>
                                        {
                                            dishes.strIngredient10 &&
                                            <img className={'img-ingredient'}
                                              src={`https://themealdb.com/images/ingredients/${dishes.strIngredient10}.png`}
                                              alt="jj"/>
                                        }
                                        <p>{dishes.strIngredient10}</p>
                                    </div>
                            </div>

                    </div>
                </div>

            }
        </div>
)
}
export default Page