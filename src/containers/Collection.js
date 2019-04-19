import React from "react";
import axios from "axios";

class Collection extends React.Component {
  state = {
    categories: [],
    products: [],
    url: this.props.match.params.url,
    id: "",
    isLoading: true,
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://eshop-alex.herokuapp.com/get-category"
    );
    this.setState({
      categories: response.data,
    });
    this.state.categories.map((category, index) => {
      if (category.url === this.state.url) {
        this.setState({
          id: category._id,
        });
      }
      return null;
    });

    const response2 = await axios.get(
      `https://eshop-alex.herokuapp.com/get-category-product-info/${
        this.state.id
      }`
    );

    this.setState({
      products: response2.data,
      isLoading: false,
    });
  }

  render() {
    if (this.state.isLoading === true) {
      return (
        <div className="loading__container">
          <div className="lds-ripple">
            <div />
            <div />
          </div>
          <p>Chargement en cours</p>
        </div>
      );
    }
    return (
      <div>
        {/* <div>{this.props.match.params.url}</div> */}
        <div style={{ marginTop: "3rem" }}>
          {this.state.products.map((product, index) => {
            return (
              <div key={product._id} className="collection__card">
                <img
                  // style={{ width: "300px" }}
                  src={product.picture}
                  alt={`poster ${product.title}`}
                />
                <div className="collection__card-text">
                  <div className="collection__card-text--title">
                    {product.title}
                  </div>
                  <div>description:</div>
                  <div className="collection__card-text--description">
                    {product.description}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "15px",
                      fontSize: "20px",
                    }}
                  >
                    <div className="collection__card-text--size">
                      taille: {product.size}
                    </div>
                    <div className="collection__card-text--quantity">
                      quantité: {product.quantity}
                    </div>
                  </div>
                  <div className="collection__card-text--price">
                    prix: {product.price}€
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Collection;
