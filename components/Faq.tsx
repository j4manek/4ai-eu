import type { Dictionary } from "@/lib/dictionaries";
import { FaqSection } from "./FaqSection";

export function Faq({ dict }: { dict: Dictionary }) {
  return <FaqSection faq={dict.faq} />;
}
