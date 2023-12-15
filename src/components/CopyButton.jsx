import { CopyIcon } from '@radix-ui/react-icons'

export default function CopyButton({ text }) {

    function copyHandle() {
        navigator.clipboard.writeText(text);
    }

    return (
        <>
            <button className="copy-btn" onClick={copyHandle}><CopyIcon className='copy-btn-icon' /></button>
        </>
    )
}
