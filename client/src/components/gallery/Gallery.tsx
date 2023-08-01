import {
  BoyLogo,
  ClassicLogo,
  Container,
  FruitsLogo,
  GirlLogo,
  MainHeader,
  LogoTitleBlock,
  Carousel,
} from "components";
import { IAppBox } from "interfaces";
import { container, css, palette } from "styles";
import { galleryData } from "data/components.static.data";
// import { useState } from "react";

export function Gallery({ appBox }: { appBox: IAppBox }) {
  const { setMediaByStep, setMedia, isLanguage } = appBox;

  const { boys, girls, fruits, classics, logoParams, setCarouselParams } =
    galleryData();

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
          <Container>
            <LogoTitleBlock
              Logo={BoyLogo(logoParams)}
              title={"for boys"}
              setMediaByStep={setMediaByStep}
              isLanguage={isLanguage}
            />
            <Carousel
              carouselParams={setCarouselParams(boys)}
              isLanguage={isLanguage}
              setMedia={setMedia}
            />
          </Container>

          <Container>
            <LogoTitleBlock
              Logo={GirlLogo(logoParams)}
              title={"for girls"}
              setMediaByStep={setMediaByStep}
              isLanguage={isLanguage}
            />
            <Carousel
              carouselParams={setCarouselParams(girls)}
              isLanguage={isLanguage}
              setMedia={setMedia}
            />
          </Container>
          <div>
            <LogoTitleBlock
              Logo={FruitsLogo(logoParams)}
              title={"fruits"}
              setMediaByStep={setMediaByStep}
              isLanguage={isLanguage}
            />
            <Carousel
              carouselParams={setCarouselParams(fruits)}
              isLanguage={isLanguage}
              setMedia={setMedia}
            />
          </div>
          <div>
            <LogoTitleBlock
              Logo={ClassicLogo(logoParams)}
              title={"classic"}
              setMediaByStep={setMediaByStep}
              isLanguage={isLanguage}
            />
            <Carousel
              carouselParams={setCarouselParams(classics)}
              isLanguage={isLanguage}
              setMedia={setMedia}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
