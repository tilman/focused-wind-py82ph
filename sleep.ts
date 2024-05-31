export function sleep(ms: number){
    return new Promise((res) => setTimeout(res, ms));
}

export async function mockedApiCall() {
    await sleep(500);
    return "Mocked Regular Response"
}
export async function mockedSlowApiCall() {
    await sleep(2000);
    return "Mocked Slow Response"
}