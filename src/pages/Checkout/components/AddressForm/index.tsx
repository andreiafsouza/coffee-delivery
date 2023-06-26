import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
/* styles */
import * as S from "./styles";
import { useTheme } from "styled-components";
import { useGeoLocation } from "../../../../hooks/useGeoLocation";
import useInputAutofill from "../../../../hooks/useInputAutofill";
import { CustomButton } from "../../../../components/CustomButton";
import { MapPinLine } from "phosphor-react";

const createAddressFormSchema = z.object({
  cep: z
    .string()
    .regex(/^[\d-]+$/, "Digite apenas números")
    .min(8, "CEP deve ter mínimo de 8 dígitos")
    .max(9, "CEP deve ter no máximo 9 dígitos"),
  street: z.string().nonempty("Rua é obrigatório"),
  number: z.string().nonempty("Número é obrigatório"),
  complement: z.string(),
  neighborhood: z.string().nonempty("Bairro é obrigatório"),
  city: z.string().nonempty("Cidade é obrigatório"),
  state: z.string().nonempty("UF é obrigatório"),
});

type CreateAddressFormData = z.infer<typeof createAddressFormSchema>;

export const AddressForm = () => {
  const { geoLocation, getGeoLocation } = useGeoLocation();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const {
    value,
    suggestions,
    placeDetail,
    handleChange,
    handleSuggestionSelected,
  } = useInputAutofill();
  const theme = useTheme();
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
    console.log(data);
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

    const complementInput = document.getElementById(
      "complement"
    ) as HTMLInputElement;
    if (complementInput) {
      complementInput.focus();
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

    const complementInput = document.getElementById(
      "complement"
    ) as HTMLInputElement;
    if (complementInput) {
      complementInput.focus();
    }
  }, [geoLocation]);

  useEffect(() => {
    setValue("street", value);
  }, [value, setValue]);

  return (
    <form onSubmit={handleSubmit(createAddress)}>
      <S.AddressFormContainer>
        <S.ButtonContainer>
          <CustomButton
            icon={<MapPinLine size={16} color={theme.brand.purple} />}
            title={"Usar sua localização Atual"}
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
          {errors.street && <S.ErrorText>{errors.street.message}</S.ErrorText>}
        </S.InputContainer>

        <S.InputContainerRow>
          <S.InputContainer>
            <S.InputLabel htmlFor="number">Número</S.InputLabel>
            <S.InputItem id="number" {...register("number")} />
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
            />
          </S.InputContainer>
        </S.InputContainerRow>

        <S.InputContainer>
          <S.InputLabel htmlFor="neighborhood">Bairro</S.InputLabel>
          <S.InputItem id="neighborhood" {...register("neighborhood")} />
          {errors.neighborhood && (
            <S.ErrorText>{errors.neighborhood.message}</S.ErrorText>
          )}
        </S.InputContainer>

        <S.InputContainerRow>
          <S.InputContainer>
            <S.InputLabel htmlFor="state">UF</S.InputLabel>
            <S.InputItem id="state" {...register("state")} />
            {errors.state && <S.ErrorText>{errors.state.message}</S.ErrorText>}
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel htmlFor="city">Cidade</S.InputLabel>
            <S.InputItem id="city" {...register("city")} />
            {errors.city && <S.ErrorText>{errors.city.message}</S.ErrorText>}
          </S.InputContainer>
        </S.InputContainerRow>

        <S.InputContainer>
          <S.InputLabel htmlFor="cep">CEP</S.InputLabel>
          <S.InputItem id="cep" {...register("cep")} type="text" />
          {errors.cep && <S.ErrorText>{errors.cep.message}</S.ErrorText>}
        </S.InputContainer>

        <CustomButton title={"Salvar endereço"} onClick={() => {}} />
      </S.AddressFormContainer>
    </form>
  );
};
