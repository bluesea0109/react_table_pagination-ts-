import * as React from "react";
import { DetailsList } from "office-ui-fabric-react";

type TableProps = {
  [key: string]: string;
};

interface IProps {
  items: TableProps[];
}

export function createTableProps(items: any[]): TableProps[] {
  let tableItems: TableProps[] = [{}];
  const keysOfProps = Object.keys(items[0]);
  tableItems = items.map(el => {
    let item: TableProps = {};
    keysOfProps.forEach((element: string, index: number) => {
      item[keysOfProps[index]] = el[element];
    });
    return item;
  });
  return tableItems;
}
class Table extends React.Component<IProps> {
  render(): JSX.Element {
    const { items } = this.props;
    return (
      <DetailsList
        items={items}
        ariaLabel="lalalalalalallaa"
        checkButtonAriaLabel="check"
      />
    );
  }
}

export default Table;
