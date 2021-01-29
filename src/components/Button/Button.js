import React from "react";
import styles from "./Button.module.css";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={styles.btn}
    >
      {text}
    </button>
  );
};

export default Button;
