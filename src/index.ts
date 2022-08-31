async function main() {}

main().then(() => {
    console.log("Finished successfully")
    process.exit(0)
}).catch((error) => {
    console.error(error);
    process.exit(1)
})