import React from 'react';
import "./assets/styles/main.scss";
import Router from "./routes/router";

import Layout from "./components/layout/layout";

function App() {
  return (
      <Layout>
        <Router />
      </Layout>
  )
}

export default App;
