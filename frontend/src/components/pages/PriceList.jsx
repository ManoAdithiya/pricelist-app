import React, { useEffect, useState } from "react";
import "../styles/pricelist.css";
import axios from "axios";
import avatar from "../../assets/avatar1.png";
import invoice from "../../assets/invoice.png";
import customers from "../../assets/customers.png";
import mybusiness from "../../assets/mybusiness.png";
import invoice2 from "../../assets/invoice2.png";
import priceList from "../../assets/PriceList.png";
import invoice3 from "../../assets/invoice3.png";
import invoice4 from "../../assets/invoice4.png";
import offer from "../../assets/offer.png";
import inventory from "../../assets/InventoryControl.png";
import invoice5 from "../../assets/invoice5.png";
import importExport from "../../assets/ImportExport.png";
import logout from "../../assets/Logout.png";

import searchIcon from "../../assets/search.png";
import plusIcon from "../../assets/plus.png";
import printIcon from "../../assets/print.png";
import advanceIcon from "../../assets/advancebtn.png";
import arrowIcon from "../../assets/arrow.png";
import dotsIcon from "../../assets/three-dots.png";
import articleIcon from "../../assets/artical.png";
import serviceIcon from "../../assets/service.png";

function PriceList() {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const token = localStorage.getItem("token");

  const handleEditClick = (item) => {
    setEditId(item.id);
    setEditData(item);
  };
  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };
  const handleBlurSave = async () => {
    if (!editId) return;

    try {
      await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/pricelist/${editId}`,
        editData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setProducts((prev) =>
        prev.map((p) => (p.id === editId ? { ...p, ...editData } : p)),
      );

      setEditId(null);
    } catch (err) {
      console.log("Auto Save Error:", err);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(
        import.meta.env.VITE_API_BASE_URL + "/api/pricelist",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setProducts(res.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="layout">
      <header className="topbar">
        <div className="topbar-left">
          <div className="profile">
            <img src={avatar} className="avatar" />
            <span className="status-dot online profile-status"></span>
          </div>
          <span className="pl-hamburger">&#9776;</span>
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
              <img src={invoice} className="invoices" />
              Invoices
            </li>
            <li>
              <img src={customers} className="customers" />
              Customers
            </li>
            <li>
              <img src={mybusiness} /> My Business
            </li>
            <li>
              <img src={invoice2} /> Invoice Journal
            </li>
            <li className="active">
              <span className="status-dot online"></span>
              <img src={priceList} /> Price List
            </li>
            <li>
              <img src={invoice3} /> Multiple Invoicing
            </li>
            <li>
              <img src={invoice4} /> Unpaid Invoices
            </li>
            <li>
              <img src={offer} /> Offer
            </li>
            <li>
              <img src={inventory} /> Inventory Control
            </li>
            <li>
              <img src={invoice5} /> Member Invoicing
            </li>
            <li>
              <img src={importExport} /> Import/Export
            </li>
            <li>
              <img src={logout} /> Log out
            </li>
          </ul>
        </aside>

        <section className="content">
          <div className="content-top">
            <div className="search-group">
              <div className="search-area">
                <input type="text" placeholder="Search Article No..." />
                <img src={searchIcon} alt="search" />
              </div>
              <div className="search-area">
                <input type="text" placeholder="Search Product..." />
                <img src={searchIcon} alt="search" />
              </div>
            </div>

            <div className="action-area">
              <button className="btn">
                New Product <img src={plusIcon} />
              </button>
              <button className="btn">
                Print List <img src={printIcon} />
              </button>
              <button className="btn">
                Advanced mode <img src={advanceIcon} />
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
                    <img src={articleIcon} className="th-icon" />
                  </th>

                  <th className="col-product">
                    Product/Service
                    <img src={serviceIcon} className="th-icon" />
                  </th>

                  <th className="col-inprice">In Price</th>
                  <th className="col-price">Price</th>
                  <th className="col-unit">Unit</th>
                  <th className="col-stock">In Stock</th>
                  <th className="col-desc">Description</th>
                  <th className="arrow-right"></th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(products) &&
                  products.map((item) => (
                    <tr key={item.id}>
                      <td className="arrow-left">
                        <img src={arrowIcon} />
                      </td>
                      <td className="col-article">
                        {editId === item.id ? (
                          <input
                            name="article_no"
                            value={editData.article_no}
                            onChange={handleChange}
                            onBlur={handleBlurSave}
                            autoFocus
                          />
                        ) : (
                          <span className="pill">{item.article_no}</span>
                        )}
                      </td>
                      <td className="col-product">
                        {editId === item.id ? (
                          <input
                            name="product"
                            value={editData.product}
                            onChange={handleChange}
                            onBlur={handleBlurSave}
                          />
                        ) : (
                          <span className="pill">{item.product}</span>
                        )}
                      </td>
                      <td className="col-inprice">
                        {editId === item.id ? (
                          <input
                            name="in_price"
                            value={editData.in_price}
                            onChange={handleChange}
                            onBlur={handleBlurSave}
                          />
                        ) : (
                          <span className="pill">{item.in_price}</span>
                        )}
                      </td>
                      <td className="col-price">
                        {editId === item.id ? (
                          <input
                            name="price"
                            value={editData.price}
                            onChange={handleChange}
                            onBlur={handleBlurSave}
                          />
                        ) : (
                          <span className="pill">{item.price}</span>
                        )}
                      </td>
                      <td className="col-unit">
                        {editId === item.id ? (
                          <input
                            name="unit"
                            value={editData.unit}
                            onChange={handleChange}
                            onBlur={handleBlurSave}
                          />
                        ) : (
                          <span className="pill">{item.unit}</span>
                        )}
                      </td>
                      <td className="col-stock">
                        {editId === item.id ? (
                          <input
                            name="stock"
                            value={editData.stock}
                            onChange={handleChange}
                            onBlur={handleBlurSave}
                          />
                        ) : (
                          <span className="pill">{item.stock}</span>
                        )}
                      </td>
                      <td className="col-desc">
                        {editId === item.id ? (
                          <input
                            name="description"
                            value={editData.description}
                            onChange={handleChange}
                            onBlur={handleBlurSave}
                          />
                        ) : (
                          <span className="pill">{item.description}</span>
                        )}
                      </td>
                      <td className="arrow-right">
                        <img
                          src={dotsIcon}
                          onClick={() => handleEditClick(item)}
                          style={{ cursor: "pointer" }}
                        />
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
