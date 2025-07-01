import Image from "next/image";

const AuthorBox = ({ image, name, description, linkedin = false }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 bg-[#f7f5ef] rounded-2xl p-4 sm:p-6 shadow-md mt-6 sm:mt-8 w-full max-w-2xl mx-auto">
      <div className="flex-shrink-0 mx-auto sm:mx-0">
        <Image
          src={image || "/avatar-placeholder.png"}
          alt={name}
          width={80}
          height={80}
          className="rounded-full object-cover border-4 border-white shadow w-20 h-20 sm:w-20 sm:h-20"
          sizes="80px"
          priority={false}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-1 xs:gap-2 mb-1">
          <span className="font-extrabold text-base xs:text-lg sm:text-xl text-[#183852] tracking-tight break-words">{name}</span>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block align-middle mt-1 xs:mt-0"
              aria-label={`LinkedIn de ${name}`}
            >
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
        <p className="text-[#183852] text-sm xs:text-base sm:text-base leading-relaxed break-words">{description}</p>
      </div>
    </div>
  );
};

export default AuthorBox; 