import { ReactElement, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useGeoLocation } from "../../../../hooks/useGeoLocation";
import useInputAutofill from "../../../../hooks/useInputAutofill";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomButton } from "../../../../components/CustomButton";
import { MapPinLine, ArrowDownLeft, ArrowLeft } from "phosphor-react";

import { z } from "zod";
/* styles */
import * as S from "./styles";
import { useTheme } from "styled-components";
import SkeletonAddressForm from "~/components/Skeletons/SkeletonAddressForm";
import {
  AddressAction,
  AddressActionType,
  AddressStateType,
} from "~/context/AddressProvider";

type PropsType = {
  state: AddressStateType;
  dispatch: React.Dispatch<AddressAction>;
  REDUCER_ACTIONS: AddressActionType;
};

const createAddressFormSchema = z.object({
  cep: z
    .string()
    .nonempty("CEP é obrigatório")
    .refine((value) => /^\d{8}$|^\d{5}-\d{3}$/.test(value), {
      message:
        "CEP inválido. O CEP deve ter 8 dígitos ou seguir o formato 'xxxxx-xxx'.",
    })
    .transform((value) => {
      if (/^\d{5}-\d{3}$/.test(value)) {
        return value;
      } else {
        return `${value.slice(0, 5)}-${value.slice(5)}`;
      }
    }),
  street: z.string().nonempty("Rua é obrigatório"),
  number: z.string().nonempty("Número é obrigatório"),
  complement: z.string(),
  neighborhood: z.string().nonempty("Bairro é obrigatório"),
  city: z.string().nonempty("Cidade é obrigatório"),
  state: z.string().nonempty("UF é obrigatório"),
});

export type CreateAddressFormData = z.infer<typeof createAddressFormSchema>;

export const AddressForm = ({
  dispatch,
  REDUCER_ACTIONS,
  state,
}: PropsType): ReactElement => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [showSavedAddress, setShowSavedAddress] = useState(false);
  const { geoLocation, getGeoLocation } = useGeoLocation();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const {
    value,
    suggestions,
    placeDetail,
    handleChange,
    handleSuggestionSelected,
  } = useInputAutofill();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    clearErrors,
  } = useForm<CreateAddressFormData>({
    resolver: zodResolver(createAddressFormSchema),
  });
  const watchedValues = watch();

  function createAddress(data: CreateAddressFormData) {
    dispatch({
      type: REDUCER_ACTIONS.SET_ADDRESS,
      payload: { ...data },
    });
    setShowSavedAddress(true);
  }

  useEffect(() => {
    if (placeDetail) {
      clearErrors();
      setValue("street", placeDetail.street);
      setValue("neighborhood", placeDetail.neighborhood);
      setValue("city", placeDetail.city);
      setValue("state", placeDetail.state);
      setValue("cep", placeDetail.cep);
      setValue("number", placeDetail.number);
    }
  }, [placeDetail]);

  useEffect(() => {
    if (geoLocation) {
      clearErrors();
      setValue("street", geoLocation.street);
      setValue("neighborhood", geoLocation.neighborhood);
      setValue("city", geoLocation.city);
      setValue("state", geoLocation.state);
      setValue("cep", geoLocation.postalCode);
      setValue("number", geoLocation.number);
    }
  }, [geoLocation]);

  useEffect(() => {
    setValue("street", value);
  }, [value, setValue]);

  useEffect(() => {
    clearErrors("street");
  }, [watchedValues.street]);

  return (
    <form onSubmit={handleSubmit(createAddress)} autoComplete="off">
      {!showSavedAddress ? (
        <S.AddressFormContainer>
          <S.ButtonContainer>
            <CustomButton
              icon={<MapPinLine size={16} color={theme.brand.yellowDark} />}
              title={"Usar localização Atual"}
              onClick={getGeoLocation}
            />
          </S.ButtonContainer>
          <S.InputContainer>
            <S.InputLabel htmlFor="street">Rua</S.InputLabel>
            <S.InputItem
              id="street"
              {...register("street")}
              onChange={handleChange}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 300)}
              onFocus={() => setShowSuggestions(true)}
              className={errors.street && "red-border"}
              type="text"
              autoComplete="off"
            />
            {showSuggestions && suggestions.length > 0 && (
              <S.SuggestionsContainer>
                <S.SuggestionList role="listbox">
                  {suggestions.map((suggestion) => (
                    <S.SuggestionItem
                      key={suggestion.place_id}
                      tabIndex={-1}
                      role="option"
                      aria-selected="false"
                      onClick={() => handleSuggestionSelected(suggestion)}
                    >
                      {suggestion.description}
                    </S.SuggestionItem>
                  ))}
                </S.SuggestionList>
              </S.SuggestionsContainer>
            )}
            <div id="googlemaps-attribution-container"></div>
            {errors.street && (
              <S.ErrorText>{errors.street.message}</S.ErrorText>
            )}
          </S.InputContainer>

          <S.InputContainerRow>
            <S.InputContainer>
              <S.InputLabel htmlFor="number">Número</S.InputLabel>
              <S.InputItem
                id="number"
                {...register("number")}
                className={errors.number && "red-border"}
                type="text"
                autoComplete="off"
              />
              {errors.number && (
                <S.ErrorText>{errors.number.message}</S.ErrorText>
              )}
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel htmlFor="complement">
                Complemento (opcional)
              </S.InputLabel>
              <S.InputItem
                id="complement"
                placeholder="Apto, Quarto, etc..."
                {...register("complement")}
                type="text"
                autoComplete="off"
              />
            </S.InputContainer>
          </S.InputContainerRow>

          <S.InputContainer>
            <S.InputLabel htmlFor="neighborhood">Bairro</S.InputLabel>
            <S.InputItem
              id="neighborhood"
              {...register("neighborhood")}
              className={errors.neighborhood && "red-border"}
              type="text"
              autoComplete="off"
            />
            {errors.neighborhood && (
              <S.ErrorText>{errors.neighborhood.message}</S.ErrorText>
            )}
          </S.InputContainer>

          <S.InputContainerRow>
            <S.InputContainer>
              <S.InputLabel htmlFor="state">UF</S.InputLabel>
              <S.InputItem
                id="state"
                {...register("state")}
                className={errors.state && "red-border"}
                type="text"
                autoComplete="off"
              />
              {errors.state && (
                <S.ErrorText>{errors.state.message}</S.ErrorText>
              )}
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel htmlFor="city">Cidade</S.InputLabel>
              <S.InputItem
                id="city"
                {...register("city")}
                className={errors.city && "red-border"}
                type="text"
                autoComplete="off"
              />
              {errors.city && <S.ErrorText>{errors.city.message}</S.ErrorText>}
            </S.InputContainer>
          </S.InputContainerRow>

          <S.InputContainer>
            <S.InputLabel htmlFor="cep">CEP</S.InputLabel>
            <S.InputItem
              id="cep"
              {...register("cep")}
              className={errors.cep && "red-border"}
              type="text"
              autoComplete="off"
            />
            {errors.cep && <S.ErrorText>{errors.cep.message}</S.ErrorText>}
          </S.InputContainer>

          <S.ButtonContainer>
            <CustomButton
              type="submit"
              title={"Salvar endereço"}
              background={theme.brand.yellowDark}
              hover={theme.brand.yellow}
              color={theme.base.white}
            />
          </S.ButtonContainer>
        </S.AddressFormContainer>
      ) : (
        <>
          <S.TextContainer>
            <S.TextInfo>
              <span>{`${watchedValues.street}, ${watchedValues.number}`}</span>
            </S.TextInfo>
            <S.TextInfo>{`${watchedValues.neighborhood} - ${watchedValues.city}, ${watchedValues.state}`}</S.TextInfo>
          </S.TextContainer>

          <S.ButtonContainer>
            <CustomButton
              icon={<ArrowLeft size={16} color={theme.base.white} />}
              title={"Alterar Endereço"}
              background={theme.brand.yellowDark}
              hover={theme.brand.yellow}
              color={theme.base.white}
              onClick={() => setShowSavedAddress(false)}
            />
          </S.ButtonContainer>
        </>
      )}
    </form>
  );
};
