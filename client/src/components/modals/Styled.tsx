import { palette, styled } from "styles";

export const logoSize = 32;
const inputHight = 4;
const paddingTopSize = `${(inputHight - logoSize / 10) / 2}rem`;
export const inputSpanStyles = {
  fontWeight: "500",
  fontSize: "1.2rem",
  transform: "translateY(-2.8rem)",
};

export const ModalBackgroundContainer = styled.main({
  position: "fixed",
  maxWidth: "100%",
  maxHeight: "100%",
  inset: 0,
  background: "rgba(0, 0, 0, 0.7)",
  transition: "all 0.5s ease",
});

export const ModalContentContainer = styled.div({
  transition: "all 0.5s ease-in-out",
  position: "relative",
  background: palette.background_main,
  borderRadius: "0.6rem",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    height: "0.4rem",
    width: "1.6rem",
  },
  "&::-webkit-scrollbar-track": {
    background: palette.background_main,
    borderRadius: "2.4rem",
  },
  "&::-webkit-scrollbar-thumb": {
    background: palette.main_primary,
    borderRadius: "2.4rem",
    border: `4px solid ${palette.background_main}`,

    ":active": {
      background: palette.main_primary_dark,
    },
  },
});

export const Label = styled.label({
  cursor: "pointer",
  paddingTop: paddingTopSize,
});

export const Input = styled.input({
  height: `${inputHight}rem`,

  paddingLeft: "0.4rem",
  border: "none",

  fontWeight: "300",
  fontSize: "1.8rem",
  ":focus": {
    outline: "none",
  },
  ":focus ~ span": inputSpanStyles,
  ":valid ~ span": inputSpanStyles,
});

export const Placeholder = styled.span({
  position: "absolute",
  fontSize: "1.8rem",
  fontWeight: "300",
  left: "0.4rem",
  top: "0.8rem",
  pointerEvents: "none",
  transition: "all 0.5s",
});

export const TextArea = styled.textarea({
  border: "none",
  minHeight: `${inputHight}rem`,
  maxHeight: "8rem",
  padding: "0.8rem",
  fontWeight: "300",
  fontSize: "1.8rem",
  ":focus": {
    outline: "none",
  },
  ":focus ~ span": inputSpanStyles,
});
