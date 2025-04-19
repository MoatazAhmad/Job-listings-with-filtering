import React from 'react'
import { jobData } from '../types/api';
import { Avatar } from 'radix-ui';
import { Button } from '@radix-ui/themes';

function JobBox({ job, setFilters }: { job: jobData, setFilters: React.Dispatch<React.SetStateAction<string[]>> }) {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  const handleTagClick = (tag: string) => {
    setFilters((prev) => (prev.includes(tag) ? prev : [...prev, tag]));
  };

  const base = import.meta.env.BASE_URL
  return (
    <>
      <div className={`bg-white shadow-md rounded p-6 flex flex-col md:flex-row md:items-center w-full ${job.featured && 'border-l-[5px] border-l-cyan-500  border-solid'}`}>
        <Avatar.Root>
          <Avatar.Image src={`${base}images/${job.logo}`} alt={job.company} className="w-16 h-16 md:mr-6" />
          <Avatar.Fallback />
        </Avatar.Root>
        <div className="flex-1">
          <div className="flex items-center space-x-4">
            <h3 className="text-cyan-500  font-bold">{job.company}</h3>
            {job.new && <span className="bg-cyan-500 text-white px-2 py-1 rounded-full text-xs">NEW!</span>}
            {job.featured && <span className="bg-cyan-900 text-white px-2 py-1 rounded-full text-xs">FEATURED</span>}
          </div>
          <h2 className="text-xl font-bold my-2">{job.position}</h2>
          <div className="text-cyan-700 text-sm">
            {job.postedAt} • {job.contract} • {job.location}
          </div>
        </div>
        <div className="flex flex-wrap mt-4 md:mt-0 md:ml-auto">
          {tags.map((tag) => (
            <Button color="cyan" variant="soft" key={tag} onClick={() => handleTagClick(tag)} >
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}

export default JobBox