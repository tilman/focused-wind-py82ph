export async function mockedApiCall(ms: number) {
    return await (await fetch(`http://localhost:3000/sleep?ms=${ms}`, {
        next: {
            revalidate: 5,
            tags: [
                "example"
            ]
        }
    })).json();
}