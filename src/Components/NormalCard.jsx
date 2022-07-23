import React, { useEffect, useState } from "react";

const NormalCard = ({navigation, link, title, description}) => {

   let [newNavigation, setNewNavigation] = useState([]);
   useEffect(() => {

     
        let url = navigation.replace("https://", "");
         url = url.replace("http://", "");

         setNewNavigation(url.split("/"));




   } , [])

  return (
    <div className="normal-card">
      <span className="url breadcrumb-icon-add">
        {newNavigation.map((item, index) => {
            if(item === "") return;

            if(index === 0){
                return <span key={index}>
                    {navigation.includes("https://") ? "https://" : "http://"}
                    {item}
                </span>
            }
            return <span key={index}>{item}</span>
        })}
      </span>
      <a href={link ?? "#"}>
        <h4 className="title">
            {title}
        </h4>
      </a>
      <p className="caption" dangerouslySetInnerHTML={{__html: description}}>
      
      </p>
    </div>
  );
};

export default NormalCard;
