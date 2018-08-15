function a() {
    console.log('i an sync function');
    setTimeout(function () {
        console.log('i am async function');
    }, 0)
    setTimeout(() => {
        console.log('i am async function');
    }, 0)
}
a();