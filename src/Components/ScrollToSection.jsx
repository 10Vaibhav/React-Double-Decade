export default function ScrollToSection(){

    function handleScrollToSection(){
        // i use this here because the size of the component if size is window like then we have to use ref, but here if u use ref then you not see the changes due to small size of component.
        const element = document.getElementById('third-card');
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    const data = [
        {
            Label: 'First Card',
            style : {
                width: '100%',
                height: '400px',
                margin: '2px',
                background: 'red'
            }
        },
        {
            Label: 'Second Card',
            style : {
                width: '100%',
                height: '400px',
                margin: '2px',
                background: 'grey'
            }
        },
        {
            Label: 'Third Card',
            style : {
                width: '100%',
                height: '400px',
                margin: '2px',
                background: 'blue'
            }
        },
        {
            Label: 'Fourth Card',
            style : {
                width: '100%',
                height: '400px',
                margin: '2px',
                background: 'green'
            }
        },
        {
            Label: 'Fifth Card',
            style : {
                width: '100%',
                height: '400px',
                margin: '2px',
                background: 'yellow'
            }
        },
    ]

    return <div className="w-[90%] sm:w-[700px] h-[500px] sm:h-[700px] space-y-4 bg-red-50 overflow-auto scroll-m-2" >
        <div className="bg-blue-50 p-3 sm:p-4 rounded-lg shadow mb-4 sm:mb-6 w-full flex flex-col justify-center items-center">
        <h1 className="text-xl font-medium text-teal-800 mb-4">Scroll to a particular section</h1>
        <button onClick={handleScrollToSection} className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
            Click To Scroll</button>
        </div>
        {
            data.map((dataItem,index)=> (
                <div
                    key={index}
                    id={index === 2 ? 'third-card' : undefined}
                    style={dataItem.style}
                >
                    <h3>{dataItem.Label}</h3>
                </div>
            ))
        }
    </div>
}
