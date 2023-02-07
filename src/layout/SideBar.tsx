function SideBar() {
  return (
    <div className="fixed left-0 top-0 h-[100vh] overflow-y-auto w-[240px] border border-r border-zinc-200 px-5 py-5">
      <ul>
        <li>
          <a href="/fetch-with-useEffect">Fetch with useEffect</a>
        </li>
        <li>
          <a href="/fetch-with-useQuery">Fetch with useQuery</a>
        </li>
        <li>
          <a href="/use-memo">Use memo</a>
        </li>
        <li>
          <a href="/use-effect">Use effect</a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
