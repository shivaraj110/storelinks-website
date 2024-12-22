import { Link } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Link className="w-6 h-6 text-indigo-600" />
            <span className="font-bold">StoreLinks</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} StoreLinks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
