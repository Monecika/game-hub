import { createBrowserRouter } from "react-router-dom";
import GameDetails from "./features/games/components/GameDetails";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/game/:id", element: <GameDetails /> },
    ],
  },
]);

export default router;
