const dummyApiResponse = {
    showLightAndDarkMode: false,
    showTicTacToeBoard: false,
    showRandomColorGenerator: true,
    showAccordion: false,
    showTreeView: true,
}

function featureFlagDataServiceCall(){

    return new Promise((resolve, reject)=> {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse),500);
        else reject('Some error Occurred! Please try again');
    })
}

export default featureFlagDataServiceCall;
