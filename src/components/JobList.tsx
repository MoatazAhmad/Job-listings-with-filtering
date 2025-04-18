import React from 'react'
import { useState, useEffect } from 'react'
import { jobData } from '../types/api';
import JobBox from './JobBox';
import FilterBar from "./FilterBar"
import { Skeleton } from '@radix-ui/themes';

function JobList() {
  const [data, setData] = useState<jobData[] | null>(null);
  const [filters, setFilters] = useState<string[]>([])

  useEffect(() => {

    fetch('/data.json').then(res => {
      if (!res.ok) {
        throw new Error("response is not ok")
      }
      return res.json();
    }).then((jsonData: jobData[]) => setData(jsonData))
      .catch(error => console.log('error fetching Json data', error))

  }, [])

  const filteredJobs = data?.filter((job) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every((filter) => tags.includes(filter));
  });

  return (
    <>
      <div className='w-full p-2 lg:px-32 lg:p-0 flex justify-center items-center flex-col gap-5'>
        <FilterBar filters={filters} setFilters={setFilters} />
        {
          filteredJobs && filteredJobs.map((item, index) => (<JobBox job={item} key={index} setFilters={setFilters} />))
        }
      </div>
    </>
  )
}

export default JobList