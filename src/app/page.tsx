"use client";

import { useEffect, useState } from "react";
import OneCard from "./_component/OneCard";
import { QuestionItem, Tquestions } from "../../types/type";
import { questions } from "../../mocks/QuestionList";

export default function Home() {
  const [randomQuestions, setRandomQuestions] = useState<QuestionItem[]>([]);

  const initializeQuestions = (): QuestionItem[] => {
    const allQuestions: QuestionItem[] = [];

    (Object.entries(questions) as [keyof Tquestions, string[]][]).forEach(([category, questions]) => {
      questions.forEach((question) => {
        allQuestions.push({ question, category });
      });
    });

    return allQuestions;
  };

  useEffect(() => {
    //랜덤하게 배열을 섞는 함수 작성
    //양수와 음수가 랜덤하게 반환되므로 sort()가 무작위로 요소를 섞게됨
    const shuffledQuestions = initializeQuestions().sort(() => 0.5 - Math.random());
    setRandomQuestions(shuffledQuestions);
  }, []);
  return (
    <>
      {randomQuestions.map((item: QuestionItem, idx: number) => (
        <OneCard idx={idx} {...item} />
      ))}
    </>
  );
}
