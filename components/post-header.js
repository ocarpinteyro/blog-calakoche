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
    tag,
    imageCoverSource,
    dateUpdate,
}) {
    return (
        <>
            <div className="card card-raised card-background col-md-10 ml-auto mr-auto image-cover-back-hack">
                <div className="card-body">
                    <span className="h6 card-category text-info">{tag.name}</span>
                    <h1 className="card-title">{title}</h1>
                    <h2 className="h4 card-description card-description-no-opacity">{excerpt}</h2>

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
