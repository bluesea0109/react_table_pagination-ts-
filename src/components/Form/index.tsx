import React, { Component } from "react";
import _ from "lodash";
import * as Yup from "yup";
import { Formik, FormikProps, FormikValues } from "formik";
import FormInput from "./input";
import {
  Layout,
  SHADOWS,
  FabricLabel,
  COLORS,
  FabricButton
} from "../../styled";
import { MessageBar, MessageBarType } from "office-ui-fabric-react";
import { observer, inject } from "mobx-react";
import PromiseStore from "../../store/PromiseStore";
import Forms from "../../forms";
import Loader from "../loader";
import FormDateInput from "./dateInput";

interface IProps {
  formTitle: string;
  title?: string;
}

interface IInjectedProps {
  form: { [key: string]: PromiseStore };

  extraProps?: { [key: string]: string | number };
}

@inject(({ store }) => ({
  form: store.form
}))
@observer
class Form extends Component<IProps & IInjectedProps> {
  _formik: React.RefObject<Formik>;

  form: IFormElement[];

  constructor(props: IProps & IInjectedProps) {
    super(props);

    const { formTitle } = props;

    this._formik = React.createRef();

    this.form = Forms[formTitle];
  }

  handleSubmit = async (data: FormikValues) => {
    const { form, formTitle, extraProps } = this.props;

    const store = form[formTitle];

    const formController = _.get(this, "_formik.current");

    const constructedRequest = {
      ...data,

      ...(extraProps || {})
    };

    await store.fetch(constructedRequest);

    formController.setSubmitting(false);
  };

  render() {
    const { form, formTitle, extraProps, title } = this.props;

    const store = form[formTitle];

    const responseError = _.get(store, "error.message");

    const validationSchemaBase: IValidationSchemaBase = {};

    const initialValues: FormikValues = {};

    this.form.forEach((item: IFormElement) => {
      validationSchemaBase[item.name] = item.validation;

      initialValues[item.name] = item.initialValue;
    });

    return (
      <Layout displayFlex justifyCenter width={"100%"}>
        <Layout displayFlex justifyCenter alignCenter>
          <Layout
            displayFlex
            column
            width={"350px"}
            justifyCenter
            boxShadow={SHADOWS.FORM}
            padding={"20px"}
          >
            <Layout
              borderBottom={"1.5px solid" + COLORS.LIGHT_GREY}
              displayFlex
              margin={"0px 0px 20px 0px"}
            >
              <FabricLabel
                color={COLORS.PRIMARY}
                fontSize={25}
                center
                bold
                marginBottom={20}
              >
                {title}
              </FabricLabel>
            </Layout>
            <Formik
              onSubmit={this.handleSubmit}
              validationSchema={Yup.object().shape(validationSchemaBase)}
              initialValues={initialValues}
              ref={this._formik}
            >
              {(props: FormikProps<FormikValues>) => {
                const {
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  submitCount
                } = props;
                const hasBeenSubmitted = submitCount > 0;
                return (
                  <form onSubmit={handleSubmit}>
                    {responseError && (
                      <Layout width="100%" margin="0 0 10px 0">
                        <MessageBar
                          messageBarType={MessageBarType.error}
                          isMultiline
                        >
                          {responseError}
                        </MessageBar>
                      </Layout>
                    )}

                    {!!store.success && (
                      <Layout width="100%" margin="0 0 10px 0">
                        <MessageBar
                          messageBarType={MessageBarType.success}
                          isMultiline
                        >
                          Success [TODO: Handle messages]
                        </MessageBar>
                      </Layout>
                    )}

                    {this.form.map((elem: IFormElement) => {
                      switch (elem.type) {
                        case "date":
                          return (
                            <FormDateInput
                              key={elem.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values[elem.name]}
                              label={elem.label}
                              error={
                                !!touched[elem.name] || hasBeenSubmitted
                                  ? errors[elem.name]
                                  : undefined
                              }
                              name={elem.name}
                            />
                          );

                        default:
                          return (
                            <FormInput
                              type={elem.type}
                              key={elem.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values[elem.name]}
                              label={elem.label}
                              error={
                                !!touched[elem.name] || hasBeenSubmitted
                                  ? errors[elem.name]
                                  : undefined
                              }
                              name={elem.name}
                            />
                          );
                      }
                    })}

                    <Layout
                      width="100%"
                      displayFlex
                      row
                      alignCenter
                      justifyEnd
                      padding="20px 0 0 0"
                      marginBottom={"20px"}
                    >
                      {isSubmitting && <Loader />}

                      <FabricButton
                        disabled={isSubmitting}
                        text="Submit"
                        type="submit"
                        color={COLORS.PRIMARY}
                        marginBottom={20}
                        width={"100%"}
                      />
                    </Layout>
                  </form>
                );
              }}
            </Formik>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default (Form as unknown) as React.ComponentClass<IProps>;
