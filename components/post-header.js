export default function PostHeader({ title, excerpt, coverImage, tag }) {
  return (
    <>
      <div className="card card-raised card-background col-md-10 ml-auto mr-auto" style={{backgroundImage: `url(https:${coverImage.url})`}}>
        <div className="card-body">
          <h6 className="card-category text-info">{tag.name}</h6>
          <h1 className="card-title">{title}</h1>
          <h4 className="card-description card-description-no-opacity">{excerpt}</h4>
        </div>
      </div>
    </>
  )
}
