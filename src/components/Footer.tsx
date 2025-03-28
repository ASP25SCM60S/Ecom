import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

// Define types for footer links
type FooterLink = {
  href: string;
  label: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

export function Footer() {
  // Data for footer sections
  const sections: FooterSection[] = [
    {
      title: 'Shop',
      links: [
        { href: '/products', label: 'All Products' },
        { href: '/products?category=fresh', label: 'Fresh Foods' },
        { href: '/products?category=pantry', label: 'Pantry Items' },
        { href: '/products?category=specialty', label: 'Specialty Items' },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/contact', label: 'Contact' },
        { href: '/careers', label: 'Careers' },
        { href: '/blog', label: 'Blog' },
      ],
    },
    {
      title: 'Customer Service',
      links: [
        { href: '/help', label: 'Help Center' },
        { href: '/shipping', label: 'Shipping Information' },
        { href: '/returns', label: 'Returns & Exchanges' },
        { href: '/faq', label: 'FAQ' },
      ],
    },
  ];

  const legalLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/cookies', label: 'Cookies' },
  ];

  const socialLinks = [
    { icon: <FiInstagram size={20} />, href: 'https://instagram.com' },
    { icon: <FiTwitter size={20} />, href: 'https://twitter.com' },
    { icon: <FiFacebook size={20} />, href: 'https://facebook.com' },
  ];

  return (
    <footer className="bg-gray-100 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Fresh Foods</h3>
            <p className="text-gray-600 mb-4">
              Bringing premium food products from around the world to your doorstep.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary-600 transition-colors"
                  aria-label={`Visit our ${social.href.replace('https://', '')}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Fresh Foods. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-500 text-sm hover:text-primary-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}