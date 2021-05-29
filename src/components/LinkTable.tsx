import Table from "react-bootstrap/Table";

import LinkTableRow from "./LinkTableRow";

import { useAppContext } from "../context/AppContext";

const LinkTable: React.FC = () => {
  const { state } = useAppContext();

  return (
    <div>
      <h3>All Results</h3>
      <p>
        Links Not Persisted on Refresh. Would need to implement user or
        anonymous sessions
      </p>
      <Table size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Full URL</th>
            <th>Shortened</th>
          </tr>
        </thead>
        <tbody>
          {state.redirects != null
            ? state.redirects.map((redirect, index) => {
                return <LinkTableRow redirect={redirect} key={index} />;
              })
            : ""}
        </tbody>
      </Table>
    </div>
  );
};

export default LinkTable;
