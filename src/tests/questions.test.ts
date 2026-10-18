import { describe, it, expect } from "vitest";
import { QuestionService, MOCK_QUESTIONS } from "../services/questions";

describe("QuestionService", () => {
  it("should return all questions without filters", async () => {
    const { questions, total } = await QuestionService.getQuestions();
    expect(total).toBe(MOCK_QUESTIONS.length);
    expect(questions.length).toBe(MOCK_QUESTIONS.length);
  });

  it("should filter questions by topic", async () => {
    const { questions } = await QuestionService.getQuestions({ topicId: "t-linear" });
    expect(questions.length).toBeGreaterThan(0);
    questions.forEach((q) => {
      expect(q.topicId).toBe("t-linear");
    });
  });

  it("should filter questions by subject", async () => {
    const { questions } = await QuestionService.getQuestions({ subject: "Mathematics" });
    expect(questions.length).toBeGreaterThan(0);
    questions.forEach((q) => {
      expect(q.subject).toBe("Mathematics");
    });
  });

  it("should retrieve a question by its id", async () => {
    const target = MOCK_QUESTIONS[0];
    const found = await QuestionService.getQuestionById(target.id);
    expect(found).not.toBeNull();
    expect(found?.id).toBe(target.id);
    expect(found?.correctAnswer).toBe(target.correctAnswer);
  });

  it("should return random questions within limit", async () => {
    const randomQs = await QuestionService.getRandomQuestions(undefined, 3);
    expect(randomQs.length).toBeLessThanOrEqual(3);
  });
});
