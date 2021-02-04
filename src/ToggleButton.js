function ToggleButton({active, ...props}) {
    return <button 
      {...props} 
      className={`
        p-2 font-bold text-lg rounded-md w-8 h-8 flex justify-center align-middle leading-none focus:outline-none 
        active:bg-gray-500 active:text-gray-900
        transition-colors duration-75 
        ${active 
          ? 'bg-gray-400 text-gray-800 hover:bg-gray-400 hover:text-gray-900' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800'}
      `}
    />
  }

  export default ToggleButton;