import { createContext, useContext, useEffect, useRef, useState } from "react"

const ToastContext = createContext()
export const useToast = () => useContext(ToastContext)

export const Toast = ({ message, type }) => {
  return (
    <div style={{ borderRadius: 20, display: "flex", alignItems: "center", zIndex: 999, height: "80px", width: "300px" }} className={type === "success" ? "has-background-primary" : "has-background-danger"}>
      <i style={{ fontSize: 50, paddingLeft: "10px", color: "white" }} className={type === "success" ? "fa fa-check" : "ml-4 fa fa-exclamation"}></i>
      <span style={{ fontSize: 20, paddingLeft: "30px", color: "white" }}>
        {message}
      </span>
    </div>
  )
}

const ToastContainer = ({ children }) => {
  const [toast, setToast] = useState(null)

  const show = { normal: (val) => setToast(val) }

  const timeOut = () => setToast(null)
  useEffect(() => {
    if (toast === null) return
    setTimeout(timeOut, toast.duration)
    return () => clearTimeout(timeOut)
  }, [toast])

  return (
    <ToastContext.Provider value={{ show }} >
      <div style={{ position: "fixed", zIndex: 999, right: "20px", top: "20px" }}>
        {toast && <Toast {...toast} ></Toast>}
      </div>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastContainer
