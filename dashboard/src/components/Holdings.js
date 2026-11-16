import { useState, useEffect } from "react";
import { VeriticalGraph } from "./VeriticalGraph";
const Holdings = () => {

  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const response = await fetch("http://localhost:5000/allHoldings");
        const data = await response.json();
        setAllHoldings(data);
      } catch (error) {
        console.error("Error fetching holdings:", error);
      }
    };

    fetchHoldings();
  }, []);

  const holdings = allHoldings;
  //   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = holdings.map((holding) => holding["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: 'stock Price',
        data: holdings.map(( stock) =>stock.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  }
  // export const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  return (
  <>
    <h3 className="title">Holdings ({holdings.length})</h3>

    <div className="order-table">
      <table>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
        </thead>

        <tbody>
          {holdings.map((stock, index) => {
            const curValue = stock.qty * stock.price;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                {/* <td>{curValue.toFixed(2)}</td> */}
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                {/* <td className={profClass}>
                  {((curValue - stock.avg * stock.qty) / (stock.avg * stock.qty) * 100).toFixed(2)}%
                </td> */}
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

    <div className="row">
      <div className="col">
        <h5>
          29,875.<span>55</span>{" "}
        </h5>
        <p>Total investment</p>
      </div>
      <div className="col">
        <h5>
          31,428.<span>95</span>{" "}
        </h5>
        <p>Current value</p>
      </div>
      <div className="col">
        <h5>1,553.40 (+5.20%)</h5>
        <p>P&L</p>
      </div>
    </div>

    <VeriticalGraph data={data} />
  </>
);
}

export default Holdings;