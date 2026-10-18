// Database Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  profile?: UserProfile;
}

export type UserRole = 'student' | 'teacher' | 'admin';

export interface UserProfile {
  id: string;
  userId: string;
  grade?: string;
  board?: string;
  subjects?: string[];
  avatar?: string;
}

// Question Types
export interface Question {
  id: string;
  topicId: string;
  boardId: string;
  difficulty: DifficultyLevel;
  type: QuestionType;
  content: string;
  options?: QuestionOption[];
  correctAnswer: string;
  explanation: string;
  hint?: string;
  difficultyScore: number;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type QuestionType = 'multiple-choice' | 'fill-blank' | 'numerical';

export interface QuestionOption {
  id: string;
  questionId: string;
  text: string;
  isCorrect: boolean;
}

// Board and Topic Types
export interface Board {
  id: string;
  name: string;
  code: string;
  description?: string;
}

export interface Topic {
  id: string;
  boardId: string;
  subject: string;
  name: string;
  description?: string;
  difficultyRange?: {
    min: number;
    max: number;
  };
}

export interface DifficultyLevel {
  id: string;
  name: string;
  score: number; // 1-5 scale
  description?: string;
}

// Progress and Assessment Types
export interface Assessment {
  id: string;
  userId: string;
  topicId?: string;
  questions: AssessmentQuestion[];
  score: number;
  totalQuestions: number;
  completedAt: Date;
  timeSpent: number;
}

export interface AssessmentQuestion {
  id: string;
  assessmentId: string;
  questionId: string;
  userAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
}

export interface UserProgress {
  id: string;
  userId: string;
  topicId: string;
  questionsAnswered: number;
  correctAnswers: number;
  streak: number;
  lastQuestionDate: Date;
  nextReviewDate: Date;
  masteryLevel: number; // 0-100
  totalTimeSpent: number;
}

export interface StudySession {
  id: string;
  userId: string;
  topicId: string;
  questionsAttempted: number;
  correctAnswers: number;
  startTime: Date;
  endTime?: Date;
  sessionType: 'diagnostic' | 'practice' | 'review';
}

// Class and Enrollment Types
export interface Class {
  id: string;
  name: string;
  description?: string;
  teacherId: string;
  code: string;
  maxStudents?: number;
  createdAt: Date;
}

export interface Enrollment {
  id: string;
  userId: string;
  classId: string;
  status: EnrollmentStatus;
  enrolledAt: Date;
}

export type EnrollmentStatus = 'active' | 'inactive' | 'completed';

// Assignment Types
export interface Assignment {
  id: string;
  teacherId: string;
  classId: string;
  title: string;
  description?: string;
  questionIds?: string[];
  dueDate?: Date;
  createdAt: Date;
  status: AssignmentStatus;
}

export type AssignmentStatus = 'draft' | 'published' | 'closed';

// Analytics Types
export interface AnalyticsData {
  userId: string;
  date: Date;
  questionsAnswered: number;
  correctAnswers: number;
  averageTime: number;
  streakCount: number;
  topicPerformance?: TopicPerformance[];
}

export interface TopicPerformance {
  topicId: string;
  questionsAnswered: number;
  correctAnswers: number;
  masteryLevel: number;
}