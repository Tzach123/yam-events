import { ReactNode } from "react";

export interface ServiceDescriptionCard {
  icon: ReactNode;
  title: string;
  description: ReactNode;
}

export interface HomeState {
  ifPlayAnimationPhotosFromEvent: boolean;
  ifPlayAnimationAbout: boolean;
  ifPlayAnimationTo_top: boolean;
  ifPlayAnimationContact_us: boolean;
}

export interface SubCategoryState {
  data: string[];
  path: string;
  title: string;
}

export interface LayoutState {
  showSideDrawer: boolean;
  ToolbarTop: boolean;
}

export interface CardProps {
  img: string;
  showModal: (event: React.MouseEvent) => void;
  name: string;
}

export interface CarouselItemsProps {
  setActiveIndex: (activeIndex: number) => void;
  activeIndex: number;
  dataItems: string[];
  dataPath: string;
}

export interface SmallCarouselProps {
  visibleSlides: number;
}

export interface HomeProps {}

export interface SubCategoryProps {}

export interface LayoutProps {
  children: ReactNode;
}
