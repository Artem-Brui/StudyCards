import { MainContextProvider } from "./context/MainContext";
import RouterProvider from "./router/RouterProvider";

export const App = () => {
  return (
    <MainContextProvider>
      <RouterProvider />
    </MainContextProvider>
  )
} ;

