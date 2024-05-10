import { Todo } from "./App";

function Tst(props: Todo) {
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.descript}</h2>
      </div>
    );
  }


  export default Tst;
  