import { useContext, useEffect } from 'react';
import './App.css';
import { ScrollContext } from './ContextAPI/ScrollConext';

function App() {
  //const[updateData, setUpdateData] = useState(data);
  const {data, page,setPage, query, setQuery,fetchScrollData} = useContext(ScrollContext);
  useEffect(() =>{
    fetchScrollData(page,query)
  },[query,page,fetchScrollData])

  const updatedScrollData = () =>{
    data.map((node,index) => ((
        index === data.length -1 ? (
        setPage(page+1),
        setQuery(query),
        fetchScrollData(page,query)
        )
        :(
          <div>
            {node.title}
          </div>
        )
      )
    ))
  }
  return (
    <div className="App">
      <input
      type = "text"
      placeholder='Enter the Query to get the Scroll Details....'
      onChange={(e) => setQuery(e.target.value)}
       />
      {
        updatedScrollData()
      }
    </div>
  );
}

export default App;
