import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Contexto from "../context/Contexto";
import "../assets/css/Producto.css";

const Producto = () => {
  const { id } = useParams();
  const { productos, cart, setCart } = useContext(Contexto);

  const [producto] = productos?.filter((producto) => producto?.id === id) ?? [];

  if (!producto) {
    return <div>Artículo no disponible</div>;
  }

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
    <div className="productos-container">
      <Card style={{ width: "100%" }}>
        <div className="card-container">
          <div className="img-column">
            <Card.Img className="card-img-top" variant="top" src={producto.img} />
          </div>
          <div className="content-column">
            <Card.Title className="producto-titulo">{producto.name}</Card.Title>
            <hr className="title-line" />
            <Card.Text className="producto-desc">{producto.desc}</Card.Text>
            <h6>Descripción:</h6>
            <ul>
              {producto.descripcion?.map((descripcion) => (
                <li key={descripcion}>🍕{descripcion}</li>
              ))}
            </ul>
            <div className="price-and-button">
              <Card.Text className="producto-precio">
                Precio: {`$ ${producto.price.toLocaleString("es-CL")}`}
              </Card.Text>
              <Button
                className="btn-add"
                onClick={() => handleAddToCart(producto)}
              >
                Añadir 🛒
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Producto;
