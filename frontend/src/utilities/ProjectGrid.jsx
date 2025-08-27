import { images } from "@/assets/assets";

export default function ProjectGrid() {
  const projects = [
    {
      title: "Imagify",
      category: "Development",
      year: 2025,
      bg: "bg-yellow-100",
      img: images.imagify,
      link: "https://imagify-now.netlify.app",
    },
    {
      title: "Modern Animated Website",
      category: "Development & Design",
      year: 2025,
      bg: "bg-pink-200",
      img: images.zentry,
      link: "https://notmodern.vercel.app",
    },
    {
      title: "Text to Speech Converter",
      category: "Development & Design",
      year: 2025,
      bg: "bg-neutral-200",
      img: images.tts,
      link: "",
    },
    {
      title: "Spotify",
      category: "Development & Design",
      year: 2024,
      bg: "bg-green-200",
      img: images.spotify1,
      link: "https://spotifykaro.netlify.app",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-10 py-10 md:py-16">
      {projects.map((project, index) => (
        <div key={index}>
          <a
            href={project.link}
            target="_blank"
            className={`md:hover:cursor-pointer rounded-3xl h-52 w-full md:h-72  lg:h-[350px] p-6 lg:p-8 ${project.bg} shadow-md flex-center`}
          >
            {/* Image */}

            <img
              src={project.img}
              alt={project.title}
              className="rounded-2xl shadow-lg h-full object-cover w-full"
            />
          </a>

          {/* Text Section */}
          <div className="mt-4 mx-2">
            <h5 className="font-satoshi-medium text-xl">{project.title}</h5>
            <div className="mt-2 font-satoshi-variable text-sm flex justify-between">
              <p>{project.category}</p>
              <p>{project.year}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
