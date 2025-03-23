import React from "react";

export const Footer = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className="bg-gray-800 text-white p-4 flex flex-row justify-between fixed bottom-0 left-0 w-full z-20">
      <p>&copy; 2025 Hakaton2. Все права защищены.</p>
      <p>{formattedDate}</p>
    </footer>
  );
};
