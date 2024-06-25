import * as Dialog from '@radix-ui/react-dialog';
import "./Modal.css"

export default function Modal({ msg, open, setOpen }) {
  return (
    <Dialog.Root open={open} onOpenChange={()=> setOpen(false)}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Description className="DialogDescription">
            {msg}
          </Dialog.Description>

          <Dialog.Close asChild>
            <button className="CloseButton" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: '24px', height: '24px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )

}