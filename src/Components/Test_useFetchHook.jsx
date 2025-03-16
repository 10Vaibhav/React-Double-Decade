import useFetch from "./Custom_useFetchHook"

export default function UseFetchHookTest(){

    const {data, error, Loading} = useFetch('https://dummyjson.com/products', {});

    return <div className="w-[500px] h-[300px] overflow-auto  space-y-3 bg-orange-50 flex flex-col justify-center items-center">

        <div className="top-0 sticky bg-rose-300 text-white w-full text-center">
                <h1 className="font-semibold">Extracted data</h1>
        </div>
        {
            Loading ? <h3>Loading, Please Wait</h3>: null
        }
        {
            data && data.products && data.products.length > 0 ? data.products.map((productsItem)=> <p key={productsItem.key}>{productsItem.title}</p>) : null
        }
        {
            error ? <h3>{error}</h3> : null
        }
    </div>
}

