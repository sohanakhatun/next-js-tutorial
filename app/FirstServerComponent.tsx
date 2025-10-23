import ClientButton from "./ClientButton"

const FirstServerComponent = () => {
  return (
      <h1>
      Welcome to Next JS
      <ClientButton/> 
      {/* Can use a client component inside a server component. */}
    </h1>
  )
}

export default FirstServerComponent