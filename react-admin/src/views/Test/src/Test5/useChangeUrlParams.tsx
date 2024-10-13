import { useState, useEffect } from 'react'


const useChangeUrlParams = (key: string, initvalue: string) => {
    const [value, setValue] = useState<string>(initvalue)
    
    const urlArr = decodeURIComponent(window.location.href).split('?')
    
    const handleUrlParams = (urlParmas: string) => {
        const map = new Map()
        urlParmas?.split('&').forEach((item: string) => {
            let arr = item.split('=')
            map.set(arr[0], arr[1])
        })
        map.set(key, value)
        let str = new URLSearchParams(Object.fromEntries(map)).toString()
        history.replaceState('', '', `${urlArr[0]}?${str}`)
    }
    
    
    useEffect(() => {
        handleUrlParams(urlArr[1])
    }, [value])
    
    
    return [value, setValue] as const


}

export default useChangeUrlParams