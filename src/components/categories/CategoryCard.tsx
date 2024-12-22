import React from "react";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  count: number;
}

export function CategoryCard({
  title,
  description,
  icon: Icon,
  count,
}: CategoryCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-8 h-8 text-indigo-600" />
        <span className="text-sm text-gray-500">{count} links</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
