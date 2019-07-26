import { inject } from "mobx-react";
import React from "react";
import Table, { createTableProps } from "../components/table";
import { IUserTable } from "../interfaces/userInterface";
import Header from "../components/header";
import Pagination from "../components/pagination";
import { Layout } from "../styled";

type TableProps = {
  [key: string]: string;
};
interface IProps {
  history: {
    push(url: string): void;
  };
}
@inject("store")
class Home extends React.Component {
  render(): JSX.Element {
    const userItems_vol2: IUserTable[] = [
      { Name: "Lila1", Email: "lila", Role: "lawyer" },
      { Name: "Adna2", Email: "adna", Role: "lawyer" },
      { Name: "Lila3", Email: "lila", Role: "lawyer" },
      { Name: "Adna4", Email: "adna", Role: "lawyer" },
      { Name: "Lila5", Email: "lila", Role: "lawyer" },
      { Name: "Adna6", Email: "adna", Role: "lawyer" },
      { Name: "Lila7", Email: "lila", Role: "lawyer" },
      { Name: "Adna8", Email: "adna", Role: "lawyer" },
      { Name: "Lila9", Email: "lila", Role: "lawyer" },
      { Name: "Adna10", Email: "adna", Role: "lawyer" },
      { Name: "Lila11", Email: "lila", Role: "lawyer" },
      { Name: "Adna12", Email: "adna", Role: "lawyer" },
      { Name: "Lila13", Email: "lila", Role: "lawyer" },
      { Name: "Adna14", Email: "adna", Role: "lawyer" },
      { Name: "Lila15", Email: "lila", Role: "lawyer" },
      { Name: "Adna16", Email: "adna", Role: "lawyer" },
      { Name: "Lila17", Email: "lila", Role: "lawyer" },
      { Name: "Adna18", Email: "adna", Role: "lawyer" },
      { Name: "Lila19", Email: "lila", Role: "lawyer" },
      { Name: "Adna20", Email: "adna", Role: "lawyer" }
    ];

    const userItems: TableProps[] = createTableProps(userItems_vol2);
    return (
      <Layout displayFlex column>
        <Header />
        <Pagination items={userItems} />
      </Layout>
    );
  }
}

export default Home;
