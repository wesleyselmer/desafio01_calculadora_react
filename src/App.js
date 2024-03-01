import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [lastNumber, setLastNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
  }

  const handleClearAll = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  }

  const handleSumNumbers = () => {
    console.log(`handleSumNumbers: firstNumber: ${firstNumber}, currentNumber: ${currentNumber}`);
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('+');
    }
  }

  const handleSubNumbers = () => {
    console.log(`handleSubNumbers: firstNumber: ${firstNumber}, currentNumber: ${currentNumber}`);
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('-');
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('-');
    }
  }

  const handleMultNumbers = () => {
    console.log(`handleMultNumbers: firstNumber: ${firstNumber}, currentNumber: ${currentNumber}`);
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('*');
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation('*');
    }
  }

  const handleDivNumbers = () => {
    console.log(`handleDivNumbers: firstNumber: ${firstNumber}, currentNumber: ${currentNumber}`);
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('/');
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation('/');
    }
  }

  const handleEqualsNumbers = () => {
    console.log(`Equals: firstNumber: ${firstNumber}, CurrentNumber: ${currentNumber}, operation: ${operation}`);
    if(firstNumber !== '0' && operation !== ''){
      console.log('Passou no if do Equals');
      switch(operation) {
        case '+':
          handleSumNumbers();
          setFirstNumber('0');
          break;
        case '-':
          handleSubNumbers();
          setFirstNumber('0');
          break;
        case '*':
          handleMultNumbers();
          setFirstNumber('0');
          break;
        case '/':
          handleDivNumbers();
          setFirstNumber('0');
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
      <Input value={currentNumber} />
      <Row>
      <Button label="CE"  onClick={handleClearAll} />
      <Button label="C"   onClick={handleOnClear} />
      <Button label="*"   onClick={handleMultNumbers} />
      <Button label="/"   onClick={handleDivNumbers} />
      </Row>
      <Row>
      <Button label="7"   onClick={() => handleAddNumber('7')} />
      <Button label="8"   onClick={() => handleAddNumber('8')} />
      <Button label="9"   onClick={() => handleAddNumber('9')} />
      <Button label="-"   onClick={handleSubNumbers} />
      </Row>
      <Row>
      <Button label="4"   onClick={() => handleAddNumber('4')} />
      <Button label="5"   onClick={() => handleAddNumber('5')} />
      <Button label="6"   onClick={() => handleAddNumber('6')} />
      <Button label="+"   onClick={handleSumNumbers} />
      </Row>
      <Row>
      <Button label="1"   onClick={() => handleAddNumber('1')} />
      <Button label="2"   onClick={() => handleAddNumber('2')} />
      <Button label="3"   onClick={() => handleAddNumber('3')} />
      <Button label="="   onClick={handleEqualsNumbers} />
      </Row>
      </Content>
    </Container>
  );
}

export default App;