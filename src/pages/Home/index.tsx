import * as S from "./styles";
import coffeeMug from "../../assets/coffeeMug.png";

export const Home = () => {
  return (
    <S.HomeContainer>
      <S.IntroContainer>
        <S.IntroContent>
          <S.IntroLeftContent>
            <S.IntroTextContainer>
              <S.IntroTitle>
                Encontre o café perfeito para qualquer hora do dia
              </S.IntroTitle>
              <S.IntroSubtitle>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </S.IntroSubtitle>
            </S.IntroTextContainer>
          </S.IntroLeftContent>
          <S.IntroRightContent>
            <img
              src={coffeeMug}
              alt="Copo de café descartável com um rótulo preto e vários grãos e pó de café ao redor"
            />
          </S.IntroRightContent>
        </S.IntroContent>
      </S.IntroContainer>
    </S.HomeContainer>
  );
};
