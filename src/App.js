import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Header />

            <Routes>
                <Route index element={<ProductList />}></Route>
            </Routes>
        </div>
    );
}

export default App;
