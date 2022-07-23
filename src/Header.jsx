import React from 'react'
import {MdKeyboardVoice} from "react-icons/md";
import {AiOutlineSearch, AiOutlineBook} from "react-icons/ai";
import {BiImage, BiNews} from "react-icons/bi";
import {RiVideoLine} from "react-icons/ri";
import {FiMoreVertical} from "react-icons/fi";

const Header = ({searchTerm = "", searchRequest = () => {}, setSearch = () => {}}) => {
  return (
    <header className="app-header">
        <div className="container">
          <div className="first_row">
            <div className="first_row_left">
              <img
                src={require("./img/googlelogo_color_92x30dp.png")}
                className="App-logo"
                alt="logo"
              />

              <div className="first_row_left_search">
                <div className="search_box">
                    <input type="search" placeholder="" value={searchTerm} onChange={(e) => {
                      setSearch(e.target.value);
                    }} autoFocus />

                    <div onClick={searchRequest} style={{cursor: "pointer"}}>
                      <MdKeyboardVoice fill="#4285f4" size="1.4rem"/>
                      <AiOutlineSearch fill="#4285f4" size="1.4rem"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second_row">
            <nav className="nav_items_list_one">
                <ul>
                  <li className="active"><div className="icon"><AiOutlineSearch /></div> All</li>
                  <li><div className="icon"><BiImage /></div> Images</li>
                  <li><div className="icon"><AiOutlineBook /></div> Books</li>
                  <li><div className="icon"><BiNews /></div> News</li>
                  <li><div className="icon"><RiVideoLine /></div> Videos</li>
                  <li><div className="icon"><FiMoreVertical /></div> More</li>
                </ul>
            </nav>

            <div className="nav_items_list_two">
                <button type="button">Tools</button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header