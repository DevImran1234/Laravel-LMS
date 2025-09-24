import React, { useEffect, useState } from "react";
import { router, usePage, Link } from "@inertiajs/react";

// Reusable Avatar component
const UserAvatar = ({ user }: { user: any }) => {
  const initials = (name?: string) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  if (user?.profile_photo) {
    return (
      <img
        className="w-8 h-8 rounded-full border"
        src={user.profile_photo}
        alt={user.name ?? "Profile"}
      />
    );
  }

  return (
    <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-medium">
      {initials(user?.name)}
    </div>
  );
};

const Navbar: React.FC = () => {
  const page = usePage();
  const user = (page.props as any).auth?.user ?? null;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [page.props]);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    router.post("/logout");
  };

  const navLinks = (
    <>
      <Link href="/" onClick={() => setIsOpen(false)} className="block md:inline-block hover:text-purple-600">Home</Link>
      <Link href="/courses" onClick={() => setIsOpen(false)} className="block md:inline-block hover:text-purple-600">Courses</Link>
      <Link href="/about" onClick={() => setIsOpen(false)} className="block md:inline-block hover:text-purple-600">About</Link>
      <Link href="/contact" onClick={() => setIsOpen(false)} className="block md:inline-block hover:text-purple-600">Contact</Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-bold text-purple-600">LMS</Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8 text-gray-700 font-medium">
            {navLinks}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex md:items-center md:gap-3">
              {user ? (
                <>
                  <UserAvatar user={user} />
                  <span className="font-medium text-gray-700">{user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-1.5 text-sm rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="px-4 py-1.5 text-sm rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition">Login</Link>
                  <Link href="/signup" className="px-4 py-1.5 text-sm rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition">Signup</Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((v) => !v)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-4 pt-2 pb-4 space-y-1 border-t border-gray-100 bg-white">
          {navLinks}

          <div className="pt-2">
            {user ? (
              <>
                <div className="flex items-center gap-3">
                  <UserAvatar user={user} />
                  <span className="font-medium text-gray-700">{user.name}</span>
                </div>
                <button onClick={handleLogout} className="mt-3 w-full text-left px-4 py-2 rounded-md bg-red-500 text-white">Logout</button>
              </>
            ) : (
              <div className="flex gap-3">
                <Link href="/login" onClick={() => setIsOpen(false)} className="flex-1 text-center px-4 py-2 rounded-md bg-blue-500 text-white">Login</Link>
                <Link href="/signup" onClick={() => setIsOpen(false)} className="flex-1 text-center px-4 py-2 rounded-md bg-blue-500 text-white">Signup</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
