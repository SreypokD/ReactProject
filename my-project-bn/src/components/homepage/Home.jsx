import React from 'react'
import './Home.css'
import Card from '../cardlist/Card'
const Home = () => {
    return (
       <>
         <section className="home-wrapper flexCenter">
            <div className="home-container flexCenter">
                <div className="home-left">
                    <h1>Computer All model</h1>
                    <p>Find your favorite and all of model computer that you need !!</p>
                    <div className="search-bar">
                        <input type="text" className='input' />
                        <button className='button'>Search</button>
                    </div>
                </div>
                <div className="home-right">
                    <img src="https://hiraoka.com.pe/media/mageplaza/blog/post/m/a/macbook_air_vs._macbook_pro-_cuales_son_sus_diferencias.jpg" alt="" width={800} />
                </div>
            </div>
        </section>
        <Card/>
       </>
    )
}

export default Home
