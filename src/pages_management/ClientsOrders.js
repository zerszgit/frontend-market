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
          <PersonalAreaMenu />
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
