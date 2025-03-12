import Link from "next/link";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="max-w-[1200px] mx-auto px-6 py-8 mt-12 border-t border-border">
      <div className="flex justify-between items-center">
        <span className="text-[12px] text-muted-foreground hover:text-foreground transition-colors duration-200">
          {new Date().getFullYear()}
        </span>
        <div className="flex gap-8">
          <Link
            href="/contact"
            className="text-base text-foreground transition-all duration-200 hover:text-primary hover:translate-y-[-1px]"
          >
            Contact
          </Link>
          <Link
            href="/resume"
            className="text-base text-foreground transition-all duration-200 hover:text-primary hover:translate-y-[-1px]"
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
