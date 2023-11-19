import React from 'react';
import { Virtual_List } from "@/views/VirtualList/src/VirtualList";

export const Index = () => {
    return <div className='h-800px w-500px'>
        <Virtual_List
            className={'border border-#000000 border-solid'}
            // containerHeight='800px'
            // containerWidth='500px'
        />
    </div>
}