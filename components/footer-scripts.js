import { useAmp } from "next/amp";
export const config = { amp: "hybrid" };

export default function FooterScripts() {
    const isAmp = useAmp();
    return (
        <>
            {!isAmp ? (
                <div>
                    <script src="/assets/js/core/jquery-3.5.1.min.js" type="text/javascript"></script>
                    <script
                        src="/assets/js/material-kit.min.js?v=2.2.0"
                        type="text/javascript"
                    ></script>
                </div>
            ) : null}
        </>
    );
}
