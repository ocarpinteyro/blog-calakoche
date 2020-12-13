import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function PostBody({ content }) {
  return (
    <div className="blog-post">
      <div className="section-text">
        <div className="col-md-8 ml-auto mr-auto">
          {documentToReactComponents(content)}
        </div>
      </div>
    </div>
  )
}
