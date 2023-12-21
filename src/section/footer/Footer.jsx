import './footer.css'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <h6>All rights  reserved @ Adabo. | {year}</h6>
    </footer>
  )
}

export default Footer
