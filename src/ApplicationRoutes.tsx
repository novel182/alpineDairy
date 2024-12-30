import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./Components/LandingPage"

const ApplicationRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LandingPage/>} path="/"/>
            </Routes>
        </BrowserRouter>
    )
}

export default ApplicationRoutes