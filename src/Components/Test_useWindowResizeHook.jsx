import useWindowResize from "./Custom_useWindowResizeHook"



export default function UseWindowResizeTest(){

    const windowSize = useWindowResize();
    const {width, height} = windowSize;

    return <div className="flex flex-col justify-center items-center font-bold w-[200px] h-[200px] bg-violet-200 space-y-2 rounded-md">
        <h1>Use Window resize Hook</h1>
        <p>
            Width is {width}
        </p>
        <p>
            Height is {height}
        </p>
    </div>
}