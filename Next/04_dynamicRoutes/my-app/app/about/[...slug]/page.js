
const page = ({ params }) => {
    console.log(params.slug);
  return (
    <div>
      this is a page {JSON.stringify(params.slug)}
    </div>
  )
}

export default page
