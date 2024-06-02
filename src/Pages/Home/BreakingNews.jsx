import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="mt-4 flex items-center bg-slate-200 p-2 rounded-xl">
            <btb className="btn btn-error">Breaking News</btb>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to='/'>I can be a React component, multiple React components........</Link>
                <Link to='/'>I can be a React component, multiple React components........</Link>
                <Link to='/'>I can be a React component, multiple React components........</Link>
                <Link to='/'>I can be a React component, multiple React components........</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;