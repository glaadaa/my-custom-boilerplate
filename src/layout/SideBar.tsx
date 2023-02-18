import UseCategory from '../hooks/useCategory'

function SideBar() {
  const { data, isLoading, error } = UseCategory()
  return (
    <div className="fixed left-0 top-0 h-[100vh] overflow-y-auto w-[240px] border border-r border-zinc-200 px-5 py-5 bg-white">
      <h3 className="text-lg text-black font-bold uppercase">All categories</h3>
      {error ? <div>{error.message}</div> : null}
      {isLoading ? <span>Loading</span> : null}
      {data ? (
        <ul className="mt-10">
          {data.map((category: string, index: number) => {
            return (
              <li key={index} className="uppercase text-tiny py-2">
                <a href="/">{category}</a>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default SideBar
