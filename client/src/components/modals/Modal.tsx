// Components
import { NavButtonsContainer } from "components/navigation/Components";
import { InfoHeader } from "components/information/Styled";
import {
  Container,
  FlexCenterContainer,
  FlexColumnContainer,
  CloseLogo,
} from "components";
import { ModalContentContainer } from "./Styled";
import { CallFormModal } from "./Components";
import { ErrorBlock } from "components/lib/ErrorSection";
// Styles
import { appShadows, css, palette } from "styles";
// Interfaces
import { IAppBox } from "interfaces";
// Hooks
import { useClickOutside } from "hooks/useClickOutside";
// Helpers
import { getGalleryModalState, setFlag } from "utils/functions";
import { galleryData } from "data/components.static.data";
import React from "react";

function Modal({ appBox }: { appBox: IAppBox }) {
  const {
    isModal,
    setModal,
    innerContent: content,
    languages,
    isLanguage,
    isLangTransition,
    setMedia,
    setLanguage,
    isMedia,
  } = appBox;

  // To gallery modals static
  const { boys, girls, fruits, classics } = galleryData();

  const imagesArray = [...boys, ...girls, ...fruits, ...classics];
  const images = new Map();
  imagesArray.forEach((img) => images.set(getGalleryModalState(img), img));
  const isGalleryModal = (isModal: string): string => {
    return isModal.includes("boy") ||
      isModal.includes("girl") ||
      isModal.includes("fruit") ||
      isModal.includes("classic")
      ? isModal
      : "invalid";
  };

  const refClickOutside = React.useRef<HTMLDivElement | null>(null);
  useClickOutside(refClickOutside, () => setModal("none"));

  interface IModalSettings {
    [x: string]: {
      state: string;
      condition: boolean;
      title: string;
      size: "large" | "middle" | "small" | "none" | string;
    };
  }

  const none = "none";
  const burger = "burger";
  const test = "test";
  const call = "call";
  const gallery = isGalleryModal(isModal);
  const error = "error";

  const modals: IModalSettings = {
    error: {
      state: error,
      condition: isModal === error,
      title: `Content ${isModal}!`,
      size: "large",
    },
    [gallery]: {
      state: gallery,
      condition: isModal !== "none" && isModal === gallery,
      title: isModal,
      size: gallery !== "none" ? "large" : "none",
    },
    none: {
      state: none,
      condition: false,
      title: "",
      size: "none",
    },
    burger: {
      state: burger,
      condition: isModal === burger && (isMedia.small || isMedia.mini),
      title: "Navigation",
      size: "large",
    },
    call: {
      state: call,
      condition: isModal === call,
      title: "fill out form",
      size: `${setMedia("middle", "large")}`,
    },
    test: {
      state: test,
      condition: isModal === test && (isMedia.big || isMedia.medium),
      title: "Test modal Title",
      size: "small",
    },
  };

  const modalSize = modals[isModal].size;
  const modalShow = modals[isModal].condition && isModal !== none;
  const modalTitle = modals[isModal].title;

  return (
    <FlexCenterContainer
      className={css({
        position: "fixed",
        maxWidth: "100%",
        maxHeight: "100%",
        inset: 0,
        background: "rgba(0, 0, 0, 0.7)",
        transition: "all 0.5s ease",
        cursor: "pointer",
        // open/close conditions
        display: isModal === "none" ? "none" : "flex",
        zIndex: modalShow ? 99 : -1,
        opacity: modalShow ? 1 : 0,
      })}
    >
      <ModalContentContainer
        ref={refClickOutside}
        className={css(
          modalSize === "large" && {
            margin: "5vh 5vw",
            minWidth: "90vw",
            minHeight: "90vh",
          },
          modalSize === "middle" && {
            margin: "15vh 15vw",
            minWidth: "70vw",
            minHeight: "70vh",
          },
          modalSize === "small" && {
            margin: "25vh 25vw",
            minWidth: "50vw",
            minHeight: "50vh",
          },
          modalSize === "none" && {
            minWidth: "100%",
            minHeight: "100%",
          },
          { cursor: "auto" }
        )}
      >
        <FlexCenterContainer>
          <FlexColumnContainer
            className={css({ padding: "8rem 6rem", gap: "6rem" })}
          >
            <InfoHeader className={css(isModal === error && { color: "red" })}>
              {modalTitle}
            </InfoHeader>

            <Container
              className={css({
                cursor: "pointer",
                position: "absolute",
                top: "2rem",
                right: "2rem",
              })}
              onClick={() => setModal("none")}
            >
              <CloseLogo height={42} width={42} fill={palette.main_primary} />
            </Container>
            {/* Content */}

            {isModal === burger && (
              <NavButtonsContainer
                content={content}
                setFlag={setFlag}
                languages={languages}
                isLanguage={isLanguage}
                setLanguage={setLanguage}
                variant={"burger"}
                isLangTransition={isLangTransition}
              />
            )}
            {isModal === call && <CallFormModal setMedia={setMedia} />}
            {isModal === test && (
              <Container>
                <h2>Here is your modal!</h2>
              </Container>
            )}
            {isModal === gallery && (
              <>
                <img
                  src={images.get(isModal)}
                  alt={isModal}
                  className={css({
                    maxWidth: "96rem",
                    border: `solid 0.2rem ${palette.main_primary_dark}`,
                    boxShadow: appShadows.button,
                    borderRadius: "2rem",
                  })}
                />
              </>
            )}

            {isModal === error && <ErrorBlock error={"content"} />}
          </FlexColumnContainer>
        </FlexCenterContainer>
      </ModalContentContainer>
    </FlexCenterContainer>
  );
}

export { Modal };
