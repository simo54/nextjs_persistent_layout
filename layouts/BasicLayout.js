import Navigation from "../components/NavigationBar";
import Footer from "../components/Footer";

const BasicLayout = (props) => {
  return (
    <div>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};

export default BasicLayout;
