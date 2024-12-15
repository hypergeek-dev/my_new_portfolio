import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center space-y-4">
        {/* Footer Links */}

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.48 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.907-.621.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.911.832.092-.647.35-1.088.635-1.338-2.22-.252-4.555-1.112-4.555-4.945 0-1.092.39-1.986 1.029-2.686-.103-.253-.446-1.268.098-2.64 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.8c.85.004 1.705.115 2.504.337 1.908-1.294 2.748-1.025 2.748-1.025.545 1.372.202 2.387.1 2.64.64.7 1.028 1.594 1.028 2.686 0 3.842-2.339 4.69-4.566 4.938.36.31.679.921.679 1.856 0 1.34-.012 2.422-.012 2.75 0 .267.18.579.688.482C19.137 20.164 22 16.417 22 12c0-5.52-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM7 20H4V9h3v11zM5.5 7.3C4.1 7.3 3 6.2 3 4.9 3 3.6 4.1 2.5 5.5 2.5S8 3.6 8 4.9C8 6.2 6.9 7.3 5.5 7.3zM21 20h-3v-5.5c0-3-3-2.8-3 0V20h-3V9h3v1.5C16.4 8.3 21 8.2 21 12.5V20z" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
