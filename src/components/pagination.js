const Pagination = (props) => {
  const pages = Math.ceil(props.data.length / 5);
  const cPage = props.currentPage;
  const setCurrentPage = props.pagefn;

  const arr = [];
  for (let i = 1; i <= pages; i++) {
    arr.push(i);
  }

  const btClick = (event) => {
    setCurrentPage(parseInt(event.target.value));
  };
  const start = () => {
    if (pages > 10) {
      let start;
      if (cPage < 5) {
        start = 0;
      } else if (cPage > pages - 5) {
        start = pages - 10;
      } else {
        start = cPage - 5;
      }
      return start;
    }
    return 0;
  };

  const end = () => {
    if (pages > 10) {
      let end;
      if (cPage > pages - 5) {
        end = pages;
      } else if (cPage < 5) {
        end = 10;
      } else {
        end = cPage + 5;
      }
      return end;
    }
    return pages;
  };
  return (
    <div style={{ margin: "15px" }}>
      <button
        className="rangeButtons"
        onClick={btClick}
        value={0}>
        First
      </button>
      {arr.slice(start(), end()).map((elem, index) => (
        <div key={index} style={{ display: "inline-block" }}>
          <button
            style={
              elem - 1 === cPage
                ? { backgroundColor: "#337ABC", margin: "5px", color: "white" }
                : { margin: "5px", color: '#337ABC' }
            }
            className="pageButtons"
            onClick={btClick}
            value={elem - 1}>
            {elem}
          </button>
        </div>
      ))}
      <button
        className="rangeButtons"
        onClick={btClick}
        value={pages - 1}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
