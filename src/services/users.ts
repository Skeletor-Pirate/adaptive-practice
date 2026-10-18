import { User, UserRole, UserProfile } from "@/types";

const MOCK_USERS: User[] = [
  {
    id: "1",
    email: "student@example.com",
    name: "John Student",
    role: "student" as UserRole,
    createdAt: new Date(),
    updatedAt: new Date(),
    profile: {
      id: "p1",
      userId: "1",
      grade: "IX",
      board: "CBSE",
      subjects: ["Mathematics", "Science"],
    },
  },
  {
    id: "2",
    email: "teacher@example.com",
    name: "Jane Teacher",
    role: "teacher" as UserRole,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    email: "admin@example.com",
    name: "Alice Admin",
    role: "admin" as UserRole,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export class UserService {
  static async getUserById(id: string): Promise<User | null> {
    return MOCK_USERS.find((u) => u.id === id) || null;
  }

  static async getUserByEmail(email: string): Promise<User | null> {
    return MOCK_USERS.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
  }

  static async getAllUsers(): Promise<User[]> {
    return MOCK_USERS;
  }
}
