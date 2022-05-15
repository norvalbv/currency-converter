import { useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import Loading from "../loading";
import TableButtons from "./table-buttons";
import TableSearch from "./table-search";

const CurrencyTable = () => {
  const { currencies, status } = useSelector((state) => state.currencies);

  const [loadStart, setLoadStart] = useState(0);
  const [loadEnd, setLoadEnd] = useState(15);
  const [page, setPage] = useState(1);

  if (status !== "success") return <Loading />;
  return (
    <div className="w-3/5 bg-white py-3 rounded-lg relative mx-auto">
      <TableSearch />
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>{currencies.base_code}</th>
            <th>Conversion Rate</th>
          </tr>
        </thead>
        {Object.entries(currencies.conversion_rates)
          .slice(loadStart, loadEnd)
          .map((item, i) => (
            <tbody key={i}>
              <tr>
                <td>1</td>
                <td>
                  {item[0]} {item[1]}
                </td>
              </tr>
            </tbody>
          ))}
      </Table>
      <TableButtons
        page={page}
        loadStart={loadStart}
        loadEnd={loadEnd}
        setLoadStart={setLoadStart}
        setLoadEnd={setLoadEnd}
        setPage={setPage}
        currencies={currencies}
      />
    </div>
  );
};

export default CurrencyTable;
