import FactView from "./features/fact/FactView";

const style: React.CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

function App() {
  return (
    <div style={style}>
      <FactView />
    </div>
  );
}

export default App;
