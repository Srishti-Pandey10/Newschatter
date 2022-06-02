import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        {/* <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<News pageSize={6} country="in" category="general" />}
            ></Route>

            <Route
              path="/entertainment"
              element={
                <News pageSize={6} country="in" category="entertainment" />
              }
            ></Route>
            <Route
              path="/health"
              element={<News pageSize={6} country="in" category="health" />}
            ></Route>
            <Route
              path="/science"
              element={<News pageSize={6} country="in" category="science" />}
            ></Route>
            <Route
              path="/sports"
              element={<News pageSize={6} country="in" category="sports" />}
            ></Route>
            <Route
              path="/technology"
              element={<News pageSize={6} country="in" category="technology" />}
            ></Route>
          </Routes>
        </BrowserRouter> */}

        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={<News pageSize={5} category="general" country="in" />}
              />
              <Route
                path="/entertainment"
                element={
                  <News pageSize={5} category="entertainment" country="in" />
                }
              />
              <Route
                path="/health"
                element={<News pageSize={5} category="health" country="in" />}
              />
              <Route
                path="/science"
                element={<News pageSize={5} category="science" country="in" />}
              />
              <Route
                path="/sports"
                element={<News pageSize={5} category="sports" country="in" />}
              />
              <Route
                path="/technology"
                element={
                  <News pageSize={5} category="technology" country="in" />
                }
              />
            </Routes>
          </BrowserRouter>
        </>
      </>
    );
  }
}
