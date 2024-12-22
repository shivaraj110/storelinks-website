export function Dashboard() {
  return (
    <section id="dashboard" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Your Link Management Hub
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Personal Space</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span>Create custom categories and tags</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span>Add personal notes to links</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span>Quick search across all bookmarks</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Community Features</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span>Share collections publicly</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span>Follow other users' collections</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span>Discover trending link directories</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
