import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 pl-80 bg-[#C1DCDC] text-base-content h-[300px]">
        <aside className="">
          <h2 className="font-semibold text-xl">GREENMIND</h2>
          <p className="py-3 text-[#798989]">
            We help you find
            <br />
            your dream plant
          </p>
          <div className="flex gap-5">
            <span className="text-2xl border border-black rounded-full p-1">
              <FaFacebookF />
            </span>
            <span className="text-2xl border border-black rounded-full p-1">
              <AiFillInstagram />
            </span>
            <span className="text-2xl border border-black rounded-full p-1">
              <FaTwitter />
            </span>
          </div>
          <p className="text-[#798989] pt-10">
            2024 all Right Reserved Term of use GREENMIND
          </p>
        </aside>
        {/* nav-1  */}
        <nav>
          <h6 className="   font-bold">Information</h6>
          <a className="link link-hover text-[#798989]">About</a>
          <a className="link link-hover text-[#798989]">Product</a>
          <a className="link link-hover text-[#798989]">Blog</a>
        </nav>
        {/* nav-2  */}
        <nav>
          <h6 className=" font-bold">Company</h6>
          <a className="link link-hover text-[#798989]">Community</a>
          <a className="link link-hover text-[#798989]">Career</a>
          <a className="link link-hover text-[#798989]">Our story</a>
        </nav>
        {/* nav-3  */}
        <nav>
          <h6 className=" font-bold">Contact</h6>
          <a className="link link-hover text-[#798989]">Getting Started</a>
          <a className="link link-hover text-[#798989]">Pricing</a>
          <a className="link link-hover text-[#798989]">Resources</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
