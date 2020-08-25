import React, { useState, useEffect, Fragment } from "react";
import { Button, message, Modal, Input, Select } from "antd";
import { useHistory } from "react-router-dom";
import { DeleteFilled } from "@ant-design/icons";
import { arrayValidation } from "../../helper/validation";
const { Option } = Select;
const menuItems = [
  {
    name: "Potato Fry",
    price: 180,
    totalPrice: 180,
  },
  {
    name: "Chicken Fry",
    price: 360,
    totalPrice: 360,
  },
  {
    name: " Mutton Fry",
    price: 80,
    totalPrice: 80,
  },
  {
    name: "Chilli Paneer",
    price: 360,
    totalPrice: 360,
  },
];
const starterItem = [
  {
    name: "Chowmien",
    price: 180,
    totalPrice: 180,
  },
  {
    name: "Rice Fry",
    price: 360,
    totalPrice: 360,
  },
  {
    name: "Idli dosa",
    price: 80,
    totalPrice: 80,
  },
  {
    name: "Samosa",
    price: 360,
    totalPrice: 360,
  },
];

export default function AcornDashboard() {
  const history = useHistory();
  const [selectedMenu, setSelectedMenu] = useState(menuItems);
  const [selectedMenuItem, setSelectedMenuItem] = useState([]);
  const [table, setTable] = useState([
    { number: 1, isTableSelected: false, numberOfGuest: "" },
    { number: 2, isTableSelected: false, numberOfGuest: "" },
    { number: 3, isTableSelected: false, numberOfGuest: "" },
    { number: 4, isTableSelected: false, numberOfGuest: "" },
    { number: 5, isTableSelected: false, numberOfGuest: "" },
    { number: 6, isTableSelected: false, numberOfGuest: "" },
  ]);
  const [guestNumber, setGuestNumber] = useState();
  const [showInput, setShowInput] = useState();
  const [tableModel, setTableModel] = useState(false);
  const [lastSelectedTable, setLastSelectedTable] = useState({});
  const [modalPayment, setModalPayment] = useState("");
  const [exactPrice, setExactPrice] = useState("");
  const [paymentMode, setPaymentMode] = useState("");

  useEffect(() => {
    let totalPrice = "0";
    const calculatePrice = () => {
      for (let i = 0; i < selectedMenuItem.length; i++) {
        console.log(selectedMenuItem[i].totalPrice);
        totalPrice =
          parseInt(selectedMenuItem[i].totalPrice) + parseInt(totalPrice);
      }
      setExactPrice(totalPrice);
    };

    calculatePrice();
  }, [selectedMenuItem]);

  const handleMenu = (name) => {
    if (name === "menu") {
      setSelectedMenu(menuItems);
    } else if (name === "starter") {
      setSelectedMenu(starterItem);
    } else {
      setSelectedMenu(menuItems);
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    history.push("/acorn/login");
  };

  const getMenu = (data) => {
    const isName = selectedMenuItem.find((item) => item.name === data.name);
    if (!isName) {
      const filteredData = { ...data, kitna: 1 };
      setSelectedMenuItem([...selectedMenuItem, filteredData]);
    } else {
      message.info("Already Selected");
    }
  };

  const handleInc = (data) => {
    const afterInc = selectedMenuItem.map((item) => {
      if (data.name === item.name) {
        const kitna = item.kitna + 1;
        const price = item.price * kitna;
        return { ...item, kitna, totalPrice: price };
      } else {
        return item;
      }
    });
    // setIncDec(!incDec);
    setSelectedMenuItem(afterInc);
  };

  const handleDec = (data) => {
    const afterDec = selectedMenuItem.map((item) => {
      if (data.name === item.name && item.kitna > 1) {
        const kitna = item.kitna - 1;
        const price = item.price * kitna;
        return { ...item, kitna, totalPrice: price };
      } else {
        return item;
      }
    });
    // setIncDec(!incDec);
    setSelectedMenuItem(afterDec);
  };

  const handleDeleteItem = (data) => {
    const afterItemDelete = selectedMenuItem.filter(
      (item) => item.name !== data.name
    );

    if (!!lastSelectedTable.number) {
      const myTableData = table.map((data) => {
        if (lastSelectedTable.number === data.number) {
          setSelectedMenuItem(afterItemDelete);
          return { ...data, selectedMenuItem: afterItemDelete };
        } else {
          return { ...data };
        }
      });
      setTable(myTableData);
    } else {
      setSelectedMenuItem(afterItemDelete);
    }
  };

  const handleVisible = () => {
    setTableModel(true);
  };

  const handleCancel = () => {
    setTableModel(false);
  };

  const handleTable = (myTable) => {
    if (!myTable.isTableSelected && selectedMenuItem.length < 0) {
      message.info("Please select some menu item");
    } else {
      setLastSelectedTable(myTable);
      const selectedTable = table.map((item) => {
        if (item.number === myTable.number || !!item.numberOfGuest) {
          setGuestNumber(item.numberOfGuest);
          return {
            ...item,
            isTableSelected: true,
          };
        } else {
          return { ...item, isTableSelected: false };
        }
      });

      console.log();
      setTable(selectedTable);
      setShowInput(true);
    }
  };

  const handleGuestNumber = (e) => {
    setGuestNumber(e.target.value);
  };

  const handleTableSubmit = () => {
    const tableData = table.map((item) => {
      if (item.number === lastSelectedTable.number) {
        return { ...item, selectedMenuItem, numberOfGuest: guestNumber };
      } else {
        return { ...item };
      }
    });
    setTable([...tableData]);
    setLastSelectedTable("");
    setSelectedMenuItem([]);
    setGuestNumber("");
    setShowInput(false);
    setTableModel(false);
  };

  const handleSelectedTable = (tableData) => {
    setLastSelectedTable(tableData);
    setSelectedMenuItem(tableData.selectedMenuItem);
  };

  const handlePaymentMode = (val) => {
    console.log(val);
    setPaymentMode(val);
  };

  const handleDone = () => {
    const myTableData = table.map((tableData) => {
      if (lastSelectedTable.number === tableData.number) {
        return { ...tableData, selectedMenuItem };
      } else return { ...tableData };
    });
    setLastSelectedTable("");
    setTable(myTableData);
    setSelectedMenuItem([]);
  };

  const handlePay = () => {
    if (selectedMenuItem.length < 1) {
      return;
    } else {
      if (!!lastSelectedTable.number) {
        setModalPayment(true);
      }
    }
  };

  const handlePayConfirm = () => {
    const filteredTable = table.map((data) => {
      if (lastSelectedTable.number === data.number) {
        delete data.selectedMenuItem;
        return { ...data, isTableSelected: false, numberOfGuest: "" };
      } else {
        return { ...data };
      }
    });
    message.success(
      `Table ${lastSelectedTable.number} successfully paid Rs. ${exactPrice} by ${paymentMode}`
    );
    setPaymentMode("");
    setSelectedMenuItem([]);
    setTable(filteredTable);
    setModalPayment(false);
  };

  return (
    <div className="acorn-dashboard">
      <div className="acorn-dashboard-section">
        <div className="acorn-dashboard-section__one">
          <div className="menu">
            {selectedMenu &&
              selectedMenu.map((data, index) => (
                <div
                  onClick={() => getMenu(data)}
                  key={index}
                  className="menu-item"
                >
                  <h3>{data.name}</h3>
                  <p>Rs. {data.price}</p>
                </div>
              ))}
          </div>
          <div className="table-list">
            {table.map((tableData, index) => (
              <Fragment key={index}>
                {tableData.isTableSelected && (
                  <div
                    key={index}
                    onClick={() => handleSelectedTable(tableData)}
                    className="table-list-content"
                  >
                    <h3>Table {tableData.number}</h3>
                    <h3>Guest {tableData.numberOfGuest}</h3>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
        <div className="acorn-dashboard-section__title">
          <Button onClick={() => handleMenu("menu")}>Menu</Button>
          <Button onClick={() => handleMenu("starter")}>Starter</Button>
        </div>
        <div className="acorn-dashboard-section__details">
          <div className="detail-list">
            {arrayValidation(selectedMenuItem) &&
              selectedMenuItem.map((data, index) => (
                <div key={index} className="detail-list-item">
                  <DeleteFilled onClick={() => handleDeleteItem(data)} />
                  <p>{data.name}</p>
                  <div className="operator">
                    <Button onClick={() => handleDec(data)}>-</Button>
                    <div className="quantity">{data.kitna}</div>
                    <Button onClick={() => handleInc(data)}>+</Button>
                  </div>
                  <h3>Rs {data.totalPrice}</h3>
                </div>
              ))}
          </div>
          <div className="action">
            <div className="action__btn">
              Total {exactPrice && `Rs. ${exactPrice}`}
            </div>
            <Button className="action__btn" onClick={handleDone}>
              Done
            </Button>
            <Button className="action__btn" onClick={handlePay}>
              Pay
            </Button>
          </div>
        </div>
        <div className="acorn-dashboard-section__link">
          <Button onClick={handleVisible} className="logoutBtn">
            Table
          </Button>
          <Button onClick={handleLogout} className="logoutBtn">
            Logout
          </Button>
        </div>
      </div>
      <Modal
        visible={tableModel}
        title="Table"
        onCancel={handleCancel}
        footer={null}
      >
        <div className="tables">
          {table.map((data, index) => (
            <div
              className={data.isTableSelected ? "occupied" : "table"}
              onClick={() => handleTable(data)}
              key={index}
            >
              <h3 className="">Table {data.number}</h3>
              {!!data.numberOfGuest && <h4>Guest {data.numberOfGuest}</h4>}
            </div>
          ))}
          {showInput && (
            <div className="guest-number">
              <h3>Table {lastSelectedTable.number} selected. Guest?</h3>
              <Input
                max={10}
                type="number"
                value={guestNumber}
                onChange={handleGuestNumber}
              />
              <Button htmlType="submit" onClick={() => handleTableSubmit()}>
                Done
              </Button>
            </div>
          )}
        </div>
      </Modal>
      <Modal
        visible={modalPayment}
        title="Payment"
        footer={null}
        onCancel={() => setModalPayment(false)}
      >
        <div className="payment">
          <h3 className="">
            Table {lastSelectedTable && lastSelectedTable.number} Need to Pay
            Rs. {exactPrice}{" "}
          </h3>
          <Select placeholder="Payment Mode" onChange={handlePaymentMode}>
            <Option value="">---select---</Option>
            <Option value="case">Cash</Option>
            <Option value="onLine">Online</Option>
            <Option value="card">Card</Option>
          </Select>
          <Button onClick={handlePayConfirm}>PAY</Button>
        </div>
      </Modal>
    </div>
  );
}
