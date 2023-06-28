import { createContext, useReducer, ReactElement, useMemo } from "react";

// Define the types for the address state and actions
export type AddressStateType = {
  address: AddressType | null;
};

type AddressType = {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  cep: string;
};

// Define the initial state for the address
const initialAddressState: AddressStateType = {
  address: null,
};

export type AddressAction = {
  type: string;
  payload?: AddressType;
};

// Define the action types
const ADDRESS_ACTION_TYPE = {
  SET_ADDRESS: "SET_ADDRESS",
  CLEAR_ADDRESS: "CLEAR_ADDRESS",
};

export type AddressActionType = typeof ADDRESS_ACTION_TYPE;

// Create the reducer function to handle the state updates
const addressReducer = (
  state: AddressStateType,
  action: AddressAction
): AddressStateType => {
  switch (action.type) {
    case ADDRESS_ACTION_TYPE.SET_ADDRESS: {
      if (!action.payload) {
        throw new Error("Address payload is missing in SET_ADDRESS action");
      }

      return { ...state, address: action.payload };
    }
    case ADDRESS_ACTION_TYPE.CLEAR_ADDRESS: {
      return { ...state, address: null };
    }
    default:
      throw new Error("Unidentified address reducer action type");
  }
};

// Create a custom hook to provide access to the state and actions within components
const useAddressContext = (initialCartState: AddressStateType) => {
  const [state, dispatch] = useReducer(addressReducer, initialCartState);

  const REDUCER_ACTIONS = useMemo(() => {
    return ADDRESS_ACTION_TYPE;
  }, []);

  return { dispatch, state, REDUCER_ACTIONS };
};

// Create the address context

export type UseAddressContextType = ReturnType<typeof useAddressContext>;

const initialAddressContextState: UseAddressContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: ADDRESS_ACTION_TYPE,
  state: { address: null },
};

export const AddressContext = createContext<UseAddressContextType>(
  initialAddressContextState
);

type ChildrenType = { children?: ReactElement | ReactElement[] };

// Export the address provider component
export const AddressProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <AddressContext.Provider value={useAddressContext(initialAddressState)}>
      {children}
    </AddressContext.Provider>
  );
};
