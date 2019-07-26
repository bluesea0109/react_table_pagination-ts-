import { inject } from "mobx-react";
import React from "react";
import Form from "../components/Form";
import { Layout } from "../styled/index";

@inject("store")
class newCaseForm extends React.Component {
  render(): JSX.Element {
    return (
      <Layout justifyCenter alignCenter displayFlex height={"100vh"}>
        <Form formTitle="newCaseForm" title={"New Case"} />
      </Layout>
    );
  }
}

export default newCaseForm;
