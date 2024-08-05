import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './practice/First'
import Second from './practice/Second'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import MyRoutes from './MyRoutes'
import { GlobalContextProvider } from './component/GlobalContext'
import { combineReducers, createStore } from 'redux'
import counterReducer from './Redux/counterReducer'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { PersistGate } from 'redux-persist/integration/react'
import GameReducer from './Redux/GameReducer'

function App() {
  // const [count, setCount] = useState(0)

  const rootReducer = combineReducers({
    counterStore: counterReducer,
    gameStore: GameReducer
  })

  
  const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  
  const myStore = createStore(persistedReducer)
  let persistor = persistStore(myStore)

  return (
    <>
      <Provider store = {myStore}>
      <PersistGate loading={null} persistor={persistor}>
      <MyRoutes/>
      </PersistGate>
      </Provider>
    </>
  )
}

export default App


