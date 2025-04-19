import JobList from "./components/JobList"
import { Flex } from "@radix-ui/themes"

const base = import.meta.env.BASE_URL

function App() {
  return (
    <>
      <div className="img-container bg-cyan-500">
        <img src={`${base}images/bg-header-desktop.svg`} alt="" />
      </div>

      <Flex direction="column" align="center" gap="4">
        <JobList />
      <div className="attribution">
        Challenge by <a className="text-blue-600 no-underline hover:underline hover:text-blue-800" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a className="text-blue-600 no-underline hover:underline hover:text-blue-800" href="https://github.com/MoatazAhmad">Moataz Ahmed</a>.
      </div>
      </Flex>

    </>
  )
}

export default App
