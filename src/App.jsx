import React, { useEffect, useContext } from "react";
import styled from "styled-components";

import Global from "./styles/Global";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Context } from "./context";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const { dispatch } = useContext(Context);
  useEffect(() => {
    const history = localStorage.getItem("studies");
    if (history) {
      dispatch({ type: "LOAD_LOCAL", payload: JSON.parse(history) });
    }
  }, [dispatch]);
  return (
    <>
      <Global />
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;

const Wrapper = styled.div`
  flex: 1 0 auto;
`;
