import { useGetFactQuery } from "../../services/meowfacts";

const FactView = () => {
  const { data, error, isLoading, refetch } = useGetFactQuery({});

  const handleButtonClick = () => {
    refetch();
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && error ? (
        <div>
          {"status" in error
            ? `Error: ${error.status}`
            : "Something went wrong"}
        </div>
      ) : null}
      {!isLoading && data ? <div>{data.data}</div> : null}

      <button onClick={handleButtonClick}>Get a new fact</button>
    </>
  );
};

export default FactView;
