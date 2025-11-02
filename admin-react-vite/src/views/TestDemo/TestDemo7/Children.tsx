import { memo } from "react";

export const Children1 = memo((props: any) => {
    console.log('Children1 渲染了')
    return <div>{props.arr}</div>
})


export const Children2 = () => {
    // 不用 memo包裹，只要父组件重新渲染，children2 就会重新渲染。
    console.log('Children2 渲染了')
    return <div>123</div>
}
