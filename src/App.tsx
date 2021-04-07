import React from "react";
import styles from "./App.module.css";

import { Header, Footer } from "./components"

function App() {
  return (
    <div className={styles.App}>
      <Header />

      <div className={styles["page_content"]}>


      </div>

      <Footer />
    </div>
  );
}

export default App;
