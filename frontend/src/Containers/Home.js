import img from '../Assets/spynetwork.gif'

const Home = () => {
  return (
    <div className="text-light text-center mx-4 py-4">
      <h1 className="text-success display-2">Welcome Agents</h1>
      <p>
        Head to the Jobs page and check out what's new in the world of
        espionage.
      </p>
      <img className='img-thumbnail' src={img} alt='anime' />
    </div>
  );
};

export default Home;
