import React, { useEffect, useState } from "react";
import "../styles/pricelist.css";
import axios from "axios";
import Header from "./Header";

function PriceList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/pricelist", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(res.data);
    };

    fetchProducts();
  }, []);
  return (
    <div className="layout">
      <header className="topbar">
        <div className="topbar-left">
          <div className="profile">
            <img src="\src\assets\avatar1.png" alt="#" className="avatar" />
            <span className="status-dot online profile-status"></span>
          </div>
          <div className="user-info">
            <h4>John Andre</h4>
            <p>Storfjord AS</p>
          </div>
        </div>

        <div className="topbar-right">
          <span className="lang-text">Norsk Bokml</span>
          <img
            className="flag"
            src="https://storage.123fakturere.no/public/flags/NO.png"
            alt="flag"
          />
        </div>
      </header>

      <div className="main">
        <aside className="sidebar">
          <h3 className="menu-title">Menu</h3>

          <ul className="menu">
            <li className="active">
              <img src="\src\assets\invoice.png" alt="invoices"></img>Invoices
            </li>
            <li>
              <img src="\src\assets\customers.png" alt="customers"></img>
              Customers
            </li>
            <li>
              <img src="\src\assets\mybusiness.png" alt="mybusiness"></img>My
              Business
            </li>
            <li>
              <img src="\src\assets\invoice2.png" alt="invoice Journal"></img>
              Invoice Journal
            </li>
            <li className="active">
              <span className="status-dot online"></span>
              <img src="\src\assets\PriceList.png" alt="PriceList"></img>Price
              List
            </li>
            <li>
              <img
                src="\src\assets\invoice3.png"
                alt="Multiple Invoicing"
              ></img>
              Multiple Invoicing
            </li>
            <li>
              <img src="\src\assets\invoice4.png" alt="Unpaid Invoices"></img>
              Unpaid Invoices
            </li>
            <li>
              <img src="\src\assets\offer.png" alt="offer"></img>Offer
            </li>
            <li>
              <img
                src="\src\assets\InventoryControl.png"
                alt="Inventory Control"
              ></img>
              Inventory Control
            </li>
            <li>
              <img src="\src\assets\invoice5.png" alt="Member Invoicing"></img>
              Member Invoicing
            </li>
            <li>
              <img src="\src\assets\ImportExport.png" alt="ImportExport"></img>
              Import/Export
            </li>
            <li>
              <img src="\src\assets\Logout.png" alt="Logout"></img>Log out
            </li>
          </ul>
        </aside>

        <section className="content">
          <div className="content-top">
            <div className="search-group">
              <div className="search-area">
                <input type="text" placeholder="Search Article No..." />
                <img src="\src\assets\search.png" alt="search"></img>
              </div>
              <div className="search-area">
                <input type="text" placeholder="Search Product..." />
                <img src="\src\assets\search.png" alt="search"></img>
              </div>
            </div>

            <div className="action-area">
              <button className="btn">
                New Product
                <img src="\src\assets\plus.png" alt="New Product"></img>
              </button>
              <button className="btn">
                Print List<img src="\src\assets\print.png" alt="print"></img>
              </button>
              <button className="btn">
                Advanced mode
                <img src="\src\assets\advancebtn.png" alt="Advanced mode"></img>
              </button>
            </div>
          </div>

          <div className="table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th className="col-menu"></th>

                  <th className="col-article">
                    Artical No.
                    <img
                      src="/src/assets/artical.png"
                      className="th-icon"
                      alt="Artical"
                    />
                  </th>

                  <th className="col-product">
                    Product/Service
                    <img
                      src="/src/assets/service.png"
                      className="th-icon"
                      alt="Product service"
                    />
                  </th>

                  <th className="col-inprice">In Price</th>
                  <th className="col-price">Price</th>
                  <th className="col-unit">Unit</th>
                  <th className="col-stock">In Stock</th>
                  <th className="col-desc">Description</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr key={item.id}>
                    <td className="arrow-right">
                      <img src="\src\assets\arrow.png" alt="arrow" />
                    </td>

                    <td className="col-article">{item.article_no}</td>
                    <td className="col-product">{item.product}</td>
                    <td className="col-inprice">{item.in_price}</td>
                    <td className="col-price">{item.price}</td>
                    <td className="col-unit">{item.unit}</td>
                    <td className="col-stock">{item.stock}</td>
                    <td className="col-desc">{item.description}</td>
                    <td className="arrow-right">
                      <img src="\src\assets\three-dots.png" alt="three-dots" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PriceList;
