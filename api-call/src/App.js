import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterVal, setFilterVal] = useState([]);
  const fetchData = async() => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.log(`Facing issue while fetching Data : ${error} `);
      setData([]);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if(searchValue){
      setFilterVal(
        data.filter((user) => {
          return Object.values(user)
          .join('')
          .toLowerCase()
          .includes(searchValue.toLowerCase())
        })
      )
    }
    else{
      setData(data);
    }
  }, [searchValue,data])
  console.log("Search Value is :", searchValue);
  return (
    <div className="App">
      <input
      type = "text"
      placeholder="Search and filter the Value....."
      onChange={(e) => setSearchValue(e.target.value)}
       />
      <div className="gridDesign">
      {
        searchValue.length > 0 ? (
          filterVal.map((node) => {
            return (
            <div>
              <p>{node.name}</p>
              <p>{node.email}</p>
            </div>
            )
          })
        ) : (
          data.map((node) => {
            return (
            <div>
              <p>{node.name}</p>
              <p>{node.email}</p>
            </div>
            )
          })
        )
          
      }
      </div>
    </div>
  );
}

export default App;
