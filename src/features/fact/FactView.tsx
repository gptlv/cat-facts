import { useGetFactQuery } from "../../services/meowfacts";
import { Typography, Button, Spin } from "antd";
const { Title } = Typography;

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "80%",
};

const FactView = () => {
  const { data, error, isLoading, refetch } = useGetFactQuery({});

  const handleButtonClick = () => {
    refetch();
  };

  return (
    <div style={style}>
      {isLoading && <Spin />}
      {!isLoading && error ? (
        <div>
          {"status" in error
            ? `Error: ${error.status}`
            : "Something went wrong"}
        </div>
      ) : null}
      {!isLoading && data ? <Title>{data.data}</Title> : null}
      {!isLoading && (
        <Button onClick={handleButtonClick} type="primary" size="large">
          Get a new fact
        </Button>
      )}
    </div>
  );
};

export default FactView;
