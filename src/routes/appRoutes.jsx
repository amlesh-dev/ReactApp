import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          ></Route>
        ))}
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
