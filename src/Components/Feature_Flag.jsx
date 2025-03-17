import { useContext } from "react"
import Accordion from "./Accordion.jsx"
import RandomColor from "./Random_Color.jsx"
import ThemeSwitcher from "./ThemeSwitcher.jsx"
import TicTacToe from "./Tic-Tac-Toe.jsx"
import TreeView from "./tree-view.jsx"
import { FeatureFlagsContext } from "./Feature-Flag-context.jsx"
import menus from "./tree-view-data.js";

export default function FeatureFlags(){

    const {loading, enabledFlags} = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {

            key : 'showLightAndDarkMode',
            component: <ThemeSwitcher/>

        },
        {

            key : 'showTicTacToeBoard',
            component: <TicTacToe/>

        },
        {

            key : 'showRandomColorGenerator',
            component: <RandomColor/>

        },
        {

            key : 'showAccordion',
            component: <Accordion/>

        },
        {

            key : 'showTreeView',
            component: <TreeView menus={menus}/>

        },
    ]

    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey];
    }

    if(loading) <h1>Data Loading! Please wait</h1>

    return <div className="w-full max-w-[1200px] min-h-[900px] bg-white px-4 py-4 space-y-3 flex flex-col justify-center items-center">
        <h1 className="font-bold text-center">Feature Flags</h1>
        <p className="text-center">It shows Feature, that we want to show through API.</p>
        {
            componentsToRender.map((componentItem)=> checkEnabledFlags(componentItem.key)? componentItem.component: null )
        }
    </div>
}