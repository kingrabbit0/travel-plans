import {default as Country} from './item';

const List = (counties) => {
    return (
        <div className=" flex flex-wrap mb-[200px]">
            {/* {
                counties.map( country => <Country info = {country} />)
            } */}
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
             <Country />
        </div>
    );
}

export default List;