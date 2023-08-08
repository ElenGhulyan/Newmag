import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import React from "react";
import BooksRouts from './books'
import AuthorsRoutes from './authors'
import About_us from "./about_us";
import translators from "./translators";
import reviews from "./reviews";
import media from "./media";
import Articles from "./articles";
import HomePage from "../pages/homePage";
import Footer from "../components/main/footer/footer";

export default createBrowserRouter([
    {
        path: "/",
        element: <> <App/> <HomePage/><Footer/> </>,
    },
    ...BooksRouts,
    ...AuthorsRoutes,
    ...About_us,
    ...Articles,
    ...translators,
    ...reviews,
    ...media
]);
