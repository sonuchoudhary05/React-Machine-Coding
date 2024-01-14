import { createContext, useEffect, useState } from "react";


export const ScrollContext = createContext();

function ScrollContextProvider({children}){
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [loding, setLoding]  = useState(false);

    const fetchScrollData = async(inputQuery,pageNo) => {
        try{
            setLoding(true);
            setPage(pageNo)
            setQuery(inputQuery);
            const baseUrl = `https://openlibrary.org/search.json?q=${inputQuery}&page=${pageNo}`;
            const response = await fetch(baseUrl);
            const responseData = await response.json();
            setData(responseData);
            setLoding(false);
        }
        catch(error){
            console.log(`Getting Error while fetching Data : ${error}`);
            setData([]);
            setQuery("");
            setPage(1);
        }
    }
    useEffect(() => {
        fetchScrollData(query,page);
    },[query,page])

    const value = {
        data,
        setData,
        loding,
        setLoding,
        page,
        setPage,
        query,
        setQuery,
        fetchScrollData
    };
    return <ScrollContext.Provider value={value}>
        {children}
    </ScrollContext.Provider>
}

export default ScrollContextProvider;