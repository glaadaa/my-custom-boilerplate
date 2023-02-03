function SideBar() {
  return (
    <div className="fixed left-0 top-0 h-[100vh] overflow-y-auto w-[300px]">
      <ul>
        <li>
          <a href="/fetch-with-useEffect">Fetch with useEffect</a>
        </li>
        <li>
          <a href="/fetch-with-useQuery">Fetch with useQuery</a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
