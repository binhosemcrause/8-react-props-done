//Import React
import React from 'react';
import ReactDOM from 'react-dom/client';

const customStyle = {
  height: "300px",
  width: "300px"
}

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img style={customStyle} src={props.img} alt="place_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

//You first create  the root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Create a element
const element = (
  <div>
    <h1>My 3 favourite restaurants in Melboune</h1>

    <Card
      name="Mama Manoush"
      img="https://thecitylane.com/wp-content/uploads/2018/09/DSCF0250.jpg"
      tel="+123 456 789"
      email="r@mama-manoush.com"
    />

    <Card
      name="Universal Restaurant"
      img="https://www.bestrestaurants.com.au/media/ep5fwsu0/3.jpg?width=1200&rnd=132893854648570000"
      tel="+987 654 321"
      email="r@universal-restaurant.com"
    />

    <Card
      name="Bossa Nova Restaurant"
      img="https://bossafood.com/wp-content/uploads/2019/06/ChickenBossaGrill_bossanova_baixa-352.jpg"
      tel="+918 372 574"
      email="r@bossa-nova.com"
    />
  </div>
);

//Render the HTML element on the root
root.render(element);