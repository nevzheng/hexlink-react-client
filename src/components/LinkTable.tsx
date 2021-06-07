import Table from "react-bootstrap/Table";

import LinkTableRow from "./LinkTableRow";

import { useAppContext } from "../context/AppContext";
import { Collapse } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const LinkTable: React.FC = () => {
  const { state } = useAppContext();

  const [showPreviousResults, setShowPreviousResults] = useState(false);

  return (
    <div>
      <Button
        className="mb-3"
        onClick={() => setShowPreviousResults(!showPreviousResults)}
        variant={showPreviousResults ? "warning" : "info"}
        aria-controls="example-collapse-text"
        aria-expanded={showPreviousResults}
      >
        {showPreviousResults
          ? "Hide Previous Results"
          : "Show Previous Results"}
      </Button>
      <Collapse in={showPreviousResults}>
        <div id="example-collapse-text">
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
                    return (
                      <LinkTableRow
                        redirect={redirect}
                        key={index}
                        index={index}
                      />
                    );
                  })
                : ""}
            </tbody>
          </Table>
        </div>
      </Collapse>
    </div>
  );
};

export default LinkTable;
