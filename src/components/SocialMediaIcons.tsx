import {
  FaInstagram,
  // FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa6";

const SocialMediaIcons = () => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {/* Instagram */}
      <div className="social-button">
        <a
        href="https://www.instagram.com/therohitprashar/"
        target="_blank"
        rel="noopener noreferrer">
        <button className="relative w-12 h-12 cursor-pointer rounded-full group">
          <div className="floater w-full h-full absolute top-0 left-0 bg-violet-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
          <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-violet-400 rounded-full">
            <FaInstagram className="text-white group-hover:text-[#b7b5e0] duration-300" size={22} />
          </div>
        </button>
        </a>
      </div>

      {/* X (Twitter) */}
      {/* <div className="social-button">
        <a
        href="https://x.com/therohitprashar"
        target="_blank"
        rel="noopener noreferrer">
        <button className="relative w-12 h-12 cursor-pointer rounded-full group">
          <div className="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
          <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full">
            <FaXTwitter className="text-white group-hover:text-[#b7b5e0] duration-300" size={22} />
          </div>
        </button>
        </a>
      </div> */}

      {/* Facebook */}
      <div className="social-button">
      
          <a
        href="https://www.facebook.com/therohitprashar/"
        target="_blank"
        rel="noopener noreferrer">
          <button className="relative w-12 h-12 cursor-pointer rounded-full group">
          <div className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
          <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full">
            <FaFacebookF className="text-white group-hover:text-[#b7b5e0] duration-300" size={22} />
          </div>
        </button>
        </a>
        
      </div>

      {/* YouTube */}
      <div className="social-button">
        <a
        href="https://www.youtube.com/@therohitprashar"
        target="_blank"
        rel="noopener noreferrer">
        <button className="relative w-12 h-12 cursor-pointer rounded-full group">
          <div className="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
          <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full">
            <FaYoutube className="text-white group-hover:text-[#b7b5e0] duration-300" size={22} />
          </div>
        </button>
        </a>
      </div>

      {/* WhatsApp */}
      <div className="social-button">
        <a
        href="https://whatsapp.com/channel/0029Va9ciRxIHphDsqDdFM3r"
        target="_blank"
        rel="noopener noreferrer">
        <button className="relative w-12 h-12 cursor-pointer rounded-full group">
          <div className="floater w-full h-full absolute top-0 left-0 bg-green-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
          <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-green-500 rounded-full">
            <FaWhatsapp className="text-white group-hover:text-[#b7b5e0] duration-300" size={22} />
          </div>
        </button>
        </a>
      </div>

      {/* LinkedIn */}
      <div className="social-button">
        <a
        href="https://www.linkedin.com/in/therohitprashar/"
        target="_blank"
        rel="noopener noreferrer">
        <button className="relative w-12 h-12 cursor-pointer rounded-full group">
          <div className="floater w-full h-full absolute top-0 left-0 bg-sky-600 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
          <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-sky-600 rounded-full">
            <FaLinkedinIn className="text-white group-hover:text-[#b7b5e0] duration-300" size={22} />
          </div>
        </button>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
