import React from "react";

const VowelItalicizer = ({ text }) => {
  const italicizeVowels = (str) => {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    return str.split("").map((char, index) =>
      vowels.includes(char) ? (
        <span key={index} className="font-normal italic">
          {char}
        </span>
      ) : (
        char
      ),
    );
  };

  return <apan className="">{italicizeVowels(text)}</apan>;
};

export default VowelItalicizer;
