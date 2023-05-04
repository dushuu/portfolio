import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Applayout from "../layout/Applayout/Applayout";
import pages, { MainPageConf } from "../pages";
import { AboutMe } from "../pages/About/AboutMe";
import MainPage from "../pages/Mainpage/MainPage";

const AppRoutes = () => {
  const createRouteProps = (pagesConf) => {
    console.log(pagesConf);
    pagesConf.map(({ component, link }) => {
      const Element = pages[component];

      return {
        element: <Element />,
        path: `${link}/*`,
      };
    });
  };
  const appPages = createRouteProps(MainPageConf);
  const elements = useRoutes([
    {
      children: [
        {
          element: <Navigate to="/dashboard" />,
          path: "",
        },
        { element: <MainPage />, path: "/home" },
        {
          element:<AboutMe/>,
          path:'/About-me'
        },
        {
          element: <Navigate to="/dashboard" />,
          path: "*",
        },
      ],
      element: <Applayout />,
    },
  ]);
  return elements;
};

export default AppRoutes;
