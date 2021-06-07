import { Redirect } from "../types/types";

interface LinkTableRowProp {
  redirect: Redirect;
  index: number;
}

const LinkTableRow: React.FC<LinkTableRowProp> = ({
  redirect,
  index,
}: LinkTableRowProp) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{redirect.url}</td>
      <td>{redirect.code}</td>
    </tr>
  );
};

export default LinkTableRow;
