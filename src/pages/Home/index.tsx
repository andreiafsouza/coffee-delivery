import { useEffect } from "react";
import * as S from "./styles";
import { useTheme } from "styled-components";
import coffeeMug from "../../assets/coffeeMug.png";
import useCart from "../../hooks/useCart";
import useCoffees from "../../hooks/useCoffees";

import { CoffeeCard } from "./components/CoffeeCard";

import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

export const Home = () => {
  const theme = useTheme();
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const [loading, setLoading] = useState(true);
  const { coffees } = useCoffees();

  const introItems = [
    {
      text: "Compra simples e segura",
      icon: <ShoppingCart size={16} weight="fill" color={theme.base.white} />,
      color: theme.brand.yellowDark,
    },
    {
      text: "Entrega rápida e rastreada",
      icon: <Timer size={16} weight="fill" color={theme.base.white} />,
      color: theme.brand.yellow,
    },
    {
      text: "Embalagem mantém o café intacto",
      icon: <Package size={16} weight="fill" color={theme.base.white} />,
      color: theme.base.text,
    },
    {
      text: "O café chega fresquinho até você",
      icon: <Coffee size={16} weight="fill" color={theme.base.white} />,
      color: theme.brand.purple,
    },
  ];

  useEffect(() => {
    if (coffees?.length) {
      setLoading(false);
    }
  }, [coffees]);

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
            <S.IntroItemContainer>
              <S.IntroItemContent>
                {introItems?.map((item, index) =>
                  index <= 1 ? (
                    <S.IntroItem key={item.text}>
                      <S.IntroItemIcon color={item.color}>
                        {item.icon}
                      </S.IntroItemIcon>
                      {item.text}
                    </S.IntroItem>
                  ) : null
                )}
              </S.IntroItemContent>
              <S.IntroItemContent>
                {introItems?.map((item, index) =>
                  index > 1 ? (
                    <S.IntroItem key={item.text}>
                      <S.IntroItemIcon color={item.color}>
                        {item.icon}
                      </S.IntroItemIcon>
                      {item.text}
                    </S.IntroItem>
                  ) : null
                )}
              </S.IntroItemContent>
            </S.IntroItemContainer>
          </S.IntroLeftContent>
          <S.IntroRightContent>
            <img
              src={coffeeMug}
              alt="Copo de café descartável com um rótulo preto em um fundo amarelo com vários grãos e pó de café ao redor"
            />
          </S.IntroRightContent>
        </S.IntroContent>
      </S.IntroContainer>
      <S.CoffeeListContainer>
        <S.CoffeeListTitle>Nossos Cafés</S.CoffeeListTitle>
        <S.CoffeeList>
          {loading ? (
            <LoadingSpinner />
          ) : (
            coffees.map((coffee) => {
              const inCart: boolean = cart.some(
                (item) => item.sku === coffee.sku
              );

              return (
                <CoffeeCard
                  key={coffee.sku}
                  coffee={coffee}
                  dispatch={dispatch}
                  REDUCER_ACTIONS={REDUCER_ACTIONS}
                  inCart={inCart}
                />
              );
            })
          )}
        </S.CoffeeList>
      </S.CoffeeListContainer>
    </S.HomeContainer>
  );
};
