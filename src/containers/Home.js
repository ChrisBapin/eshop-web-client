import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    categories: [],
  };
  async componentDidMount() {
    const response = await axios.get("http://localhost:8080/get-category");
    console.log(response.data);
    this.setState({
      categories: response.data,
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.categories.map((category, index) => {
            return (
              <li key={category._id}>
                <Link to={`/${category.url}`}>{category.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
