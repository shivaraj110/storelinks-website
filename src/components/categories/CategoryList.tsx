import {
  GraduationCap,
  Trophy,
  Briefcase,
  Download,
  BookOpen,
} from "lucide-react";
import { CategoryCard } from "./CategoryCard";

const categories = [
  {
    title: "Scholarships",
    description: "Find educational funding opportunities worldwide",
    icon: GraduationCap,
    count: 156,
  },
  {
    title: "Hackathons",
    description: "Discover upcoming coding competitions and challenges",
    icon: Trophy,
    count: 89,
  },
  {
    title: "Jobs & Internships",
    description: "Latest tech career opportunities for all levels",
    icon: Briefcase,
    count: 243,
  },
  {
    title: "Free Software",
    description: "Essential tools and applications available at no cost",
    icon: Download,
    count: 178,
  },
  {
    title: "Study Materials",
    description: "Curated learning resources and documentation",
    icon: BookOpen,
    count: 312,
  },
];

export function CategoryList() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Public Categories
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Discover and share resources in these categories
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
