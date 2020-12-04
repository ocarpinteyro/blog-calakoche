export default function FirebaseAnalytics() {
    return (
        <div>
            <script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js"></script>
            <script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-analytics.js"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `var firebaseConfig = {apiKey:"${process.env.apiKey}",${
                        process.env.authDomain === ""
                            ? ""
                            : `authDomain:"${process.env.authDomain}",`
                    }${
                        process.env.databaseURL === ""
                            ? ""
                            : `databaseURL:"${process.env.databaseURL}",`
                    }${
                        process.env.projectId === "" ? "" : `projectId:"${process.env.projectId}",`
                    }${
                        process.env.storageBucket === ""
                            ? ""
                            : `storageBucket:"${process.env.storageBucket}",`
                    }${
                        process.env.messagingSenderId === ""
                            ? ""
                            : `messagingSenderId:"${process.env.messagingSenderId}",`
                    }appId:"${process.env.appId}",measurementId:"${
                        process.env.measurementId
                    }"};firebase.initializeApp(firebaseConfig);firebase.analytics();`,
                }}
            />
        </div>
    );
}
