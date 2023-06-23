import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
/* styles */
import * as S from "./styles";
import { useTheme } from "styled-components";
import { useGeoLocation } from "../../../../hooks/useGeoLocation";
import useInputAutofill from "../../../../components/InputAutofill";

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

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export const AddressForm = () => {
  const { geoLocation, getGeoLocation } = useGeoLocation();
  const { suggestions, placeDetail, handleChange, handleSuggestionSelected } =
    useInputAutofill();
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<CreateAddressFormData>({
    resolver: zodResolver(createAddressFormSchema),
  });

  const watchedValues = watch();

  function createAddress(data: CreateAddressFormData) {
    console.log(data);
  }

  useEffect(() => {
    const addressComponents =
      placeDetail?.address_components as AddressComponent[];
    if (addressComponents) {
      addressComponents.forEach((obj) => {
        switch (true) {
          case obj.types.includes("route"):
            setValue("street", obj.long_name);
            break;
          case obj.types.includes("sublocality_level_1"):
            setValue("neighborhood", obj.long_name);
            break;
          case obj.types.includes("administrative_area_level_2"):
            setValue("city", obj.long_name);
            break;
          case obj.types.includes("administrative_area_level_1"):
            setValue("state", obj.short_name);
            break;
          case obj.types.includes("postal_code"):
            setValue("cep", obj.long_name);
            break;
          case obj.types.includes("street_number"):
            setValue("number", obj.long_name);
            break;
          default:
            break;
        }
      });
    }
  }, [placeDetail]);

  return (
    <form onSubmit={handleSubmit(createAddress)}>
      <S.AddressFormContainer>
        <S.InputContainer>
          <S.InputLabel htmlFor="street">Rua</S.InputLabel>
          <S.InputItem
            id="street"
            {...register("street")}
            onChange={handleChange}
            onBlur={() => {}}
          />
          {suggestions.length > 0 && (
            <S.SuggestionsContainer>
              <S.SuggestionList role="listbox">
                {suggestions.map((suggestion) => (
                  <S.SuggestionItem
                    key={suggestion.place_id}
                    tabIndex={-1}
                    role="option"
                    aria-selected="false"
                    onClick={() =>
                      handleSuggestionSelected(suggestion, "street")
                    }
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

        {/*  <S.RequiredFieldsInfo>* = campos obrigatórios</S.RequiredFieldsInfo> */}
        <button type="submit">ENVIAR</button>
      </S.AddressFormContainer>
    </form>
  );
};
