import { Link } from "lucide-react";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between mb-16">
      <div className="flex items-center space-x-2">
        <Link className="w-8 h-8 text-indigo-600" />
        <span className="text-xl font-bold">StoreLinks</span>
      </div>
      <div className="flex items-center space-x-6">
        <a href="#features" className="text-gray-600 hover:text-gray-900">
          Features
        </a>
        <a href="#dashboard" className="text-gray-600 hover:text-gray-900">
          Dashboard
        </a>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Add to Chrome
        </button>
      </div>
    </nav>
  );
}
