import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UrlPath from "utils/path";
import TestPage from "pages/TestScreen";

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={UrlPath.home} element={<TestPage />} />
        <Route element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
