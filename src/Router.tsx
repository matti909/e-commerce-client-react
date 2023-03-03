import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./pages";
import { RouterLayout } from "./common/RouterLayout";


export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
