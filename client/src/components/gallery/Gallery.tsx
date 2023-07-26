import {
  BoyLogo,
  ClassicLogo,
  Container,
  FlexCenterContainer,
  FruitsLogo,
  GirlLogo,
  MainHeader,
  LogoTitleBlock,
  FlexRowContainer,
} from "components";
import { IAppBox } from "interfaces";
import { appShadows, container, css, palette } from "styles";
import { galleryData } from "data/components.static.data";

export function Gallery({ appBox }: { appBox: IAppBox }) {
  const { setMediaByStep } = appBox;
  const { boys, girls, fruits, classics } = galleryData();
  return (
    <div
      className={css({
        borderTop: `0.4rem solid ${palette.main_primary_dark}`,
        backgroundColor: palette.background_third,
      })}
    >
      <Container className={css({ ...container })}>
        <MainHeader
          className={css({
            margin: "4rem 0",
            textTransform: "capitalize",
          })}
        >
          {`decoration gallery`}
        </MainHeader>
        <div>
          <div className={css({ padding: "4rem 0" })}>
            <LogoTitleBlock
              Logo={BoyLogo({ width: 40, height: 40 })}
              title={"for boys"}
              setMediaByStep={setMediaByStep}
            />

            <div
              className={css({
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                // overflow: "hidden",
              })}
            >
              <FlexRowContainer
                className={css({
                  // height: "34rem",
                  gap: "4rem",
                  padding: "4rem 2rem",
                  alignSelf: "center",
                })}
              >
                {boys.map((boy, index) => {
                  return (
                    <FlexCenterContainer
                      key={index}
                      className={css({
                        minWidth: "24rem",
                        minHeight: " 24rem",
                        borderRadius: "1.2rem",
                        boxShadow: appShadows.button,
                        overflow: "hidden",
                      })}
                    >
                      <img
                        src={boy}
                        alt=""
                        className={css({
                          maxHeight: "24rem",
                          maxWidth: "24rem",
                        })}
                      />
                      <div
                        className={css({
                          borderLeft: `solid 0.2rem ${palette.main_primary_dark}`,
                          background: palette.background_second,
                          height: "24rem",
                          width: "10rem",
                        })}
                      ></div>
                    </FlexCenterContainer>
                  );
                })}
              </FlexRowContainer>
            </div>
          </div>
          <div>
            <LogoTitleBlock
              Logo={GirlLogo({ width: 40, height: 40 })}
              title={"for girls"}
              setMediaByStep={setMediaByStep}
            />
            <div
              className={css({
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                // overflow: "hidden",
              })}
            >
              <FlexRowContainer
                className={css({
                  // height: "34rem",
                  gap: "4rem",
                  padding: "4rem 2rem",
                  alignSelf: "center",
                })}
              >
                {girls.map((girl, index) => {
                  return (
                    <FlexCenterContainer
                      key={index}
                      className={css({
                        minWidth: "24rem",
                        minHeight: " 24rem",
                        borderRadius: "1.2rem",
                        boxShadow: appShadows.button,
                        overflow: "hidden",
                      })}
                    >
                      <img
                        src={girl}
                        alt=""
                        className={css({
                          maxHeight: "24rem",
                          maxWidth: "24rem",
                        })}
                      />
                      <div
                        className={css({
                          borderLeft: `solid 0.2rem ${palette.main_primary_dark}`,
                          background: palette.background_second,
                          height: "24rem",
                          width: "10rem",
                        })}
                      ></div>
                    </FlexCenterContainer>
                  );
                })}
              </FlexRowContainer>
            </div>
          </div>
          <div>
            <LogoTitleBlock
              Logo={FruitsLogo({ width: 40, height: 40 })}
              title={"fruits"}
              setMediaByStep={setMediaByStep}
            />
            <div
              className={css({
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                // overflow: "hidden",
              })}
            >
              <FlexRowContainer
                className={css({
                  // height: "34rem",
                  gap: "4rem",
                  padding: "4rem 2rem",
                  alignSelf: "center",
                })}
              >
                {fruits.map((fruit, index) => {
                  return (
                    <FlexCenterContainer
                      key={index}
                      className={css({
                        minWidth: "24rem",
                        minHeight: " 24rem",
                        borderRadius: "1.2rem",
                        boxShadow: appShadows.button,
                        overflow: "hidden",
                      })}
                    >
                      <img
                        src={fruit}
                        alt=""
                        className={css({
                          maxHeight: "24rem",
                          maxWidth: "24rem",
                        })}
                      />
                      <div
                        className={css({
                          borderLeft: `solid 0.2rem ${palette.main_primary_dark}`,
                          background: palette.background_second,
                          height: "24rem",
                          width: "10rem",
                        })}
                      ></div>
                    </FlexCenterContainer>
                  );
                })}
              </FlexRowContainer>
            </div>
          </div>
          <div>
            <LogoTitleBlock
              Logo={ClassicLogo({ width: 40, height: 40 })}
              title={"classic"}
              setMediaByStep={setMediaByStep}
            />
            <div
              className={css({
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                // overflow: "hidden",
              })}
            >
              <FlexRowContainer
                className={css({
                  // height: "34rem",
                  gap: "4rem",
                  padding: "4rem 2rem",
                  alignSelf: "center",
                })}
              >
                {classics.map((classic, index) => {
                  return (
                    <FlexCenterContainer
                      key={index}
                      className={css({
                        minWidth: "24rem",
                        minHeight: " 24rem",
                        borderRadius: "1.2rem",
                        boxShadow: appShadows.button,
                        overflow: "hidden",
                      })}
                    >
                      <img
                        src={classic}
                        alt=""
                        className={css({
                          maxHeight: "24rem",
                          maxWidth: "24rem",
                        })}
                      />
                      <div
                        className={css({
                          borderLeft: `solid 0.2rem ${palette.main_primary_dark}`,
                          background: palette.background_second,
                          height: "24rem",
                          width: "10rem",
                        })}
                      ></div>
                    </FlexCenterContainer>
                  );
                })}
              </FlexRowContainer>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
