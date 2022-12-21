import * as React from "react";
import { useEffect, useState } from "react";

function ApiCom() {
  var [data, setData] = useState([] as Number[]);
  var [loadMore, setLoad] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5237/api/Rand")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data: number[]) => setData(data));
  }, [loadMore]);

  return (
    <div className="api-list">
      {data.map((item) => (
        <div className="item">{+item}</div>
      ))}
      <button onClick={() => setLoad(Math.random)}>Load More</button>
    </div>
  );
}

export default ApiCom;
