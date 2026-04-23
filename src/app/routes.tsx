import { createBrowserRouter } from "react-router";
import { HomePage } from './pages/HomePage';
import { CreatorsPage } from './pages/CreatorsPage';
import { CreatorProfilePage } from './pages/CreatorProfilePage';
import { RootLayout } from './layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "creators", Component: CreatorsPage },
      { path: "creators/:id", Component: CreatorProfilePage },
    ],
  },
]);
