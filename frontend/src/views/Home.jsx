import "../assets/css/Home.css";
import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contexto from "../context/Contexto";

const Home = () => {
  const { productos, cart, setCart } = useContext(Contexto);

  const isProductoInCart = (producto) => {
    return cart.some((item) => item.id === producto.id);
  };

  const handleAddToCart = (producto) => {
    if (isProductoInCart(producto)) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...producto, cantidad: 1 }]);
    }
  };

  return (
    <>
      <div className="hero-section">
        <h1 className="hero-title">ZILLAS</h1>
        <p className="hero-description">
          Un lugar para senta(a)rte
        </p>
      </div>
      
      <div className="home-container">
        {productos?.map((producto) => (
          <Card className="home-card" key={producto.id} style={{ width: "18rem" }}>
            <Card.Img src={producto.img} />
            <Card.Body>
              <Card.Title className="home-title">{producto.name}</Card.Title>
              <hr className="title-line" />
              <p className="home-desc">{producto.desc}</p>
              <hr className="title-line" />
              <Card.Text className="home-precio">{`$ ${producto.price.toLocaleString("es-CL")}`}</Card.Text>
              <Link to={`/producto/${producto.id}`}>
                <Button type="submit" className="btn-vermas-home">
                  Ver Más
                </Button>
              </Link>
              <Button className="btn-add-home" onClick={() => handleAddToCart(producto)}>
                Añadir 🛒
              </Button>{" "}
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;

