import React from "react";
import {
  Button,
  FlexCenterContainer,
  FlexColumnContainer,
  RelativeContainer,
  UserLogo,
} from "components";
import { css, palette } from "styles";
import { ISetMedia } from "interfaces";
import { EnvelopeModalLogo, PhoneModalLogo } from "components/logos/Logos";

export function TakeACall({ setMedia }: { setMedia: ISetMedia }) {
  const inputSpanStyles = {
    fontWeight: "500",
    fontSize: "1.2rem",
    transform: "translateY(-2.8rem)",
  };
  const logoSize = 32;
  const inputHight = 4;
  const paddingTopSize = `${(inputHight - logoSize / 10) / 2}rem`;
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
          <label
            htmlFor="#name"
            className={css({
              cursor: "pointer",
              paddingTop: paddingTopSize,
              transform: "scale(0.9)",
            })}
          >
            <UserLogo
              height={logoSize}
              width={logoSize}
              fill={toggleColor(isName !== "")}
            />
          </label>
          <RelativeContainer>
            <input
              type="text"
              id="#name"
              value={isName}
              onChange={(e) => setName(e.target.value)}
              className={css({
                height: `${inputHight}rem`,
                minWidth: inputWidth,
                paddingLeft: "0.4rem",
                border: "none",
                borderBottom: `solid 1px ${toggleColor(isName !== "")}`,
                fontWeight: "300",
                fontSize: "1.8rem",
                ":focus": {
                  outline: "none",
                  borderBottom: `solid 2px ${toggleColor(isName !== "")}`,
                },
                ":focus ~ span": inputSpanStyles,
                ":valid ~ span": inputSpanStyles,
              })}
              required
            />
            <span
              className={css({
                position: "absolute",
                fontSize: "1.8rem",
                fontWeight: "300",
                color: toggleColor(isName !== ""),
                left: "0.4rem",
                top: "0.8rem",
                pointerEvents: "none",
                transition: "all 0.5s",
              })}
            >
              Name
            </span>
          </RelativeContainer>
        </FlexCenterContainer>
        <FlexCenterContainer
          className={css({
            height: "4rem",
            gap: "2.4rem",
            flexDirection: "row",
          })}
        >
          <label
            htmlFor="#phone"
            className={css({
              cursor: "pointer",
              paddingTop: paddingTopSize,
            })}
          >
            <PhoneModalLogo
              height={logoSize}
              width={logoSize}
              fill={toggleColor(isPhone !== "")}
            />
          </label>

          <RelativeContainer>
            <input
              type="phone"
              id="#phone"
              value={isPhone}
              onChange={(e) => setPhone(e.target.value)}
              className={css({
                fontWeight: "300",
                fontSize: "1.8rem",
                padding: "0rem 0.4rem",
                border: "none",
                minWidth: inputWidth,
                height: `${inputHight}rem`,
                borderBottom: `solid 1px ${toggleColor(isPhone !== "")}`,
                ":focus": {
                  outline: "none",
                  borderBottom: `solid 2px ${toggleColor(isPhone !== "")}`,
                },
                ":focus ~ span": inputSpanStyles,
                ":valid ~ span": inputSpanStyles,
              })}
              required
            />
            <span
              className={css({
                color: toggleColor(isPhone !== ""),
                position: "absolute",
                fontSize: "1.8rem",
                fontWeight: "300",
                left: "0.4rem",
                top: "0.8rem",
                pointerEvents: "none",
                transition: "all 0.5s",
              })}
            >
              Phone
            </span>
          </RelativeContainer>
        </FlexCenterContainer>
        <FlexCenterContainer
          className={css({
            height: "8rem",
            gap: "2.4rem",
            flexDirection: "row",
          })}
        >
          <label
            htmlFor="#message"
            className={css({
              cursor: "pointer",
              paddingTop: paddingTopSize,
            })}
          >
            <EnvelopeModalLogo
              height={logoSize}
              width={logoSize}
              fill={toggleColor(isMessage !== "")}
            />
          </label>
          <RelativeContainer>
            <textarea
              id="#message"
              className={css({
                border: "none",
                maxWidth: inputWidth,
                minWidth: inputWidth,
                minHeight: `${inputHight}rem`,
                maxHeight: "8rem",
                padding: "0.8rem",
                borderBottom: `solid 1px ${toggleColor(isMessage !== "")}`,
                fontWeight: "300",
                fontSize: "1.8rem",
                ":focus": {
                  outline: "none",
                  borderBottom: `solid 2px ${toggleColor(isMessage !== "")}`,
                },
                ":focus ~ span": inputSpanStyles,
                ":valid ~ span": isMessage !== "" ? inputSpanStyles : {},
              })}
              name="message"
              value={isMessage}
              maxLength={255}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span
              className={css({
                position: "absolute",
                fontSize: "1.8rem",
                fontWeight: "300",
                color: toggleColor(isMessage !== ""),
                left: "0.4rem",
                top: "0.8rem",
                pointerEvents: "none",
                transition: "all 0.5s",
              })}
            >
              Message
            </span>
            <p
              className={css({
                color: toggleColor(isMessage !== ""),
                position: "absolute",
                transform: `translate(${setMedia(28, 24, 20, 16)}rem,-2rem)`,
              })}
            >
              {255 - isMessage.length}
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
