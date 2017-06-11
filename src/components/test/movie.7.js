import React from "react";
import { withProps } from "recompose";

//withProps does not clobbers props it simply merges the props you
// proivde with the old ones this includes props.children
//withProsp and accept a function instead of an object
// const HomeLink = withProps({ href: "#/" })('a');
// ===
// const HomeLink = (props) => <a href='#/'>{props.children}</a>

const HomeLink = withProps(({ query }) => ({ href: "#/" + query }))("a");

// const HomeLink = withProps({ href: "#/" })("a");
const ProductLink = withProps({ href: "#/products" })("a");
const CheckoutLink = withProps({ href: "#/checkout" })("a");

const App = () => (
  <div>
    <header>
      <HomeLink>Logo</HomeLink>
    </header>
    <nav>
      <HomeLink>Home</HomeLink>
      <ProductLink>Products</ProductLink>
      <CheckoutLink>Checkout</CheckoutLink>
    </nav>
  </div>
);

export default App;
