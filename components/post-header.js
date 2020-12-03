import moment from "moment";

function PostFormatDate(dateUpdate) {
    const MM = {
        Jan: "enero",
        Feb: "febrero",
        Mar: "marzo",
        Apr: "abril",
        May: "mayo",
        Jun: "junio",
        Jul: "julio",
        Aug: "agosto",
        Sep: "septiembre",
        Oct: "octubre",
        Nov: "noviembre",
        Dec: "diciembre",
    };

    const MMM = moment(dateUpdate).format("MMM");
    const D = moment(dateUpdate).format("D");
    const YYYY = moment(dateUpdate).format("YYYY");
    const LT = moment(dateUpdate).format("LT");
    const formatedDate = `${D} de ${MM[MMM]} de ${YYYY}, ${LT}`;

    return formatedDate;
}

export default function PostHeader({
    title,
    excerpt,
    coverImage,
    tag,
    imageCoverSource,
    dateUpdate,
}) {
    return (
        <>
            <div
                className="card card-raised card-background col-md-10 ml-auto mr-auto"
                style={{ backgroundImage: `url(https:${coverImage.url})` }}
            >
                <div className="card-body">
                    <h6 className="card-category text-info">{tag.name}</h6>
                    <h1 className="card-title">{title}</h1>
                    <h4 className="card-description card-description-no-opacity">{excerpt}</h4>

                    <span className="card-image-source card-description-no-opacity">
                        {PostFormatDate(dateUpdate)}
                    </span>
                    <span className="card-image-source card-description-no-opacity">
                        {" ● "}
                        {imageCoverSource}
                    </span>
                </div>
            </div>
        </>
    );
}
