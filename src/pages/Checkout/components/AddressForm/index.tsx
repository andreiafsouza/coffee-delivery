import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
/* styles */
import * as S from "./styles";
import { useTheme } from "styled-components";

const createAddressFormSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
});

type CreateAddressFormData = z.infer<typeof createAddressFormSchema>;

export const AddressForm = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAddressFormData>({
    resolver: zodResolver(createAddressFormSchema),
  });

  return (
    <form>
      <S.AddressFormContainer>
        <S.ItemContainerCep>
          <label htmlFor="cep" hidden>
            cep
          </label>
          <S.InputItem placeholder="CEP" {...register("cep")} />
          {errors.cep && <span>{errors.cep.message}</span>}
        </S.ItemContainerCep>

        <S.ItemContainerStreet>
          <label htmlFor="street" hidden>
            cep
          </label>
          <S.InputItem placeholder="Rua" {...register("street")} />
        </S.ItemContainerStreet>

        <S.ItemContainerComplement>
          <label htmlFor="number" hidden>
            cep
          </label>
          <S.InputItem placeholder="Número" {...register("number")} />
          <label htmlFor="complement" hidden>
            cep
          </label>
          <S.InputItem placeholder="Complemento" {...register("complement")} />
        </S.ItemContainerComplement>

        <S.ItemContainerCity>
          <label htmlFor="neighborhood" hidden>
            cep
          </label>
          <S.InputItem placeholder="Bairro" {...register("neighborhood")} />
          <label htmlFor="city" hidden>
            cep
          </label>
          <S.InputItem placeholder="Cidade" {...register("city")} />
          <label htmlFor="state" hidden>
            cep
          </label>
          <S.InputItem placeholder="UF" {...register("state")} />
        </S.ItemContainerCity>
      </S.AddressFormContainer>
    </form>
  );
};
