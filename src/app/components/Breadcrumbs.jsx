'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ currentPage }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link
        href="/"
        className="flex items-center hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 rounded transition-colors duration-200"
      >
        <Home className="w-4 h-4 mr-1" aria-hidden="true" />
        Home
      </Link>
      <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
      <span className="text-[#17224D] font-medium" aria-current="page">{currentPage}</span>
    </nav>
  );
};

export default Breadcrumbs;
