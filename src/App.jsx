import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)



  function addCash(cash) {
    dispatch({ type: "ADD_CASH", payload: cash })
  }


  function getCash(cash) {
    dispatch({ type: "GET_CASH", payload: cash })

  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch({ type: "ADD_CUSTOMER", payload: customer })
  }


  const removeCustomer = (customer) => {
    dispatch({type: "REMOVE_CUSTOMERS", payload: customer.id})
  }


  return (
    <div className="App">
      <div className='balance'>
        Баланс: {cash}
      </div>
      <div className='btn__container'>
        <button className='btn' onClick={() => addCash(Number(prompt()))}>Плюс</button>
        <button className='btn' onClick={() => getCash(Number(prompt()))}>Минус</button>
        <button className='btn' onClick={() => addCustomer(prompt())}>Добавить</button>
        <button className='btn' onClick={() => getCash(Number(prompt()))}>Удалить</button>
      </div>
      <div className='client'>
        <h1>Клиенты:</h1>
        <div className='customers__container'>
          {customers.length > 0 ?
            <div className='customers'>
              {customers.map(customer =>
                <div onClick={() => removeCustomer(customer)}>
                  {customer.name}
                </div>
              )}
            </div>
            :
            <div>
              Никого нет
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
