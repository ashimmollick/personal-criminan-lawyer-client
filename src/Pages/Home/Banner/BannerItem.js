import React from 'react';
import './BannerItem.css'
const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} className="w-full" alt="" />
            </div>
            <div className="absolute text-white justify transform -translate-y-1/2 left-32 top-1/3">
                <h2 className='text-3xl font-bold text-yellow-500'>Hello <br /> I Am Mike Hendricks </h2>
            </div>
            <div className="absolute text-white justify transform -translate-y-1/2 left-32 top-1/2">
                <h1 className='text-4xl font-bold'>High Quality Law <br /> Advice And Support You Can Affor</h1>
            </div>
            <div className="absolute text-white justify transform -translate-y-1/2 left-32 top-3/4">
                <button className="btn btn-outline btn-warning">+1(800)123 4567</button>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                <a href={`#slide${prev}`} className="btn hover:bg-yellow-500 bg-yellow-600 btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn hover:bg-yellow-500 bg-yellow-600 btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;