export default function sleep(timer) {
    return new Promise((resolve) => setTimeout(resolve, timer));
}