const TableButtons = ({
  page,
  loadStart,
  loadEnd,
  setLoadEnd,
  setLoadStart,
  setPage,
  currencies,
}) => {
  const handleDecrease = () => {
    if (loadStart <= 0) return;
    setLoadStart(loadStart - 15);
    setLoadEnd(loadEnd - 15);
    setPage(page - 1);
  };

  const handleIncrease = () => {
    if (loadEnd >= Object.entries(currencies.conversion_rates).length) return;

    setLoadStart(loadStart + 15);
    setLoadEnd(loadEnd + 15);
    setPage(page + 1);
  };
  return (
    <>
      <p className="text-center underline text-slate-700">Page: {page} / 11</p>
      <div className="text-center mt-4">
        <button
          onClick={handleDecrease}
          className="bg-gray-500 rounded-sm mr-4 px-6 py-2 text-white hover:bg-slate-400"
        >
          Previous
        </button>
        <button
          onClick={handleIncrease}
          className="bg-gray-500 rounded-sm px-6 py-2 text-white hover:bg-slate-400"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default TableButtons;
