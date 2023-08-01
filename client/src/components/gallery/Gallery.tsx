import {
  BoyLogo,
  ClassicLogo,
  Container,
  FruitsLogo,
  GirlLogo,
  MainHeader,
  LogoTitleBlock,
} from "components";
import { IAppBox } from "interfaces";
import { container, css } from "styles";
import { galleryData } from "data/components.static.data";
import { Carousel } from "./Components";
import { GallerySection } from "./Styled";

export function Gallery({ appBox }: { appBox: IAppBox }) {
  const { setMediaByStep, setMedia, isLanguage } = appBox;

  const { boys, girls, fruits, classics, logoParams, setCarouselParams } =
    galleryData();

  return (
    <GallerySection>
      <Container className={css({ ...container })}>
        <MainHeader
          className={css({
            margin: "4rem 0",
            textTransform: "capitalize",
          })}
        >
          {`decoration gallery`}
        </MainHeader>
        <Container>
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
          <Container>
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
          </Container>
          <Container>
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
          </Container>
        </Container>
      </Container>
    </GallerySection>
  );
}
