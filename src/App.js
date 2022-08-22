import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './Reducers/index';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin: 1rem;
`;

const ChangeValueButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #61dafb;
  border: none;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 0.5rem;
`;

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{counter}</span>
        <ButtonWrapper>
          <ChangeValueButton onClick={() => dispatch(increase())}>
            +1
          </ChangeValueButton>
          <ChangeValueButton onClick={() => dispatch(decrease())}>
            -1
          </ChangeValueButton>
        </ButtonWrapper>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
