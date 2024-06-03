import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="p-2">
            <h2 className="text-xl font-bold mb-3">All Category</h2>
            <div className="bg-gray-200 rounded-lg flex items-center justify-center p-3 font-bold mb-3">
                National News
            </div>
            {
                categories.map(category => <Link className="block  lg:pl-14 mb-3 text-[#757575] font-bold" key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;