import { Redirect } from "../services/hexlink";

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
      <td>{redirect.redirectCode}</td>
    </tr>
  );
};

export default LinkTableRow;
