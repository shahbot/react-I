import * as React from "react";
import { useState } from "react";

function Home(props: { usename: string }) {
  var [banana, setBanana] = useState(1);
  return (
    <div>
      Home {banana}{" "}
      <button
        onClick={() => {
          setBanana(banana + 1);
          console.log(banana);
        }}
      >
        Increment
      </button>{" "}
    </div>
  );
}

export default Home;
