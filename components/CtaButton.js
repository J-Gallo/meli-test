const CtaButton = (props) => (
  <div className={props.buttonType}>
    {props.text}
    <style jsx>{`
      div {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #FFF;
        border-radius: 3px;
        cursor: pointer;
      }
      .confirm {
        background-color: #3483FA;
      }
    `}</style>
  </div>
)

export default CtaButton