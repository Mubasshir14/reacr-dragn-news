import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div>
                <div className="p-4 space-y-2 mb-6">
                    <h2 className="text-2xl font-extrabold">Login With</h2>
                    <button className="btn btn-outline w-full">
                        <FcGoogle ></FcGoogle>
                        Google
                    </button>
                    <button className="btn btn-outline w-full">
                        <FaGithub ></FaGithub>
                        Github
                    </button>
                </div>
                <div className="p-4  mb-6">
                    <h2 className="text-2xl font-extrabold mb-4">Finds Us On</h2>
                    <a className="p-4 flex items-center gap-2 border rounded-t-lg justify-center">
                        <FaFacebook ></FaFacebook>
                        Google
                    </a>
                    <a className="p-4 flex items-center gap-2 border  justify-center">
                        <FaXTwitter ></FaXTwitter>
                        Twitter
                    </a>
                    <a className="p-4 flex items-center gap-2 border rounded-b-lg justify-center">
                        <FaInstagramSquare ></FaInstagramSquare>
                        Instagram
                    </a>
                </div>
                <div className="p-4 bg-gray-200 space-y-2 mb-6">
                    <h2 className="text-2xl font-extrabold">Q-Zone</h2>
                    <img className="border-2 border-gray-500 border-dashed p-3" src={qzone1} alt="" />
                    <img className="border-2 border-gray-500 border-dashed p-3" src={qzone2} alt="" />
                    <img className="border-2 border-gray-500 border-dashed p-3" src={qzone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;