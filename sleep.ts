export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function mockedApiCall(ms: number) {
    await sleep(Number(ms));
    const rdm = Math.random().toFixed(2);
    return `Slept for ${ms}ms. Random digit ${rdm}`;
}