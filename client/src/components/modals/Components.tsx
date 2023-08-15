import React from "react";
import {
  Button,
  FlexCenterContainer,
  FlexColumnContainer,
  RelativeContainer,
  UserLogo,
  EnvelopeModalLogo,
  PhoneModalLogo,
} from "components";
import { css, palette } from "styles";
import { ISetMedia } from "interfaces";
import {
  Input,
  Label,
  Placeholder,
  TextArea,
  inputSpanStyles,
  logoSize,
} from "./Styled";

export function CallForm({ setMedia }: { setMedia: ISetMedia }) {
  const inputWidth = `${setMedia(32, 28, 24, 20)}rem`;
  const toggleColor = (condition: boolean): string => {
    return condition ? palette.main_primary_dark : palette.main_primary;
  };
  const [isName, setName] = React.useState("");
  const [isPhone, setPhone] = React.useState("");
  const [isMessage, setMessage] = React.useState("");

  const validSubmit = isName !== "" && isPhone !== "";
  // Handle Handle Change!!
  const handleChange = (name: string, phone: string, message: string) => {
    console.log({ name, phone, message });
  };

  return (
    <form action="#" onSubmit={() => handleChange(isName, isPhone, isMessage)}>
      <FlexColumnContainer className={css({ gap: "3.2rem" })}>
        <FlexCenterContainer
          className={css({
            gap: "2rem",
          })}
        >
          <Label
            htmlFor="#name"
            className={css({
              transform: "scale(0.9)",
            })}
          >
            <UserLogo
              height={logoSize}
              width={logoSize}
              fill={toggleColor(isName !== "")}
            />
          </Label>
          <RelativeContainer>
            <Input
              type="text"
              id="#name"
              value={isName}
              onChange={(e) => setName(e.target.value)}
              className={css({
                minWidth: inputWidth,
                borderBottom: `solid 1px ${toggleColor(isName !== "")}`,
                ":focus": {
                  borderBottom: `solid 2px ${toggleColor(isName !== "")}`,
                },
              })}
              required
            />
            <Placeholder
              className={css({
                color: toggleColor(isName !== ""),
              })}
            >
              Name
            </Placeholder>
          </RelativeContainer>
        </FlexCenterContainer>
        <FlexCenterContainer
          className={css({
            height: "4rem",
            gap: "2.4rem",
            flexDirection: "row",
          })}
        >
          <Label htmlFor="#phone">
            <PhoneModalLogo
              height={logoSize}
              width={logoSize}
              fill={toggleColor(isPhone !== "")}
            />
          </Label>

          <RelativeContainer>
            <Input
              type="phone"
              id="#phone"
              value={isPhone}
              onChange={(e) => setPhone(e.target.value)}
              className={css({
                minWidth: inputWidth,
                borderBottom: `solid 1px ${toggleColor(isPhone !== "")}`,
                ":focus": {
                  borderBottom: `solid 2px ${toggleColor(isPhone !== "")}`,
                },
              })}
              required
            />
            <Placeholder
              className={css({
                color: toggleColor(isPhone !== ""),
              })}
            >
              Phone
            </Placeholder>
          </RelativeContainer>
        </FlexCenterContainer>
        <FlexCenterContainer
          className={css({
            height: "8rem",
            gap: "2.4rem",
            flexDirection: "row",
          })}
        >
          <Label htmlFor="#message">
            <EnvelopeModalLogo
              height={logoSize}
              width={logoSize}
              fill={toggleColor(isMessage !== "")}
            />
          </Label>
          <RelativeContainer>
            <TextArea
              id="#message"
              className={css({
                maxWidth: inputWidth,
                minWidth: inputWidth,

                borderBottom: `solid 1px ${toggleColor(isMessage !== "")}`,

                ":focus": {
                  borderBottom: `solid 2px ${toggleColor(isMessage !== "")}`,
                },

                ":valid ~ span": isMessage !== "" ? inputSpanStyles : {},
              })}
              name="message"
              value={isMessage}
              maxLength={250}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Placeholder
              className={css({
                color: toggleColor(isMessage !== ""),
              })}
            >
              Message
            </Placeholder>
            <p
              className={css({
                color: toggleColor(isMessage !== ""),
                position: "absolute",
                transform: `translate(${setMedia(28, 24, 20, 16)}rem,-2rem)`,
              })}
            >
              {250 - isMessage.length}
            </p>
          </RelativeContainer>
        </FlexCenterContainer>
        <FlexCenterContainer>
          <Button variant={validSubmit ? "primary" : "secondary"}>
            Submit
          </Button>
        </FlexCenterContainer>
      </FlexColumnContainer>
    </form>
  );
}
