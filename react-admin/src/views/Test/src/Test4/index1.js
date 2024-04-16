import React, { useState, useEffect } from 'react'


const imageList = [
    "https://img95.699pic.com/photo/50046/5562.jpg_wh300.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFF9DbWyGf4EoK3Gwra3s0G-BadvLGlK4TVCYsuzIzxQ&s",
    "https://static.aicoinstorge.com/attachment/article/20230614/168671344559716.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwljQ6lcZogj4oyR23ueL0R9Yhlh8nj1ZvYtppbN8dDA&s",
    "https://static-cse.canva.cn/blob/239388/e1604019539295.jpg",
    "https://a.storyblok.com/f/191576/1200x800/5e7e44513e/ai_backgrounds_after_.webp",
    "https://img95.699pic.com/photo/40250/3647.jpg_wh300.jpg",
    "https://run.jb51.net/uploadfile/2017/0704/20170704051356149.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkadGYT8iDbQe5pSFX5LA1g9-JVQEUEcqndsN6ZQ8Vw&s",
    "https://www.shutterstock.com/shutterstock/photos/2252447135/display_1500/stock-vector--d-vector-beach-chair-yellow-umbrella-and-ball-summer-holiday-time-to-travel-concept-eps-2252447135.jpg",
    "https://img95.699pic.com/photo/50136/1351.jpg_wh300.jpg",
    "https://scpic.chinaz.net/Files/pic/pic9/201304/xpic10582.jpg",
    "https://vip.123pan.cn/1830418245/img/11202.jpg",
    "https://img.win3000.com/m00/d6/f0/39de3b0c924e419833db0c8aab402dd6.jpg",
];

const LazyLoad = (element) => {
    const observe = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            entries[0].target.src = entries[0].target.dataset.imgurl;
            observe.unobserve(element)
        }
    }, {
        root: document.getElementsByClassName('lazyLoadpage')[0],
        rootMargin: "0px 0px -300px 0px",
        threshold: 0,
    })
    observe.observe(element)
}

export default () => {
    const [imgList, setImgList] = useState([])

    useEffect(() => {
        setImgList([...document.getElementsByClassName('lazyLoadImg')])
    }, [])

    useEffect(() => {
        if (imgList.length === 0) return;
        imgList.forEach((item) => {
            LazyLoad(item)
        })
    }, [imgList])

    return <>
        <div className='lazyLoadpage overflow-scroll h-full mt-100 bg-pink'>
            {imageList.map((item, index) => {
                return <img
                    className='lazyLoadImg w-200px h-200px'
                    key={item + index}
                    data-imgurl={item}
                    src=""
                    alt={index}
                ></img>
            })}
        </div>
    </>
}