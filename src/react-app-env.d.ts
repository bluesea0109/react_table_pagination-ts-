/// <reference types="react-scripts" />

/*
 *
 * API Payloads
 *
 */
type IAPIMethod = "GET" | "POST" | "PUT" | "DELETE";

type IPO = {
  [key: string]: {
    [key: string]: string;
  };
};

interface IEndpoint {
  method: IAPIMethod;
  uri: string;
}

type INullableObject = {
  [key: string]: string;
} | null;

type IError = {
  message: string;
  response: {
    status: number;
    statusText: string;
    data: {
      message: string;
      status: number;
    };
  };
} | null;

interface IMessage {
  status: number;
  text: string;
}

interface IAPIRequest {
  method: IAPIMethod;
  uri?: string;
  url?: string;
  headers?: INullableObject;
  data?: INullableObject;
}

/*
 *
 * Form controller
 *
 */
type IFormikChangeEvent =
  | ((
      event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
      newValue?: string | undefined
    ) => void)
  | undefined;

type IFormikBlurEvent =
  | ((event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void)
  | undefined;

interface IFormElement {
  type: "text" | "number" | "date";
  name: string;
  label: string;
  validation?: Yup.StringSchema;
  initialValue?: string;
}

interface IValidationSchemaBase {
  [key: string]: Yup.StringSchema;
}
