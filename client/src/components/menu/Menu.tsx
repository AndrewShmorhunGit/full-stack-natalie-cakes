// Components
import { UpDownArrow, GetRateStars, ImgOnLoad } from "./Components";
import {
  MenuSection,
  MenuCategoryContainer,
  MenuCategoryHeader,
  MenuPositionContainer,
  MenuPositionHeader,
  RateAndTasteContainer,
  PositionVariantContainer,
} from "./Styled";
import {
  IsraeliShekel,
  PersonsLogo,
  RadiusLogo,
  WeightLogo,
  FlexCenterContainer,
  FlexColumnContainer,
  FlexRowContainer,
  Container,
  MainHeader,
  HeroBirthdayCakesLogo,
  HeroCakesAndPiesLogo,
  HeroCupCakesLogo,
  HeroGingerbreadLogo,
  LogoTitleBlock,
  ErrorSection,
} from "components";
// Styles
import {
  css,
  palette,
  container,
  createGrid,
  paddingTopBottom,
  appShadows,
} from "styles";
// Interfaces
import { IAppBox } from "interfaces";
// Data
import { createMenuData } from "data/menu.data";
import { contentEmpty } from "content/text/text.content";
import { loading } from "utils/functions";
//  Hooks
import { useEffect, useMemo, useState } from "react";
import { useAsync } from "hooks/useAsync";
import { httpGetMenuParams } from "utils/http.requests";
import { IMenuParams } from "interfaces/IMenu";
import { defaultMenuParams } from "data/components.static.data";

export function Menu({ appBox }: { appBox: IAppBox }) {
  const {
    innerContent: content,
    isLanguage,
    isMedia,
    setMedia,
    setMediaByStep,
    setModal,
  } = appBox;

  const {
    run,
    isError: menuError,
    //  isLoading: menuLoading
  } = useAsync();

  const [isMenuParams, setMenuParams] =
    useState<IMenuParams[]>(defaultMenuParams);

  useEffect(() => {
    run(
      httpGetMenuParams().then((data) => {
        setMenuParams(data.menuParamsData);
        console.log(data);
      })
    );
  }, [run]);

  const menuData = createMenuData(content.menuContent, isMenuParams);

  const categories: { [x: string]: boolean } | null = useMemo(() => {
    return createMenuData(contentEmpty.menuContent, isMenuParams).reduce(
      (total, _category, index) => {
        total = {
          ...total,
          [`category${index}`]: false,
        };
        // console.log("==== Menu categories state created ====");
        return total;
      },
      {}
    );
  }, [isMenuParams]);

  const [isArrow, setIsArrow] = useState({ ...categories });

  return (
    <MenuSection className={css({ position: "relative" })}>
      <Container
        className={css({
          ...container,
        })}
      >
        <MainHeader
          className={css({
            marginBottom: "4rem",
            textTransform: "capitalize",
          })}
        >
          {content.menuTitle}
        </MainHeader>
        {menuError ? (
          <ErrorSection section={"menu"} />
        ) : (
          <>
            {menuData.map((category, index) => {
              const isArrowProp = `category${index}`;
              return (
                <FlexColumnContainer
                  key={
                    typeof category.name !== "string"
                      ? index
                      : category.name + index
                  }
                >
                  {index === 0 ||
                  (index > 1 &&
                    menuData[index - 1].group !== category.group) ? (
                    <div
                      className={css(!category.group && { display: "none" })}
                    >
                      <Container
                        className={css({
                          paddingBottom: "4rem",
                        })}
                      >
                        <LogoTitleBlock
                          Logo={
                            category.group ===
                            content.heroSelectors.birthdayCake ? (
                              <HeroBirthdayCakesLogo height={40} width={40} />
                            ) : category.group ===
                              content.heroSelectors.cakesAndPies ? (
                              <HeroCakesAndPiesLogo height={40} width={40} />
                            ) : category.group ===
                              content.heroSelectors.cupCakes ? (
                              <HeroCupCakesLogo height={40} width={40} />
                            ) : (
                              <HeroGingerbreadLogo height={40} width={40} />
                            )
                          }
                          title={category.group}
                          setMediaByStep={setMediaByStep}
                          isLanguage={isLanguage}
                        />
                      </Container>
                    </div>
                  ) : null}

                  <MenuCategoryContainer
                    className={css({
                      transition: "all 0.5s",
                      transform: `translateY(${
                        isArrow[isArrowProp] ? "-1px" : "0"
                      })`,
                      boxShadow: isArrow[isArrowProp] ? appShadows.button : "",
                      cursor: "pointer",
                      fontSize: `${setMediaByStep(4, 0.2)}rem`,
                      ...createGrid("1fr 32fr", 1),
                    })}
                    onClick={() =>
                      setIsArrow({
                        ...isArrow,
                        [isArrowProp]: !isArrow[isArrowProp],
                      })
                    }
                  >
                    <Container className={css({ alignSelf: "center" })}>
                      <UpDownArrow
                        circleRadius={setMediaByStep(5.2, 0.2)}
                        rotate={isArrow[isArrowProp] ? 0.5 : 0}
                      />
                    </Container>
                    <MenuCategoryHeader
                      className={css({
                        fontSize: `${setMediaByStep(4, 0.4)}rem`,
                      })}
                    >
                      {category.name === "Loading"
                        ? loading(isLanguage)
                        : category.name}
                    </MenuCategoryHeader>
                  </MenuCategoryContainer>

                  <Container
                    className={css({
                      margin: "2rem 0",
                      paddingBottom: isArrow[isArrowProp] ? "0.4rem" : "0",
                      overflow: "hidden",
                      maxHeight: `${isArrow[isArrowProp] ? "500rem" : "0"}`,
                      transition: `max-height ${
                        isArrow[isArrowProp] ? ".4s ease-in" : ".8s ease-out"
                      }`,
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                      columnGap: `${setMediaByStep(2, 0.8)}rem`,
                      rowGap: `${setMediaByStep(4, 0.8)}rem`,
                      ...createGrid(setMedia(2, 1), 1),
                    })}
                  >
                    {content !== contentEmpty &&
                      category.positions.map((item, index) => {
                        return (
                          <MenuPositionContainer
                            key={
                              typeof item.itemName === "string"
                                ? item.itemName + index
                                : index
                            }
                            className={css({
                              gridRow: `${
                                isMedia.big ? ((index + 1) * 2) % 2 : index + 1
                              }`,
                            })}
                          >
                            <MenuPositionHeader>
                              {typeof item.itemName === "string"
                                ? item.itemName
                                : null}
                            </MenuPositionHeader>
                            <FlexCenterContainer
                              className={css({
                                ...paddingTopBottom(2.4),
                                height: "auto",
                              })}
                              onClick={() => setModal("test")}
                            >
                              <ImgOnLoad
                                category={category.name}
                                src={item.imgSrc}
                                description={item.description}
                              />
                            </FlexCenterContainer>
                            {/* // From Here // */}
                            <RateAndTasteContainer
                              className={css({
                                ...createGrid(
                                  isMedia.mini ? 1 : 2,
                                  isMedia.mini ? 2 : 1
                                ),
                              })}
                            >
                              <Container
                                className={css({
                                  textTransform: "capitalize",
                                  alignSelf: "center",
                                  minHeight: "10rem",
                                })}
                              >
                                {GetRateStars(
                                  item.sweetness,
                                  5,
                                  content.sweetness,
                                  appBox.isLanguage === "hb"
                                    ? 6.8
                                    : isMedia.mini
                                    ? 8.8
                                    : 11.2
                                )}
                                {GetRateStars(
                                  item.sourness,
                                  5,
                                  content.sourness,
                                  appBox.isLanguage === "hb"
                                    ? 6.8
                                    : isMedia.mini
                                    ? 8.8
                                    : 11.2
                                )}
                              </Container>
                              <Container>
                                <h3
                                  className={css({
                                    ":first-letter": {
                                      textTransform: "uppercase",
                                    },
                                  })}
                                >
                                  {content.taste} -
                                </h3>
                                <p>{item.tasteAccent}</p>
                              </Container>
                            </RateAndTasteContainer>
                            <FlexColumnContainer
                              className={css({
                                gap: "1.2rem",
                                alignSelf: "end",
                              })}
                            >
                              {item.variants.map((variant) => {
                                return (
                                  <PositionVariantContainer
                                    key={
                                      typeof variant.size === "string"
                                        ? `${variant.size + index}`
                                        : index
                                    }
                                    className={css({
                                      ...createGrid(
                                        `0.5fr ${
                                          isMedia.mini ? "1.5fr" : "1fr"
                                        } 1fr 1fr 1fr`,
                                        1
                                      ),
                                    })}
                                  >
                                    <FlexCenterContainer>
                                      <h3
                                        className={css({
                                          color: palette.main_primary,
                                          fontSize: `${setMediaByStep(
                                            2.8,
                                            0.2
                                          )}rem`,
                                        })}
                                      >
                                        {variant.size}
                                      </h3>
                                    </FlexCenterContainer>
                                    <FlexCenterContainer
                                      className={css({
                                        flexDirection: "column",
                                      })}
                                    >
                                      <FlexCenterContainer>
                                        <RadiusLogo
                                          height={setMediaByStep(16, 1)}
                                          width={setMediaByStep(16, 1)}
                                        />
                                      </FlexCenterContainer>
                                      <p
                                        className={css({ textAlign: "center" })}
                                      >
                                        {variant.radius}mm
                                      </p>
                                    </FlexCenterContainer>
                                    <FlexRowContainer
                                      className={css({ gap: ".8rem" })}
                                    >
                                      <PersonsLogo
                                        height={setMediaByStep(32, 2)}
                                        width={setMediaByStep(32, 2)}
                                      />
                                      <p>{variant.persons}</p>
                                    </FlexRowContainer>
                                    <FlexRowContainer
                                      className={css({ gap: ".8rem" })}
                                    >
                                      <WeightLogo
                                        height={setMediaByStep(24, 2)}
                                        width={setMediaByStep(24, 2)}
                                      />
                                      <p>{variant.weight}</p>
                                    </FlexRowContainer>
                                    <FlexRowContainer
                                      className={css({ gap: ".8rem" })}
                                    >
                                      <IsraeliShekel
                                        height={setMediaByStep(24, 2)}
                                        width={setMediaByStep(24, 2)}
                                      />
                                      <p>{variant.price}</p>
                                    </FlexRowContainer>
                                  </PositionVariantContainer>
                                );
                              })}
                            </FlexColumnContainer>
                          </MenuPositionContainer>
                        );
                      })}
                  </Container>
                </FlexColumnContainer>
              );
            })}
            ;
          </>
        )}
      </Container>
    </MenuSection>
  );
}
