'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ChevronRight = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// Helper to lowercase all except first letter
function capitalizeFirstOnly(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Skip breadcrumbs for the home page
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(segment => segment !== '');

  const breadcrumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;
    // Lowercase all, then capitalize only the first letter
    const label = capitalizeFirstOnly(
      segment
        .split('-')
        .join(' ')
    );

    return {
      href,
      label,
      isLast: index === segments.length - 1
    };
  });

  return (
    <nav
      className="py-2 px-2 sm:py-3 sm:px-4 backdrop-blur border-b"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto">
        <ol
          className="
            flex items-center flex-wrap gap-1
            text-xs sm:text-sm font-lato
            overflow-x-auto
            whitespace-nowrap
            scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent
            "
          role="list"
        >
          <li className="min-w-0">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-gray-500 hover:text-[#CBA240] transition-colors font-medium"
              aria-label="Ir a la página de inicio"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v11a1 1 0 01-1 1h-3m-6 0h6" />
              </svg>
              <span className="hidden xs:inline">Inicio</span>
              <span className="inline xs:hidden">Inicio</span>
            </Link>
          </li>
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center min-w-0">
              <ChevronRight className="w-4 h-4 text-gray-300 mx-2 flex-shrink-0" />
              {breadcrumb.isLast ? (
                <span
                  className="text-[#CBA240] font-semibold cursor-default transition-colors truncate max-w-[120px] sm:max-w-[200px]"
                  aria-current="page"
                  title={breadcrumb.label}
                >
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className="text-gray-500 hover:text-[#CBA240] transition-colors font-medium truncate max-w-[120px] sm:max-w-[200px]"
                  title={breadcrumb.label}
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;