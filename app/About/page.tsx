export default function AboutPage() {
let learingSkills: string[] = [
    "Next.js routing",
    "Server & Client components",
    "Tailwind CSS",
    "Git & GitHub workflow"
];


  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-bold">About Us</h1>

      <p className="mb-4 text-gray-700">
        We are a team focused on building modern web applications
        using Next.js and React. Our goal is to create fast,
        scalable, and user-friendly products.
      </p>

      <p className="mb-4 text-gray-700">
        This project is part of my internship practice where I am
        learning real-world development workflows and best practices.
      </p>

      <div className="mt-6 rounded-lg bg-gray-100 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          What I’m learning
        </h2>
        <ul className="list-disc pl-5 text-gray-700">
         {learingSkills.map((item,idx)=>(
            <li key={idx}>{item}</li>
         ))
         }
        </ul>
      </div>
    </div>
  );
}
