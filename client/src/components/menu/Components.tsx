import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import {
  FlexRowContainer,
  Container,
  RelativeContainer,
  FlexCenterContainer,
  DecoContainer,
  Spinner,
  FlexColumnContainer,
} from "components/lib/StyledComponents";
import {
  RateFilledStarLogo,
  RateEmptyStarLogo,
  ArrowDownLogo,
  MainLogo,
  ErrorLogo,
} from "components/logos/Logos";
import { spinner } from "content";
import React from "react";
import { createGrid, palette, css, appShadows } from "styles";

export function GetRateStars(
  rate: number,
  max: number,
  content: string,
  width: number = 10,
  size: number = 20
): EmotionJSX.Element {
  return (
    <FlexRowContainer>
      <p className={css({ width: `${width}rem` })}>{content}:</p>
      <Container
        className={css({ columnGap: "0.4rem", ...createGrid(max, 1) })}
      >
        {Array.from(Array(max).keys()).map((num) => {
          return (
            <div key={num} className={css({ alignSelf: "center" })}>
              {num + 1 <= rate ? (
                <RateFilledStarLogo
                  height={size}
                  width={size}
                  fill={palette.main_primary}
                />
              ) : (
                <RateEmptyStarLogo
                  height={size}
                  width={size}
                  fill={palette.main_primary}
                />
              )}
            </div>
          );
        })}
      </Container>
    </FlexRowContainer>
  );
}

export function UpDownArrow({
  circleRadius = 5.2,
  rotate,
}: {
  circleRadius?: number;
  rotate: number;
}) {
  return (
    <RelativeContainer
      className={css({
        cursor: "pointer",
        // transition: "transform 1s ease",
        // transform: `rotate(${rotate}turn)`,
      })}
    >
      <FlexCenterContainer
        className={css({
          zIndex: 1,
          position: "absolute",
          left: "50%",
          top: "50%",
          transition: "transform 1s linear",
          transform: `translate(-50%, -50%) rotate(${rotate}turn)`,
        })}
      >
        <ArrowDownLogo height={24} width={24} fill={palette.main_primary} />
      </FlexCenterContainer>
      <DecoContainer
        width={circleRadius}
        height={circleRadius}
        color={palette.background_second}
        style={{
          borderRadius: "2.4rem",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: appShadows.button,
          // border: `solid 0.2rem ${palette.main_primary_dark}`,
          zIndex: 0,
        }}
      />
    </RelativeContainer>
  );
}

export const ImgOnLoad = ({
  category,
  src,
  description,
}: {
  category: string;
  src: string;
  description: string;
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isErrored, setIsErrored] = React.useState(false);
  return (
    <div
      className={css({
        cursor: "pointer",
        minHeight: category === "biscuit cakes" && isLoaded ? "42rem" : "18rem",
      })}
    >
      {isLoaded
        ? null
        : !isErrored && <Spinner src={spinner} alt="animation spinner" />}
      {isErrored ? (
        <FlexColumnContainer>
          <h2>Ooops, it is an image download error..</h2>
          <FlexCenterContainer>
            <ErrorLogo height={96} width={96} />
          </FlexCenterContainer>
        </FlexColumnContainer>
      ) : (
        <img
          style={isLoaded ? { width: "100%" } : { display: "none" }}
          src={src}
          alt={description}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsErrored(true)}
        />
      )}
    </div>
  );
};

export function DefaultImage() {
  return (
    <div
      className={css({
        minHeight: "18rem",
        border: `solid 0.2rem ${palette.main_primary}`,
      })}
    >
      <FlexCenterContainer>
        <MainLogo height={32} width={32} />
      </FlexCenterContainer>
    </div>
  );
}
