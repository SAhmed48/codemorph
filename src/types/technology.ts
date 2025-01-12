import { Feature } from "./feature";

export type Technology = {
  [key: string]: Feature[];
};

export type TechPoint = {
  digit: number;
  notation: string;
  text: string;
  authorText: string;
};

export type TechServiceOne = {
  heading: string;
  description: string;
  imageUrl: string;
};

export type TechServiceTwoSoon = {
  text: string;
};

export type TechServiceTwoNow = {
  text: string;
  text1: string;
};

export type TechServiceThreeTop = {
  title: string;
  text: string;
};

export type TechServiceThreeBottom = {
  title: string;
  points: string[];
};

export type TechServiceTwo = {
  sectionNow: TechServiceTwoNow;
  sectionSoon: TechServiceTwoSoon[];
};

export type TechServiceThree = {
  sectionTop: TechServiceThreeTop[];
  sectionBottom: TechServiceThreeBottom;
};
