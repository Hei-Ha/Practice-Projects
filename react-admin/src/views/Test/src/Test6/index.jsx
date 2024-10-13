import React, { useEffect, useRef, useState } from 'react'
const Btn = (props) => {
    const { btnContent, hoverContent } = props
    const btnRef = useRef(null)
    const divRef = useRef(null)
    
    const [divDisplay, setDivDisplay] = useState('hidden')
    const [position, setPosition] = useState([])
    
    
    useEffect(() => {
        btnRef.current = document.getElementsByClassName('btn')[0]
        divRef.current = document.getElementsByClassName('div')[0]
    }, [])
    
    const onMouseOver = () => {
        setDivDisplay('block')
        setPosition([`-20px`, `0px`])// 上
        setPosition([`0px`, `20px`]) // 右
        setPosition([`20px`, `0px`]) // 下
        setPosition([`0px`, `-20px`]) // 下
    }
    
    const onMouseLeave = () => {
        setDivDisplay('hidden')
    }
    
    useEffect(() => {
        if (!btnRef.current) return
        btnRef.current.addEventListener('mouseover', onMouseOver)
        btnRef.current.addEventListener('mouseleave', onMouseLeave)
        
        return () => {
            btnRef.current?.removeEventListener('mouseover', onMouseOver)
            btnRef.current?.removeEventListener('mouseleave', onMouseLeave)
        }
        
    }, [btnRef.current])
    
    
    
    
    
    return <button className='btn relative' ref={btnRef}>
        {btnContent}
        <div
            className={`div ${divDisplay} absolute bg-pink`}
            style={{
                top: position[0],
                left: position[1],
            }}
        >{hoverContent}</div>
    </button>
}


export default Btn