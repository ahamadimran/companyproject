import { useEffect, useRef, useState } from "react"
import "./Stepper.css"

function Stepper({ children, style, onEnd, buttonTemplate }) {
  if (children?.type?.name === "Step")
    children = [children]
  else if (!children?.some || children.some(val => val.type.name !== "Step"))
    throw Error("Stepper can only take Step as children")

  const [steps, setSteps] = useState([])
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const stepperRef = useRef()

  const listener = () => {
    const elem = document.getElementById("active")
    if (!elem?.getBoundingClientRect || !stepperRef.current?.getBoundingClientRect)
      return setProgress(0)
    setProgress(elem.getBoundingClientRect().left - stepperRef.current.getBoundingClientRect().left)
  }

  useEffect(() => {
    listener()
    step === children.length - 1 && onEnd && onEnd()
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [step])

  useEffect(() => {
    setSteps(children.map(val => val.props.title))
  }, [])

  return (
    <div className="step-cont" style={style}>
      <div className="stepper-container">
        <div style={{ width: "100%", padding: "0 20%" }}>
          <div style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", position: "relative" }}>
            <div className="stepper" ref={stepperRef} style={{ justifyContent: (children.length - 1) ? "space-between" : "center" }}>
              {
                steps.map((val, idx) => {
                  return (
                    <div key={idx} style={{ display: "flex", justifyContent: "center", position: "relative" }}>
                      <div
                        id={idx === step ? "active" : "inactive"}
                        style={{ zIndex: 111, cursor: "pointer", borderColor: idx <= step ? "#23D160" : "white", background: idx <= step ? "white" : "#dbdbdb" }}
                        onClick={() => setStep(idx)}
                        className="step-count">
                        <h3 style={{ color: idx <= step ? "#23D160" : "white" }}>{idx + 1}</h3>
                      </div>
                      <div style={{ color: "gray", fontSize: "20px", fontWeight: "bold", paddingTop: "40px", position: "absolute" }}>{val}</div>
                    </div>
                  )
                })
              }
            </div>
            {
              !!(children.length - 1) && (
                <div style={{ width: "100%", background: "#dbdbdb", height: "4px", position: "absolute", display: "flex" }}>
                  <div className="step-progress-bar" style={{ height: "100%", width: progress + "px", background: "#23d160", position: "absolute" }}></div>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div key={step} className="step-child">
        {children[step]}
      </div>
      <div className="step-controls">
        <button className="step-btn" type="button" disabled={step === 0} onClick={() => setStep(prev => --prev)} >Prev</button>
        {
          buttonTemplate && buttonTemplate({ isEnd: step === children.length - 1 }) ||
          <button key={step} className="step-btn" type="button" disabled={step === children.length - 1} onClick={() => setStep(prev => ++prev)}>Next</button>
        }
      </div>
    </div>
  )
}

export function Step({ children, title }) {
  return (
    <div>
      {children}
    </div>
  )
}


export default Stepper
