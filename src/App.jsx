import Header from "./components/Header";
import MainSection from "./components/MainSection";
import {Route, Router, Routes} from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import {AuthProvider} from "./utils/AuthContext.jsx";
import Calculator from "./components/Calculator.jsx";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
        <div className='min-h-screen font-sans flex flex-col'>
          <Toaster
            position="top-center" // Позиция уведомления
            toastOptions={{
              duration: 3000, // Время отображения (3 секунды)
              style: {
                background: '#000', // Черный фон, как в вашем дизайне
                color: '#fff', // Белый текст
                borderRadius: '12px', // Закругленные углы
                padding: '12px 24px', // Отступы
                fontSize: '16px', // Размер шрифта
              },
            }}
          />
          <Header/>
          <div className='flex-grow'>
            <Routes>
              <Route path="/" element={<MainSection/>}/>
              <Route path="/calculator" element={<Calculator/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
            </Routes>
          </div>
        </div>
    </AuthProvider>
  );
}

export default App;
