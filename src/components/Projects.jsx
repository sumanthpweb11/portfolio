import { projects } from "../Data";

const Projects = () => {
  return (
    <div className="section" id="projects">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Projects</h2>
        <div className=" w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-12 gap-2">
        {projects &&
          projects.map((project) => {
            return (
              <div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                key={project.id}
              >
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    className="w-full"
                    src={project.image}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      {project.title}
                    </div>
                    <p>
                      <a href={project.url}>
                        <button className="px-2 py-2 bg-slate-300 rounded-md font-semibold hover:bg-slate-400">
                          Live Site
                        </button>
                      </a>
                    </p>
                    {/* <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p> */}
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    {project?.tags?.map((tag) => {
                      return (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
