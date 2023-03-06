import React from "react";
import Colections from "../workPage/colections/colectionContainer/colections";
import Timer from "../workPage/timer/Form/timer";
import NewColectionPage from "../workPage/timer/newColection/newColectionPage";
import content from "./content.module.css"
import ForgotPageStep1 from "./loginPage/ForgotPage/step1/Forgot";
import ForgotPage from "./loginPage/ForgotPage/step1/Forgot";
import ForgotPageStep2 from "./loginPage/ForgotPage/step2/step2";
import ForgotPageStep3 from "./loginPage/ForgotPage/step3/step3";
import LoginForm from "./loginPage/LoginForm/loginForm";
import RegistrationForm from "./loginPage/registrationForm/registrationForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkPage from "../workPage/workPage";

const Content = () => {
    return (
        <div className={content.content}>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<WorkPage />} />
                    <Route path='/timer' element={<WorkPage />} />
                    <Route path="/logIn" element={<LoginForm />} />
                    <Route path="/forgot" element={<ForgotPage />} />
                    <Route path="/forgot/step2" element={<ForgotPageStep2 />} />
                    <Route path="/forgot/step3" element={<ForgotPageStep3 />} />
                    <Route path="/registration" element={<RegistrationForm />} />
                    <Route path="/addColecion" element={<NewColectionPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Content;