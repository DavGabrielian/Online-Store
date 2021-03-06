import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import { ButtonContainer } from "./StyledComp/Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, name } = value.detailProduct;
          const { modalOpen, closeModal } = value;
          const { title, price } = value.detailProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5 text-capitalize"
                    >
                      <h2>added to the cart</h2>
                      <img
                        src={require(`../img/${name}-${id}.png`)}
                        className="img-fluid"
                        alt="product"
                      />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : ${price} </h5>
                      <ButtonContainer
                        style={{
                          borderColor: "var(--mainRed)",
                          color: "var(--mainRed)",
                          background: "var(--mainWhite)",
                        }}
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        back
                      </ButtonContainer>
                      <Link to="/cart">
                        <ButtonContainer
                          cart
                          style={{
                            borderColor: "var(--mainGreen)",
                            color: "var(--mainGreen)",
                            background: "var(--mainWhite)",
                          }}
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flext;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
