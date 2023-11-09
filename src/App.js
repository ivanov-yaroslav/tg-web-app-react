import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Header />

            <Routes>
                <Route index element={<ProductList />}></Route>
                <Route path={'form'} element={<Form />}></Route>
            </Routes>
        </div>
    );
}

export default App;
