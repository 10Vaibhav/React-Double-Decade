import { useEffect } from "react";
import { useState } from "react"

// 0 1 2
// 3 4 5
// 6 7 8

function Square({value, onClick}){
    return <button onClick={onClick} className="border-2 border-teal-400 float-left text-2xl h-[100px] text-center w-[100px] mr-2 mt-2 cursor-pointer hover:scale-105 rounded-lg text-black font-bold" >{value}</button>
}

export default function TicTacToe(){

    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState('');

    function handleClick(getCurrentSquare){

        let cpySquares = [...squares];
        if(getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
        cpySquares[getCurrentSquare] = isXTurn ? 'X' : 'O';
        setIsXTurn(!isXTurn);
        setSquares(cpySquares);

    }

    function getWinner(squares){

        const winningPatterns = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8],
        ];

        for(let i=0; i< winningPatterns.length; i++){
            const [x,y,z] = winningPatterns[i];

            if(squares[x] && squares[x] === squares[y] && squares[x]=== squares[z]){
                return squares[x];
            }
        }

        return null;
    }

    useEffect(()=>{

        if(!getWinner(squares) && squares.every((item) => item !== '')){
            setStatus('This is a draw! Please restart the game');
        }else if(getWinner(squares)){
            setStatus(`Winner is ${getWinner(squares)}`);
        }else{
            setStatus(`Next Player is : ${isXTurn ? 'x' : 'O'}`);
        }

    },[squares, isXTurn]);

    return (
        <div className="w-[600px] h-[800px]flex flex-col border-2 border-teal-600 items-center mt-2 bg-amber-50 rounded-xl py-4">

            {/* row - 1*/}
            <div className="flex items-center justify-center">
                <Square value={squares[0]} onClick={()=> {handleClick(0)}}/>
                <Square value={squares[1]} onClick={()=> {handleClick(1)}}/>
                <Square value={squares[2]} onClick={()=> {handleClick(2)}}/>
            </div>

            {/* row - 2*/}
            <div className="flex items-center justify-center">
                <Square value={squares[3]} onClick={()=> {handleClick(3)}}/>
                <Square value={squares[4]} onClick={()=> {handleClick(4)}}/>
                <Square value={squares[5]} onClick={()=> {handleClick(5)}}/>
            </div>

            {/* row - 3*/}
            <div className="flex items-center justify-center">
                <Square value={squares[6]} onClick={()=> {handleClick(6)}}/>
                <Square value={squares[7]} onClick={()=> {handleClick(7)}}/>
                <Square value={squares[8]} onClick={()=> {handleClick(8)}}/>
            </div>

            <div className="flex flex-col justify-center items-center py-4">
            <h2 className="text-xl font-bold">{status}</h2>
            </div>
        </div>
    )
}

