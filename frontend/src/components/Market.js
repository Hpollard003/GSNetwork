import Items from "./Items"

const Market = () => {
    return(
        <div>
            <h1 className='text-primary'>For Sale</h1>
            <Items/>
            <h1 className='text-danger'>Sell</h1>
            <Items/>
        </div>
    )
}

export default Market