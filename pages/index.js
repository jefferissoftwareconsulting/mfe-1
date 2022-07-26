import styles from "../styles/MyComponent.module.css";

export default function MyComponent() {
  const clickyClick = () => {
    document.dispatchEvent(
      new CustomEvent("eventBus", {
        detail: "mfe1:buttonClicked",
        payload: "hello from MFE-1",
      })
    );
  };

  return (
    <div className={styles.container}>
      <h2>Welcome to MFE-1</h2>
      <button onClick={clickyClick}>MFE button</button>
    </div>
  );
}
