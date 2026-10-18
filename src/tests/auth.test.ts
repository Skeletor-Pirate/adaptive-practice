import { describe, it, expect } from "vitest";
import { UserService } from "../services/users";

describe("UserService", () => {
  it("should find demo users by email", async () => {
    const student = await UserService.getUserByEmail("student@example.com");
    expect(student).not.toBeNull();
    expect(student?.name).toBe("John Student");
    expect(student?.role).toBe("student");

    const teacher = await UserService.getUserByEmail("teacher@example.com");
    expect(teacher).not.toBeNull();
    expect(teacher?.role).toBe("teacher");
  });

  it("should list all registered users", async () => {
    const all = await UserService.getAllUsers();
    expect(all.length).toBeGreaterThanOrEqual(3);
  });
});
