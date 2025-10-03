export default function ProjectCard({ title, description, link }) {
  return (
    <div data-aos="fade-up" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition transform">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-200">{description}</p>
      <a href={link} target="_blank" className="mt-4 inline-block text-purple-400 font-semibold hover:text-white">View Project</a>
    </div>
  );
}
