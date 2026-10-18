import { Question, QuestionType } from "@/types";

export interface MockQuestion extends Question {
  subject: string;
  topicName: string;
}

export const MOCK_QUESTIONS: MockQuestion[] = [
  {
    id: "q-101",
    topicId: "t-linear",
    topicName: "Linear Equations in Two Variables",
    boardId: "CBSE",
    subject: "Mathematics",
    difficulty: { id: "d1", name: "Easy", score: 1, description: "Basic concepts" },
    difficultyScore: 1,
    type: "multiple-choice" as QuestionType,
    content: "Solve for x: 2x + 7 = 19",
    options: [
      { id: "o1", questionId: "q-101", text: "x = 5", isCorrect: false },
      { id: "o2", questionId: "q-101", text: "x = 6", isCorrect: true },
      { id: "o3", questionId: "q-101", text: "x = 8", isCorrect: false },
      { id: "o4", questionId: "q-101", text: "x = 12", isCorrect: false },
    ],
    correctAnswer: "x = 6",
    explanation: "Step 1: Subtract 7 from both sides: 2x = 19 - 7 = 12.\nStep 2: Divide both sides by 2: x = 12 / 2 = 6.",
    hint: "Isolate 2x first by subtracting 7 from 19.",
    tags: ["algebra", "linear-equations", "class-9"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "q-102",
    topicId: "t-linear",
    topicName: "Linear Equations in Two Variables",
    boardId: "CBSE",
    subject: "Mathematics",
    difficulty: { id: "d2", name: "Medium", score: 3, description: "System of equations" },
    difficultyScore: 3,
    type: "multiple-choice" as QuestionType,
    content: "Find the solution to the system of equations: x + y = 10 and x - y = 4.",
    options: [
      { id: "o5", questionId: "q-102", text: "x = 7, y = 3", isCorrect: true },
      { id: "o6", questionId: "q-102", text: "x = 6, y = 4", isCorrect: false },
      { id: "o7", questionId: "q-102", text: "x = 8, y = 2", isCorrect: false },
      { id: "o8", questionId: "q-102", text: "x = 5, y = 5", isCorrect: false },
    ],
    correctAnswer: "x = 7, y = 3",
    explanation: "Add both equations: (x + y) + (x - y) = 10 + 4 => 2x = 14 => x = 7.\nSubstitute x = 7 into first equation: 7 + y = 10 => y = 3.",
    hint: "Use the elimination method by adding the two equations together.",
    tags: ["algebra", "linear-equations", "class-10"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "q-103",
    topicId: "t-quad",
    topicName: "Quadratic Equations",
    boardId: "CBSE",
    subject: "Mathematics",
    difficulty: { id: "d2", name: "Medium", score: 3, description: "Factorization" },
    difficultyScore: 3,
    type: "multiple-choice" as QuestionType,
    content: "What are the roots of the quadratic equation x² - 7x + 12 = 0?",
    options: [
      { id: "o9", questionId: "q-103", text: "x = 3 and x = 4", isCorrect: true },
      { id: "o10", questionId: "q-103", text: "x = 2 and x = 6", isCorrect: false },
      { id: "o11", questionId: "q-103", text: "x = -3 and x = -4", isCorrect: false },
      { id: "o12", questionId: "q-103", text: "x = 1 and x = 12", isCorrect: false },
    ],
    correctAnswer: "x = 3 and x = 4",
    explanation: "We look for two numbers whose product is 12 and sum is -7: (-3) and (-4).\nx² - 3x - 4x + 12 = 0 => (x - 3)(x - 4) = 0.\nThus, x = 3 or x = 4.",
    hint: "Find two negative numbers whose product is +12 and sum is -7.",
    tags: ["algebra", "quadratic-equations", "class-10"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "q-104",
    topicId: "t-quad",
    topicName: "Quadratic Equations",
    boardId: "CBSE",
    subject: "Mathematics",
    difficulty: { id: "d3", name: "Hard", score: 5, description: "Discriminant & nature of roots" },
    difficultyScore: 5,
    type: "multiple-choice" as QuestionType,
    content: "For what value of k does the quadratic equation 2x² + kx + 3 = 0 have two equal real roots?",
    options: [
      { id: "o13", questionId: "q-104", text: "k = ± 2√6", isCorrect: true },
      { id: "o14", questionId: "q-104", text: "k = ± 6", isCorrect: false },
      { id: "o15", questionId: "q-104", text: "k = ± 12", isCorrect: false },
      { id: "o16", questionId: "q-104", text: "k = ± 4", isCorrect: false },
    ],
    correctAnswer: "k = ± 2√6",
    explanation: "For equal real roots, the discriminant D = b² - 4ac must equal 0.\nHere a = 2, b = k, c = 3.\nk² - 4(2)(3) = 0 => k² - 24 = 0 => k² = 24 => k = ±√24 = ± 2√6.",
    hint: "Equal roots occur when the discriminant b² - 4ac = 0.",
    tags: ["algebra", "quadratic-equations", "discriminant", "class-10"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "q-105",
    topicId: "t-motion",
    topicName: "Motion & Kinematics",
    boardId: "CBSE",
    subject: "Science",
    difficulty: { id: "d1", name: "Easy", score: 1, description: "Speed & Velocity" },
    difficultyScore: 1,
    type: "multiple-choice" as QuestionType,
    content: "A car travels a distance of 180 km in 3 hours. What is its average speed in m/s?",
    options: [
      { id: "o17", questionId: "q-105", text: "60 m/s", isCorrect: false },
      { id: "o18", questionId: "q-105", text: "16.67 m/s", isCorrect: true },
      { id: "o19", questionId: "q-105", text: "25 m/s", isCorrect: false },
      { id: "o20", questionId: "q-105", text: "50 m/s", isCorrect: false },
    ],
    correctAnswer: "16.67 m/s",
    explanation: "Speed in km/h = 180 km / 3 h = 60 km/h.\nTo convert km/h to m/s, multiply by 5/18:\n60 × (5/18) = 300 / 18 ≈ 16.67 m/s.",
    hint: "First find the speed in km/h, then multiply by 5/18 to convert to m/s.",
    tags: ["physics", "motion", "class-9"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "q-106",
    topicId: "t-motion",
    topicName: "Motion & Kinematics",
    boardId: "CBSE",
    subject: "Science",
    difficulty: { id: "d2", name: "Medium", score: 3, description: "Equations of Motion" },
    difficultyScore: 3,
    type: "multiple-choice" as QuestionType,
    content: "A train starting from rest attains a velocity of 72 km/h in 5 minutes. Assuming uniform acceleration, what distance does it travel in this time?",
    options: [
      { id: "o21", questionId: "q-106", text: "3 km", isCorrect: true },
      { id: "o22", questionId: "q-106", text: "6 km", isCorrect: false },
      { id: "o23", questionId: "q-106", text: "1.5 km", isCorrect: false },
      { id: "o24", questionId: "q-106", text: "12 km", isCorrect: false },
    ],
    correctAnswer: "3 km",
    explanation: "Initial velocity u = 0. Final velocity v = 72 km/h = 20 m/s.\nTime t = 5 min = 300 s.\nAcceleration a = (v - u) / t = 20 / 300 = 1/15 m/s².\nDistance s = ut + 0.5 a t² = 0 + 0.5 × (1/15) × (300)² = 0.5 × 6000 = 3000 m = 3 km.",
    hint: "Convert 72 km/h to m/s (20 m/s) and time to seconds (300 s). Then use s = ((u+v)/2) × t.",
    tags: ["physics", "equations-of-motion", "class-9"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "q-107",
    topicId: "t-light",
    topicName: "Light - Reflection & Refraction",
    boardId: "CBSE",
    subject: "Science",
    difficulty: { id: "d2", name: "Medium", score: 3, description: "Mirror Formula" },
    difficultyScore: 3,
    type: "multiple-choice" as QuestionType,
    content: "A convex mirror used for rearview on an automobile has a radius of curvature of 3.00 m. If a bus is located at 5.00 m from this mirror, where is the image formed?",
    options: [
      { id: "o25", questionId: "q-107", text: "+1.15 m behind the mirror", isCorrect: true },
      { id: "o26", questionId: "q-107", text: "-1.15 m in front of the mirror", isCorrect: false },
      { id: "o27", questionId: "q-107", text: "+2.50 m behind the mirror", isCorrect: false },
      { id: "o28", questionId: "q-107", text: "+0.85 m behind the mirror", isCorrect: false },
    ],
    correctAnswer: "+1.15 m behind the mirror",
    explanation: "Radius R = +3.00 m => Focal length f = +1.50 m.\nObject distance u = -5.00 m.\nUsing 1/f = 1/v + 1/u => 1/v = 1/1.50 - (-1/5.00) = 1/1.5 + 1/5 = 10/15 + 3/15 = 13/15.\nv = 15/13 ≈ +1.15 m (virtual and erect, behind mirror).",
    hint: "For convex mirrors, focal length f is positive (+1.5 m) and object distance u is negative (-5 m).",
    tags: ["physics", "light", "optics", "class-10"],
    createdAt: new Date(),
    updatedAt: new Date(),
  }
];

export class QuestionService {
  static async getQuestions(
    filters: {
      topicId?: string;
      subject?: string;
      boardId?: string;
      difficultyId?: string;
      limit?: number;
      offset?: number;
    } = {}
  ) {
    let list = [...MOCK_QUESTIONS];

    if (filters.topicId) {
      list = list.filter((q) => q.topicId === filters.topicId);
    }
    if (filters.subject) {
      list = list.filter((q) => q.subject.toLowerCase() === filters.subject!.toLowerCase());
    }
    if (filters.boardId) {
      list = list.filter((q) => q.boardId.toUpperCase() === filters.boardId!.toUpperCase());
    }

    const total = list.length;
    const start = filters.offset || 0;
    const end = filters.limit ? start + filters.limit : list.length;
    return { questions: list.slice(start, end), total };
  }

  static async getQuestionById(id: string): Promise<MockQuestion | null> {
    const q = MOCK_QUESTIONS.find((item) => item.id === id);
    return q || null;
  }

  static async getQuestionsByTopic(topicId: string) {
    return MOCK_QUESTIONS.filter((q) => q.topicId === topicId);
  }

  static async getRandomQuestions(topicId?: string, count: number = 5) {
    let pool = topicId ? MOCK_QUESTIONS.filter((q) => q.topicId === topicId) : MOCK_QUESTIONS;
    if (pool.length === 0) pool = MOCK_QUESTIONS;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
}
