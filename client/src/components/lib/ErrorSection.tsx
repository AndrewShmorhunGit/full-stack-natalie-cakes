import { css, palette } from "styles";
import {
  Button,
  FlexCenterContainer,
  FlexColumnContainer,
} from "./StyledComponents";
import { InfoHeader, InfoParagraph } from "components/information/Styled";
import { ErrorLogo } from "components/logos/Logos";

export function ErrorSection({ section }: { section: string }) {
  return (
    <main
      className={css({
        // borderTop: `0.4rem solid ${palette.main_primary_dark}`,
        padding: "8rem 0",
        background: palette.background_main,
      })}
    >
      <ErrorBlock error={`${section} section `} />{" "}
    </main>
  );
}
export function ErrorBlock({ error }: { error: string }) {
  return (
    <FlexCenterContainer>
      <FlexColumnContainer className={css({ gap: "4rem" })}>
        <InfoHeader
          className={css({
            textAlign: "center",
            color: palette.main_primary,
          })}
        >
          Ooops, it is an error!
        </InfoHeader>
        <FlexCenterContainer>
          <ErrorLogo height={240} width={240} />
        </FlexCenterContainer>
        <InfoParagraph
          className={css({ textAlign: "center", maxWidth: "62rem" })}
        >
          Please make us know that something went wrong! Click button below, and
          it will alert our support service... Thank you.
        </InfoParagraph>
        <FlexCenterContainer>
          <Button
            variant="error"
            onClick={() => console.log(`Clicked and refreshed)`)}
          >
            refresh page & alert
          </Button>
        </FlexCenterContainer>
      </FlexColumnContainer>
    </FlexCenterContainer>
  );
}
