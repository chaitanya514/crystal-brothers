import { Instagram,Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center gap-3">
        
        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-pink-500 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Copy */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Crystal Brothers. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
