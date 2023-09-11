"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

type Props = {
  images: any[];
};
const ImageCarousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative">
      <div className="carousel h-64">
        <Image
          className="rounded-lg object-cover object-center"
          fill
          alt={images[currentIndex]}
          src={images[currentIndex]}
        />
      </div>
      <div className="slide-direction w-full flex absolute top-28 items-center justify-between">
        <Button variant={"ghost"}>
          <ChevronLeftIcon className="h-4" />
        </Button>
        <Button variant={"ghost"}>
          <ChevronRightIcon className="h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ImageCarousel;
