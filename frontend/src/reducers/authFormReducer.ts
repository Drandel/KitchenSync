export interface AuthFormState {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  showPassword: boolean;
}

export type AuthFormAction =
  | { type: "firstNameUpdated"; payload: string }
  | { type: "lastNameUpdated"; payload: string }
  | { type: "usernameUpdated"; payload: string }
  | { type: "emailUpdated"; payload: string }
  | { type: "passwordUpdated"; payload: string }
  | { type: "passwordVisibilityToggled" }
  | { type: "formReset" };

export const initialAuthFormState: AuthFormState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  showPassword: false,
};

export function authFormReducer(
  state: AuthFormState,
  action: AuthFormAction,
): AuthFormState {
  switch (action.type) {
    case "firstNameUpdated":
      return { ...state, firstName: action.payload };
    case "lastNameUpdated":
      return { ...state, lastName: action.payload };
    case "usernameUpdated":
      return { ...state, username: action.payload };
    case "emailUpdated":
      return { ...state, email: action.payload };
    case "passwordUpdated":
      return { ...state, password: action.payload };
    case "passwordVisibilityToggled":
      return { ...state, showPassword: !state.showPassword };
    case "formReset":
      return initialAuthFormState;
  }
}
