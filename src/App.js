import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  pageSize={9}
                  key="general"
                  category="general"
                  country="in"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  pageSize={9}
                  key="entertainment"
                  category="entertainment"
                  country="in"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  pageSize={9}
                  category="health"
                  key="health"
                  country="in"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  pageSize={9}
                  category="science"
                  key="science"
                  country="in"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  pageSize={9}
                  category="sports"
                  key="sports"
                  country="in"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  pageSize={9}
                  category="technology"
                  key="technology"
                  country="in"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  pageSize={9}
                  key="p=business"
                  category="business"
                  country="in"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
