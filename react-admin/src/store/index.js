import {create} from 'zustand';


const useBaseStore = create((set, get) => ({
    count: 0,
    add: () => set((state) => (
        {
            count: state.count + 1
        }
    )),
    
    decrease: () => set((state) => ({
        count: state.count - 1
    }))
}))


export {
    useBaseStore,
}