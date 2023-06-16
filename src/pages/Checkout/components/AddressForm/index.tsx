import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
/* styles */
import * as S from "./styles";
import { useTheme } from "styled-components";
import { useGeoLocation } from "../../../../hooks/useGeoLocation";
import InputAutofill from "../../../../components/InputAutofill";

const createAddressFormSchema = z.object({
  cep: z
    .string()
    .regex(/^[\d-]+$/, "Digite apenas números")
    .min(8, "CEP deve ter mínimo de 8 dígitos")
    .max(9, "CEP deve ter no máximo 9 dígitos"),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
});

type CreateAddressFormData = z.infer<typeof createAddressFormSchema>;

export const AddressForm = () => {
  const { geoLocation, getGeoLocation } = useGeoLocation();
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateAddressFormData>({
    resolver: zodResolver(createAddressFormSchema),
  });

  const watchedValues = watch();

  function createUser(data: CreateAddressFormData) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(createUser)}>
      <S.AddressFormContainer>
        <InputAutofill />
        <S.ItemContainerCep>
          <div style={{ position: "relative", paddingBlock: "1rem" }}>
            <label
              htmlFor="cep"
              hidden={!watchedValues.cep}
              style={{ position: "absolute", top: "-0.4rem" }}
            >
              CEP
            </label>
            <S.InputItem placeholder="CEP" {...register("cep")} type="text" />
            {errors.cep && (
              <span
                style={{
                  color: "#f00",
                  fontSize: "12px",
                  position: "absolute",
                  left: 0,
                  bottom: "-0.4rem",
                }}
              >
                {errors.cep.message}
              </span>
            )}
          </div>
          <button type="submit">ENVIAR</button>
        </S.ItemContainerCep>

        <S.ItemContainerStreet>
          <label htmlFor="street" hidden={!watchedValues.street}>
            Rua
          </label>
          <S.InputItem placeholder="Rua" {...register("street")} />
        </S.ItemContainerStreet>

        <S.ItemContainerComplement>
          <label htmlFor="number" hidden={!watchedValues.number}>
            Número
          </label>
          <S.InputItem placeholder="Número" {...register("number")} />
          <label htmlFor="complement" hidden={!watchedValues.complement}>
            Complemento (Apto, Quarto, etc)
          </label>
          <S.InputItem
            placeholder=" Complemento (Apto, Quarto, etc)"
            {...register("complement")}
          />
        </S.ItemContainerComplement>

        <S.ItemContainerCity>
          <label htmlFor="neighborhood" hidden={!watchedValues.neighborhood}>
            Bairro
          </label>
          <S.InputItem placeholder="Bairro" {...register("neighborhood")} />
          <label htmlFor="city" hidden={!watchedValues.city}>
            Cidade
          </label>
          <S.InputItem placeholder="Cidade" {...register("city")} />
          <label htmlFor="state" hidden={!watchedValues.state}>
            Estado
          </label>
          <S.InputItem placeholder="UF" {...register("state")} />
        </S.ItemContainerCity>
      </S.AddressFormContainer>
    </form>
  );
};
