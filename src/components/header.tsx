import * as React from "react";
import { Layout } from "../styled";
import { FabricButton, FabricLabel, COLORS } from "../styled/index";
import RootStore from "../store/RootStore";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import routes from "../constants/routes";
import { withRouter } from "react-router-dom";

interface IProps {
  store: RootStore;
  history: {
    push(url: string): void;
  };
}

class Header extends React.Component<IProps> {
  handleSubmit = () => {
    const { store, history } = this.props;
    store.loginUser.remove();
    history.push(routes.LOGIN);
  };
  render(): JSX.Element {
    return (
      <Layout
        displayFlex
        height={"10vh"}
        backgroundColor={COLORS.PRIMARY}
        justifyBetween
        alignCenter
        padding={"0 20px 0 20px"}
      >
        <FabricLabel color={"white"} fontSize={15}>
          Court Cases Management
        </FabricLabel>
        <FabricButton
          color={"transparent"}
          text="Logout"
          fontSize={15}
          onClick={this.handleSubmit}
        />
      </Layout>
    );
  }
}

const enhance = compose<IProps, {}>(
  inject("store"),
  observer,
  withRouter
);
export default enhance(Header);
