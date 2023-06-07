function Dialog(props) {
  return (
    <>
        <button className="w-35 p-4 rounded-full text-white 
        bg-green-500 dialog-btn" onClick={props.openDialogFunction}>Open Dialog</button>
        <dialog className={`flex flex-col justify-center items-center 
        w-1/4 h-72 rounded-lg text-white bg-slate-900 gap-4 
        ${props.status ? "visible" : "hidden"}`}>
            <h2 className="text-4xl">This is a dialog!</h2>
            <button className="text-red-400 underline" onClick={props.closeDialogFunction}>CLOSE</button>
        </dialog>
    </>
  )
}

export default Dialog