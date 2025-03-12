import Link from "next/link";

interface ProjectCardProps {
  company: string;
  title: string;
  link: string;
  description: string;
  year: string;
  className?: string;
  type?: "frontend" | "backend";
}

export default function ProjectCard({
  company,
  title,
  link,
  description,
  year,
  className = "",
  type = "frontend",
}: ProjectCardProps): React.JSX.Element {
  return (
    <div className={`py-16 group ${className}`}>
      <div className="mb-12">
        <h3 className="text-[16px] font-bold uppercase mb-4 tracking-wider">
          {company}
        </h3>
        <h2 className="text-[54px] font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h2>
        {type === "frontend" && (
          <Link
            href={link}
            className="inline-flex items-center text-primary text-base group-hover:gap-2 transition-all duration-300"
          >
            <span>View Site</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        )}
      </div>
      {type === "backend" ? (
        <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden mb-12 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl p-6 font-mono text-sm">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/20 transition-colors duration-300 group-hover:bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 transition-colors duration-300 group-hover:bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 transition-colors duration-300 group-hover:bg-green-500" />
          </div>
          <div className="text-muted-foreground">
            <span className="text-primary">$</span>{" "}
            <span className="text-yellow-500">curl</span>{" "}
            <span className="text-blue-500">api.example.com/health</span>
            <br />
            <span className="text-muted-foreground">{"{"}</span>
            <br />
            &nbsp;&nbsp;
            <span className="text-blue-400">&quot;status&quot;</span>:{" "}
            <span className="text-green-500">&quot;healthy&quot;</span>,
            <br />
            &nbsp;&nbsp;
            <span className="text-blue-400">&quot;version&quot;</span>:{" "}
            <span className="text-green-500">&quot;1.0.0&quot;</span>,
            <br />
            &nbsp;&nbsp;
            <span className="text-blue-400">&quot;uptime&quot;</span>:{" "}
            <span className="text-green-500">&quot;99.99%&quot;</span>
            <br />
            <span className="text-muted-foreground">{"}"}</span>
          </div>
        </div>
      ) : (
        <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden mb-12 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl">
          {/* Project image will go here */}
        </div>
      )}
      <div className="border-t border-border pt-8">
        <h3 className="text-[26px] font-semibold mb-4">Featured</h3>
        <p className="text-[14px] leading-[1.5] text-muted-foreground mb-4 max-w-[720px]">
          {description}
        </p>
        <span className="text-[14px] text-muted-foreground">{year}</span>
      </div>
    </div>
  );
}
