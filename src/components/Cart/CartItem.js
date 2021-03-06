import React from "react";

export default function CartItem({ item, value }) {
  const { id, name, title, price, total, count } = item;
  const {
    increment,
    decrement,
    removePhone,
    removeTablet,
    removeWatch,
  } = value;

  return (
    <div className="row my-5 text-capitalize text-center">
      <div className="col-10 my-2 mx-auto col-lg-2">
        <img
          src={require(`../../img/${name}-${id}.png`)}
          style={{ width: "7rem", height: "auto" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : ${total}</strong>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div
          className="cart-icon"
          onClick={() => {
            if (name === "phone") {
              removePhone(id);
            }
            if (name === "tablet") {
              removeTablet(id);
            }
            if (name === "watch") {
              removeWatch(id);
            }
          }}
        >
          <i className="fas fa-trash"></i>
        </div>
        <hr></hr>
      </div>
    </div>
  );
}
