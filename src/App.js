import React from "react";
import CascadingDropdowns from "./components/CascadingDropdowns";
import DecrementSeconds from "./components/DecrementCounter";
import Route from "./Route";
import Header from "./Header";

export default function App() {
  return (
    <div>
      <Header />
      <Route path="/decrementSeconds">
        <DecrementSeconds />
      </Route>
      <Route path="/dropdown">
        <CascadingDropdowns />
      </Route>
    </div>
  );
}
