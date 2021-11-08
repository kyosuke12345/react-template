import { useDispatch, useSelector } from "react-redux";
import { addCount, reducerCount } from "redux/modules/testModule";
import { RootState } from "redux/rootReducer";

const TestPage: React.VFC = () => {
  const { count } = useSelector((state: RootState) => state.test);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button onClick={() => dispatch(addCount(10))}>{"+10"}</button>
        <button onClick={() => dispatch(reducerCount(10))}>{"-10"}</button>
      </div>
      <p>{count}</p>
    </div>
  );
};

export default TestPage;
