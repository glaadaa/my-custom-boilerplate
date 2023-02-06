import { useState, useMemo, useEffect } from "react";
export default function UseReducer() {
  console.log("Rerendered");
  const [number, setNumber] = useState<number>(0);
  // const [doubler, setDoubler] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const doubler = useMemo(() => {
    return calculation(number);
  }, [number]);
  // const doubler = calculation(number);
  // useEffect(() => {
  //   setDoubler(calculation(number));
  // }, [number]);
  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
        className="border border-zinc-300"
        value={number}
      />
      <h3>{doubler}</h3>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        className="border border-zinc-300"
        value={text}
      />
    </div>
  );
}

function calculation(val: number) {
  for (let i: number = 0; i <= 1000000000; i++) {}
  return val * 2;
}
