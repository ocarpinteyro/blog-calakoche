import { useAmp } from "next/amp";
export const config = { amp: "hybrid" };

export default function FooterScripts() {
    const isAmp = useAmp();
    return (
        <>
            {!isAmp ? (
                <div>
                    <script src="/assets/js/core/jquery.min.js" type="text/javascript"></script>
                    <script src="/assets/js/core/popper.min.js" type="text/javascript"></script>
                    <script
                        src="/assets/js/core/bootstrap-material-design.min.js"
                        type="text/javascript"
                    ></script>
                    <script
                        src="/assets/js/material-kit.min.js?v=2.2.0"
                        type="text/javascript"
                    ></script>
                </div>
            ) : null}
        </>
    );
}
