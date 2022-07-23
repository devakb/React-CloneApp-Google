import { useEffect, useState } from "react";
import "./app.scss";
import NormalCard from "./Components/NormalCard";
import Header from "./Header";

function App() {
  let [pageResultes, setPageResults] = useState(null);
  let [search, setSearch] = useState("");

  useEffect(() => {
    const initData = async () => {
      setPageResults(require("./googleapires.json"));
      setSearch(require("./googleapires.json").queries.request[0].searchTerms);
    }

    initData();
  }, []);

  const searchNewData = async () => {
      setPageResults(null);
      fetch(`https://www.googleapis.com/customsearch/v1?q=${search}&key=AIzaSyAF-35U2oxHgmN6hZVr0D9DWbgE8WK2sm8&cx=77e7dda13b877e91d&lr=lang_en&c2coff=1`)
      .then(res => res.json())
      .then(data => setPageResults(data));
  }

  return (
    <div className="App">
      
        
          <Header searchRequest={searchNewData} setSearch={setSearch} searchTerm={search} />
          {pageResultes ? (
            <main className="container">
              <b className="searchitiming">About {pageResultes.searchInformation.formattedTotalResults} results ({pageResultes.searchInformation.formattedSearchTime} seconds) </b>
              <div className="main-body">
                <div className="left-side">
                  <div className="row g-regular">
                    <div className="w-full">
                      {pageResultes.items.map((item, index) => {
                        return (
                          <NormalCard
                            key={index}
                            navigation={item.link}
                            link={item.link}
                            title={item.title}
                            description={item.htmlSnippet}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </main> 
          ) : <>
              <div className="container">
                <img src={require("./img/Rolling-0.9s-270px.svg").default} width="50px" />
              </div>
          </>}
        
     
    </div>
  );
}

export default App;
