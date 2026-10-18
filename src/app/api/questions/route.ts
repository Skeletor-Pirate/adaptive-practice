import { NextResponse } from "next/server";
import { QuestionService } from "@/services/questions";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const topicId = searchParams.get("topicId") || undefined;
  const subject = searchParams.get("subject") || undefined;
  const count = parseInt(searchParams.get("count") || "10", 10);

  const { questions, total } = await QuestionService.getQuestions({
    topicId,
    subject,
    limit: count,
  });

  return NextResponse.json({ questions, total });
}
