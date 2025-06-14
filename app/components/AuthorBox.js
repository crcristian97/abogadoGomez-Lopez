import Image from "next/image";

const AuthorBox = ({ image, name, description, linkedin= false }) => {
  return (
    <div className="flex items-start gap-5 bg-[#f7f5ef] rounded-2xl p-6 shadow-md mt-8">
      <div className="flex-shrink-0">
        <Image
          src={image || "/avatar-placeholder.png"}
          alt={name}
          width={80}
          height={80}
          className="rounded-full object-cover border-4 border-white shadow"
        />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-extrabold text-lg text-[#183852] tracking-tight">{name}</span>
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="inline-block align-middle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#E9E3D0"/>
                <path d="M7.75 9.5V16.25" stroke="#183852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.75 7.75V7.76" stroke="#183852" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.25 12.25V16.25" stroke="#183852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.25 13.75C11.25 12.5074 12.2574 11.5 13.5 11.5C14.7426 11.5 15.75 12.5074 15.75 13.75V16.25" stroke="#183852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
        </div>
        <p className="text-[#183852] text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AuthorBox; 