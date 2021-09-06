import Jobs from "../Components/Jobs"


const JobsBoard = () => {
    return(
        <div className='text-center'>
            <h1 className='text-success mx-5 display-3'>Job Board</h1>
            <Jobs className="container"/>
        </div>
    )
}

export default JobsBoard