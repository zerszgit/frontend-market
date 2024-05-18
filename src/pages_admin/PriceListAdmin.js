import React, { useState, useEffect } from "react";
import Header from "../pages_klient/Header";
import PersonalAreaMenu from "../components/PersonalAreaMenu";

function ClientsOrders() {
  // State to store the table data fetched from the API
  const [tableData, setTableData] = useState([]);

  // Effect hook to fetch data from the API when the component mounts
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  // Function to fetch data from the API
  const fetchDataFromApi = () => {
    // Fetch data from your API endpoint
    // Replace 'apiEndpoint' with your actual API endpoint
    fetch("apiEndpoint")
      .then((response) => response.json())
      .then((data) => {
        setTableData(data); // Set the fetched data to the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Function to add a new row to the table
  const addRow = () => {
    // Add your logic here to add a new row to the table data
    // For example, you can push a new object to the tableData state
    const newRow = {
      // Define properties for each column in the new row
      // Example:
      id: tableData.length + 1,
      column1: "New Value 1",
      column2: "New Value 2",
      column3: "New Value 3",
      column4: "New Value 4",
      column5: "New Value 5",
    };
    setTableData((prevData) => [...prevData, newRow]); // Add the new row to the table data state
  };

  return (
    <div>
      <Header />

      <div className="flex flex-row ">
        <div>
        <div className="flex h-[700px] " >
            <div className="meny_personal_area border-r-2 border-gray w-[350px] h-fll py-14 px-8">
                <div className=" text-3xl text-bold mb-8" onClick={() => window.location.href='personal_area.html'}>Личный кабинет</div>
                <div className=" text-xl mb-8" onClick={() => window.location.href='personal_area.html'}>Мои данные</div>
                <div className=" text-xl mb-8" onClick={() => window.location.href='cart_edit.html'}>Заказы клиентов</div>
                <div className=" text-xl mb-8" onClick={() => window.location.href='purchases.html'}>Прайс-листы менеджеров</div>
                <div className=" mb-8 text-xl" onClick={() => window.location.href='delivery.html'}>Карточки товаров</div>
                <div className=" text-xl flex flex-row" onClick={() => {}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FLogout%202.svg?alt=media&token=081db559-59ee-4ef3-8a67-5d37175c148c" alt="" />
                    <a>Выйти</a>
                </div>
            </div>
        </div>
        </div>
        <div className="m-8 w-[75%]">
          <div className="font-medium">Заказы клиентов</div>
          <button onClick={addRow}>Add Row</button>
          <table className="w-[959px] my-8">
            <thead>
              <tr className=" h-[39px] bg-gray-300 ">
                <th>Номер <br/> отправления</th>
                <th>Статус</th>
                <th>Артикул,<br/> количество</th>
                <th>Стоимость</th>
                <th>Принят <br/> в обработку</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td>{row.column1}</td>
                  <td>{row.column2}</td>
                  <td>{row.column3}</td>
                  <td>{row.column4}</td>
                  <td>{row.column5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ClientsOrders;
