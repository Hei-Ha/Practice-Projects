import React, { useEffect, useState, useRef } from 'react'
import { Button } from 'antd'
import ChildrenTest from "@/views/Test/src/Test9/ChildrenTest";

const EmptyTest = () => {
    const [count, setCount] = useState(0)
    const [childVisible, setChildVisible] = useState(true)
    const [testObj, setTestObj] = useState({
        a: 0
    })
    
    const testRef = useRef(123)
    
    useEffect( () => {
        console.log(123123)
        console.log('testRef changed')
    }, [])
    
    
    
    return <div>
        <Button onClick={() => {
            // setTestObj({
            //     ...testObj
            // })
        }}>
            change ref
            {/*{testObj.a}*/}
        </Button>
        
        
        
        
        
        
        
        
        
        
        
        
        {/*<Button onClick={() => {*/}
        {/*    setCount(count + 1)*/}
        {/*}}>*/}
        {/*    change children props data*/}
        {/*</Button>*/}
        {/*<Button onClick={() => {*/}
        {/*    setChildVisible(!childVisible)*/}
        {/*}}>show or visible child</Button>*/}
        
        {/*{childVisible && <ChildrenTest testCount={count} />}*/}
    </div>
}

export default EmptyTest