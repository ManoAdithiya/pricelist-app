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
          <div className="profile">
            <img src="\src\assets\avatar1.png" alt="#" className="avatar" />
            <span class="status-dot online profile-status"></span>
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
            <li class="active">
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
                  <th></th>
                  <th>
                    Artical No.
                    <img
                      src="\src\assets\artical.png"
                      className="th-icon"
                      alt="Artical"
                    ></img>
                  </th>
                  <th>
                    Product/Service
                    <img
                      src="\src\assets\service.png"
                      className="th-icon"
                      alt="Product service"
                    ></img>
                  </th>
                  <th>In Price</th>
                  <th>Price</th>
                  <th>Unit</th>
                  <th>In Stock</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>123456789035</td>
                  <td>This is a test product with fifty characters this!</td>
                  <td>900500</td>
                  <td>150750</td>
                  <td>kilometers/hour</td>
                  <td>2500600</td>
                  <td>This is the description with fifty characters this</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>

                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>555143512233</td>
                  <td>Sample Product</td>
                  <td>455200</td>
                  <td>324450</td>
                  <td>pcs</td>
                  <td>232532</td>
                  <td>Short description here</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>
                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>123456349035</td>
                  <td>This is a test product with fifty characters this!</td>
                  <td>90500</td>
                  <td>15500</td>
                  <td>kilometers/hour</td>
                  <td>2500600</td>
                  <td>This is the description with fifty characters this</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>

                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>555345112233</td>
                  <td>Sample Product</td>
                  <td>20650</td>
                  <td>434550</td>
                  <td>pcs</td>
                  <td>2232235</td>
                  <td>Short description here</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>
                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>123456789035</td>
                  <td>This is a test product with fifty characters this!</td>
                  <td>9000</td>
                  <td>1500800</td>
                  <td>kilometers/hour</td>
                  <td>2500600</td>
                  <td>This is the description with fifty characters this</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>

                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>555112345233</td>
                  <td>Sample Product</td>
                  <td>20045</td>
                  <td>452340</td>
                  <td>pcs</td>
                  <td>252323</td>
                  <td>Short description here</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>
                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>123456789035</td>
                  <td>This is a test product with fifty characters this!</td>
                  <td>60500</td>
                  <td>152350</td>
                  <td>kilometers/hour</td>
                  <td>2500600</td>
                  <td>This is the description with fifty characters this</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>

                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>555345112233</td>
                  <td>Sample Product</td>
                  <td>7800</td>
                  <td>42340</td>
                  <td>pcs</td>
                  <td>2323225</td>
                  <td>Short description here</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>
                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>123456789035</td>
                  <td>This is a test product with fifty characters this!</td>
                  <td>40500</td>
                  <td>123800</td>
                  <td>kilometers/hour</td>
                  <td>2500600</td>
                  <td>This is the description with fifty characters this</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>

                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>55534534133</td>
                  <td>Sample Product</td>
                  <td>20340</td>
                  <td>412350</td>
                  <td>pcs</td>
                  <td>23435</td>
                  <td>Short description here</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>
                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>123456789035</td>
                  <td>This is a test product with fifty characters this!</td>
                  <td>90500</td>
                  <td>1506</td>
                  <td>kilometers/hour</td>
                  <td>2500600</td>
                  <td>This is the description with fifty characters this</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>

                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>5345355112233</td>
                  <td>Sample Product</td>
                  <td>20560</td>
                  <td>45034</td>
                  <td>pcs</td>
                  <td>45425</td>
                  <td>Short description here</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>
                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>12345679035</td>
                  <td>This is a test product with fifty characters this!</td>
                  <td>900500</td>
                  <td>15000</td>
                  <td>kilometers/hour</td>
                  <td>2500600</td>
                  <td>This is the description with fifty characters this</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>

                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>5551344312233</td>
                  <td>Sample Product</td>
                  <td>20560</td>
                  <td>455640</td>
                  <td>pcs</td>
                  <td>2343435</td>
                  <td>Short description here</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>
                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>123456789035</td>
                  <td>This is a test product with fifty characters this!</td>
                  <td>989500</td>
                  <td>1500800</td>
                  <td>kilometers/hour</td>
                  <td>25600</td>
                  <td>This is the description with fifty characters this</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>

                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>5551124354233</td>
                  <td>Sample Product</td>
                  <td>253430</td>
                  <td>450345</td>
                  <td>pcs</td>
                  <td>234345</td>
                  <td>Short description here</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>
                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>123456789035</td>
                  <td>This is a test product with fifty characters this!</td>
                  <td>90678</td>
                  <td>15000</td>
                  <td>kilometers/hour</td>
                  <td>2500600</td>
                  <td>This is the description with fifty characters this</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>

                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>555114552233</td>
                  <td>Sample Product</td>
                  <td>200345</td>
                  <td>450567</td>
                  <td>pcs</td>
                  <td>253434</td>
                  <td>Short description here</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>
                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>123456789035</td>
                  <td>This is a test product with fifty characters this!</td>
                  <td>9067800</td>
                  <td>1500</td>
                  <td>kilometers/hour</td>
                  <td>2500600</td>
                  <td>This is the description with fifty characters this</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>

                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>555113452233</td>
                  <td>Sample Product</td>
                  <td>20670</td>
                  <td>4456</td>
                  <td>pcs</td>
                  <td>253434</td>
                  <td>Short description here</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>
                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>123456789035</td>
                  <td>This is a test product with fifty characters this!</td>
                  <td>900500</td>
                  <td>150800</td>
                  <td>kilometers/hour</td>
                  <td>2500600</td>
                  <td>This is the description with fifty characters this</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
                </tr>

                <tr>
                  <td className="arrow-right">
                    <img src="\src\assets\arrow.png" alt="arrow" />
                  </td>
                  <td>555134512233</td>
                  <td>Sample Product</td>
                  <td>2087780</td>
                  <td>64550</td>
                  <td>pcs</td>
                  <td>234335</td>
                  <td>Short description here</td>
                  <td className="arrow-right">
                    <img src="\src\assets\three-dots.png" alt="three-dots" />
                  </td>
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
