function Filter({ setFilter }) {
  return (
    <select onChange={(e) => setFilter(e.target.value)} className="mt-5">
      <option value="all" selected>
        All
      </option>
      <option value="completed">Completed</option>
      <option value="incomplete">Incomplete</option>
    </select>
  );
}

export default Filter;
