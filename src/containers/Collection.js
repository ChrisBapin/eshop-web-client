import React from "react";
import axios from "axios";

class Collection extends React.Component {
  state = {
    categories: [],
    products: [],
    url: this.props.match.params.url,
    id: "",
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:8080/get-category");
    console.log(response.data);
    this.setState({
      categories: response.data,
    });
    this.state.categories.map((category, index) => {
      if (category.url === this.state.url) {
        this.setState({
          id: category._id,
        });
      }
    });

    const response2 = await axios.get(
      `http://localhost:8080/get-category-product-info/${this.state.id}`
    );

    this.setState({
      products: response2.data,
    });
  }

  render() {
    console.log("this.state.url", this.state.url);
    console.log("this.state.id", this.state.id);
    return (
      <div>
        <div>{this.props.match.params.url}</div>
        <div>
          {this.state.products.map((product, index) => {
            return (
              <div>
                <img
                  style={{ width: "300px" }}
                  src={product.picture}
                  alt={`poster ${product.title}`}
                />
                <div>{product.title}</div>
                <div>{product.description}</div>
                <div>{product.price}</div>
                <div>{product.quantity}</div>
                <div>{product.size}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Collection;
