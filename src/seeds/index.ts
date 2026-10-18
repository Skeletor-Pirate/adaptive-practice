import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create boards
  const cbse = await prisma.board.create({
    data: {
      name: "Central Board of Secondary Education",
      code: "CBSE",
      description: "National board of education in India",
    },
  });

  const jee = await prisma.board.create({
    data: {
      name: "Joint Entrance Examination",
      code: "JEE",
      description: "Engineering entrance examination",
    },
  });

  const neet = await prisma.board.create({
    data: {
      name: "National Eligibility cum Entrance Test",
      code: "NEET",
      description: "Medical entrance examination",
    },
  });

  // Create difficulty levels
  const difficulties = await Promise.all([
    prisma.difficultyLevel.create({
      data: { name: "Easy", score: 1, description: "Basic concepts" },
    }),
    prisma.difficultyLevel.create({
      data: { name: "Medium", score: 3, description: "Standard application" },
    }),
    prisma.difficultyLevel.create({
      data: { name: "Hard", score: 5, description: "Advanced problem solving" },
    }),
  ]);

  // Create topics
  const topics = await Promise.all([
    prisma.topic.create({
      data: {
        boardId: cbse.id,
        subject: "Mathematics",
        name: "Linear Equations",
        description: "Solving linear equations in one variable",
      },
    }),
    prisma.topic.create({
      data: {
        boardId: cbse.id,
        subject: "Mathematics",
        name: "Quadratic Equations",
        description: "Solving quadratic equations",
      },
    }),
    prisma.topic.create({
      data: {
        boardId: cbse.id,
        subject: "Science",
        name: "Motion",
        description: "Understanding motion and forces",
      },
    }),
  ]);

  // Create sample questions
  await prisma.question.create({
    data: {
      topicId: topics[0].id,
      boardId: cbse.id,
      difficultyId: difficulties[0].id,
      type: "multiple_choice",
      content: "Solve for x: 2x + 5 = 13",
      options: {
        create: [
          { text: "x = 3", isCorrect: false },
          { text: "x = 4", isCorrect: true },
          { text: "x = 5", isCorrect: false },
          { text: "x = 6", isCorrect: false },
        ],
      },
      correctAnswer: "x = 4",
      explanation: "Subtract 5 from both sides: 2x = 8. Then divide by 2: x = 4.",
      hint: "Isolate the variable by moving constants to the other side.",
      difficultyScore: 1,
      tags: ["algebra", "linear-equations"],
    },
  });

  await prisma.question.create({
    data: {
      topicId: topics[1].id,
      boardId: cbse.id,
      difficultyId: difficulties[1].id,
      type: "multiple_choice",
      content: "Find the roots of x² - 5x + 6 = 0",
      options: {
        create: [
          { text: "x = 2, 3", isCorrect: true },
          { text: "x = 1, 6", isCorrect: false },
          { text: "x = -2, -3", isCorrect: false },
          { text: "x = 0, 5", isCorrect: false },
        ],
      },
      correctAnswer: "x = 2, 3",
      explanation: "Factor the quadratic: (x - 2)(x - 3) = 0. So x = 2 or x = 3.",
      hint: "Find two numbers that multiply to 6 and add to -5.",
      difficultyScore: 3,
      tags: ["algebra", "quadratic-equations"],
    },
  });

  // Create users
  const password = await hash("password123", 10);

  const student = await prisma.user.create({
    data: {
      email: "student@example.com",
      name: "John Student",
      password,
      role: "student",
      profile: {
        create: {
          grade: "IX",
          board: "CBSE",
          subjects: ["Mathematics", "Science"],
        },
      },
    },
  });

  const teacher = await prisma.user.create({
    data: {
      email: "teacher@example.com",
      name: "Jane Teacher",
      password,
      role: "teacher",
    },
  });

  const admin = await prisma.user.create({
    data: {
      email: "admin@example.com",
      name: "Alice Admin",
      password,
      role: "admin",
    },
  });

  // Create a class
  await prisma.class.create({
    data: {
      name: "Class IX-A",
      description: "Mathematics and Science for Class IX",
      teacherId: teacher.id,
      code: "CL9A",
      maxStudents: 30,
      enrollments: {
        create: {
          userId: student.id,
          status: "active",
        },
      },
    },
  });

  console.log("Seed data created successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });