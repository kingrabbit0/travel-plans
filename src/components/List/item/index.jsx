const Item = (info) => {
    let country = info.country;
    let name    = info.name || "AGENTINA";
    let price   = info.price || "29.99";
    let href    = "/"+country || "en";

    return (
        <div className="w-[250px] mx-10 my-10">
            <div className="relative">
                <div className="bg-white m-[10px] rounded-[30px] h-[230px] w-[230px] text-center cursor-pointer">
                    <p className="pt-[85px] text-2xl font-bold">{name}</p>
                </div>
                <div className="absolute top-[40px] left-0 border-l-[3px] border-blue-300 h-[40px] justify-around flex items-center">
                    <p className="bg-green-200 text-lg w-[75px] text-center font-bold">${price}</p>
                    <p className="content-end text-base ml-[60px]">MORE</p><img className="ml-[10px]" src="/assets/image/1.png" alt="menu" />
                </div>
            </div>
            <div className="my-[20px] mx-[15px] justify-around flex items-center">
                <a href={href}><img className="" src="/assets/image/2.png" alt="Buy" /></a>
                <p className="text-white text-xl">BUY e-Itinerary</p>
            </div>
        </div>
    );
}

export default Item;