import React, { useEffect, useState } from "react";
import "../styles/pricelist.css";
import axios from "axios";

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
          <div className="avatar">👨‍💼</div>
          <div className="user-info">
            <h4>John Andre</h4>
            <p>Storfjord AS</p>
          </div>
        </div>

        <div className="topbar-right">
          <span className="lang-text">Norsk Bokmål</span>
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
            <li>Invoices</li>
            <li>Customers</li>
            <li>My Business</li>
            <li>Invoice Journal</li>
            <li className="active">Price List</li>
            <li>Multiple Invoicing</li>
            <li>Unpaid Invoices</li>
            <li>Offer</li>
            <li>Inventory Control</li>
            <li>Member Invoicing</li>
            <li>Import/Export</li>
            <li>Log out</li>
          </ul>
        </aside>

        <section className="content">
          <div className="content-top">
            <div className="search-area">
              <input placeholder="Search Article No..." />
              <input placeholder="Search Product..." />
            </div>

            <div className="action-area">
              <button className="btn">New Product</button>
              <button className="btn">Print List</button>
              <button className="btn">Advanced mode</button>
            </div>
          </div>

          <div className="table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Article No.</th>
                  <th>Product/Service</th>
                  <th>In Price</th>
                  <th>Price</th>
                  <th>Unit</th>
                  <th>In Stock</th>
                  <th>Description</th>
                  <th>...</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1234567890</td>
                  <td>This is a test product with fifty characters this!</td>
                  <td>900500</td>
                  <td>1500800</td>
                  <td>kilometers/hour</td>
                  <td>2500600</td>
                  <td>This is the description with fifty characters this</td>
                  <td>⋮</td>
                </tr>

                <tr>
                  <td>555112233</td>
                  <td>Sample Product</td>
                  <td>200</td>
                  <td>450</td>
                  <td>pcs</td>
                  <td>25</td>
                  <td>Short description here</td>
                  <td>⋮</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PriceList;
