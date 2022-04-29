import { useState } from "react"
import { FaShareAlt } from "react-icons/fa"
import { 
  FacebookIcon, 
  FacebookShareButton, 
  TelegramIcon, 
  TelegramShareButton, 
  TwitterIcon, 
  TwitterShareButton, 
  WhatsappIcon, 
  WhatsappShareButton 
} from "react-share"

interface Props {
  gifUrl: string;
  text?: string;
}

const Dropdown: React.FC<Props> = ({ gifUrl, text }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const open = ()=> (isOpen) ? setIsOpen(false) : setIsOpen(true)
  
  return (
    <div className="relative inline-block text-left">
      <div>
        <button onClick={open} type="button" className="inline-flex gap-4 justify-center rounded-md p-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
          <FaShareAlt className='bg-slate-300 justify-self-end px-1 rounded-md' size={25} />
          {
            text ? <p className="font-semibold text-slate-300 text-lg">{text}</p> : <></>
          }
        </button>
      </div>
      {
        isOpen 
        ?
        <div className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
          <div className="py-1 justify-center flex gap-4 bg-slate-500  rounded-md" role="none">
            <WhatsappShareButton url={gifUrl}>
              <WhatsappIcon round={true} size={30} />
            </WhatsappShareButton>
            <TelegramShareButton url={gifUrl}>
              <TelegramIcon round={true} size={30} />
            </TelegramShareButton>
            <FacebookShareButton url={gifUrl}>
              <FacebookIcon round={true} size={30} />
            </FacebookShareButton>
            <TwitterShareButton url={gifUrl}>
              <TwitterIcon round={true} size={30} />
            </TwitterShareButton>
          </div>
      </div>
        :
        <></>
      }
    </div>
  )
}

export default Dropdown
