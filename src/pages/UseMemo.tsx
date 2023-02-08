import { useState, useMemo } from 'react'
export default function UseReducer() {
  const [number, setNumber] = useState<number>(0)
  const [isDark, setIsDark] = useState<boolean>(false)
  const value = useMemo(() => {
    calculation()
    return number * 2
  }, [number])
  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
        className="border border-zinc-300"
        value={number}
      />
      <span>{value}</span>
      <br />
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setIsDark((prev) => !prev)}
      />
      <h3>test ddsssd</h3>
      <div
        className={`w-[200px] h-[50px] ${isDark ? 'bg-black' : 'bg-white'}`}
      ></div>
    </div>
  )
}

function calculation() {
  for (let i = 0; i <= 1000000000; i++) {
    continue
  }
}
