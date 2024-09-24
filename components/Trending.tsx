"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// Define types for the data structure
interface CardData {
  category: string;
  title: string;
  src: string;
  description: string;
  price: string;
  buttonText: string;
  content: React.ReactNode; // Include content as a property
}

// Define props for DummyContent component
interface DummyContentProps {
  description: string;
  price: string;
  buttonText: string;
}

// Updated DummyContent component with types
const DummyContent: React.FC<DummyContentProps> = ({ description, price, buttonText }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {description}
        </span>
        <br />
        Price: <span className="font-bold">{price}</span>
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
        {buttonText}
      </button>
      <Image
        src="/MILKSHAKE.png"
        alt="Milkshake Foundation"
        height={200}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

// Sample data for the cards
const data: CardData[] = [
  {
    category: "HUDA BEAUTY",
    title: "Milkshake Foundation",
    src: "/MILKSHAKE.png",
    description: "Milkshake Foundation for a perfect look.",
    price: "$35",
    buttonText: "Buy Now",
    content: <DummyContent description="Milkshake Foundation for a perfect look." price="$35" buttonText="Buy Now" />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Tools to boost your productivity.",
    price: "$50",
    buttonText: "Learn More",
    content: <DummyContent description="Tools to boost your productivity." price="$50" buttonText="Learn More" />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Experience the future of AR.",
    price: "$999",
    buttonText: "Pre-order Now",
    content: <DummyContent description="Experience the future of AR." price="$999" buttonText="Pre-order Now" />,
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Get the latest maps.",
    price: "$0",
    buttonText: "Update Now",
    content: <DummyContent description="Get the latest maps." price="$0" buttonText="Update Now" />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Discover new features for iOS.",
    price: "$0",
    buttonText: "Explore",
    content: <DummyContent description="Discover new features for iOS." price="$0" buttonText="Explore" />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Join our team of innovators.",
    price: "$0",
    buttonText: "Apply Now",
    content: <DummyContent description="Join our team of innovators." price="$0" buttonText="Apply Now" />,
  },
];

export default function Trending() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index}>

    </Card>
  ));

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-7xl px-8 mx-auto lg:text-5xl text-2xl font-medium">
        WHAT&apos;S NEW IN VOGUE ?
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
