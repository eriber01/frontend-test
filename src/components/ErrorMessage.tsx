
interface Props {
  error: string[]
}

export const ErrorMessage = ({ error }: Props) => {
  return (
    <div>
      {
        error?.length ?
          <div className="text-center my-2 text-danger">
            {
              error?.map((item, index) => (
                <span key={index}>{item}</span>
              ))
            }
          </div> : null
      }</div>
  )
}
