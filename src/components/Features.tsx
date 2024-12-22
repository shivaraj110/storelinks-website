import React from 'react';
import { BookMarked, Users, FolderTree } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Organize Your Digital World</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BookMarked className="w-8 h-8 text-indigo-600" />}
            title="Personal Bookmarks"
            description="Save and organize links with custom tags, notes, and categories."
          />
          <FeatureCard
            icon={<FolderTree className="w-8 h-8 text-indigo-600" />}
            title="Smart Collections"
            description="Create themed collections and access them from any device."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-indigo-600" />}
            title="Public Directory"
            description="Share collections and discover curated link directories from others."
          />
        </div>
      </div>
    </section>
  );
}