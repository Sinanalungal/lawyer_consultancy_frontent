import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <ol className="flex max-[400px]:hidden items-center whitespace-nowrap">
      {items.map((item, index) => (
        <li key={index} className="inline-flex items-center">
          {item.link ? (
            <Link to={item.link}><span className="flex items-center text-xs text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500">
              {item.label}
            </span></Link>
          ) : (
            <span className="text-xs text-gray-500 dark:text-neutral-500">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
}

export default Breadcrumb;
