import List from '../List'

const Home = () => {
    return (
        <div className="text-center">
            <h1 className="text-white text-6xl mt-20 mb-5">e-itinerary</h1>
            <p className="text-white text-sm tracking-widest mb-16">VOYAGE LAB</p>
            <p className="text-white text-4xl italic">Professional Travel Plans: Carefully curated with local guides</p><br></br>
            <p className="text-white text-4xl italic pb-[100px]">gastronomy, art and culture experts in each country</p>

            <List />
        </div>
    );
}

export default Home;