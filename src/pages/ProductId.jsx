import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Button, Row, Col, Image, Carousel } from "react-bootstrap";
import { getProductById, getProducts } from "../Utils/api";
import Loading from "../components/spinner";

export default function ProductId() {
  const [data, setData] = useState([]);
  const [dataProducts, setDataProducts] = useState([]);
  const [loading, setloading] = useState();
  const [error, setError] = useState(null);
  const { ProductId } = useParams();
  const scrollRef =useRef()

  const scroll = (direction) =>{
    const {current} = scrollRef
    if(direction === 'left') {
        current.scrollLeft -=500

    }else{
      current.scrollLeft +=500
    }

  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const response = await getProductById(ProductId);
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, [ProductId]);
  console.log("id", data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const response = await getProducts();
        setDataProducts(response);
      } catch (error) {
        setError(error);
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, []);

  const relatedProducts = dataProducts.filter(
    (product) => product.category?.name === data.category?.name
  );

  const filterProductById = relatedProducts.filter(
    (item) => item.id !== data.id
  );
  console.log("related", filterProductById);

  return (
    <Container className="py-5 px-3">
      <div className="mt-5">
        {error && (
          <div>
            <h4>sorry there was an error loading the products</h4>
          </div>
        )}
        {loading ? (
          <Loading />
        ) : (
          <>
            <h3 className="mb-3">{data.title}</h3>
            <div className="mt-5">
              <Row className="g-4 justify-content-center">
                <Col md={6}>
                  <div>
                    <Carousel>
                      {data.images?.map((image, index) => (
                        <Carousel.Item key={index}>
                          <img
                            src={image}
                            alt="..."
                            className="d-block w-100"
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                </Col>
                <Col md={6} lg={5}>
                  <div className="p-md-3">
                    <h4>category: {data.category?.name}</h4>
                    <p className="lead mt-3">{data.description}</p>
                    <h5 className="mt-3">N{data.price}</h5>
                    <div className="d-flex gap-2">
                      <div className="d-flex align-item-center bg-light border border-2">
                        <span className="fs-4 px-2">0</span>
                        <div className="px-2">
                          <i className="bi bi-chevron-up"></i>
                          <i className="bi bi-chevron-down"></i>
                        </div>
                      </div>
                      <Button
                        className="w-100 rounded-0"
                        size="md"
                        variant="success"
                      >
                        Buy
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </>
        )}
        <div className="mt-5 py-5">
          <h4 className="text-center mb-5">Related products</h4>
          {error && (
            <div>
              <h4>sorry there was an error loading the products</h4>
            </div>
          )}
          <div className="d-flex justity-content-center align-items-center flex-grow-1 slideView" >
            {loading ? (
              <Loading />
            ) : (
              <>
                <div className="d-flex gap-4 slideBox" ref={scrollRef}>
                  {filterProductById.slice(0, 10).map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                      <div className="shadow mx-auto Mb-3">
                        <Image
                          src={product.images[0]}
                          alt={product.title}
                          style={{ width: "230px", height: "200px" }}
                        />
                      </div>
                      <div className="text-center text-md-start">
                        <p className="tert-dark">{product.title}</p>
                        <p>N{product.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="d-none d-md-block w-100 slideArrow">
                  <div className="d-flex justify-content-between">
                        <i className="bi bi-arrow-left-circle-fill" onClick={()=> scroll('left')}/>
                        <i className="bi bi-arrow-right-circle-fill" onClick={()=> scroll('right')}/>
                  </div>


                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
