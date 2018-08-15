function a() {
    try {
        console.log('i an sync function');
        setTimeout(function () {
            try {
                console.log('i am async function');
            } catch (_e2) {
                console.log(_e2);
            }
        }, 0);
        setTimeout(() => {
            try {
                console.log('i am async function');
            } catch (_e3) {
                console.log(_e3);
            }
        }, 0);
    } catch (_e) {
        console.log(_e);
    }
}
a();
