import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getQuote } from "./quoteSlice";

const QuoteView = () => {
  const quote = useAppSelector((state) => state.quote);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getQuote());
  }, []);

  const handleButtonClick = () => {
    dispatch(getQuote());
  };

  return (
    <>
      {quote.loading && <div>Loading...</div>}
      {!quote.loading && quote.error ? <div>Error: {quote?.error}</div> : null}
      {!quote.loading && quote.data ? <div>{quote.data}</div> : null}
      <button onClick={handleButtonClick}>Get a new quote</button>
    </>
  );
};

export default QuoteView;
