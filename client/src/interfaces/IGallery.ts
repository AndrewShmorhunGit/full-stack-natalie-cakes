export interface ICarouselParams {
  slides: string[];
  slideWidth: number;
  sliderColumnGap: number;
  length: number;
  rotate: (
    direction: "left" | "right",
    limit: number,
    visibleSlides: number,
    isCarousel: number,
    setCarousel: React.Dispatch<React.SetStateAction<number>>
  ) => void;
}
