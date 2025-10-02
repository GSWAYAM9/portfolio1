export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition">
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="mt-1">{description}</p>
      <a href={link} target="_blank" className="text-blue-600 mt-2 inline-block">View Project</a>
    </div>
  );
}

