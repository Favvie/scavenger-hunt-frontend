


const ChallengeMainCard = ({
  title,
  description,
  status,
  players,
  timeLeft,
  image,
  nftType,
  ecosystem,
  level,
}) => {
    const getStatusBorderColor = (status) => {
        if (status.toLowerCase() === "upcoming") return "border-[#FFB82E]"; // Green
        if (status.toLowerCase() === "active") return "border-[#439F6E]"; // Yellow
        return "border-gray-400"; // Default
      };
    const getStatusBackgroundColor = (status) => {
        if (status.toLowerCase() === "upcoming") return "bg-[#FFB82E]"; // Green
        if (status.toLowerCase() === "active") return "bg-[#439F6E]"; // Yellow
        return "bg-gray-400"; // Default
      };
    const getLevelBorderColor = (status) => {
      if (status.toLowerCase() === "easy") return "border-[#439F6E]"; // Yellow
        if (status.toLowerCase() === "medium") return "border-[#FFB82E]"; // Green
        if (status.toLowerCase() === "hard") return "border-[#F93232]"; // Yellow
        return "border-gray-400"; // Default
      };
    const getLevelBackgroundColor = (status) => {
      if (status.toLowerCase() === "easy") return "bg-[#C0ECD4]"; 
        if (status.toLowerCase() === "medium") return "bg-[#FFEAC1]"; 
        if (status.toLowerCase() === "hard") return "bg-[#FFD8D8]"; 
        return "bg-gray-400"; // Default
      };
    const getLevelTextColor = (status) => {
      if (status.toLowerCase() === "easy") return "text-[#439F6E]"; 
        if (status.toLowerCase() === "medium") return "text-[#FFB82E]"; 
        if (status.toLowerCase() === "hard") return "text-[#F93232]"; 
        return "bg-gray-400"; // Default
      };
  return (
    <article className="w-full md:h-[420px] h-[323px] rounded-[10px] overflow-hidden relative bg-pink-600 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer">
      <div className="w-full h-full rounded relative">
        <img src={image} className="inset-0 w-full h-full" alt="card-image" />
        <div className="inset-0 w-full h-full bg-gradient-to-b from-[#00000047] to-[#090101c4] absolute" />

        <div className="w-full h-full inset-0 absolute px-[12px] py-[13px]">
          <header className="w-full flex justify-between">
            <div
             className={`w-[100px] h-[27px] rounded-[8px] gap-[13px] flex items-center justify-center bg-[#C0ECD4] bg-opacity-50 ${getStatusBorderColor(
                status
              )} border`}
            >
              <div
                className={` w-[7px] h-[7px] rounded-full ${getStatusBackgroundColor(
                    status
                  )} `}
              />
              <p
                className='text-white font-bold text-xs capitalize ' 
                  
                
              >
                {status}
              </p>
            </div>
            <div
              className={`border w-[100px] h-[27px] rounded-[8px] gap-[13px] ${getLevelBorderColor(level)} ${getLevelBackgroundColor(level)} flex items-center justify-center  bg-opacity-50`} 
            >
             
              <p
                className={`text-white font-bold text-xs capitalize ${getLevelTextColor(level)}`}
              >
                {level}
              </p>
            </div>
          </header>
          <section className="w-full bottom-0  left-0 absolute flex flex-col items-center justify-between ">
            
              <div className="w-full px-[12px]">
                <h2
                  className='text-white font-semiBold text-[20px] '
                >
                  {title}
                </h2>
                <p
                  className='text-[#BFBFBF] font-normal text-[14px]  my-2 w-[337px] pr-[22px]'
                >
                  {description}
                </p>
                <button className="w-[111px] h-[22px] rounded-[4px] font-medium text-[10px] bg-white bg-opacity-20 flex justify-center items-center">{ecosystem}</button>
              </div>
              <section className="w-full px-8   mt-[14px]  relative">
               <main className=" flex justify-between">

                  <div className=" w-auto flex items-center justify-center flex-col gap-3">
                    <div
                      className='w-[33px] h-[33px] flex items-center justify-center rounded-sm bg-[#3B82F6] bg-opacity-50'
                    >
                      <img
                        className='w-[18px] h-[18px]'
                        
                        alt="card-time"
                        src="/images/time-icon.svg"
                      />
                    </div>
                    <p
                      className='text-[8px] font-bold text-white   '
                    >
                      {timeLeft}
                    </p>
                  </div>
                  <div className=" w-auto flex items-center justify-center flex-col gap-3">
                    <div
                      className='w-[33px] h-[33px] flex items-center justify-center rounded-sm bg-[#3B82F6] bg-opacity-50'
                    >
                      <img
                       className='w-[18px] h-[18px]'
                        alt="card-players"
                        src="/images/user-icon.svg"
                      />
                    </div>
                    <p
                     className='text-[8px] font-bold text-white   '
                    >
                      {players}+ players
                    </p>
                  </div>
                  <div className=" w-auto flex items-center justify-center flex-col gap-3">
                    <div
                      className='w-[33px] h-[33px] flex items-center justify-center rounded-sm bg-[#3B82F6] bg-opacity-50'
                    >
                      <img
                       className='w-[18px] h-[18px]'
                         alt="card-trophy"
                        src="/images/trophy-icon.svg"
                      />
                    </div>
                    <p
                     className='text-[8px] font-bold text-white   '
                    >
                        {nftType}
                    </p>
                  </div>
                 
               </main>
                
              </section>
            
            <footer className=" w-full mt-1  ">
              <div className="w-full  flex items-center justify-end">
                <button className="bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] w-[48.51px] py-[10px.21px] px-[15px] h-[34.64px] rounded-br-[10px]">
                  <img className="m-auto" src="/images/arrow-right-icon.svg" alt="card-arrow" />
                </button>
                
              </div>
            </footer>
          </section>
        </div>
      </div>
    </article>
  );
};

export default ChallengeMainCard;
