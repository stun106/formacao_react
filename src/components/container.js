import Botao from "./botao";
import { useState } from "react";
import Input from "./input";

export default function Container (){
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('0');

  const handleGetNumber = (num) =>{
    console.log(num);
    setCurrentNumber(prev => `${prev === '0' ? '': prev}${num}`);
  }
  const handleclearNumber = () =>{
      setCurrentNumber('0');
      setFirstNumber('0')
      setOperation('')
      
  }
  const handleSumNumber = () => {
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }
  const handleSubNumber = () => {
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }
  const handleMultNumber = () => {
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }
  const handlePorcentNumber = () =>{
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const sum = Number(firstNumber) * Number(currentNumber) / 100;
      setCurrentNumber(String(sum));
      setOperation('')
    }
    
  }
  const handleEqualsResult = () =>{
    if (! firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      if (operation === '+'){
        handleSumNumber();
      }else if (operation === '-'){
        handleSubNumber();
      }else if (operation === '*'){
        handleMultNumber();
      }else if (operation === '%'){
       handlePorcentNumber();
      
      }
    
    }
  
  }
    return(
          <div className="bg-lime-300 flex items-center w-screen h-screen ">
            <div className="rounded m-auto bg-stone-900 w-56 h-52">
              <strong>Casio</strong>
              <Input className="bg-neutral-50 border-solid border-2 border-stone-900 rounded mt-2 w-56 h-16 rounded" value={currentNumber} disabled></Input>
              <Botao label="7" onClick={() => handleGetNumber('7')} />
                
                <Botao label="8" onClick={() => handleGetNumber('8')} />
          
                
                <Botao label="9" onClick={() => handleGetNumber('9')} />
                  
                
                <Botao label="C" onClick={() => handleclearNumber()} />
                  
                
                <Botao label="4" onClick={() => handleGetNumber('4')} />
                  
          
                <Botao label="5" onClick={() => handleGetNumber('5')} />
                  
                
                <Botao label="6" onClick={() => handleGetNumber('6')} />
                  
                
                <Botao label="+" onClick={() => handleSumNumber()} />
                  
                
                <Botao label="1" onClick={() => handleGetNumber('1')} />
                  
                
                <Botao label="2" onClick={() => handleGetNumber('2')} />
                  
                
                <Botao label="3" onClick={() => handleGetNumber('3')} />
                  
                
                <Botao label="-" onClick={() => handleSubNumber()} />
                  
                
                <Botao label="%" onClick={() => handlePorcentNumber()} />
                  
           
                <Botao label="0" onClick={() => handleGetNumber('0')} />
                  
                
                <Botao label="=" onClick={() => handleEqualsResult('=')} />
                  
                
                <Botao label="*" onClick={() => handleMultNumber()} />
  
                
            </div>
          </div>
        
    )
}