import { useState } from "react";
import { useSelector } from "react-redux";

function List() {
  const [searchData, setSearchData] = useState("");

  const formEnteries = useSelector((state) => state.entries);
  const searchFilteredData = formEnteries.filter(
    (data) =>
      data.name.toLowerCase().includes(searchData.toLowerCase()) ||
      data.year.includes(searchData)
  );

  //   const searchedItems = [];
  //   for (let item in formEntries) {
  //     const value = formEntries[item];
  //     if (
  //       (item === "name" &&
  //         value.toLowerCase().includes(searchData.toLowerCase())) ||
  //       (item === "year" && value.includes(searchData))
  //     ) {
  //       searchedItems.push({ item, value });
  //     }
  //   }

  const isBannerVisible =
    searchFilteredData.length === 0 && formEnteries.length === 0;

  return (
    <>
      <input
        type="text"
        placeholder="search here"
        minLength={2}
        value={searchData}
        onChange={(event) => setSearchData(event.target.value)}
      />
      <ul>
        {searchFilteredData.map((data, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            <h4>Name: {data.name}</h4>
            <h4>Year: {data.year}</h4>
            <h4>Rating: {data.rating}</h4>
            <h4>Duration: {data.duration}</h4>
          </li>
        ))}
      </ul>
      {isBannerVisible ? (
        <p id="noEntry" style={{ color: "green", fontSize: "20px" }}>
          No enteries
        </p>
      ) : (
        <p id="noResult" style={{ color: "red", fontSize: "20px" }}>
          No results found.
        </p>
      )}
    </>
  );
}

export default List;
