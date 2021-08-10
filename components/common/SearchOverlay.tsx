import { IconClose } from 'components/ui/icon';
import tw from 'twin.macro';
import {useCallback} from 'react';

interface SearchOverlayProps {
  className?: string
  onClose?: () => void
}
const styles = {
  overlay: tw`fixed top-0 left-0 h-screen w-screen z-50 invisible opacity-0 bg-white transition-opacity duration-300 ease-in-out`,
  modal: tw`z-50 overflow-auto bg-white fixed w-full h-full top-0 left-0 bottom-0 right-0 transform-none transition-opacity duration-300 ease-in-out p-10`,
  search: tw`flex items-center pb-5 border-b-2 border-black`
}
const SearchOverlay: React.FC<SearchOverlayProps> = ({ className, children, onClose }) => {
  const handleClose = useCallback(() => {
    onClose && onClose()
  }, [])
  return (
    <>
      <div css={styles.overlay}></div>
      <div css={styles.modal}>
        <div css={styles.search}>
          <form css={tw`flex flex-auto flex-shrink-0`}>
            <input autoFocus css={tw`placeholder-gray-500 text-xl w-full outline-none border-none border-0 border-transparent align-middle bg-transparent p-1 rounded-none m-0`} />
          </form>
          <button onClick={handleClose} css={tw`border-0 p-0 text-gray-400 outline-none border-none border-transparent normal-case rounded-none`}>
            <IconClose />
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchOverlay
