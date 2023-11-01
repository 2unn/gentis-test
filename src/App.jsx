import { useState } from "react";

import {
  Header,
  Footer,
  Hero,
  Companies,
  Product,
  Feedbacks,
  Services,
} from "./components";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Hero />
      <Companies />
      <Product />
      <Feedbacks />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
