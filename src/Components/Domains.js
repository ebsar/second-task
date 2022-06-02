import React from "react";
import "./Domains.css";
const domainss = [
  {
    title: ".COM",
    price: "$5.99/yr",
    text: "Instead of $10.99/yr",
  },
  {
    title: ".AI",
    price: "$55.99/yr",
    text: "Instead of $10.99/yr",
  },
  {
    title: ".NET",
    price: "$7.99/yr",
    text: "Instead of $10.99/yr",
  },
  {
    title: ".HEALTH",
    price: "$7.99/yr",
    text: "Instead of $10.99/yr",
  },
  {
    title: ".CO.UK",
    price: "$3.99/yr",
    text: "Instead of $10.99/yr",
  },
  {
    title: ".ORG",
    price: "$15.99/yr",
    text: "Instead of $10.99/yr",
  },
  {
    title: ".CO",
    price: "$26.33/yr",
    text: "Instead of $10.99/yr",
  },
  {
    title: ".SEA",
    price: "$16.33/yr",
    text: "Instead of $10.99/yr",
  },
]; 
function Card(props) {
  return (
    <div className="Container">
        {domainss.map((domains) => (
       <div className="card">
        <div className="Domain-name"><h2>{domains.title}</h2></div>
        <div className="Price-container">{domains.price}</div>
        <div className="Price-instead"><small>{domains.text}</small></div>
        <button className="btn">Buy Now</button>
      </div> 
      ))} 
    </div>
  );
}
export default Card;
